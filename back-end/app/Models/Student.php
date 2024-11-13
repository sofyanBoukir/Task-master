<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    /** @use HasFactory<\Database\Factories\StudentFactory> */
    use HasFactory;

    protected $fillable = [
        "full_name",
        "email",
        "username",
        "password",
        "adress",
        "gender",
        "grade",
        "phone_number",
        "dob",
        "city",
    ];
}
