<?php

namespace Database\Factories;

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Teacher>
 */
class TeacherFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $gender = Arr::random(["Male","Female"]);
        return [
            'full_name' => fake()->name($gender),                       
            'email' => fake()->unique()->email(),                
            'username' => fake()->unique()->userName(),  
            'gender' => $gender,       
            'password' => Hash::make("1234"),                       
            'adress' => fake()->address(),        
            'salary' => fake()->numberBetween(3000,10000),               
            'phone_number' => fake()->phoneNumber(),                        
            'dob' => fake()->dateTimeBetween("-60 years","-18 years")->format("Y-m-d"),
            'city' => fake()->city(),
        ];
    }
}
