<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['title','description','status','priority','due_date','assigned_to','project_id'];
    public function project(){
        return $this->belongsTo(Project::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
    public function assignedUser(){
        return $this->belongsTo(User::class, 'assigned_to');
    }

    /** @use HasFactory<\Database\Factories\TaskFactory> */
    use HasFactory;
}
