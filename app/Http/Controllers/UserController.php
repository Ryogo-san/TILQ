<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class UserController extends Controller
{
    public function TILindex(){
        return Inertia::render('TIL/Index',[
            'user'=>auth()->user()
        ]);
    }
}