import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";

/**
 * Generated class for the ProfesorVerNotasCursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profesor-ver-notas-curso',
  templateUrl: 'profesor-ver-notas-curso.html',
})
export class ProfesorVerNotasCursoPage {

  identificador_curso:any;
  lista_alumno_nota : any[];
  constructor(public navCtrl: NavController , public navParams: NavParams,public http: HttpProvider,public alerCtrl: AlertController) {
     console.log('Passed params id_usuario', navParams.data['item']);
     this.identificador_curso = navParams.data['item'];
     this.listar_notas_curso();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfesorVerNotasCursoPage');
  }
  doAlert(titulo: String, mensaje:String) {
    let alert = this.alerCtrl.create({
      title: String(titulo),
      message: String(mensaje),
      buttons: ['Ok']
    });
    alert.present()
  }  

  listar_notas_curso(){
    try{
      this.http.listar_alumnos_notas().then(
        (res) => {
          console.log("listar_notas");
          this.lista_alumno_nota = JSON.parse(JSON.stringify(res));
          console.log(this.lista_alumno_nota);
        },
        (error) =>{
          console.log(error);
        }
      )  
    }catch(e){
      this.doAlert('Error','No se puede cargar intenta mas tarde');
    }
  }

}
