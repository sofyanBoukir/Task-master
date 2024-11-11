<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function show($id){
        $profile = Admin::findorfail($id)->makehidden('password');
        return response()->json([
            "profile" => $profile,
        ]);
    }

    public function updatePersonalInfo($id,Request $request){
        $user = Admin::findorfail($id);

        if($request->has("username")){
            $usernameExists = Admin::where("username",$request->username)->where("id","!=",$user->id)->first();
            if($usernameExists){
                return response()->json([
                    "exist_username" => true,
                    "message" => "This username already exist",
                ]);
            }
        }

        $user->update($request->only(["full_name","username","phone_number","dob"]));
        return response()->json([
            "updated" => true,
            "success" => "Data successfully updated",
        ],200);
    }
}
