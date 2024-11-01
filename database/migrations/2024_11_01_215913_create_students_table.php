<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string("full_name");
            $table->string("username")->unique();
            $table->string("email")->unique();
            $table->date("birth_date")->nullable();
            $table->string("current_grade");
            $table->string("gender");
            $table->string("adress");
            $table->string("image")->nullable();
            $table->string("parent_name");
            $table->string("parent_phone");
            $table->string("password");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
