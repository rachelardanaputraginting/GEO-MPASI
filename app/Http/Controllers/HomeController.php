<?php

namespace App\Http\Controllers;

use App\Http\Resources\Admin\ArticleResource;
use App\Http\Resources\Admin\GroceryResource;
use App\Models\Article;
use App\Models\Grocery;
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

        $search_groceries = $request->input('search');

        if ($search_groceries) {
            $groceries = Grocery::query()
                ->where('name', 'LIKE', "%$search_groceries%")
                ->select(
                    'user_id',
                    'slug',
                    'name',
                    'description',
                    'water',
                    'protein',
                    'fat',
                    'carbohydr',
                    'dietary',
                    'fiber',
                    'alcohol',
                    'pufa',
                    'cholesterol',
                    'vit_a',
                    'carotene',
                    'vit_e',
                    'vit_b1',
                    'vit_b2',
                    'vit_b6',
                    'total_fol_acid',
                    'vit_c',
                    'sodium',
                    'potassium',
                    'magnessium',
                    'phosphorus',
                    'iron',
                    'zink',
                    'picture'
                )
                ->with([
                    "user" => fn ($query) => $query->select('name', 'username', 'id'),
                ])
                ->latest()
                ->fastPaginate(10)->withQueryString();
        } else {
            $groceries = Grocery::query()
                ->select(
                    'user_id',
                    'slug',
                    'name',
                    'description',
                    'water',
                    'protein',
                    'fat',
                    'carbohydr',
                    'dietary',
                    'fiber',
                    'alcohol',
                    'pufa',
                    'cholesterol',
                    'vit_a',
                    'carotene',
                    'vit_e',
                    'vit_b1',
                    'vit_b2',
                    'vit_b6',
                    'total_fol_acid',
                    'vit_c',
                    'sodium',
                    'potassium',
                    'magnessium',
                    'phosphorus',
                    'iron',
                    'zink',
                    'picture'
                )
                ->with([
                    "user" => fn ($query) => $query->select('name', 'username', 'id'),
                ])
                ->latest()
                ->fastPaginate(10);
        }

        // Get All Article
        $articles = Article::query()
            ->select('id', 'category_article_id', 'user_id', 'title', 'slug', 'picture', 'description', 'created_at')
            ->with([
                "user" => fn ($query) => $query->select('name', 'username', 'id'),
            ])
            ->with([
                "category_article" => fn ($query) => $query->select('name', 'slug', 'id'),
            ])
            ->latest()
            ->limit(10)
            ->get();

        return inertia('Home/Index', [
            "groceries" => GroceryResource::collection($groceries),
            "articles" => $articles,
        ]);
    }
}
