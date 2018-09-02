<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Estudiante extends Model
{
    protected $table = 'Estudiante';

    protected $primaryKey = 'idEstudiante';

    public $timestamps = false;
    public $incrementing = false;

    protected $fillable = [
    	'Nombre',
    	'Apellido',
    	'idPadre',
    ];

    protected $guarded = [
    ];
}
