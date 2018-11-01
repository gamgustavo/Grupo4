import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {} from 'jasmine';

import { mathProvider } from './math';
import { Data } from "../providers/data";
import {ChecklistModel} from '../models/checklist-model';

fdescribe('Service: mathProvider', () => {

  let service: mathProvider;
  let httpMock: HttpTestingController;
  let operaciones: Data;
  let servicio_operaciones: Data;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        { provide: mathProvider, useClass: mathProvider },
        { provide: Data, useClass: Data },        
      ],
    });
    service = TestBed.get(mathProvider);
    servicio_operaciones = TestBed.get(Data);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('Prueba de creacion del Servicio', () => {
    expect(service).toBeTruthy();
  });

  describe('Prueba el Proveedor de Operaciones', () => {
    it('Prueba de cantidad de operaciones Cantidad de Operaciones', () => {
      let variable: any;
      variable = service.getAll();
      //console.log(variable);
      expect(variable.length).toEqual(16);
    });
  });

  describe('Prueba el string de una operacion', () => {
    it('Prueba que varificara la operacion a realizar', () => {
      let variable: any;
      variable = service.getItem(1);
      console.log(variable['operation']);
      expect(variable['operation']).toEqual('2+5+3');
    });
  });  


  describe('Prueba el resultado esperado de una operacion', () => {
    it('Prueba que varificara la operacion esperada como resultado', () => {
      let variable: any;
      variable = service.getItem(1);
      console.log(variable['result']);
      expect(variable['result']).toEqual(60);
    });
  });

  describe('Prueba Id de las operaciones', () => {
    it('Prueba que varificara el Id esperado de la operacion', () => {
      let variable: any;
      variable = service.getItem(1);
      console.log(variable['result']);
      expect(variable['result']).toEqual(60);
    });
  });


  describe('Prueba nivel de las operaciones', () => {
    it('Prueba que varificara el el nivel de dificultad de las operaciones', () => {
      let variable: any;
      variable = service.getItem(1);
      console.log(variable['level']);
      expect(variable['level']).toEqual(0);
    });
  });


  describe('Prueba las Operaciones relacionadas ', () => {
    it('Prueba que las operaciones en conjunto funcionen', () => {
      let variable: any;
      variable = service.getItem(1);
      console.log(variable['result']);
      expect(variable['result']).toEqual(60);
    });
  });




////////////////////////// Operaciones nivel 2




  describe('Operacion 15 Multiplicacion', () => {
    it('Operaciones del Juego', () => {

      let variable: any;
      variable = service.getItem(15);
      console.log(variable['result']);
      expect(variable['result']).toEqual(64);
      
      
    });
  });  

    describe('Operacion 14 Multiplicacion ', () => {
    it('Operaciones del Juego', () => {

      let variable: any;
      variable = service.getItem(14);
      console.log(variable['result']);
      expect(variable['result']).toEqual(36);
      
      
    });
  });  



  describe('Operacion 13 Multiplicacion', () => {
    it('Operaciones del Juego', () => {

      let variable: any;
      variable = service.getItem(13);
      console.log(variable['result']);
      expect(variable['result']).toEqual(24);
      
      
    });
  });  


describe('Hello world', () => { 
  it('says hello', () => { 
    expect(helloWorld()) 
        .toEqual('Hello world!'); 
  });
  it('says hello', () => { 
    expect(helloWorld()) 
        .toEqual('Hello world!'); 
  });  
});


describe('Hello world' + 5, () => { 
  it('says hello', () => { 
    expect(helloWorld())
        .toEqual('Hello world!');
  });
});

function helloWorld() {
  return 'Hello world!';
}

  describe("jasmine.objectContaining", function() {
    var foo;

    beforeEach(function() {
      foo = {
        a: 1,
        b: 2,
        bar: "baz"
      };
    });

    it("matches objects with the expect key/value pairs", function() {
      expect(foo).toEqual(jasmine.objectContaining({
        bar: "baz"
      }));
      expect(foo).not.toEqual(jasmine.objectContaining({
        c: 37
      }));
    });

    describe("when used with a spy", function() {
      it("is useful for comparing arguments", function() {
        var callback = jasmine.createSpy('callback');

        callback({
          bar: "baz"
        });

        expect(callback).toHaveBeenCalledWith(jasmine.objectContaining({
          bar: "baz"
        }));
      });
    });
  });


this.checklists = [
    {
        title: 'Checklist 1',
        items: [
            {title: 'Task 1', checked: false},
            {title: 'Task 2', checked: false},
            {title: 'Task 3', checked: false}
        ]
    },
    {
        title: 'Checklist 1',
        items: [
            {title: 'Task 1', checked: false},
            {title: 'Task 2', checked: false},
            {title: 'Task 3', checked: false}
        ]
    },
    {
        title: 'Checklist 1',
        items: [
            {title: 'Task 1', checked: false},
            {title: 'Task 2', checked: false},
            {title: 'Task 3', checked: false}
        ]
    }
];

  describe("Dado que soy un usuairo de una calculadora",function(){

    let modelo = new ChecklistModel('my checklist', this.checklist);
    it("Cuando yo quiero realizar una operacion suma",function(){
      expect(modelo.title).toEqual("my checklist");
    });
    it("Cuando yo quiero realizar una operacion suma",function(){
      
    });
    
  });


});