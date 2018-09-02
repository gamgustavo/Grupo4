<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Catedratico extends Model
{
    protected $table = 'Catedratico';

    protected $primaryKey = 'idCatedratico';

    public $timestamps = false;
    public $incrementing = false;

    protected $fillable = [
    	'Nombre',
    	'Apellido',
    ];

    protected $guarded = [
    ];
}
