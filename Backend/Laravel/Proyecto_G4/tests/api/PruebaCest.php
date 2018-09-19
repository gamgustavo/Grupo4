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
