<?php

namespace App\Http\Controllers;

use DB;
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

class MasterDeveloper extends Controller
{
    public function DevolverEstudiantes(){
    	$Estudiante = Estudiante::all();
    	return $Estudiante->toJson();
    }
    public function DevolverCursos(){
    	return DB::select('select * from Curso');
    }
    public function DevolverNotasCurso($id){
    	return DB::select('select distinct E.idEstudiante, E.Nombre, E.Apellido, N.Nota from Estudiante E, Asignacion A, Nota N, Curso C
							where A.idCurso = C.idCurso and C.idCurso = 10 and N.idAsignacion = A.idAsignacion and E.idEstudiante = A.idEstudiante order by E.idEstudiante;');
    }
    public function InsertarNota(Request $request){
    	$Asignacion = Asignacion::where('idEstudiante', $request->input('idEstudiante'))->where('idCurso',$request->input('idCurso'))->where('idCatedratico', $request->input('idCatedratico'))->where('anio', 2018);
    	$Nota = new Nota;
    	$Nota->idAsignacion = $Asignacion->idAsignacion;
    	$Nota->Nota = $request->input('Nota');
    	$Nota->save();
    }

    public function Modificar(Request $request){
    	$Asignacion = Asignacion::where('idEstudiante', $request->input('idEstudiante'))->where('idCurso',$request->input('idCurso'))->where('idCatedratico', $request->input('idCatedratico'))->where('anio', 2018);
    	$Nota = Nota::where('idAsignacion', $Asignacion->idAsignacion)->first();
    	$Nota->Nota = $request->input('Nota');
    	$Nota->save();
    }
}
