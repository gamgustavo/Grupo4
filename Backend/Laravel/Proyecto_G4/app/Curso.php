<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Curso extends Model
{
    protected $table = 'Curso';

    protected $primaryKey = 'idCurso';

    public $timestamps = false;
    public $incrementing = false;

    protected $fillable = [
    	'Nombre',
    ];

    protected $guarded = [
    ];
}
