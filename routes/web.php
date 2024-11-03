<?php

use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\StudentController;

Route::get("/",[LoginController::class,"show"])
->name("login.show");
Route::post("/login",[LoginController::class,"login"])
->name("login.login");
Route::get("/logout",[LoginController::class,"logout"])
->name("login.logout");



Route::resource('student/profile', StudentController::class)->names([
    'show' => 'student.profile.show',
    'edit' => 'student.profile.edit',
    'update' => 'student.profile.update',
]);

Route::resource("admin/students",AdminController::class)->names([
    "index" => "admin.students.index",
    'edit' => 'admin.student.edit',
    'update' => 'admin.student.update',
]);