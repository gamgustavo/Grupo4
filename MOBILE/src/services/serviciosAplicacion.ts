import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {


  ruta_base : string = 'http://35.237.152.46/';
  ruta_listar_cursos: string ='Devolver_Cursos';
  ruta_nota_curso: String = 'Nota_Curso';
  ruta_actividad_curso : String = 'Actividad_Curso';
  ruta_listar_estudiantes: String = 'Devolver_Estudiantes';
  ruta_listar_actividades: string = 'Devolver_Actividad'; 
  ruta_listar_notas_curso : string ='Devolver_Cursos'; 
  ruta_Insertar_Nota = 'Insertar_Nota';
  ruta_listar_horario= 'DevolverHorarioEstudiante';
  ruta_listar_hijos = "DevolverListadoHijos";
  ruta_listar_notas_estudiante = "DevolverNotaEstudiante";
  ruta_listar_maestros = "DevolverCatedraticos";
  ruta_listar_notas_desc= "DevolverNotaEstudiante";
  ruta_asignar_profesor = "InsertarAsignacionCatedratico";

  
  apiKey = '1e4a0bdb251c64e4';
  url: string;
  queryNotFound: string;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/'+ this.apiKey +'/conditions/q/'
  }

  getWeather(state, city) {
    return this.http.get(this.url + state + '/' + city + '.json').map(res => res);
  }
}