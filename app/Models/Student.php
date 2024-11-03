<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $fillable =[
        "full_name",
            "username",
            "gender",
            "email",
            "user_id",
            "adress",
            "current_grade",
            "birth_date",
            "parent_phone",
            "parent_name",
            "password",
            "image", 
    ];

    public function user(){
        return $this->hasOne(User::class);
    }

    public function getImageAttribute($value){
        return $value ? asset('storage/' . $value) : asset('storage/student/default_image.png');
    }
}
