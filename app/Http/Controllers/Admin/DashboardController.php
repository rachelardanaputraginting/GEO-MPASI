<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Chat;
use App\Models\Grocery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index(){

        $total_groceries = Grocery::where('user_id', Auth::user()->id)->count();
        $total_articles = Article::where('user_id', Auth::user()->id)->count();
        $total_messages = Chat::where('receiver_id', Auth::user()->id)->count();

        return inertia('Admin/Index', compact('total_groceries', 'total_articles', 'total_messages'));
    }
}
