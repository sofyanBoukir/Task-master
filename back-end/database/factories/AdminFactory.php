<?php

namespace Database\Factories;

use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Admin>
 */
class AdminFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'full_name' => fake()->name(),                       
            'email' => fake()->unique()->email(),                
            'username' => fake()->unique()->userName(),          
            'password' => Hash::make("1234"),                       
            'adress' => fake()->address(),                       
            'phone_number' => fake()->phoneNumber(),                        
            'dob' => fake()->dateTimeBetween("-60 years","-18 years")->format("Y-m-d"),
            'city' => fake()->city(),
        ];
    }
}
