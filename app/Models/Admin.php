<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Admin extends Model
{
    /** @use HasFactory<\Database\Factories\AdminFactory> */
    use HasFactory;

    public function user(){
        return $this->hasOne(User::class);
    }

    public function getImageAttribute($value){
        return $value?asset('storage/' . $value) : asset('storage/admin/default_image.png');
    }
}
