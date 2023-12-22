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
        // $IP = $request->ip();
        $IP = '114.10.86.218';
        $ch = curl_init('https://ipinfo.io/' . $IP . '?token=6a361148f6ea47');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        // execute!
        $response = curl_exec($ch);
        $result = json_decode($response);
        $city = $result->city;

        // Semua Kota di Indonesia
        $cities = \Indonesia::allCities();

        $search_location = $request->input('search');


        if ($search_location) {
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
                ->with([
                    "indonesia_city" => fn ($query) => $query->select('name', 'id'),
                ])
                ->whereHas('indonesia_city', function ($query) use ($city) {
                    $query->where('name', 'LIKE', "%$city%");
                })
                ->orWhereHas('indonesia_city', function ($query) use ($search_location) {
                    $query->where('name', 'LIKE', "%$search_location%");
                })
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
                ->with([
                    "indonesia_city" => fn ($query) => $query->select('name', 'id'),
                ])
                ->whereHas('indonesia_city', function ($query) use ($city) {
                    $query->where('name', 'LIKE', "%$city%");
                })
                ->latest()
                ->fastPaginate(10);
        }

        // Get All Article
        $articles = Article::query()
            ->select('id', 'category_article_id', 'user_id', 'title', 'slug', 'picture', 'description', 'created_at')
            ->with([
                "user" => fn ($query) => $query->select('name', 'username', 'id', 'picture'),
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
            "cities" => $cities,
            "city" => $city,
        ]);
    }
}
