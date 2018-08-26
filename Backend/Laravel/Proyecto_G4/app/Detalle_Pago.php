<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Detalle_Pago extends Model
{
    protected $table = 'Detalle_Pago';

    protected $primaryKey = 'idDetalle_Pago';

    public $timestamps = false;
    public $incrementing = false;

    protected $fillable = [
    	'fecha',
    	'Pagado',
    	'idPadre',
    	'Monto',
    ];

    protected $guarded = [
    ];
}
