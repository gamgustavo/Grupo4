import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  items = [];
  estado_stock : any[];  

  constructor(public navCtrl: NavController, public navParams: NavParams,public alerCtrl: AlertController, public formBuilder: FormBuilder, public http: HttpProvider) {
     console.log('Passed params id_usuario', navParams.data);    
     this.listar_stock_actual();
  }


  doAlert(titulo: String, mensaje:String) {
    let alert = this.alerCtrl.create({
      title: String(titulo),
      message: String(mensaje),
      buttons: ['Ok']
    });
    alert.present()
  }  


  listar_stock_actual(){
    try{
      this.http.listar_stock_recomendaciones().then(
        (ress) => {
          this.estado_stock = ress['result'];
        },
        (error) =>{
          console.log('Error1');
          this.doAlert('Error1','No se puede cargar intenta mas tarde');          
        }
      )  
    }catch(e){
      this.doAlert('Recargar de nuevo',e);
    }

  }




  openNavDetailsPage(item) {

  }  




  

}
