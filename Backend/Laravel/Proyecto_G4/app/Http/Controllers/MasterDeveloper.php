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
use App\Actividad;
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
    	return DB::select('select distinct E.idEstudiante, E.Nombre, E.Apellido, N.Nota, N.idNota from Estudiante E, Asignacion A, Nota N, Curso C
							where A.idCurso = C.idCurso and C.idCurso = :id and N.idAsignacion = A.idAsignacion and E.idEstudiante = A.idEstudiante order by E.idEstudiante;', ['id' => $id]);
    }

    public function DevolverActividad($id){
        return DB::select('select distinct A.Nombre, A.Descripcion, A.Fecha from Actividades A, Curso C where C.idCurso = :id and C.idCurso = A.Curso_idCurso', ['id' => $id]);
    }
    public function InsertarNota(Request $request){
        
        if($request->input('Nota') > 100){
            return 2;
        }
        $Prueba = DB::select('(Select Asignacion.idAsignacion from Asignacion, Estudiante, Curso, Catedratico where Asignacion.idCurso = Curso.idCurso and Estudiante.idEstudiante = Asignacion.idEstudiante and Asignacion.idCatedratico = Catedratico.idCatedratico and Curso.idCurso = :curso and Estudiante.idEstudiante = :estudiante and Catedratico.idCatedratico = :cate)', ['curso' => $request->input('idCurso'),'estudiante' => $request->input('idEstudiante'), 'cate' => $request->input('idCatedratico') ]);
        if($Prueba != null){

        $Asignacion = DB::select('Insert Into Nota(Nota, idAsignacion) values (:nota , (Select Asignacion.idAsignacion from Asignacion, Estudiante, Curso, Catedratico where Asignacion.idCurso = Curso.idCurso and Estudiante.idEstudiante = Asignacion.idEstudiante and Asignacion.idCatedratico = Catedratico.idCatedratico and Curso.idCurso = :curso and Estudiante.idEstudiante = :estudiante and Catedratico.idCatedratico = :cate))', ['nota' => $request->input('Nota'),'curso' => $request->input('idCurso'),'estudiante' => $request->input('idEstudiante'), 'cate' => $request->input('idCatedratico') ]);

            return 1;
        }else{

            return 0;
        }
    }

    public function Modificar(Request $request){
    	if($request->input('Nota') > 100){
            return 2;
        }
        $Nota = Nota::find($request->input('idNota'));
        $Nota->Nota = ($request->input('Nota'));
        $Nota->save();
    }

    public function InsertarActividad(Request $request){
        $Actividad = new Actividad;
        $Actividad->Nombre = $request->input('nombre');
        $Actividad->Descripcion = $request->input('descripcion');
        $Actividad->Fecha = $request->input('fecha');
        $Actividad->Curso_idCurso = $request->input('curso');
        $Actividad->save();

    }
}
