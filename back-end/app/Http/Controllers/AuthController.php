<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Student;
use Illuminate\Http\Request;
use App\Models\Teacher;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function login(Request $request)
    {
        $user = null;

        if($request->role === 'admin'){
            $user = Admin::where("username",$request->username)->first();
        }
        else if($request->role === 'teacher'){
            $user = Teacher::where("username",$request->username)->first();
        }
        else if($request->role === 'student'){
            $user = Student::where("username",$request->username)->first();
        }

        if(!$user || !Hash::check($request->password, $user->password)){
            return response()->json([
                "error" => 403,
                "message" => "username or password incorrect",
            ]);
        }

        return response()->json([
            // "token" => $token,
            "user" => $user,
            "role" => $request->role,
        ]);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
