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
        Schema::create('groceries', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('indonesia_city_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description');
            $table->string('water', 15);
            $table->string('protein', 15);
            $table->string('fat', 15);
            $table->string('carbohydr', 15);
            $table->string('dietary', 15);
            $table->string('fiber', 15);
            $table->string('alcohol', 15);
            $table->string('pufa', 15);
            $table->string('cholesterol', 15);
            $table->string('vit_a', 15);
            $table->string('carotene', 15);
            $table->string('vit_e', 15);
            $table->string('vit_b1', 15);
            $table->string('vit_b2', 15);
            $table->string('vit_b6', 15);
            $table->string('total_fol_acid', 15);
            $table->string('vit_c', 15);
            $table->string('sodium', 15);
            $table->string('potassium', 15);
            $table->string('magnessium', 15);
            $table->string('phosphorus', 15);
            $table->string('iron', 15);
            $table->string('zink', 15);
            $table->string('picture')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('groceries');
    }
};
