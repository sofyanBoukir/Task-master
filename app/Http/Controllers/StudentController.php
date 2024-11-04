<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Admin;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function search(Request $request){
        // dd($request);
        $grade = $request->grade;
        $username = $request->username;
        $full_name = $request->student_name;

        $students = Student::query();

        if($grade !== NULL){
            $students->where("current_grade",$grade);
        }
        if($username !== NULL){
            $students->where("username",'LIKE',"%" .$username ."%");
        }
        if($full_name !== NULL){
            $students->where("full_name", 'LIKE' ,"&".$full_name."%");
        }


        $user_id = Auth::id();
        $students = $students->paginate(6);
        $admin = Admin::where('user_id', $user_id)->firstOrFail();
        
        return view("admin.student.students",compact('students','admin'));
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user_id = Auth::id();
        $admin = Admin::where('user_id', $user_id)->firstOrFail();
        return view("admin.student.add-student",compact("admin"));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $full_name = $request->full_name;
        $username = $request->username;
        $email = $request->email;
        $birth_date = $request->birth_date;
        $current_grade = $request->grade;
        $gender = $request->gender;
        $adress = $request->adress;
        $parent_name = $request->parent_name;
        $parent_phone = $request->parent_phone;
        $password = Hash::make($request->password);

        $request->validate([
            "full_name" => "required",
            "username" => "required|unique:users|unique:students",
            "gender" => "required",
            "email" => "required|email|unique:students",
            "adress" => "required",
            "grade" => "required",
            "birth_date" => "required|date",
            "parent_phone" => "required",
            "parent_name" => "required",
            "password" => "required|min:4|confirmed",
            "image" => "mimes:jpg,jpeg,png|max:10240"
        ]);

        $image = NULL;

        if($request->hasFile("image")){
            $image = $request->file("image")->store("student","public");
        }

        $user = User::create([
            "full_name" => $full_name,
            "username" => $username,
            "role" => "student",
            "password" => $password,
        ]);


        $student = Student::create([
            "full_name" => $full_name,
            "username" => $username,
            "gender" => $gender,
            "user_id" => $user->id,
            "email" => $email,
            "adress" => $adress,
            "current_grade" => $current_grade,
            "birth_date" => $birth_date,
            "parent_phone" => $parent_phone,
            "parent_name" => $parent_name,
            "image" => $image,
            "password" => $password,
        ]);

        $user_id = Auth::id();
        $admin = Admin::where('user_id', $user_id)->firstOrFail();
        return to_route("student.profile.create",compact("admin"))->with("success","New student ". $student->full_name ." Added successfully!"); 
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
        $user = User::findorfail($student->user_id);

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
