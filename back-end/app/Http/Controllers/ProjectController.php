<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\ProjectUser;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use RuntimeException;
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

        $project = Project::create([
            "created_by" => $user->id,
            "title" => $request->title,
            "description" => $request->description,
        ]);

        $project->save();

        $project_users = ProjectUser::create([
            "project_id" => $project->id,
            "user_id" => $user->id,
            "role" => "owner",
        ]);


        $project_users->save();
        if(count($request->members) !== 0){
            foreach($request->members as $member_id){
                ProjectUser::create([
                    "project_id" => $project->id,
                    "user_id" => $member_id,
                    "role" => "member",
                ]);
            }
        }

        return response()->json([
            "created" => true,
            "message" => "New project created successfully!",
        ]);
    }

    public function getProjects(Request $request){

        try{
            $user = JWTAuth::parseToken()->authenticate();
            $projects = Project::where("created_by",$user->id)->get();

            if(count($projects) !== 0){
                return response()->json([
                    "projectsFounded" => true,
                    "projects" => $projects,
                ]);
            }else{
                return response()->json([
                    "noProjects" => true,
                ]);
            }
        }catch(Exception $e){
            return response()->json([
                "message" => $e->getMessage(),
            ]);
        }
    }

    public function getProjectDetails($id){
        $members = ProjectUser::where("project_id",$id)
                                ->with("user")
                                ->get()
                                ->map(function($member){
                                    return [
                                        "username" => $member->user->username,
                                        "role" => $member->role,
                                    ];
                                });

        if(count($members) !== 0){
            return response()->json([
                "found" => true,
                "members" => $members,
            ]);
        }else{
            return response()->json([
                "not Found" => true,
            ],401);
        }
    }
}
