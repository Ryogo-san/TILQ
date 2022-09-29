<?php

namespace App\UseCases\Post;

use App\Http\Requests\PostRequest;
use App\Models\Post;

class StoreAction
{
    public function __invoke(PostRequest $request, Post $post)
    {
        $input = $request->validated();
        $input['user_id'] = auth()->id();
        $post->fill($input)->save();
    }
}
