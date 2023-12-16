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
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description');
            $table->float('water');
            $table->float('protein');
            $table->float('fat');
            $table->float('carbohydr');
            $table->float('dietary');
            $table->float('fiber');
            $table->float('alcohol');
            $table->float('pufa');
            $table->float('cholesterol');
            $table->float('vit_a');
            $table->float('carotene');
            $table->float('vit_e');
            $table->float('vit_b1');
            $table->float('vit_b2');
            $table->float('vit_b6');
            $table->float('total_fol_acid');
            $table->float('vit_c');
            $table->float('sodium');
            $table->float('potassium');
            $table->float('magnessium');
            $table->float('phosphorus');
            $table->float('iron');
            $table->float('zink');
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
