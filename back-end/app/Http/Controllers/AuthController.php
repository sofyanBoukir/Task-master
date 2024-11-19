<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;
use Tymon\JWTAuth\Claims\JwtId;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{

    public function login(Request $request){
        $credentials = $request->only("email","password");

        if(!$token = JWTAuth::attempt($credentials)){
            return response()->json([
                "success" => false,
            ]);
        }

        return response()->json([
            "token" => $token,
            "user" => Auth::user(),
            "success" => true,
        ]);
    }

    public function logout(Request $request){
        $token = JWTAuth::getToken();
        JWTAuth::invalidate($token);
        Auth::user();
        return response()->json([
            "loggedOut" => true,
        ]);
    }

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
                "email_verified_at" => now(),
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


    public function forgotPassword(Request $request){
        $user_exists = User::where("email",$request->email)->exists();
        if(!$user_exists){
            return response()->json([
                "userNotExist" => true,
            ]);
        }

        $status = Password::sendResetLink($request->only("email"));
        if($status === Password::RESET_LINK_SENT){
            return response()->json([
                "sended" => true,
                "message" => __($status),
            ]);
        }
        return response()->json([
            "sended" => false,
            "error" => __($status),
        ]);
    }
    
    public function resetPassword(Request $request){
        $status = Password::reset(
            $request->only("email","password","retype_password","token"),
            function($user,$password){
                $user->password = Hash::make($password);
                $user->save();
            }
        );

        if($status === Password::PASSWORD_RESET){
            return response()->json([
                "reseted" => true,
                "message" => __($status),
            ]);
        }
        return response()->json([
            "reseted" => false,
            "message" => __($status),
        ]);
    }
}
