<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['created_by','title','description'];

    public function users(){
        return $this->belongsToMany(User::class,"project_users")->withPivot("role");
    }

    public function comments(){
        return $this->hasMany(Comment::class);
    }
}