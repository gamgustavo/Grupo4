import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpProvider } from '../../../services/http';

/**
 * Generated class for the PadreVerBoletinesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-padre-ver-boletines',
  templateUrl: 'padre-ver-boletines.html',
})
export class PadreVerBoletinesPage {

  lista_boletines : any[];

  constructor(public navCtrl: NavController , public navParams: NavParams,public http: HttpProvider,public alerCtrl: AlertController) {
    this.listar_boletines();
  }

  listar_boletines(){
    try{
      this.http.listar_boletines().then(
        (res) => {
          console.log("listar_maestros");
          this.lista_boletines = JSON.parse(JSON.stringify(res));
          console.log(this.lista_boletines);
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
    console.log('ionViewDidLoad PadreVerBoletinesPage');
  }

}
