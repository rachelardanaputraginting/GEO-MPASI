<?php

namespace App\Http\Resources\Admin;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ArticleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "title" => $this->title,
            "slug" => $this->slug,
            "created_at" => Carbon::parse($this->created_at)->locale('id')->formatLocalized('%A, %d %B %Y'),
            'category_article' => [
                'id' => $this->category_article->id,
                'name' => $this->category_article->name,
                'slug' => $this->category_article->slug,
            ],
            'user' => [
                'id' => $this->user->id,
                'name' => $this->user->name,
                'username' => $this->user->username,
                'picture' => $this->user->picture ? Storage::url($this->user->picture) : null,
            ],
            "description" => Str::limit($this->description, 200, ' ...'),
            "description_full" => $this->description, 200,
            "picture" => $this->picture ? Storage::url($this->picture) : null,
        ];
    }
}
