<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Asistencia extends Model
{
    protected $table = 'Asistencia';

    protected $primaryKey = 'idAsistencia';

    public $timestamps = false;
    public $incrementing = false;

    protected $fillable = [
    	'Fecha',
    	'Presente',
    	'idEstudiante',
    	'idCurso',
    ];

    protected $guarded = [
    ];
}
