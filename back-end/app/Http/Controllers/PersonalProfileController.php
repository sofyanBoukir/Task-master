<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\File;

class PersonalProfileController extends Controller
{
    public function editProfile(Request $request){
        try {
            $full_name = $request->full_name;
            $username = $request->username;

            $user = JWTAuth::parseToken()->authenticate();
            $usernameExists = User::where("username",$request->username)->where("id","!=",$user->id)->exists();
            return response()->json([
                "user id" => $user->id,
                "isUsernameExists" => $usernameExists,
            ]);

            if($usernameExists){
                return response()->json([
                    "updated" => false,
                    "message" => "This username is already exists!",
                ]);
            }

            if($request->has("profile_photo")) {
                $path = public_path('storage/images/users/');
                if(File::exists($path.$user->profile_photo)) {
                    File::delete($path.$user->profile_photo);
                }
                $user_image = $request->file('profile_photo');
                $user_image_name = time() . '_' . 'user'. '_' . $user_image->getClientOriginalName();
                $user_image->storeAs('images/users/', $user_image_name, 'public');
                $user->update([
                    'profile_photo' => $user_image_name
                ]);
            }

            $user->full_name = $full_name;
            $user->username = $username;
            $user->save();
            return response()->json([
                "updated" => true,
                "message" => "Your data updated successfully!",
                "user" => $user,
            ]);
        } catch (\Exception $ex) {
            return response()->json([
                "updated" => false,
                "message" => $ex->getMessage(),
            ]);
        }
    }   
}
