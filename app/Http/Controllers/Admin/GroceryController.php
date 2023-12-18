<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\GroceryResource;
use App\Models\Grocery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

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

        return inertia('Admin/Groceries/Index', [
            "groceries" => GroceryResource::collection($groceries),
            "total_groceries" => $total_groceries,
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
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/articles', $slug . '.' . $picture->extension()) : null
        ]);

        return back();
    }

    public function edit(Grocery $grocery)
    {
        //
    }

    public function update(Request $request, Grocery $grocery)
    {
        //
    }

    public function destroy(Grocery $grocery)
    {
        if ($grocery->picture) {
            Storage::delete($grocery->picture);
        }

        $grocery->delete();
    }
}
