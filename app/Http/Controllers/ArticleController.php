<?php

namespace App\Http\Controllers;

use App\Http\Resources\Admin\ArticleResource;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{

    public function index(Request $request) {
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
                ->fastPaginate(12)->withQueryString();
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
                ->fastPaginate(12);
        }

        return inertia('Article/Index', [
            "articles" => ArticleResource::collection($articles),
        ]);
    }

    public function show(){
        return inertia('Article/Show');
    }
}
