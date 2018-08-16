import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  ruta_base : string = 'http://35.237.152.46/';
  ruta_listar_cursos: string ='Devolver_Cursos';
  ruta_nota_curso: String = 'Nota_Curso';
  ruta_listar_estudiantes: String = 'Devolver_Estudiantes';
  ruta_Insertar_Nota = 'Insertar_Nota';
  
  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');

  }
  listar_cursos(){
    let path_aux  = this.ruta_base  + this.ruta_listar_cursos;
    console.log(path_aux);
    return this.http
    .get(path_aux)
    .toPromise();    
  }
  listar_estudiantes(){
    let path_aux  = this.ruta_base  + this.ruta_listar_estudiantes;
    console.log(path_aux);
    return this.http
    .get(path_aux)
    .toPromise();    
  }

  listar_notas(id){
    let path_aux  = this.ruta_base  + this.ruta_nota_curso + '/' + id;
    console.log(path_aux);
    return this.http
    .get(path_aux)
    .toPromise();    
  }

  agregar_nota(alumno, curso, nota){
    let path_aux  = this.ruta_base  + this.ruta_Insertar_Nota + '?idEstudiante='+alumno+'&idCurso='+curso+'&Nota='+nota+'&idCatedratico='+10;
    console.log(path_aux);
    return this.http
    .get(path_aux)
    .toPromise();    
  }
















//-------------------------------- Codigo Nuevo--------------------------------------------------------
  metodo_usuario_crear(nombre:String,apellido:String,contrasena:String){
    let path_aux  = this.ruta_base + 'crear_usuario?nombre=' + nombre + '&apellido=' + apellido + '&clave=' + contrasena;
    console.log(path_aux);
    return this.http
    .get(path_aux)
    .toPromise();
  }

  metodo_login(nombre:String,contrasena:String){
    let path_aux  = this.ruta_base + 'login?nombre=' + nombre + '&clave=' + contrasena;
    console.log(path_aux);
    return this.http
    .get(path_aux)
    .toPromise();
  }   

  metodo_negocio_crear(nombre:String,propietario:String,ubicacion:String,descripcion:String){
    let path_aux  = this.ruta_base + 'negocio_crear?nombre=' + nombre + '&propietario=' + propietario + '&ubicacion=' + ubicacion+ '&descripcion=' + descripcion;
    console.log(path_aux);
    return this.http
    .get(path_aux)
    .toPromise();
  }  

  metodo_negocio_show(propietario:String){
    let path_aux  = this.ruta_base + 'negocio_show?propietario=' + propietario;
    console.log(path_aux);    
    return this.http
    .get(path_aux)
    .toPromise();
  }  

  metodo_agregar_producto(nombre:String,codigo:String,lote:String,fecha:String,descripcion:String,precio:String){
    let path_aux  = this.ruta_base + 'agregar_producto?nombre=' + nombre + '&codigo=' + codigo + '&lote=' + lote + '&fecha=' + fecha + '&descripcion=' + descripcion + '&precio=' + precio;
    console.log(path_aux);
    return this.http
    .get(path_aux)
    .toPromise();
  }

  metodo_productos_show(){
    let path_aux  = this.ruta_base + 'productos_show';
    console.log(path_aux);    
    return this.http
    .get(path_aux)
    .toPromise();
  }    

  metodo_contabilizar( nombre_negocio ,producto,cantidad,fecha){
    let path_aux  = this.ruta_base + 'contabilizar?negocio=' + nombre_negocio + '&producto=' + producto + '&cantidad='+cantidad + '&fecha='+fecha;
    console.log(path_aux);
    return this.http
    .get(path_aux)
    .toPromise();    
  }

  listar_stock_actual(negocio){
    let path_aux  = this.ruta_base + 'stock_actual?negocio=' + negocio;
    console.log(path_aux);    
    return this.http
    .get(path_aux)
    .toPromise();
  }    

  listar_stock_recomendaciones(){
    let path_aux  = this.ruta_base + 'recomendaciones';
    console.log(path_aux);    
    return this.http
    .get(path_aux)
    .toPromise();
  }      


}
