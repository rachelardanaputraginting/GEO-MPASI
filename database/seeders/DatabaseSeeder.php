<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        collect([
            [
                "name" => "Dokter",
                "username" => "dokter",
                "email" => "dokter@example.com",
                "status" => "dokter",
                "password" => bcrypt('password'),
            ],
            [
                "name" => "Admin",
                "username" => "admin",
                "email" => "admin@example.com",
                "status" => "admin",
                "password" => bcrypt('password'),
            ],
            [
                "name" => "Tamu",
                "username" => "tamu",
                "email" => "tamu@example.com",
                "status" => "tamu",
                "password" => bcrypt('password'),
            ],
            ])->each(fn ($user) => User::create($user));

        $this->call([
            CategoryArticleSeeder::class,
            ArticleSeeder::class,
        ]);
    }
}
