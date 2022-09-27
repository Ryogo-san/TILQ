<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function TILindex(){
        return Inertia::render('TIL/Index',[
            'user'=>auth()->user()
        ]);
    }

    public function TILshow(){
        $posts=auth()->user()->posts;

        return Inertia::render('TIL/Show',[
            'user'=>auth()->user(),
            'posts'=>$posts,
        ]);
    }
}