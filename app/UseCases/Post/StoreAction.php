<?php

namespace App\UseCases\Post;

use App\Models\Post;
use App\Http\Requests\PostRequest;

class StoreAction{
    public function __invoke(PostRequest $request, Post $post){
        $input=$request->validated();
        $input['user_id']=auth()->id();
        dd($input);
        $post->fill($input)->save();
    }
}