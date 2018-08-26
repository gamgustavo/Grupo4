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

  constructor(public navCtrl: NavController , public navParams: NavParams,public http: HttpProvider,public alerCtrl: AlertController) {
     console.log('Passed params id_usuario', navParams.data['item']);
     this.identificador_curso = navParams.data['item'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfesorVerNotasCursoPage');
  }

}
