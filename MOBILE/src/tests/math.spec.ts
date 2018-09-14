import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { mathProvider } from './math';

fdescribe('Service: mathProvider', () => {

  let service: mathProvider;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        { provide: mathProvider, useClass: mathProvider },
      ],
    });
    service = TestBed.get(mathProvider);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('Prueba de creacion del Servicio', () => {
    expect(service).toBeTruthy();
  });

  describe('Prueba el Proveedor de Operaciones', () => {
    it('Prueba de cantidad de operaciones Cantidad de Operaciones', () => {
      let variable: any;
      variable = service.getAll();
      console.log(variable);
      expect(variable.length).toEqual(3);
    });
  });

  describe('Prueba el string de una operacion', () => {
    it('Prueba que varificara la operacion a realizar', () => {
      let variable: any;
      variable = service.getItem(1);
      console.log(variable['operation']);
      expect(variable['operation']).toEqual('30+30');
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



});