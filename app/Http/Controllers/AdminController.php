<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Admin;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $students = Student::paginate(6);
        $user_id = Auth::id();
        $admin = Admin::where('user_id', $user_id)->firstOrFail();

        return view("admin.student.students",compact('students','admin'));
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

    public function editStudent($id){
        $student = Student::findorfail($id);
        return view("admin.student.edit-student",compact("student"));
    }

    public function updateStudent(Request $request,$id){
        $student = Student::findorfail($id);
        $user = User::findorfail($student->user_id);

        $request->validate([
            "image" => "mimes:jpg,png,jpeg|max:10240",
        ]);

        if($request->hasFile("image")){
            $student->image = $request->file("image")->store("stduent","public");
        }


        $student->full_name = $request->full_name;
        $student->birth_date = $request->birth_date;
        $student->current_grade = $request->grade;
        $student->adress = $request->adress;
        $student->parent_name = $request->parent_name;
        $student->parent_phone = $request->parent_phone;
        $student->password = Hash::make($request->password);
    

        $user->full_name = $request->full_name;
        $user->password = Hash::make($request->password);

        $student->save();
        $user->save();

        return to_route("admin.student.edit",$student->id)->with("success","Data updated for " .$student->full_name);
    }

    public function deleteStudent($id){

        $student = Student::findorfail($id);
        $user = User::findorfail($student->user_id);

        $student->delete();
        $user->delete();

        return to_route("admin.students.index")->with("success","Student deleted successfully!");
    }
    /**
     * Display the specified resource.
     */
    public function show(Admin $admin)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Admin $admin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Admin $admin)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Admin $admin)
    {
        //
    }
}
