<?php

namespace Database\Seeders;

use App\Models\Admin;
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

        // Student::factory()->count(10)->create()->each(function ($student) {
        //     $user = User::find($student->user_id);
        //     $user->full_name = $student->full_name;
        //     $user->username = $student->username;
        //     $user->password = $student->password;
        //     $user->save();
        // });

        Admin::factory()->count(5)->create()->each(function ($admin) {
                $user = User::find($admin->user_id);
                $user->full_name = $admin->full_name;
                $user->username = $admin->username;
                $user->password = $admin->password;
                $user->save();
            });
    }
}
