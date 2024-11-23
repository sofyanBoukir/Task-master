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
    public function searchUsers(Request $request){
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

        $onlyIds = ProjectUser::where("project_id",$id)
                                ->with("user")
                                ->get()
                                ->pluck("user.id");

        if(count($members) !== 0){
            return response()->json([
                "found" => true,
                "members" => $members,
                "onlyIds" => $onlyIds,
            ]);
        }else{
            return response()->json([
                "not Found" => true,
            ],401);
        }
    }

    public function updateProject(Request $request){
        $project = Project::find($request->projectId);
        $project->title = $request->title;
        $project->description = $request->description;
        $project->save();

        try{
            $request->validate([
                "members" => "required|array",
                "members.*" => "integer|exists:users,id",
            ]);

            $existingUsers = ProjectUser::where("project_id",$request->projectId)->pluck("user_id")->toArray();
            $usersToAdd = array_diff($request->members,$existingUsers);
            $usersToRemove = array_diff($existingUsers,$request->members);

            foreach($usersToAdd as $userId){
                ProjectUser::create([
                    "project_id" => $request->projectId,
                    "user_id" => $userId,
                    "role" => "member",
                ]);
            }

            ProjectUser::where("project_id",$request->projectId)
                        ->whereIn("user_id",$usersToRemove)
                        ->delete();

            return response()->json([
                "updated" => true,
                "message" => "Data updated successfully!",
                "project" => $project,
            ]);

        }catch(Exception $e){
            return response()->json([
                "updated" => false,
                "message" => $e->getMessage(),
            ]);
        }
    }

    public function deleteProject($id){
        try{

            $user = JWTAuth::parseToken()->authenticate();
            Project::where("id",$id)->where("created_by",$user->id)->delete();
            
            return response()->json([
                "deleted" => true,
            ]);
        }catch(Exception $e){
            return response()->json([
                "deleted" => false,
                "message" => $e->getMessage(),
            ]);
        }
    }
}
