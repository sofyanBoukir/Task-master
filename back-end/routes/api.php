<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PersonalProfileController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix("auth")->group(function(){
    Route::post("/sendVerifyCode",[AuthController::class,"sendVerificationCode"]);
    Route::post("/verifyCode",[AuthController::class,"checkVerificationCode"]);
    Route::post("/login",[AuthController::class,"login"]);
    Route::post("/forgotPassword",[AuthController::class,"forgotPassword"]);
    Route::post("/resetPassword",[AuthController::class,"resetPassword"]);
    Route::post("/logout",[AuthController::class,"logout"]);
});

Route::prefix("profile")->group(function(){
    Route::post("/editProfile",[PersonalProfileController::class,"editProfile"]);
    Route::get("/getProfileDetails",[PersonalProfileController::class,"getProfileDetails"]);
});

Route::prefix("project")->group(function(){
    Route::post("/searchUsers",[ProjectController::class,"searchUsers"]);
    Route::post("/addProject",[ProjectController::class,"addProject"]);
    Route::get("/getProjects",[ProjectController::class,"getProjects"]);
    Route::get("/getProjectDetails/{id}",[ProjectController::class,"getProjectDetails"]);
    Route::put("/updateProject",[ProjectController::class,"updateProject"]);
    Route::delete("/deleteProject/{id}",[ProjectController::class,"deleteProject"]);
    Route::get("/projectsUserWith",[ProjectController::class,"getProjectsUserWith"]);
    Route::delete("/exitProject/{projectId}",[ProjectController::class,"exitProject"]);
});

Route::prefix("task")->group(function(){
    Route::post("/addTask",[TaskController::class,"addTask"]);
    Route::get("/getTasks",[TaskController::class,"getTasks"]);
    Route::patch("/editTaskStatus",[TaskController::class,"editTaskStatus"]);
});
