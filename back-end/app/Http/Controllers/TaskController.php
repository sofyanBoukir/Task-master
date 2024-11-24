<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Task;
use Exception;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class TaskController extends Controller
{
    public function addTask(Request $request){
        try{
            $request->validate([
                "selectedUser" => "integer|exists:users,id",
                "projectId" => "integer|exists:projects,id",
            ]);

            Task::create([
                "title" => $request->title,
                "description" => $request->description,
                "priority" => $request->priority,
                "due_date" => $request->dueDate,
                "project_id" => $request->projectId,
                "assigned_to" => $request->selectedUser,
            ]);

            return response()->json([
                "added" => true,
            ]);

        }catch(Exception $e){
            return response()->json([
                "added" => false,
                "message" => $e->getMessage(),
            ]);
        }
    }

    public function getTasks(){
        $user = JWTAuth::parsToken()->authenticate();

        $tasks = Task::where("assigned_to",$user->id);
        if(count($tasks) !== 0){
            return response()->json([
                "tasks" => $tasks,
            ]);
        }
        return response()->json([
            "noTasks" => true
        ]);
    }
}
