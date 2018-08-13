import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the ProfesorActividadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profesor-actividad',
  templateUrl: 'profesor-actividad.html',
})
export class ProfesorActividadPage {

  lista_actividades: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public alerCtrl: AlertController, public formBuilder: FormBuilder, public http: HttpProvider) {
    this.listar_actividades();

  }
  listar_actividades() {
    try{
      this.http.listar_actividades().then(
        (res) => {
          console.log("listar_actividades");
          this.lista_actividades = JSON.parse(JSON.stringify(res));
          console.log(this.lista_actividades);
        },
        (error) =>{
          console.log(error);
        }
      )  
    }catch(e){
      this.doAlert('Error','No se puede cargar intenta mas tarde');
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
    console.log('ionViewDidLoad ProfesorActividadPage');
  }

}
