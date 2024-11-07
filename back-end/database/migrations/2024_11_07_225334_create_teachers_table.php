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
        Schema::create('teachers', function (Blueprint $table) {
            $table->id();
            $table->string("full_name");
            $table->string("email")->unique();
            $table->string("username")->unique();
            $table->string("subject")->nullable();
            $table->string("password");
            $table->string("adress");
            $table->enum("gender",["Male","Female"]);
            $table->float("salary");
            $table->string("phone_number");
            $table->string("profile_picture")->nullable();
            $table->date("dob")->format("Y-m-d");
            $table->string("city");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teachers');
    }
};
