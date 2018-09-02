<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Actividad extends Model
{
    protected $table = 'Actividades';

    protected $primaryKey = 'idActividades';

    public $timestamps = false;
    public $incrementing = false;

    protected $fillable = [
    	'Nombre',
    	'Descripcion',
    	'Fecha',
    	'Curso_idCurso',
    ];

    protected $guarded = [
    ];
}
