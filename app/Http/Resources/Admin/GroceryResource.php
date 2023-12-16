<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class GroceryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'user' => [
                'id' => $this->user->id,
                'name' => $this->user->name,
                'username' => $this->user->username,
            ],
            'name' => $this->name,
            "description" => Str::limit($this->description, 200, ' ...'),
            "description_full" => $this->description, 200,
            'water' => $this->water,
            'protein' => $this->protein,
            'fat' => $this->fat,
            'carbohydr' => $this->carbohydr,
            'dietary' => $this->dietary,
            'fiber' => $this->fiber,
            'alcohol' => $this->alcohol,
            'pufa' => $this->pufa,
            'cholesterol' => $this->cholesterol,
            'vit_a' => $this->vit_a,
            'carotene' => $this->carotene,
            'vit_e' => $this->vit_e,
            'vit_b1' => $this->vit_b1,
            'vit_b2' => $this->vit_b2,
            'vit_b6' => $this->vit_b6,
            'total_fol_acid' => $this->total_fol_acid,
            'vit_c' => $this->vit_c,
            'sodium' => $this->sodium,
            'potassium' => $this->potassium,
            'magnessium' => $this->magnessium,
            'phosphorus' => $this->phosphorus,
            'iron' => $this->iron,
            'zink' => $this->zink,
            "picture" => $this->picture ? Storage::url($this->picture) : null,
        ];
    }
}
