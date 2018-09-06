import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpProvider } from "../../../providers/http/http";

/**
 * Generated class for the ProfesorVerAgregarNotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profesor-ver-agregar-nota',
  templateUrl: 'profesor-ver-agregar-nota.html',
})
export class ProfesorVerAgregarNotaPage {

  myForm: FormGroup;  
  lista_estudiante: any[];
  lista_cursos:any[];
  resultado:string;

  constructor(public navCtrl: NavController,public alerCtrl: AlertController, public formBuilder: FormBuilder, public http: HttpProvider) {
    this.listar_estudiantes();
    this.listar_cursos();    
    this.myForm = this.createMyForm();        
  }

  doAlert(titulo: String, mensaje:String) {
    let alert = this.alerCtrl.create({
      title: String(titulo),
      message: String(mensaje),
      buttons: ['Ok']
    });
    alert.present()
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

  listar_estudiantes(){
    try{
      this.http.listar_estudiantes().then(
        (res) => {
          this.lista_estudiante = JSON.parse(JSON.stringify(res));
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
      alumno: ['', Validators.required],
      curso: ['', Validators.required],      
      nota: ['', Validators.required],
    });
  }  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfesorVerAgregarNotaPage');
  }


  agregar_nota() { 

    let alumno = String(this.myForm.value.alumno);
    let curso =  String(this.myForm.value.curso);
    let nota = String(this.myForm.value.nota);


    try{
      this.http.agregar_nota( alumno, curso, nota).then(
        (res) => {
          this.resultado = res.toString();
          if(this.resultado=="1"){
            this.doAlert("Exito", "Nota agregada exitosamente");
          }else if(this.resultado=="2"){
            this.doAlert("Error","La nota no es valida");
          }else if(this.resultado=="0"){
            this.doAlert("Error", "El maestro o el estudiante no estan asignados al curso");
          }
        },
        (error) =>{
          console.log(error);    
        }
      )  
    }catch(e){
      this.doAlert('Error','Intente mas Tarde');
    }    
  }


}
