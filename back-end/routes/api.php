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
    Route::post("/login",[AuthController::class,"login"]);
    Route::post("/forgotPassword",[AuthController::class,"forgotPassword"]);
    Route::post("/resetPassword",[AuthController::class,"resetPassword"]);
});