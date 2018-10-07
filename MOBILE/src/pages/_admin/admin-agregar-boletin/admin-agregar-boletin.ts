import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpProvider } from '../../../services/http';

/**
 * Generated class for the AdminAgregarBoletinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-agregar-boletin',
  templateUrl: 'admin-agregar-boletin.html',
})
export class AdminAgregarBoletinPage {
  myForm: FormGroup;

  constructor(public navCtrl: NavController,public alerCtrl: AlertController, public formBuilder: FormBuilder, public http: HttpProvider) {
    this.myForm = this.createMyForm();
  }

  private createMyForm() {
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],      
    });
  } 

  agregar_boletin() { 
    let nombre = String(this.myForm.value.nombre);
    let descripcion =  String(this.myForm.value.descripcion);
    try{
      this.http.agregar_boletin(nombre, descripcion).then(
        (res) => {
          this.doAlert("EXITO","Boletin agregado con exito");
        },
        (error) =>{
          console.log(error);    
        }
      )  
    }catch(e){
      this.doAlert('Error','Intente mas Tarde');
    }    
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
    console.log('ionViewDidLoad AdminAgregarBoletinPage');
  } 

}
