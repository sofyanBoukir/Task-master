<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminProfileController extends Controller
{
    public function index(){
        $user_id = Auth::id();
        $admin = Admin::where('user_id', $user_id)->firstOrFail();
        
        return view("admin.profile.profile",compact("admin"));
    }
}
