<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\GroceriesController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', HomeController::class)->name('home.index');

// Article
Route::get('/article', [ArticleController::class, 'index'])->name('article.index'); // Get Article
Route::get('/article/{slug}', [ArticleController::class, 'show'])->name('article.show'); // SHow Article By Slug

// Doctor
Route::get('/doctor', [DoctorController::class, 'index'])->name('doctor.index'); // Get Doctor

// About
Route::get('/about', [AboutController::class, 'index'])->name('about.index'); // Get About

// Admin
Route::prefix('admin')->middleware('auth')->group(function () {

    // Dashboard
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard.index');

    // Profile
    Route::controller(ProfileController::class)->group(function () {
        Route::get('/profile',  'edit')->name('profile.edit'); //Edit Profile By username
        Route::patch('/profile',  'update')->name('profile.update'); // Update Profile By username
        Route::delete('/profile',  'destroy')->name('profile.destroy');
    });

    // Groceries
    Route::controller(GroceriesController::class)->group(function () {
        Route::get('/groceries', 'index')->name('admin.groceries.index');
    });

    // Articles
    Route::controller(GroceriesController::class)->group(function () {
        Route::get('/groceries', 'index')->name('admin.groceries.index');
    });
});

require __DIR__ . '/auth.php';
