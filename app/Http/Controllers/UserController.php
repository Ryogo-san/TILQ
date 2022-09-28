<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;
use App\Http\Resources\PostResource;
use Illuminate\Support\Str;

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
            'posts'=>$posts->sortBy('updated_at'),
        ]);
    }

    public function TILshowDetail(Post $post){
        $markdown_body=Str::of($post->body)->markdown();
        $post->body=$markdown_body;

        return Inertia::render('TIL/ShowDetail',[
            'user'=>auth()->user(),
            'post'=>$post,
        ]);
    }
}