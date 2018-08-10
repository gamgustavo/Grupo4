import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';


@Component({
  selector: 'page-nuevo-negocio',
  templateUrl: 'nuevo-negocio.html',
})
export class NuevoNegocioPage {


  myForm: FormGroup;
  identificador_propietario : String;

  constructor(
    public navCtrl: NavController,public alerCtrl: AlertController, public formBuilder: FormBuilder, public http: HttpProvider,public navParams: NavParams) {
    this.myForm = this.createMyForm();
     console.log('Passed params id_usuario', navParams.data.identificador_propietario);
     this.identificador_propietario = String(navParams.data.identificador_propietario);    
  }

  doAlert(titulo: String, mensaje:String) {
    let alert = this.alerCtrl.create({
      title: String(titulo),
      message: String(mensaje),
      buttons: ['Ok']
    });
    alert.present()
  }

  saveData() {
    let nombre = String(this.myForm.value.negocio_nombre);
    let propietario =  String(this.identificador_propietario);
    let ubicacion = String(this.myForm.value.negocio_ubicacion);
    let descripcion = String(this.myForm.value.descripcion);


    console.log(nombre);
    console.log(propietario);
    console.log(ubicacion);
    console.log(descripcion);
    try{
      this.http.metodo_negocio_crear( nombre ,propietario,ubicacion,descripcion).then(
        (res) => {
          console.log(res);
          this.doAlert('Registrado','Se ha registrado exitosamente');
          this.navCtrl.pop();
        },
        (error) =>{
          console.log('Error');
          this.doAlert('Error','No Se ha registrado exitosamente intente mas tarde');          
        }
      )  
    }catch(e){
      this.doAlert('Error','No Se ha registrado exitosamente intente mas tarde');
    }    
  }

  private createMyForm() {
    return this.formBuilder.group({
      negocio_nombre: ['', Validators.required],
      negocio_ubicacion: ['', Validators.required],
      descripcion: ['', Validators.required]      
    });
  }


}
