import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpProvider } from '../../providers/http/http';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the NuevoProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-nuevo-producto',
  templateUrl: 'nuevo-producto.html',
})
export class NuevoProductoPage {

  myForm: FormGroup;

  constructor(
    public navCtrl: NavController, public formBuilder: FormBuilder, public http: HttpProvider ,public alerCtrl: AlertController) {
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
  

  saveData() {
    console.log(this.myForm.value);

    let nombre = this.myForm.value.producto_nombre;
    let codigo = this.myForm.value.producto_codigo;
    let lote = this.myForm.value.producto_lote;
    let fecha = this.myForm.value.producto_fecha_vencimiento;
    let descripcion = this.myForm.value.producto_descripcion;
    let precio = this.myForm.value.producto_precio;


    try{
      this.http.metodo_agregar_producto(nombre,codigo,lote,fecha,descripcion,precio).then(
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
      producto_nombre: ['', Validators.required],
      producto_codigo: ['', Validators.required],
      producto_lote: ['', Validators.required],
      producto_fecha_vencimiento: ['', Validators.required],
      producto_descripcion: ['', Validators.required],
      producto_precio: ['', Validators.required]
    });
  }


}
