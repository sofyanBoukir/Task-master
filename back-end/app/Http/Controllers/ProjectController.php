<?php

namespace App\Http\Controllers;

use App\Models\ProjectUser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Tymon\JWTAuth\Facades\JWTAuth;

class ProjectController extends Controller
{
    public function SearchUsers(Request $request){
        $user = JWTAuth::parseToken()->authenticate();

        $users = User::SELECT("id","username")
                    ->where("username","LIKE","%$request->username%")
                    ->where("username","!=",$user->username)
                    ->paginate(5);

        if(count($users) !== 0){
            return response()->json([
                "users" => $users,
            ]);
        }else{
            return response()->json([
                "noUsers" => true, 
                "message" => "No users founded!",
            ]);
        }
    }

    public function addProject(Request $request){
        $user = JWTAuth::parseToken()->authenticate();

        
    }
}
