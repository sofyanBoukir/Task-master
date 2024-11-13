<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use PDO;

class StudentsControlller extends Controller
{
    public function getStudents(){
        $students = Student::paginate(6);
        return response()->json([
            "students" => $students,
        ]);
    }

    public function getStudentsByName($name){
        $students = Student::where("full_name","LIKE","%$name%")->paginate(5);
        return response()->json([
            "students" => $students,
        ]);
    }

    public function deleteStudent($id){
        $student = Student::findorfail($id);
        $student->delete();
        return response()->json([
            "deleted" => true,
            "success" => "Deleted successfully",
        ]);
    }

    public function editStudent($id,Request $request){
        $student = Student::findorfail($id);
            
        $usernameExists = Student::where("username",$request->username)->where("id","!=",$student->id)->first();
        if($usernameExists){
            return response()->json([
                "updated" => false,
            ]);
        }

        $student->username = $request->username;
        $student->password = Hash::make($request->password);
        $student->save();
        return response()->json([
            "updated" => true,
            "success" => "Data updated successfully!",
        ]);
    }

    public function addStudent(Request $request){
        $usernameExists = Student::where("username",$request->username)->first();
        if($usernameExists){
            return response()->json([
                "usernameExists" => true,
            ]);
        }

        Student::create([
            "full_name" => $request->full_name,
            "email" => $request->email,
            "username" => $request->username,
            "password" => $request->password,
            "adress" => $request->adress,
            "gender" => $request->gender,
            "grade" => $request->grade,
            "phone_number" => $request->phone_number,
            "dob" => $request->dob,
            "city" => $request->city,
        ]);

        return response()->json([
            "inserted" => true,
        ]);
    }
}
