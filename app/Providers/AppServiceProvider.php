<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Mengambil nilai timezone
        $timezone = config('app.timezone');

        // Mengatur nilai timezone
        config(['app.timezone' => 'Asia/Jakarta']);
    }
}
