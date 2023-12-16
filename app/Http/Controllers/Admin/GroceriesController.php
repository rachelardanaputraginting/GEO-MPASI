<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\GroceryResource;
use App\Models\Groceries;
use Illuminate\Http\Request;

class GroceriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $total_groceries = Groceries::get()->count();

        $search_groceries = $request->input('search');

        if ($search_groceries) {
            $groceries = Groceries::query()
                ->where('name', 'LIKE', "%$search_groceries%")
                ->select(
                    'user_id',
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
            $groceries = Groceries::query()
                ->select(
                    'user_id',
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
    public function show(Groceries $groceries)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Groceries $groceries)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Groceries $groceries)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Groceries $groceries)
    {
        //
    }
}
