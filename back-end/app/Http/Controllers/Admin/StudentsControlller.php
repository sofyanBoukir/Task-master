<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;

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
}
