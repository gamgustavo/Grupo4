import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { InfoNegociosPage } from '../info-negocios/info-negocios'
import { NuevoNegocioPage } from '../nuevo-negocio/nuevo-negocio'
import { UsuarioRegistroPage } from '../usuario-registro/usuario-registro'
import { HttpProvider } from '../../providers/http/http';
import { AlertController } from 'ionic-angular';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dateNow: Date;

  items = [];
  negocios : any[];
  identificador_propietario :String;


  constructor(public navCtrl: NavController ,private cdRef:ChangeDetectorRef, public navParams: NavParams,public http: HttpProvider,public alerCtrl: AlertController) {
     console.log('Passed params id_usuario', navParams.data);
     this.identificador_propietario = String(navParams.data);
     this.listar_negocios();
  }

  

  doAlert(titulo: String, mensaje:String) {
    let alert = this.alerCtrl.create({
      title: String(titulo),
      message: String(mensaje),
      buttons: ['Ok']
    });
    alert.present()
  }


  listar_negocios(){
    try{
      this.http.metodo_negocio_show(this.identificador_propietario).then(
        (res) => {
          this.negocios = res['result'];
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
    this.navCtrl.push(InfoNegociosPage, { item: item });
  }  


  negocio_nuevo(){
    console.log('desde el home'  + this.identificador_propietario);
    this.navCtrl.push(NuevoNegocioPage,{identificador_propietario:this.identificador_propietario});
  }


}
