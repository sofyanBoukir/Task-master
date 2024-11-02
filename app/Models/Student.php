<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    public function user(){
        return $this->hasOne(User::class);
    }

    public function getImageAttribute($value){
        return $value ? asset('storage/' . $value) : asset('storage/student/default_image.png');
    }
}
