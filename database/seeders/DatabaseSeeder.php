<?php

namespace Database\Seeders;

use App\Models\Student;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        Student::factory()->count(10)->create()->each(function ($student) {
            $user = User::find($student->user_id);
            $user->full_name = $student->full_name;
            $user->username = $student->username;
            $user->password = $student->password;
            $user->save();
        });
    }
}
