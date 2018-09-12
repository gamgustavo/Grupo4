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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Prueba el Proveedor de Operaciones', () => {
    it('should return maths', () => {
      // Arrange
      const mockResponse = {
        results: [
          {
            "gender": "male",
            "name": {
              "title": "mr",
              "first": "samuel",
              "last": "ross"
            },
            "email": "samuel.ross@example.com",
          }
        ]
      };
      let dataError, dataResponse;
      // Act
      service.getAllmaths()
      .subscribe((response) => {
        dataResponse = response['results'];
      }, (error) => {
        dataError = error;
      });
      const req = httpMock.expectOne(`https://randomuser.me/api/?results=25`);
      req.flush(mockResponse);
      // Assert
        expect(dataResponse.length).toEqual(1);
      //expect(req.request.url).toEqual(`https://randomuser.me/api/?results=25`);
      //expect(req.request.method).toEqual('GET');
      //expect(dataError).toBeUndefined();
    });

  });


  describe("Prueba la cantidad de Operaciones que tiene que cargar",()=> {
      let dataError, dataResponse;
      // Act
      service.getAllmaths()
      .subscribe((response) => {
        dataResponse = response['results'];
      }, (error) => {
        dataError = error;
      });    
    expect(dataResponse.length).toEqual(1);
  });
  describe("Prueba El resultado de La operacion 1",()=> {
      let dataError, dataResponse;
      // Act
      service.getAllmaths()
      .subscribe((response) => {
        dataResponse = response['results'];
      }, (error) => {
        dataError = error;
      });    
    expect(dataResponse.length).toEqual(1);
  });

  describe("Prueba El String de la operacion esperada",()=> {
      let dataError, dataResponse;
      // Act
      service.getAllmaths()
      .subscribe((response) => {
        dataResponse = response['results'];
      }, (error) => {
        dataError = error;
      });    
    expect(dataResponse.length).toEqual(1);
  });


});