import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ProfesorCrearJuegoPage } from "../profesor-crear-juego/profesor-crear-juego";
import { ProfesorVerAgregarNotaPage } from "../profesor-ver-agregar-nota/profesor-ver-agregar-nota";
import { ProfesorVerModificarNotaPage } from "../profesor-ver-modificar-nota/profesor-ver-modificar-nota";
import { ProfesorVerNotasPage } from "../profesor-ver-notas/profesor-ver-notas";
import { ProfesorMensajePadresPage } from "../profesor-mensaje-padres/profesor-mensaje-padres";
import { ProfesorPlanificacionPage } from "../profesor-planificacion/profesor-planificacion";
import { ProfesorActividadPage } from '../profesor-actividad/profesor-actividad';




@Component({
  templateUrl: 'tabs.html'
})
export class TabsProfesorPage {

  tab1Root = ProfesorCrearJuegoPage;
  tab2Root = ProfesorVerNotasPage;  
  tab4Root = ProfesorMensajePadresPage;
  tab5Root = ProfesorPlanificacionPage;
  tab6Root = ProfesorActividadPage;

  
  public tabsparams: String;
  
  constructor( public navParams: NavParams) {
     //console.log(String(this.navParams.get('usuario_id')));    
     //this.tabsparams = String(this.navParams.get('usuario_id'));
  }
}
