<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{

    public function show(){
        return view("login");
    }

    
    public function login(Request $request){
        
        $username = $request->username;
        $password = $request->password;

        $request->validate([
            "username" => "required",
            "password" => "required",
        ]);

        $credentials = ["username" => $username,"password" => $password];

        if(Auth::attempt($credentials)){
            $user = Auth::user();

            if($user->role === 'admin'){
                
                return to_route("admin.students.index");
            }
            else if($user->role === 'student'){
                return to_route("student.profile.edit",$user->id);
            }

            return abort(404);
        }

        return back()->withErrors([
            "username" => "username Or password incorrect!",
        ]);
    }

    public function logout(){
        session()->flush();
        Auth::logout();
        return to_route("login.show")->with("success","You have been logged out!");
    }
}
