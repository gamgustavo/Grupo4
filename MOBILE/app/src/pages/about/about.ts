import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { InfoProductoPage } from '../info-producto/info-producto'
import { NuevoProductoPage } from '../nuevo-producto/nuevo-producto'
import { HttpProvider } from '../../providers/http/http';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {


  items = [];
  productos : any[];
  identificador_propietario :String;  

  constructor(public navCtrl: NavController , public navParams: NavParams,public http: HttpProvider,public alerCtrl: AlertController) {
     console.log('Passed params id_usuario', navParams.data);
     this.identificador_propietario = String(navParams.data);
     this.listar_productos();     
  }

  doAlert(titulo: String, mensaje:String) {
    let alert = this.alerCtrl.create({
      title: String(titulo),
      message: String(mensaje),
      buttons: ['Ok']
    });
    alert.present()
  }


  listar_productos(){
    try{
      this.http.metodo_productos_show().then(
        (res) => {
          this.productos = res['result'];
        },
        (error) =>{
          console.log('Error');
          this.doAlert('Error','No se puede cargar intenta mas tarde');          
        }
      )  
    }catch(e){
      this.doAlert('Error','No se puede cargar intenta mas tarde');
    }        
  }


  openNavDetailsPage(item) {
    //this.navCtrl.push(InfoProductoPage, { item: item });
  }  


  producto_nuevo(){
    this.navCtrl.push(NuevoProductoPage);
  }



}
