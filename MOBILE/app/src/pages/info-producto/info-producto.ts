import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-info-producto',
  templateUrl: 'info-producto.html',
})
export class InfoProductoPage {

  item;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.data.item;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoProductoPage');
  }

}
