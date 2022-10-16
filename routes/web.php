<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::group(['prefix' => 'til', 'middleware' => 'auth'], function () {
    Route::get('/', [UserController::class, 'TILindex'])->name('index');
    Route::get('mydashboard', [PostController::class, 'show'])->name('TILdashboard');
    Route::get('mydashboard/create', [PostController::class, 'create']);
    Route::post('mydashboard/create', [PostController::class, 'markdown'])->middleware('throttle:150');
    Route::post('mydashboard/store', [PostController::class, 'store']);
    Route::get('mydashboard/{post}', [PostController::class, 'showDetail'])->whereUuid('post')->name('TILshowDetail');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
