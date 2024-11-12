<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    protected $fillable = [
        "full_name",
        "username",
        "role",
        "adress",
        "phone_number",
        "profile_picture",
        "dob",
        "city",
    ];
    /** @use HasFactory<\Database\Factories\AdminFactory> */
    use HasFactory;
}