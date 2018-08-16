import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ProfesorCrearJuegoPage } from "../profesor/profesor-crear-juego/profesor-crear-juego";


@Component({
  templateUrl: 'tabs.html'
})
export class tabsAdminPage {

  tab1Root = ProfesorCrearJuegoPage;
  tab2Root = ProfesorCrearJuegoPage;
  tab3Root = ProfesorCrearJuegoPage;
  tab4Root = ProfesorCrearJuegoPage;

  public tabsparams: String;
  
  constructor( public navParams: NavParams) {
     console.log(String(this.navParams.get('usuario_id')));    
     this.tabsparams = String(this.navParams.get('usuario_id'));
  }
}
