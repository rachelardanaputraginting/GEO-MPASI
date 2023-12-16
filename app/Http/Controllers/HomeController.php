<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Torann\GeoIP\Facades\GeoIP;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        // Dapatkan alamat IP dari klien
        
        $geolocation = "The IP address $request->ipinfo->country.";

        dd($geolocation);
        return inertia('Home/Index', compact('geolocation'));
    }
}
