<?php

namespace App\Http\Controllers\Admin;

use App\Models\Admin;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;

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

    public function editAdressInfo($id,Request $request){
        $user = Admin::findorfail($id);

        $user->update($request->only(['city','adress']));
        return response()->json([
            "updated" => true,
            "success" => "Your data updated successfully!",
        ],200);
    }

    public function editProfilePhoto($id,Request $request){
        $user = Admin::findorfail($id);
        

        if($request->has("image")) {
            $path = public_path('storage/admin/');
            if(File::exists($path.$user->profile_picture)) {
                File::delete($path.$user->profile_picture);
            }
            $user_image = $request->file('image');
            $user_image_name = time() . '_' . 'user'. '_' . $user_image->getClientOriginalName();
            $user_image->storeAs('admin/', $user_image_name, 'public');
            $user->update([
                'profile_picture' => $user_image_name
            ]);
            
            return response()->json([
                "updated" => true,
                "message" => "Your image updated successfully!",
            ]);
        }
        
    }
}
