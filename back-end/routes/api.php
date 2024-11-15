<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix("auth")->group(function(){
    Route::post("/sendVerifyCode",[AuthController::class,"sendVerificationCode"]);
    Route::post("/verifyCode",[AuthController::class,"checkVerificationCode"]);
});