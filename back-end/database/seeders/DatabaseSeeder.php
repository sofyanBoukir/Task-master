<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Admin;
use App\Models\Student;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Teacher;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Student::factory(100)->create();
        // Teacher::factory(5)->create();
        // Admin::factory(3)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
