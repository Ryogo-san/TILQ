<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;

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

Route::group(['prefix'=>'til','middleware'=>'auth'],function(){
    Route::get('/',[UserController::class,'TILindex'])->name('index');
    Route::get('mydashboard',[PostController::class,'TILshow'])->name('TILdashboard');
    Route::get('mydashboard/create',[PostController::class,'TILcreate']);
    Route::post('mydashboard/create',[PostController::class,'markdown'])->middleware('throttle:150');
    Route::post('mydashboard/store',[PostController::class,'store']);
    Route::get('mydashboard/{post}',[PostController::class,'TILshowDetail'])->name('TILshowDetail');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
