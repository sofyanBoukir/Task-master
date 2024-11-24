<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\File;

class PersonalProfileController extends Controller
{
    public function editProfile(Request $request){
        $full_name = $request->full_name;
        $username = $request->username;
        $user = JWTAuth::parseToken()->authenticate();

        $usernameExists = User::where("username",$request->username)->where("id","!=",$user->id)->exists();

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

        return response()->json([
            "updated" => false,
            "message" => $ex->getMessage(),
        ]);
    }

    public function getProfileDetails(){

        $user = JWTAuth::parseToken()->authenticate();
        $projects = Project::where("created_by",$user->id)->count();
        $tasks = Task::where("assigned_to",$user->id)->count();
        $pendingTasks = Task::where("assigned_to",$user->id)
                            ->where("status","pending")
                            ->count();

        return response()->json([
            "totalProjects" => $projects,
            "totalTasks" => $tasks,
            "totalPendingTasks" => $pendingTasks,
            "success" => true,
        ]);
    }
}
