import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ProfesorPlanificacionPage } from "../profesor/profesor-planificacion/profesor-planificacion";


@Component({
  templateUrl: 'tabs.html'
})
export class tabsEstudiantePage {

  tab1Root = ProfesorPlanificacionPage;
  tab2Root = ProfesorPlanificacionPage;
  tab3Root = ProfesorPlanificacionPage;
  tab4Root = ProfesorPlanificacionPage;

  public tabsparams: String;
  
  constructor( public navParams: NavParams) {
     console.log(String(this.navParams.get('usuario_id')));    
     this.tabsparams = String(this.navParams.get('usuario_id'));
  }
}
