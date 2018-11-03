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
    @Given quiero verificar que la pagina principal no contenga datos erroneos
**/
    $I->wantTo('VERIFICAR QUE LA PAGINA PRINCIPAL NO CONTENGA DATOS ERRONEOS ');
/**
    @When Verifico la pagina principal
**/
    $I->amOnPage('/');
/**
    @Then Veo que no contiene datos erroneos
**/
    $I->dontSeeBinaryResponseEquals("8c90748342f19b195b9c6b4eff742ded");
    }
    public function tryToTest1(ApiTester $I)
    {
        /**
    @Given quiero verificar que la pagina principal no contenga datos erroneos
**/
    $I->wantTo('VERIFICAR QUE LA PAGINA PRINCIPAL NO CONTENGA DATOS ERRONEOS ');
/**
    @When Verifico la pagina principal
**/
    $I->amOnPage('/');
/**
    @Then Veo que no contiene datos erroneos
**/
    $I->dontSeeBinaryResponseEquals("8c907483423f19b195b9c6b4eff742ded");
    }
    public function tryToTest2(ApiTester $I)
    {
        /**
    @Given quiero verificar que la pagina principal no contenga datos erroneos
**/
    $I->wantTo('VERIFICAR QUE LA PAGINA PRINCIPAL NO CONTENGA DATOS ERRONEOS ');
/**
    @When Verifico la pagina principal
**/
    $I->amOnPage('/');
/**
    @Then Veo que no contiene datos erroneos
**/
    $I->dontSeeBinaryResponseEquals("sae213311a");
    }
    public function tryToTest3(ApiTester $I)
    {
        /**
    @Given quiero verificar que la pagina principal no contenga datos erroneos
**/
    $I->wantTo('VERIFICAR QUE LA PAGINA PRINCIPAL NO CONTENGA DATOS ERRONEOS ');
/**
    @When Verifico la pagina principal
**/
    $I->amOnPage('/');
/**
    @Then Veo que no contiene datos erroneos
**/
    $I->dontSeeBinaryResponseEquals("8c90748342f19b195b539c6b4eff742ded");
    }
    public function tryToTest4(ApiTester $I)
    {
        /**
    @Given quiero verificar que la pagina principal no contenga datos erroneos
**/
    $I->wantTo('VERIFICAR QUE LA PAGINA PRINCIPAL NO CONTENGA DATOS ERRONEOS ');
/**
    @When Verifico la pagina principal
**/
    $I->amOnPage('/');
/**
    @Then Veo que no contiene datos erroneos
**/
    $I->dontSeeBinaryResponseEquals("8c90748342fb9c6b4eff742ded");
    }
    public function tryToTest5(ApiTester $I)
    {
        /**
    @Given quiero verificar que la pagina principal no contenga datos erroneos
**/
    $I->wantTo('VERIFICAR QUE LA PAGINA PRINCIPAL NO CONTENGA DATOS ERRONEOS ');
/**
    @When Verifico la pagina principal
**/
    $I->amOnPage('/');
/**
    @Then Veo que no contiene datos erroneos
**/
    $I->dontSeeBinaryResponseEquals("8c907483423123asdasdwe42ded");
    }
    public function tryToTest10(ApiTester $I)
    {
        /**
    @Given quiero verificar que la pagina principal no contenga datos erroneos
**/
    $I->wantTo('VERIFICAR QUE LA PAGINA PRINCIPAL NO CONTENGA DATOS ERRONEOS ');
/**
    @When Verifico la pagina principal
**/
    $I->amOnPage('/');
/**
    @Then Veo que no contiene datos erroneos
**/
    $I->dontSeeBinaryResponseEquals("8c90748342f19b195b9c6b4eff742ded");
    }
    public function tryToTest6(ApiTester $I)
    {
        /**
    @Given quiero verificar que la pagina principal no contenga datos erroneos
**/
    $I->wantTo('VERIFICAR QUE LA PAGINA PRINCIPAL NO CONTENGA DATOS ERRONEOS ');
/**
    @When Verifico la pagina principal
**/
    $I->amOnPage('/');
/**
    @Then Veo que no contiene datos erroneos
**/
    $I->dontSeeBinaryResponseEquals("8c90713223eqwedsqf742ded");
    }
    public function tryToTest7(ApiTester $I)
    {
        /**
    @Given quiero verificar que la pagina principal no contenga datos erroneos
**/
    $I->wantTo('VERIFICAR QUE LA PAGINA PRINCIPAL NO CONTENGA DATOS ERRONEOS ');
/**
    @When Verifico la pagina principal
**/
    $I->amOnPage('/');
/**
    @Then Veo que no contiene datos erroneos
**/
    $I->dontSeeBinaryResponseEquals("8c907313edasdqw6b4eff742ded");
    }
    public function tryToTest8(ApiTester $I)
    {
        /**
    @Given quiero verificar que la pagina principal no contenga datos erroneos
**/
    $I->wantTo('VERIFICAR QUE LA PAGINA PRINCIPAL NO CONTENGA DATOS ERRONEOS ');
/**
    @When Verifico la pagina principal
**/
    $I->amOnPage('/');
/**
    @Then Veo que no contiene datos erroneos
**/
    $I->dontSeeBinaryResponseEquals("8c90748342f19b195b9c6b4eff742ded");
    }
}
