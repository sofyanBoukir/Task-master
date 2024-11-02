<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

Route::get("/",[LoginController::class,"show"]);

Route::post("login",[LoginController::class,"login"])
->name("login.login");