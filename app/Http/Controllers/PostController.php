<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use Inertia\Inertia;
use App\Models\Post;
use App\Http\Resources\PostResource;
use App\UseCases\Post\StoreAction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PostController extends Controller
{
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

    public function TILcreate(){
        return Inertia::render('TIL/Create',[
            "accessibilities"=>DB::table('accessibilities')->get(),
        ]);
    }

    public function markdown(Request $request){
        $body=$request['body'];

        return Inertia::render('TIL/Create',[
            'body'=>Str::of($body)->markdown(),
            "accessibilities"=>DB::table('accessibilities')->get(),
        ]);
    }

    public function store(PostRequest $request, Post $post, StoreAction $action){
        $action($request,$post);

        return redirect(route('TILdashboard'));
    }
}
