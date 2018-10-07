import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpProvider } from '../../../services/http';

/**
 * Generated class for the ProfesorCrearActividadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profesor-crear-actividad',
  templateUrl: 'profesor-crear-actividad.html',
})
export class ProfesorCrearActividadPage {
  myForm: FormGroup;  
  lista_cursos:any[];

  constructor(public navCtrl: NavController,public alerCtrl: AlertController, public formBuilder: FormBuilder, public http: HttpProvider) {
    this.listar_cursos();
    this.myForm = this.createMyForm();    
  }
  listar_cursos(){
    try{
      this.http.listar_cursos().then(
        (res) => {
          this.lista_cursos = JSON.parse(JSON.stringify(res));
        },
        (error) =>{
          console.log(error);
        }
      )  
    }catch(e){
      this.doAlert('Error','No se puede cargar intenta mas tarde');
    }
  }

  private createMyForm() {
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],      
      fecha: ['', Validators.required],
      curso: ['', Validators.required]
    });
  }  
  
  agregar_actividad() { 
    let nombre = String(this.myForm.value.nombre);
    let descripcion =  String(this.myForm.value.descripcion);
    let fecha = String(this.myForm.value.fecha);
    let curso = String(this.myForm.value.curso);


    try{
      this.http.agregar_actividad(nombre, descripcion,fecha,curso).then(
        (res) => {
          this.doAlert("EXITO","Actividad agregada con exito");
        },
        (error) =>{
          console.log(error);    
        }
      )  
    }catch(e){
      this.doAlert('Error','Intente mas Tarde');
    }
    this.navCtrl.pop();
  }
  doAlert(titulo: String, mensaje:String) {
    let alert = this.alerCtrl.create({
      title: String(titulo),
      message: String(mensaje),
      buttons: ['Ok']
    });
    alert.present()
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfesorCrearActividadPage');
  }

}
