<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Padre extends Model
{
    protected $table = 'Padre';

    protected $primaryKey = 'idPadre';

    public $timestamps = false;
    public $incrementing = false;

    protected $fillable = [
    	'Nombre',
    	'Apellido',
    ];

    protected $guarded = [
    ];
}
