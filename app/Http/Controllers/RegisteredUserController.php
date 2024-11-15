<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;

class RegisteredUserController extends Controller
{
    public function create()
    {
        return view('auth.register');
    }

    public function store()
    {
        //validate
      $validatedValue =  request()->validate([
                            'first_name' => ['required', 'string', 'max:105'],
                            'last_name' => ['required', 'string', 'max:105'],
                            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                            'password' => ['required', Password::min(6), 'confirmed'],
                        ]);

        //create the user
        $user = User::create($validatedValue);

        //login
        Auth::login($user);

        //redirect
        return redirect('/jobs');

    }
}
