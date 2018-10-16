import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfesorVerAgregarNotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profesor-ver-agregar-nota',
  templateUrl: 'profesor-ver-agregar-nota.html',
})
export class ProfesorVerAgregarNotaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PadresVerAsistenciaHijosPage');
  }

}
