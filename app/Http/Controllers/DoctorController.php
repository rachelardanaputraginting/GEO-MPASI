<?php

namespace App\Http\Controllers;

use App\Http\Resources\Home\DoctorResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DoctorController extends Controller
{
    public function index(Request $request)
    {

        $search_doctor = $request->input('search');


        if (Auth::check()) {
            $userId = Auth::id();
            if ($search_doctor) {
                $doctors = User::query()->select(
                    'name',
                    'username',
                    'email',
                    'address',
                    'picture',
                    'status',
                )
                    ->where('name', 'LIKE', "%$search_doctor%")
                    ->where('status', 'dokter')->where('id', '!=', $userId)->latest()
                    ->fastPaginate(12)->withQueryString();
            } else {
                $doctors = User::query()->select(
                    'name',
                    'username',
                    'email',
                    'address',
                    'picture',
                    'status',
                )->where('status', 'dokter')->where('id', '!=', $userId)->latest()
                    ->fastPaginate(12)->withQueryString();
            }
        } else {
            if ($search_doctor) {
                $doctors = User::query()->select(
                    'name',
                    'username',
                    'email',
                    'address',
                    'picture',
                    'status',
                )
                    ->where('name', 'LIKE', "%$search_doctor%")
                    ->where('status', 'dokter')->latest()
                    ->fastPaginate(12)->withQueryString();
            } else {
                $doctors = User::query()->select(
                    'name',
                    'username',
                    'email',
                    'address',
                    'picture',
                    'status',
                )->where('status', 'dokter')->latest()
                    ->fastPaginate(12)->withQueryString();
            }
        }
        return inertia('Doctor/Index', [
            "doctors" => DoctorResource::collection($doctors),
        ]);
    }
}
