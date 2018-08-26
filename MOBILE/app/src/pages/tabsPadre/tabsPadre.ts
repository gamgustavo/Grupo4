import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {YoutubePage} from '../youtube/youtube';
import { PadresListadoHijosPage } from "../padres-listado-hijos/padres-listado-hijos";
import { PadreVerMensajesPage } from "../padre-ver-mensajes/padre-ver-mensajes";
import { PadresVerNotasHijosPage } from "../padres-ver-notas-hijos/padres-ver-notas-hijos";

@Component({
  templateUrl: 'tabs.html'
})
export class tabsPadrePage {

  tab1Root = PadresListadoHijosPage;
  tab2Root = PadreVerMensajesPage;
  tab3Root = PadresVerNotasHijosPage;

  public tabsparams: String;
  
  constructor( public navParams: NavParams) {
     console.log(String(this.navParams.get('usuario_id')));    
     this.tabsparams = String(this.navParams.get('usuario_id'));
  }
}
