<?php

namespace App\UseCases\Post;

use App\Models\User;
use Carbon\Carbon;

class GetPostsCountByCreatedDate
{
    public function __invoke(User $user)
    {
        $posts = $user->posts;

        $postsGroupByCreateDate = $posts->groupBy(function ($post) {
            return Carbon::parse($post->created_at)->format('y-m-d');
        });

        $postsCountByCreateDate = $postsGroupByCreateDate->map(function ($post) {
            return $post->count();
        });

        return $postsCountByCreateDate->sortDesc();
    }
}
