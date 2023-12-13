<?php

namespace Database\Seeders;

use App\Models\Article;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            [
                'title' => $title = 'Artikel 1',
                'slug' => str($title)->slug(),
                'user_id' => 1,
                'category_article_id' => mt_rand(1, 3),
                'description' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ducimus perspiciatis, neque nemo amet dignissimos molestias odit excepturi. Hic accusantium consequatur eveniet repellat ex sapiente nemo quam doloribus quia, veritatis neque sunt esse. Hic vitae tenetur asperiores pariatur minus dolorum eum sint nesciunt eligendi, eos inventore ad officia sapiente consequatur et aut eveniet quia architecto enim ducimus illum delectus. Necessitatibus, at odio! Corporis, impedit! Impedit, repellendus fugit. Quo sed quam voluptatem possimus eaque ullam commodi veritatis nulla harum pariatur nisi fuga libero, ducimus optio hic facere est, officia magni a accusamus. Accusantium voluptate illo nihil est, cum soluta. Pariatur, dolores.'
            ],
            [
                'title' => $title = 'Artikel 2',
                'slug' => str($title)->slug(),
                'user_id' => 1,
                'category_article_id' => mt_rand(1, 3),
                'description' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ducimus perspiciatis, neque nemo amet dignissimos molestias odit excepturi. Hic accusantium consequatur eveniet repellat ex sapiente nemo quam doloribus quia, veritatis neque sunt esse. Hic vitae tenetur asperiores pariatur minus dolorum eum sint nesciunt eligendi, eos inventore ad officia sapiente consequatur et aut eveniet quia architecto enim ducimus illum delectus. Necessitatibus, at odio! Corporis, impedit! Impedit, repellendus fugit. Quo sed quam voluptatem possimus eaque ullam commodi veritatis nulla harum pariatur nisi fuga libero, ducimus optio hic facere est, officia magni a accusamus. Accusantium voluptate illo nihil est, cum soluta. Pariatur, dolores.'
            ],
            [
                'title' => $title = 'Artikel 3',
                'slug' => str($title)->slug(),
                'user_id' => 1,
                'category_article_id' => mt_rand(1, 3),
                'description' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ducimus perspiciatis, neque nemo amet dignissimos molestias odit excepturi. Hic accusantium consequatur eveniet repellat ex sapiente nemo quam doloribus quia, veritatis neque sunt esse. Hic vitae tenetur asperiores pariatur minus dolorum eum sint nesciunt eligendi, eos inventore ad officia sapiente consequatur et aut eveniet quia architecto enim ducimus illum delectus. Necessitatibus, at odio! Corporis, impedit! Impedit, repellendus fugit. Quo sed quam voluptatem possimus eaque ullam commodi veritatis nulla harum pariatur nisi fuga libero, ducimus optio hic facere est, officia magni a accusamus. Accusantium voluptate illo nihil est, cum soluta. Pariatur, dolores.'
            ],
            [
                'title' => $title = 'Artikel 4',
                'slug' => str($title)->slug(),
                'user_id' => 1,
                'category_article_id' => mt_rand(1, 3),
                'description' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ducimus perspiciatis, neque nemo amet dignissimos molestias odit excepturi. Hic accusantium consequatur eveniet repellat ex sapiente nemo quam doloribus quia, veritatis neque sunt esse. Hic vitae tenetur asperiores pariatur minus dolorum eum sint nesciunt eligendi, eos inventore ad officia sapiente consequatur et aut eveniet quia architecto enim ducimus illum delectus. Necessitatibus, at odio! Corporis, impedit! Impedit, repellendus fugit. Quo sed quam voluptatem possimus eaque ullam commodi veritatis nulla harum pariatur nisi fuga libero, ducimus optio hic facere est, officia magni a accusamus. Accusantium voluptate illo nihil est, cum soluta. Pariatur, dolores.'
            ],
            [
                'title' => $title = 'Artikel 5',
                'slug' => str($title)->slug(),
                'user_id' => 1,
                'category_article_id' => mt_rand(1, 3),
                'description' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ducimus perspiciatis, neque nemo amet dignissimos molestias odit excepturi. Hic accusantium consequatur eveniet repellat ex sapiente nemo quam doloribus quia, veritatis neque sunt esse. Hic vitae tenetur asperiores pariatur minus dolorum eum sint nesciunt eligendi, eos inventore ad officia sapiente consequatur et aut eveniet quia architecto enim ducimus illum delectus. Necessitatibus, at odio! Corporis, impedit! Impedit, repellendus fugit. Quo sed quam voluptatem possimus eaque ullam commodi veritatis nulla harum pariatur nisi fuga libero, ducimus optio hic facere est, officia magni a accusamus. Accusantium voluptate illo nihil est, cum soluta. Pariatur, dolores.'
            ],
            [
                'title' => $title = 'Artikel 6',
                'slug' => str($title)->slug(),
                'user_id' => 1,
                'category_article_id' => mt_rand(1, 3),
                'description' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ducimus perspiciatis, neque nemo amet dignissimos molestias odit excepturi. Hic accusantium consequatur eveniet repellat ex sapiente nemo quam doloribus quia, veritatis neque sunt esse. Hic vitae tenetur asperiores pariatur minus dolorum eum sint nesciunt eligendi, eos inventore ad officia sapiente consequatur et aut eveniet quia architecto enim ducimus illum delectus. Necessitatibus, at odio! Corporis, impedit! Impedit, repellendus fugit. Quo sed quam voluptatem possimus eaque ullam commodi veritatis nulla harum pariatur nisi fuga libero, ducimus optio hic facere est, officia magni a accusamus. Accusantium voluptate illo nihil est, cum soluta. Pariatur, dolores.'
            ],
            [
                'title' => $title = 'Artikel 7',
                'slug' => str($title)->slug(),
                'user_id' => 1,
                'category_article_id' => mt_rand(1, 3),
                'description' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ducimus perspiciatis, neque nemo amet dignissimos molestias odit excepturi. Hic accusantium consequatur eveniet repellat ex sapiente nemo quam doloribus quia, veritatis neque sunt esse. Hic vitae tenetur asperiores pariatur minus dolorum eum sint nesciunt eligendi, eos inventore ad officia sapiente consequatur et aut eveniet quia architecto enim ducimus illum delectus. Necessitatibus, at odio! Corporis, impedit! Impedit, repellendus fugit. Quo sed quam voluptatem possimus eaque ullam commodi veritatis nulla harum pariatur nisi fuga libero, ducimus optio hic facere est, officia magni a accusamus. Accusantium voluptate illo nihil est, cum soluta. Pariatur, dolores.'
            ],
            [
                'title' => $title = 'Artikel 8',
                'slug' => str($title)->slug(),
                'user_id' => 1,
                'category_article_id' => mt_rand(1, 3),
                'description' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ducimus perspiciatis, neque nemo amet dignissimos molestias odit excepturi. Hic accusantium consequatur eveniet repellat ex sapiente nemo quam doloribus quia, veritatis neque sunt esse. Hic vitae tenetur asperiores pariatur minus dolorum eum sint nesciunt eligendi, eos inventore ad officia sapiente consequatur et aut eveniet quia architecto enim ducimus illum delectus. Necessitatibus, at odio! Corporis, impedit! Impedit, repellendus fugit. Quo sed quam voluptatem possimus eaque ullam commodi veritatis nulla harum pariatur nisi fuga libero, ducimus optio hic facere est, officia magni a accusamus. Accusantium voluptate illo nihil est, cum soluta. Pariatur, dolores.'
            ],
            [
                'title' => $title = 'Artikel 9',
                'slug' => str($title)->slug(),
                'user_id' => 1,
                'category_article_id' => mt_rand(1, 3),
                'description' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ducimus perspiciatis, neque nemo amet dignissimos molestias odit excepturi. Hic accusantium consequatur eveniet repellat ex sapiente nemo quam doloribus quia, veritatis neque sunt esse. Hic vitae tenetur asperiores pariatur minus dolorum eum sint nesciunt eligendi, eos inventore ad officia sapiente consequatur et aut eveniet quia architecto enim ducimus illum delectus. Necessitatibus, at odio! Corporis, impedit! Impedit, repellendus fugit. Quo sed quam voluptatem possimus eaque ullam commodi veritatis nulla harum pariatur nisi fuga libero, ducimus optio hic facere est, officia magni a accusamus. Accusantium voluptate illo nihil est, cum soluta. Pariatur, dolores.'
            ],
            [
                'title' => $title = 'Artikel 10',
                'slug' => str($title)->slug(),
                'user_id' => 1,
                'category_article_id' => mt_rand(1, 3),
                'description' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ducimus perspiciatis, neque nemo amet dignissimos molestias odit excepturi. Hic accusantium consequatur eveniet repellat ex sapiente nemo quam doloribus quia, veritatis neque sunt esse. Hic vitae tenetur asperiores pariatur minus dolorum eum sint nesciunt eligendi, eos inventore ad officia sapiente consequatur et aut eveniet quia architecto enim ducimus illum delectus. Necessitatibus, at odio! Corporis, impedit! Impedit, repellendus fugit. Quo sed quam voluptatem possimus eaque ullam commodi veritatis nulla harum pariatur nisi fuga libero, ducimus optio hic facere est, officia magni a accusamus. Accusantium voluptate illo nihil est, cum soluta. Pariatur, dolores.'
            ],



        ])->each(fn ($articles) => Article::create($articles));
    }
}
