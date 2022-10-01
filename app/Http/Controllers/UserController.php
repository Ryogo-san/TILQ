<?php

namespace App\Http\Controllers;

use App\UseCases\Post\GetPostsCountByCreatedDate;
use Inertia\Inertia;

class UserController extends Controller
{
    public function TILindex(GetPostsCountByCreatedDate $action)
    {
        $postsCountByCreateDate = $action(auth()->user());

        return Inertia::render('TIL/Index', [
            'user' => auth()->user(),
            'posts' => $postsCountByCreateDate,
        ]);
    }
}
