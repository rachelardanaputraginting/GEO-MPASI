<?php

namespace App\Http\Controllers;

use App\Http\Resources\Admin\ArticleResource;
use App\Models\Article;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Torann\GeoIP\Facades\GeoIP;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        // Dapatkan alamat IP dari klien

        $geolocation = "The IP address $request->ipinfo->country.";

        // dd($geolocation);

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


        return inertia('Home/Index', [
            "articles" => ArticleResource::collection($articles),
        ]);
    }
}
