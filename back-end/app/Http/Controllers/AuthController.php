<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function sendVerificationCode(Request $request){
        $email = $request->email;
        $verification_code = rand(100000,999999);
        $full_name = $request->full_name;

        $user_exists = User::where("email",$email)->exists();
        if($user_exists){
            return response()->json([
                "user_exists" => true,
            ]);
        }

        DB::table("verification_codes")->insert([
            "email" => $email,
            "code" => $verification_code,
            "expires_at" => now()->addMinutes(5),
        ]);

        Mail::send('emails.verification', ['code' => $verification_code,'full_name' => $full_name], function ($message) use ($email) {
            $message->to($email)->subject("Verification code");
        });

        return response()->json([
            "code_sended" => true,
        ],200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function checkVerificationCode(Request $request)
    {
        $email = $request->email;
        $code = $request->verificationCode;
        $full_name = $request->full_name;
        $password = $request->password;

        $verify_code = DB::table("verification_codes")
                            ->where("email",$email)
                            ->where("code",$code)
                            ->where("expires_at",">",now())
                            ->first();

        if($verify_code){   
            User::create([
                "full_name" => $full_name,
                "email" => $email,
                "password" => Hash::make($password),
            ]);
            
            return response()->json([
                "registred" => true,
            ]);
        }else{
            return response()->json([
                "incorrect_code" => true,
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    
}
