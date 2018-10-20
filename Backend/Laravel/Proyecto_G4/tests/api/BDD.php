<?php


class PruebaCest
{
    public function _before(ApiTester $I)
    {
    }

    public function _after(ApiTester $I)
    {
    }

    // tests
    public function tryToTest(ApiTester $I)
    {
        /**
            @Given Yo como administrador quiero verificar que la nota ingresada sea valida
        **/

            $I->wantTo('YO COMO ADMINISTRADOR QUIERO VERIFICAR QUE LA NOTA NO SEA MAYOR A CIEN ');

        /**
            @When Verifico el json en la página Nota_Curso/id
        **/
            $I->amOnPage('/Nota_Curso/1');

        /**
            @Then Veo un Json que no contiene notas mayores a cien
        **/

            $I->seeResponseIsJson();
            $I->SeeResponseMatchesJsonType(['Nota' => 'integer:<101']);



    }

    public function test2(ApiTester $I)
    {
                /**
            @Given Yo como administrador quiero verificar que la nota ingresada sea valida
        **/

            $I->wantTo('YO COMO ADMINISTRADOR QUIERO VERIFICAR QUE LA NOTA NO SEA MENOR A CERO ');

        /**
            @When Verifico el json en la página Nota_Curso/id
        **/
            $I->amOnPage('/Nota_Curso/1');

        /**
            @Then Veo un Json que no contiene notas mayores a cien
        **/

            $I->seeResponseIsJson();
            $I->SeeResponseMatchesJsonType(['Nota' => 'integer:>0']);
    }

    public function test3(ApiTester $I)
    {
                /**
            @Given YO COMO ADMINISTRADOR QUIERO PUBLICAR BOLETINES PARA EL CONOCIMIENTO DE LAS ACTIVIDADES
        **/

            $I->wantTo('YO COMO ADMINISTRADOR QUIERO PUBLICAR BOLETINES PARA EL CONOCIMIENTO DE LAS ACTIVIDADES ');

        /**
            @When EL CUERPO DEL BOLETÍN NO ESTA VACIO
        **/
            $I->amOnPage('/VisualizarBoletines/1');

        /**
            @Then EL BOLETÍN PROCEDE A SER CREADO
        **/

            $I->seeResponseIsJson();
            $I->dontSeeResponseContainsJson(['informacion' => ' ']);
    }

    public function test4(ApiTester $I)
    {
                /**
            @Given YO COMO ADMINISTRADOR QUIERO PUBLICAR BOLETINES PARA EL CONOCIMIENTO DE LAS ACTIVIDADES
        **/

            $I->wantTo('YO COMO ADMINISTRADOR QUIERO PUBLICAR BOLETINES PARA EL CONOCIMIENTO DE LAS ACTIVIDADES ');

        /**
            @When EL TITULO DEL BOLETIN NO ESTA VACIO
        **/
            $I->amOnPage('/VisualizarBoletines/1');

        /**
            @Then EL BOLETÍN PROCEDE A SER CREADO
        **/

            $I->seeResponseIsJson();
            $I->dontSeeResponseContainsJson(['titulo' => ' ']);
    }

          /*PROGRAMACIÓN PAREJAS 201213062 - 201504429
              12 / 10 / 2018
          */
    public function testParejas1(ApiTester $I)
    {
        /**
              @Given YO COMO ESTUDIANTE QUIERO VISUALIZAR LAS NOTAS DE LOS CURSOS Y ESTAS NO DEBEN ESTAR VACIAS
        **/

        $I->wantTo('YO COMO ESTUDIANTE QUIERO VISUALIZAR LAS NOTAS DE MIS CURSOS Y ESTAS NO DEBEN ESTAR VACIAS');
        /**
              @When INGRESO MI USUARIO Y MI CONTRASEÑA SON CORRECTOS
        **/

        $I->amOnPage('/DevolverNotaEstudiante/1');

        /**
            @Then TODOS LOS CURSOS LES TIENEN QUE APARECER MI NOTAS
        **/
        $I->seeResponseIsJson();
        $I->dontSeeResponseContainsJson(['Nota' => ' ']);

    }

    public function testParejas2(ApiTester $I)
    {
        /**
              @Given YO COMO ESTUDIANTE QUIERO VISUALIZAR LAS NOTAS DE LOS CURSOS Y ESTAS DEBEN DE SER VÁLIDAS
        **/

        $I->wantTo('YO COMO ESTUDIANTE QUIERO VISUALIZAR LAS NOTAS DE MIS CURSOS Y ESTAS DEBEN DE SER VÁLIDAS');
        /**
              @When INGRESO MI USUARIO Y MI CONTRASEÑA SON CORRECTOS
        **/

        $I->amOnPage('/DevolverNotaEstudiante/1');

        /**
            @Then TODOS LOS CURSOS LES TIENEN QUE APARECER MI NOTAS
        **/
        $I->seeResponseIsJson();
        $I->dontSeeResponseContainsJson(['Nota' => 'integer:>60:<101']);

    }

        /*
              PROGRAMACIÓN EN PAREJAS 201213062 - 201113759
              19 / 10 / 2018
        */

    public function testParejas3(ApiTester $I)
    {
        /**
              @Given YO COMO ADMINISTRADOR QUIERO VERIFICAR QUE LA ACTIVIDAD HAYA SIDO INGRESADA CORRECTAMENTE
        **/

        $I->wantTo('YO COMO ADMINISTRADOR QUIERO VERIFICAR QUE LA ACTIVIDAD HAYA SIDO INGRESADA CORRECTAMENTE Y POSEA EL NOMBRE CORRECTO');
        /**
              @When CUANDO INGRESO MI USUARIO Y CONTRASEÑA DE ADMINISTRADOR
        **/

        $I->amOnPage('/Devolver_Actividad/1');

        /**
            @Then NO EXISTE DESCRIPCIONES DE TAREAS VACIAS
        **/
        $I->seeResponseIsJson();
        $I->dontSeeResponseContainsJson(['Nombre' => ' ']);

    }


    public function testParejas4(ApiTester $I)
    {
        /**
              @Given YO COMO ADMINISTRADOR QUIERO VERIFICAR QUE LA ACTIVIDAD HAYA SIDO INGRESADA CORRECTAMENTE
        **/

        $I->wantTo('YO COMO ADMINISTRADOR QUIERO VERIFICAR QUE LA ACTIVIDAD HAYA SIDO INGRESADA CORRECTAMENTE Y POSEA LA FECHA CORRECTA');
        /**
              @When CUANDO INGRESO MI USUARIO Y CONTRASEÑA DE ADMINISTRADOR
        **/

        $I->amOnPage('/Devolver_Actividad/1');

        /**
            @Then LA FECHA DE LA ACTIVIDAD NO ESTA VACÍA
        **/
        $I->seeResponseIsJson();
        $I->dontSeeResponseContainsJson(['Fecha' => ' ']);

    }






}

?>
