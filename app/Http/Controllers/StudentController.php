<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Student $student,$id)
    {   
        if(Auth::id() != $id){
            abort(403);
        }
        $student = Student::findorfail($id);
        return view("student.profile",compact("student"));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        $student = Student::findorfail($id);
        $user = User::findorfail($id);

        $request->validate([
            "image" => "mimes:jpg,jpeg,png|max:10240",
        ]);

        if($request->hasFile("image")){
            $student->image = $request->file("image")->store("student","public");
        }

        $student->full_name = $request->full_name;
        $student->username = $request->username;
        $student->email = $request->email;
        $student->birth_date = $request->birth_date;
        $student->current_grade = $request->current_grade;
        $student->gender = $request->gender;
        $student->adress = $request->adress;
        $student->parent_name = $request->parent_name;
        $student->parent_phone = $request->parent_phone;
        
        $user->full_name = $request->full_name;
        $user->username = $request->username;

        $student->save();
        $user->save();
        return to_route("student.profile.edit",$id)->with("success","Your informations updated successfully!");    
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        //
    }
}
