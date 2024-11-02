<?php

namespace App\Http\Controllers;

use App\Models\Student;
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
            $student = Auth::user();
            return to_route("student.profile.edit",$student->id);
        }else{
            return back()->withErrors([
                "username" => "username Or password incorrect!",
            ]);
        }
    }
}
