<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $gender = fake()->randomElement(['male', 'female']);
        return [
            'full_name' => fake()->name($gender),
            'user_id' => User::factory(),
            'username' => fake()->unique()->userName(),
            'email' => fake()->unique()->email(),
            'birth_date' => fake()->dateTimeBetween('2004-01-01', '2009-01-01')->format('Y-m-d'),
            'current_grade' => fake()->randomElement(["TC","1BAC","2BAC"]),
            'gender' => $gender,
            'adress' => fake()->address(),
            'parent_name' => fake()->name(),
            'parent_phone' => fake()->phoneNumber(),
            'password' => Hash::make("1234"),
        ];
    }
}
