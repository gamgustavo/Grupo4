import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../../services/http";

/**
 * Generated class for the ProfesorListadoJuegosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profesor-listado-juegos',
  templateUrl: 'profesor-listado-juegos.html',
})
export class ProfesorListadoJuegosPage {

  lista_notas_estudiante: any[];

  constructor(public navCtrl: NavController , public navParams: NavParams,public http: HttpProvider) {
 
  }
}
