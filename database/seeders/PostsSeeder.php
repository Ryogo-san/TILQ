<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('posts')->insert([[
            'id' => str()->uuid(),
            'title' => 'sample',
            'body' => '# this is a sample body.',
            'user_id' => 1,
            'accessibility_id' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ], [
            'id' => str()->uuid(),
            'title' => 'sample2',
            'body' => '# this is a sample body2.',
            'user_id' => 1,
            'accessibility_id' => 2,
            'created_at' => now(),
            'updated_at' => now(),
        ], [
            'id' => str()->uuid(),
            'title' => 'sample3',
            'body' => '# this is a sample body3.',
            'user_id' => 1,
            'accessibility_id' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]]);
    }
}
