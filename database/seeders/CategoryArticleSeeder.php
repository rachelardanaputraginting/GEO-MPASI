<?php

namespace Database\Seeders;

use App\Models\CategoryArticle;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoryArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            ['name' => $name = 'Informasi', 'slug' => str($name)->slug()],
            ['name' => $name = 'Gaya Hidup', 'slug' => str($name)->slug()],
            ['name' => $name = 'Anak', 'slug' => str($name)->slug()],
        ])->each(fn ($category_articles) => CategoryArticle::create($category_articles));
    }
}
