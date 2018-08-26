<?php

namespace App\Http\Controllers;

use App\Asignacion;
use App\Asistencia;
use App\Catedratico;
use App\Curso;
use App\Detalle_Pago;
use App\Estudiante;
use App\Nota;
use App\Padre;
use App\Planificacion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use DB;

class Developer1 extends Controller
{
    //
    public function Devolver_Notas(){
    	$Curso = new Padre;
    	$Curso->Nombre = "Prueba";
    	$Curso->Apellido = "Prueba2";
    	$Curso->save();
    	return Redirect::to('/');
    }
}
