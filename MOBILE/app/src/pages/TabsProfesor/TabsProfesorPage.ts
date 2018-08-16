import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ProfesorCrearJuegoPage } from "../profesor/profesor-crear-juego/profesor-crear-juego";
import { ProfesorVerNotasPage } from "../profesor/profesor-ver-notas/profesor-ver-notas";
import { ProfesorMensajePadresPage } from "../profesor/profesor-mensaje-padres/profesor-mensaje-padres";
import { ProfesorPlanificacionPage } from "../profesor/profesor-planificacion/profesor-planificacion";





@Component({
  templateUrl: 'tabs.html'
})
export class TabsProfesorPage {

  tab1Root = ProfesorCrearJuegoPage;
  tab2Root = ProfesorVerNotasPage;  
  tab4Root = ProfesorMensajePadresPage;
  tab5Root = ProfesorPlanificacionPage;
  public tabsparams: String;
  
  constructor( public navParams: NavParams) {
     //console.log(String(this.navParams.get('usuario_id')));    
     //this.tabsparams = String(this.navParams.get('usuario_id'));
  }
}
