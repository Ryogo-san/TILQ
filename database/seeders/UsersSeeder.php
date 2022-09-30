<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('users')->insert([[
            'name' => 'dev',
            'email' => 'aaaa@aaa.com',
            'password' => Hash::make('aaaaaaaa'),
        ], [
            'name' => 'dev2',
            'email' => 'bbbb@bbb.com',
            'password' => Hash::make('bbbbbbbb'),
        ]]);
    }
}
