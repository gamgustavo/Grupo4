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






}
