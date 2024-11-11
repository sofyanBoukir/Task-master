<?php

use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix("auth")->group(function(){
    Route::post("/login",[AuthController::class,"login"])->name("auth.login");
    Route::post("/logout",[AuthController::class,"logout"])->name("auth.logout");
});

Route::prefix("/admin/profile")->group(function(){
    Route::get("/show/{id}",[ProfileController::class,"show"]);
    Route::patch("/editPersonalInfo/{id}",[ProfileController::class,"updatePersonalInfo"]);
});
