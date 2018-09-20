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
    @Given quiero verificar que la nota ingresada sea mayor a 100
**/
    $I->wantTo('VERIFICAR QUE LA NOTA NO SEA MAYOR A CIEN ');

/**
    @When Verifico el json en la página Nota_Curso/id
**/
    $I->amOnPage('/Nota_Curso/1');

/**
    @Then Veo un Json que no contiene notas mayores a cien
**/

    $I->seeResponseIsJson();

    $I->dontSeeResponseContainsJson(['Nota' => '101']);

    }
}

public function test5(ApiTester $I)
    {
                /**
            @Given YO COMO ADMINISTRADOR QUIERO CREAR UNA ACTIVIDAD
        **/

            $I->wantTo('YO COMO ADMINISTRADOR QUIERO VERIFICAR QUE AL CREAR UNA ACTIVIDAD LA FECHA SEA CORRECTA');

        /**
            @When INGRESO LA FECHA DE REALIZACIÓN DE LA ACTIVIDAD
        **/
            $I->amOnPage('/Devolver_Actividad/1');

        /**
            @Then LA FECHA TIENE QUE SER VÁLIDA
        **/

            $I->seeResponseIsJson();
            $I->seeResponseMatchesJsonType([
                'Fecha' => 'string:regex(/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/)',
           ]);
    }
