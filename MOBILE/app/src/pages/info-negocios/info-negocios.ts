import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';




@Component({
  selector: 'page-info-negocios',
  templateUrl: 'info-negocios.html',
})
export class InfoNegociosPage {

  item;
  myForm: FormGroup;  
  lista_productos : any[];
  estado_stock : any[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public alerCtrl: AlertController, public formBuilder: FormBuilder, public http: HttpProvider) {
    this.item = navParams.data.item;
    this.listar_productos();
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

  private createMyForm() {
    return this.formBuilder.group({
      nombre_negocio: ['', Validators.required],
      producto: ['', Validators.required],
      cantidad: ['', Validators.required],
      fecha: ['', Validators.required],           
    });
  }
  
  listar_productos(){
    try{
      this.http.metodo_productos_show().then(
        (res) => {
          this.lista_productos = res['result'];
        },
        (error) =>{
          console.log('Error');
          this.doAlert('Error','No se puede cargar intenta mas tarde');          
        }
      )  
    }catch(e){
      this.doAlert('Error','No se puede cargar intenta mas tarde');
    }
    this.listar_stock_actual();
  }

  listar_stock_actual(){
    try{
      this.http.listar_stock_actual(this.item.negocio_id).then(
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


  saveData() {
    let nombre_negocio = String(this.myForm.value.nombre_negocio);
    let producto = String(this.myForm.value.producto);
    let cantidad = String(this.myForm.value.cantidad);
    let fecha = String(this.myForm.value.fecha);

    try{
      this.http.metodo_contabilizar(nombre_negocio,producto,cantidad,fecha).then(
        (res) => {
          this.doAlert('Registrado','Se ha registrado exitosamente');
          this.navCtrl.pop();     
        },
        (error) =>{
          this.doAlert('Registrado Dudoso','Revisar si se realizo laoperacion');
          this.navCtrl.pop();                         
        }
      )  
    }catch(e){
      this.doAlert('Error','No se puede cargar intenta mas tarde');
    }    


  }


}
