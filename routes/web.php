<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\StudentController;

Route::get("/",[LoginController::class,"show"]);
Route::post("/login",[LoginController::class,"login"])
->name("login.login");


Route::resource('student/profile', StudentController::class)->names([
    'show' => 'student.profile.show',
    'edit' => 'student.profile.edit',
    'update' => 'student.profile.update',
]);