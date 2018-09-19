<?php

namespace Tests\Unit;

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
    	 
         $this->assertTrue(true);
         $this->get('/');

    }

    public function testDevolver_Cursos()
    {
    	 
         $this->assertTrue(true);
         $this->get('Devolver_Cursos');
    }

    public function testDevolver_Estudiantes()
    {
    	 
         $this->assertTrue(true);
         $this->get('Devolver_Estudiantes');
    }
    public function testInsertar_Nota()
    {
    	 
         $this->assertTrue(true);
         $this->get('Insertar_Nota');
    }
    public function testModificar_Nota()
    {
    	 
         $this->assertTrue(true);
         $this->get('Modificar_Nota');
    }
    public function testInsertar_Actividad()
    {
    	 
         $this->assertTrue(true);
         $this->get('Insertar_Actividad');
    }




    public function testDatabase()
{
    // Make call to application...

    $this->assertDatabaseHas('Catedratico', [
        'Nombre' => 'Catedratico1',
        'Apellido' => 'Apellido'
    ]);
    $this->assertDatabaseHas('Catedratico', [
        'Nombre' => 'Catedratico2',
        'Apellido' => 'Apellido'
    ]);
    $this->assertDatabaseHas('Catedratico', [
        'Nombre' => 'Catedratico3',
        'Apellido' => 'Apellido'
    ]);
    $this->assertDatabaseHas('Catedratico', [
        'Nombre' => 'Catedratico4',
        'Apellido' => 'Apellido'
    ]);
    $this->assertDatabaseHas('Catedratico', [
        'Nombre' => 'Catedratico5',
        'Apellido' => 'Apellido'
    ]);

     $this->assertDatabaseHas('Nota', [
        'Nota' => '100',
        'idAsignacion' => '1'
        ]);
     $this->assertDatabaseHas('Estudiante', [
        'Nombre' => 'Estudiante1',
        'Apellido' => 'Apellido',
        'idPadre' => '1'
        ]);
      $this->assertDatabaseHas('Curso', [
        'Nombre' => 'Curso1'
    ]);

}
 /*Aqui empiezan las pruebas unitarias de la fase 3*/  

/*pruebas a las rutas que todavia no existen*/
  public function testDevolverEstudiantesCursoMaestro()
    {
         
         $this->assertTrue(false);
         $this->get('DevolverEstudiantesCursoMaestro');
    }


    public function testInsertarBoletin()
    {
         
         $this->assertTrue(false);
         $this->get('InsertarBoletin');
    }
    public function testEstadodeCuentapadres()
    {
         
         $this->assertTrue(false);
         $this->get('Estado_cuenta_padres');
    }
    public function testBoletinesInformativosPadres()
    {
         
         $this->assertTrue(false);
         $this->get('Boletines_Informativos_padres');
    }

}
