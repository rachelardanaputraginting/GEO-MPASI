<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;
use App\Http\Resources\Admin\ArticleResource;
use App\Models\CategoryArticle;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ArticleController extends Controller
{
    public function index(Request $request)
    {
        $category_articles = CategoryArticle::select('id', 'name', 'slug')->get();

        $total_category_articles = Article::get()->count();

        $search_articles = $request->input('search');

        if ($search_articles) {
            $articles = Article::query()
                ->where('title', 'LIKE', "%$search_articles%")
                ->select('id', 'category_article_id', 'user_id', 'title', 'slug', 'picture', 'description', 'created_at')
                ->with([
                    "user" => fn ($query) => $query->select('name', 'username', 'id'),
                ])
                ->with([
                    "category_article" => fn ($query) => $query->select('name', 'slug', 'id'),
                ])
                ->latest()
                ->fastPaginate(10)->withQueryString();
        } else {
            $articles = Article::query()
                ->select('id', 'category_article_id', 'user_id', 'title', 'slug', 'picture', 'description', 'created_at')
                ->with([
                    "user" => fn ($query) => $query->select('name', 'username', 'id'),
                ])
                ->with([
                    "category_article" => fn ($query) => $query->select('name', 'slug', 'id'),
                ])
                ->latest()
                ->fastPaginate(10);
        }


        return inertia('Admin/Article/Index', [
            "articles" => ArticleResource::collection($articles),
            "total_category_articles" => $total_category_articles,
            "category_articles" => $category_articles,
        ]);
    }


    public function store(Request $request)
    {
        $picture = $request->file('picture');

        Article::create([
            "title" => $request->title,
            "slug" => $slug = str($request->title . '-' .  rand(10, 100))->slug(),
            "user_id" => Auth::id(),
            "category_article_id" => $request->category_article_id,
            "description" => $request->description,
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/articles', $slug . '.' . $picture->extension()) : null
        ]);

        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {
        //
    }


    public function update(Request $request, Article $article)
    {
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        if ($article->picture) {
            Storage::delete($article->picture);
        }

        $article->delete();
    }
}
