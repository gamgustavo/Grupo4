<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Nota extends Model
{
    protected $table = 'Nota';

    protected $primaryKey = 'idNota';

    public $timestamps = false;
    public $incrementing = false;

    protected $fillable = [
    	'Nota',
    	'Periodo',
    	'idAsignacion',
    ];

    protected $guarded = [
    ];
}
