<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index() {
        return inertia('Article/Index');
    }

    public function show(){
        return inertia('Article/Show');
    }
}
