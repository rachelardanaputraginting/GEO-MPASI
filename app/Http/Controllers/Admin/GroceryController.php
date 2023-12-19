<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\GroceryResource;
use App\Models\Grocery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Laravolt\Indonesia\Models\City;
use Laravolt\Indonesia\Models\Extended\Provinsi;

class GroceryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $total_groceries = Grocery::get()->count();

        $search_groceries = $request->input('search');

        if ($search_groceries) {
            $groceries = Grocery::query()
                ->where('name', 'LIKE', "%$search_groceries%")
                ->select(
                    'user_id',
                    'slug',
                    'name',
                    'description',
                    'indonesia_city_id',
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
                ->with(["indonesia_city" => fn ($query) => $query->select('name', 'id'),
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
                    'indonesia_city_id',
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
                ->latest()
                ->fastPaginate(10);
        }

        // Mengambil semua kota di Indoensia
        $cities = \Indonesia::allCities();

        return inertia('Admin/Groceries/Index', [
            "groceries" => GroceryResource::collection($groceries),
            "total_groceries" => $total_groceries,
            "cities" => $cities
        ]);
    }

    public function store(Request $request)
    {
        $picture = $request->file('picture');

        Grocery::create([
            "name" => $request->name,
            "slug" => $slug = str($request->title . '-' .  rand(10, 100))->slug(),
            "user_id" => Auth::id(),
            "description" => $request->description,
            "indonesia_city_id" => $request->indonesia_city_id,
            "water" => $request->water,
            "protein" => $request->protein,
            "fat" => $request->fat,
            "carbohydr" => $request->carbohydr,
            "dietary" => $request->dietary,
            "fiber" => $request->fiber,
            "alcohol" => $request->alcohol,
            "pufa" => $request->pufa,
            "cholesterol" => $request->cholesterol,
            "vit_a" => $request->vit_a,
            "carotene" => $request->carotene,
            "vit_e" => $request->vit_e,
            "vit_b1" => $request->vit_b1,
            "vit_b2" => $request->vit_b2,
            "vit_b6" => $request->vit_b6,
            "total_fol_acid" => $request->total_fol_acid,
            "vit_c" => $request->vit_c,
            "sodium" => $request->sodium,
            "potassium" => $request->potassium,
            "magnessium" => $request->magnessium,
            "phosphorus" => $request->phosphorus,
            "iron" => $request->iron,
            "zink" => $request->zink,
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/groceries', $slug . '.' . $picture->extension()) : null
        ]);

        return back();
    }

    public function update(Request $request, Grocery $grocery)
    {
         $picture = $request->file('picture');

        Grocery::create([
            "name" => $request->name ? $request->name : $grocery->name,
            "slug" => $slug = str($request->title . '-' .  rand(10, 100))->slug(),
            "user_id" => Auth::id(),
            "description" => $request->description ? $request->description : $grocery->description,
            "indonesia_city_id" => $request->indonesia_city_id ? $request->indonesia_city_id : $grocery->indonesia_city_id,
            "water" => $request->water ? $request->water : $grocery->water,
            "protein" => $request->protein ? $request->protein : $grocery->protein,
            "fat" => $request->fat ? $request->fat : $grocery->fat,
            "carbohydr" => $request->carbohydr ? $request->carbohydr : $grocery->carbohydr,
            "dietary" => $request->dietary ? $request->dietary : $grocery->dietary,
            "fiber" => $request->fiber ? $request->fiber : $grocery->fiber,
            "alcohol" => $request->alcohol ? $request->alcohol : $grocery->alcohol,
            "pufa" => $request->pufa ? $request->pufa : $grocery->pufa,
            "cholesterol" => $request->cholesterol ? $request->cholesterol : $grocery->cholesterol,
            "vit_a" => $request->vit_a ? $request->vit_a : $grocery->vit_a,
            "carotene" => $request->carotene ? $request->carotene : $grocery->carotene,
            "vit_e" => $request->vit_e ? $request->vit_e : $grocery->vit_e,
            "vit_b1" => $request->vit_b1 ? $request->vit_b1 : $grocery->vit_b1,
            "vit_b2" => $request->vit_b2 ? $request->vit_b2 : $grocery->vit_b2,
            "vit_b6" => $request->vit_b6 ? $request->vit_b6 : $grocery->vit_b6,
            "total_fol_acid" => $request->total_fol_acid ? $request->total_fol_acid : $grocery->total_fol_acid,
            "vit_c" => $request->vit_c ? $request->vit_c : $grocery->vit_c,
            "sodium" => $request->sodium ? $request->sodium : $grocery->sodium,
            "potassium" => $request->potassium ? $request->potassium : $grocery->potassium,
            "magnessium" => $request->magnessium ? $request->magnessium : $grocery->magnessium,
            "phosphorus" => $request->phosphorus ? $request->phosphorus : $grocery->phosphorus,
            "iron" => $request->iron ? $request->iron : $grocery->iron,
            "zink" => $request->zink ? $request->zink : $grocery->zink,
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/groceries', $slug . '.' . $picture->extension()) : null
        ]);

        return back();
    }

    public function destroy(Grocery $grocery)
    {
        if ($grocery->picture) {
            Storage::delete($grocery->picture);
        }

        $grocery->delete();
    }
}
