<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

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
        $gender = fake()->randomElement(["male","female"]);

        return [
            'full_name' => fake()->name($gender),
            'user_id' => User::factory(),
            'username' => fake()->unique()->userName(),
            'email' => fake()->unique()->email(),
            'gender' => $gender,
            'adress' => fake()->address(),
            'password' => Hash::make("1234"),
        ];
    }
}
