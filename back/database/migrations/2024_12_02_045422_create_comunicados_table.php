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
        Schema::create('comunicados', function (Blueprint $table) {
            $table->id();
            $table->string('titulo');
            $table->text('conteudo');
            $table->text('descricao');
            $table->boolean('publicado');
            $table->timestamp('data_publicacao')->nullable();
            $table->boolean('ativo')->default(true);
            $table->timestamp('data_limite_pop_up')->nullable();
            $table->timestamp('data_inativacao')->nullable();
            $table->string('motivo_inativacao')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comunicados');
    }
};
