<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
    
    public function testDevolver_Cursos()
    {      
         $response = $this->get('Devolver_Cursos');
         $this->assertDatabaseHas('Curso', [
        'Nombre' => 'Curso1'
    ]);
       
       $response = $this->get('Devolver_Cursos');
         $this->assertDatabaseHas('Curso', [
        'Nombre' => 'Curso2'
    ]);

         $response = $this->get('Devolver_Cursos');
         $this->assertDatabaseHas('Curso', [
        'Nombre' => 'Curso3'
    ]);

         $response = $this->get('Devolver_Cursos');
         $this->assertDatabaseHas('Curso', [
        'Nombre' => 'Curso4'
    ]);
         $response = $this->get('Devolver_Cursos');
         $this->assertDatabaseHas('Curso', [
        'Nombre' => 'Curso5'
    ]);



    }

    public function testDevolver_Estudiantes()
    {  
         $response =$this->get('Devolver_Estudiantes');
         $this->assertDatabaseHas('Estudiante', [
        'Nombre' => 'Estudiante1',
        'Apellido' => 'Apellido',
        'idPadre' => '1'
        ]);

         $this->assertDatabaseHas('Estudiante', [
        'Nombre' => 'Estudiante2',
        'Apellido' => 'Apellido',
        'idPadre' => '2'
        ]);
         $this->assertDatabaseHas('Estudiante', [
        'Nombre' => 'Estudiante3',
        'Apellido' => 'Apellido',
        'idPadre' => '3'
        ]);
         $this->assertDatabaseHas('Estudiante', [
        'Nombre' => 'Estudiante4',
        'Apellido' => 'Apellido',
        'idPadre' => '4'
        ]);
         $this->assertDatabaseHas('Estudiante', [
        'Nombre' => 'Estudiante5',
        'Apellido' => 'Apellido',
        'idPadre' => '5'
        ]);


    }
    public function testInsertar_Nota()
    {
         $response =$this->get('Insertar_Nota');
         $this->assertDatabaseHas('Nota', [
        'Nota' => '100',
        'idAsignacion' => '1'
        ]);
         $this->assertDatabaseHas('Nota', [
        'Nota' => '10',
        'idAsignacion' => '2'
        ]);
         $this->assertDatabaseHas('Nota', [
        'Nota' => '30',
        'idAsignacion' => '3'
        ]);
         $this->assertDatabaseHas('Nota', [
        'Nota' => '40',
        'idAsignacion' => '4'
        ]);
    }
    public function testModificar_Nota()
    {
         
       $response =  $this->get('Modificar_Nota');
       $this->assertDatabaseHas('Nota', [
        'Nota' => '10',
        'idAsignacion' => '2'
        ]);

    }
    public function testInsertar_Actividad()
    {
         
        $response = $this->get('Insertar_Actividad');
        $this->assertDatabaseHas('Actividades', [
                'Nombre' => 'Carrera1',
                'Descripcion' => 'muy cansado',
                'Fecha' => '2018-08-22',
                'Curso_idCurso' => '1'
                ]);
    }
    /*pruebas a la base de datos Fase 3*/

    public function testInsertar_Boletin()
    {
         
        $response = $this->get('InsertarBoletin');
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '1',
                'idCurso' => '1'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '2',
                'idCurso' => '2'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '3',
                'idCurso' => '3'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '4',
                'idCurso' => '4'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '5',
                'idCurso' => '5'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '6',
                'idCurso' => '6'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '7',
                'idCurso' => '7'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '8',
                'idCurso' => '8'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '9',
                'idCurso' => '9'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '10',
                'idCurso' => '10'
                ]);


    }

/*pruebas a la base de datos Fase 4*/
public function testDevolver_mas_cursos()
    {      
         $response = $this->get('Devolver_Cursos');
         $this->assertDatabaseHas('Curso', [
        'Nombre' => 'Curso1'
    ]);
       
       $response = $this->get('Devolver_Cursos');
         $this->assertDatabaseHas('Curso', [
        'Nombre' => 'Curso2'
    ]);

         $response = $this->get('Devolver_Cursos');
         $this->assertDatabaseHas('Curso', [
        'Nombre' => 'Curso3'
    ]);

         $response = $this->get('Devolver_Cursos');
         $this->assertDatabaseHas('Curso', [
        'Nombre' => 'Curso4'
    ]);
         $response = $this->get('Devolver_Cursos');
         $this->assertDatabaseHas('Curso', [
        'Nombre' => 'Curso5'
    ]);



    }


public function testInsertar_mas_Boletines()
    {
         
        $response = $this->get('InsertarBoletin');
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '1',
                'idCurso' => '1'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '2',
                'idCurso' => '2'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '3',
                'idCurso' => '3'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '4',
                'idCurso' => '4'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '5',
                'idCurso' => '5'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '6',
                'idCurso' => '6'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '7',
                'idCurso' => '7'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '8',
                'idCurso' => '8'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '9',
                'idCurso' => '9'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '10',
                'idCurso' => '10'
                ]);


    }

public function testInsertar_boletas()
    {
         
        $response = $this->get('InsertarBoletin');
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '1',
                'idCurso' => '1'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '2',
                'idCurso' => '2'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '3',
                'idCurso' => '3'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '4',
                'idCurso' => '4'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '5',
                'idCurso' => '5'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '6',
                'idCurso' => '6'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '7',
                'idCurso' => '7'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '8',
                'idCurso' => '8'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '9',
                'idCurso' => '9'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '10',
                'idCurso' => '10'
                ]);


    }


public function testInsertar_boletas3()
    {
         
        $response = $this->get('InsertarBoletin');
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '1',
                'idCurso' => '1'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '2',
                'idCurso' => '2'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '3',
                'idCurso' => '3'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '4',
                'idCurso' => '4'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '5',
                'idCurso' => '5'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '6',
                'idCurso' => '6'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '7',
                'idCurso' => '7'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '8',
                'idCurso' => '8'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '9',
                'idCurso' => '9'
                ]);
        $this->assertDatabaseHas('Boletin', [
                'Ttitulo' => 'Dia del padre',
                'Informacion' => 'Se hara un festejo',
                'idCatedratico' => '10',
                'idCurso' => '10'
                ]);


    }


}
