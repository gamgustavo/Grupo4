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

    public function DevolverListadoHijos($id){
        return DB::select('select E.nombre, E.idEstudiante from Estudiante E, Padre P where E.idPadre = P.idPadre and P.idPadre = :id', ['id' => $id]);
    }

    public function DevolverNotaEstudiante($id){
        return DB::select('select C.Nombre, N.Nota from Curso C, Nota N, Estudiante E, Asignacion A where E.idEstudiante = :id and A.idEstudiante = E.idEstudiante and C.idCurso = A.idCurso and N.idAsignacion = A.idAsignacion;', ['id' => $id]);
    }

    public function DevolverMejoresNotas(){
        return DB::select('select C.Nombre, N.Nota from Curso C, Nota N, Asignacion A where A.idCurso = C.idCurso and N.idAsignacion = A.idAsignacion order by N.Nota desc;');
    }

    public function DevolverCatedraticos(){
        return DB::select('select Catedratico.idCatedratico, catedratico.Nombre from catedratico;');
    }

    public function DevolverHorarioEstudiante($id){
        return DB::select('select H.Salon, H.Dias, H.Hora, C.Nombre from Estudiante E, HorarioEstudiante H, Curso C where H.idCurso = C.idCurso and E.idEstudiante = :id and H.idEstudiante = E.idEstudiante', ['id' => $id]);
    }

    public function InsertarAsignacionCatedratico(Request $request){
        $Asignar = DB::select('insert into AsignacionCatedratico values (:idCurso,:idCatedratico)', ['idCurso' => $request->input('idCurso'), 'idCatedratico' => $request->input('idCatedratico') ] );
        return 1;

    }

    // ====================================================================================================
    // ================================================ fase 3 ============================================
    // ====================================================================================================

    public function DevolverEstudiantesCursoMaestro(Request $request){
        return DB::select('select E.nombre, E.idEstudiante from Estudiante E, Curso C, catedratico CA, asignacion A
                            where C.idCurso = :idCuso  and C.idCurso = A.idCurso and CA.idCatedratico = :idCatedratico and A.idCatedratico = CA.idCatedratico
                            and E.idEstudiante = A.idEstudiante', ['idCurso' => $request->input('idCurso'), 'idCatedratico' => $request->input('idCatedratico') ]);
    }


    public function InsertarBoletin(Request $request){
        $Prueba = DB::select('select A.idCurso, A.idCatedratico from asignacioncatedratico A where A.idCurso = :curso and A.idCatedratico = :cate ', ['curso' => $request->input('idCurso'), 'cate' => $request->input('idCatedratico') ]);
        if($Prueba != null){

        $Asignacion = DB::select('insert into Boletin(Titulo, Informacion, idCurso, idCatedratico) values (\':titulo\', \':informacion\', :curso, :cate);', ['curso' => $request->input('idCurso'), 'cate' => $request->input('idCatedratico'), 'titulo' => $request->input('titulo'), 'informacion' => $request->input('informacion')]);
            return 1;
        }else{

            return 0;
        }
    }

    public function VisualizarBoletines($id){
        return DB::select('select B.titulo, B.informacion, E.Nombre, C.Nombre from Boletin B, estudiante E, asignacion A, Curso C where E.idPadre = :padre and A.idEstudiante = E.idEstudiante and A.idCurso = B.idCurso and B.idCatedratico = A.idCatedratico and C.idCurso = A.idCurso', ['padre' => $id]);
    }
}
