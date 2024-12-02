<?php
    namespace App;

    use Illuminate\Database\Eloquent\Model;

    class Comunicado extends Model
    {
        protected $table = "comunicados";
        protected $fillable = ['titulo', 'conteudo', 'publicado', 'data_publicacao', 'ativo', 'data_limite_pop_up', 'data_inativacao', 'motivo_inativacao'];

        protected $casts = [
            'publicado' => 'boolean',
            'data_publicacao' => 'datetime',
            'data_limite_pop_up' => 'datetime',
            'data_inativacao' => 'datetime',
            'ativo' => 'boolean',
        ];

    }
