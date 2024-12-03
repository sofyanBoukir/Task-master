<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectUser extends Model
{
    protected $fillable = ['user_id','project_id','role'];

    public function user(){
        return $this->belongsTo(User::class);
    }
    public function project(){
        return $this->belongsTo(Project::class);
    }
}
