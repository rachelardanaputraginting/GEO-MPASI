<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;
use App\Http\Resources\Admin\ArticleResource;
use App\Models\CategoryArticle;

class ArticleController extends Controller
{
    public function __construct()
    {
        $this->category_articles = CategoryArticle::select('id', 'name', 'slug')->get();
    }

    public function index(Request $request)
    {
        $total_articles = Article::get()->count();

        $search_articles = $request->input('search');

        if ($search_articles) {
            $articles = Article::query()
                ->where('title', 'LIKE', "%$search_articles%")
                ->select('id', 'category_article_id', 'user_id', 'title', 'slug', 'picture', 'description')
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
                ->select('id', 'category_article_id', 'user_id', 'title', 'slug', 'picture', 'description')
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
            "total_articles" => $total_articles,
            "category_articles" => $this->category_articles,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Article $article)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Article $article)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        //
    }
}
