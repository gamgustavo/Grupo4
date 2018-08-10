<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Asignacion extends Model
{
    protected $table = 'Asignacion';

    protected $primaryKey = 'idAsignacion';

    public $timestamps = false;
    public $incrementing = false;

    protected $fillable = [
    	'anio',
    	'idCurso',
    	'idEstudiante',
    	'idCatedratico',
    ];

    protected $guarded = [
    ];
}
