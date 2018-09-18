import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TripService } from '../../../services/trip-service';
import { ProfesorVerNotasPage } from '../../_profesor/profesor-ver-notas/profesor-ver-notas';
import { ProfesorActividadPage } from '../../_profesor/profesor-actividad/profesor-actividad';
import { EstudianteVerHorarioPage } from '../../_estudiante/estudiante-ver-horario/estudiante-ver-horario';
import { EstudianteVerNotasPage } from '../../_estudiante/estudiante-ver-notas/estudiante-ver-notas';
import { PadreVerHorarioHijoPage } from '../../_padre/padre-ver-horario-hijo/padre-ver-horario-hijo';
import { AdminAsignarMaestroPage } from '../admin-asignar-maestro/admin-asignar-maestro';
import { AdminVerMaestrosPage } from '../admin-ver-maestros/admin-ver-maestros';
import { EstudianteVerJuegoPage } from '../../_estudiante/estudiante-ver-juego/estudiante-ver-juego';

/**
 * Generated class for the AdminHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-home',
  templateUrl: 'admin-home.html',
})
export class AdminHomePage {
  public trips: any;
  constructor(public nav: NavController, public tripService: TripService) {
    this.trips = tripService.getAll();
  }
  esAdmin(actual){
    if(actual.name.includes("Admin")){
      return true;
    }
    return false;
  }
  // view trip detail
  viewDetail(id) {
    if( id === 1 ){ //notas
      this.nav.push(ProfesorVerNotasPage);
    }else if( id === 2){ //actividades
      this.nav.push(ProfesorActividadPage);
    }else if(id === 4){
      this.nav.push(EstudianteVerHorarioPage);

    }else if(id === 5){
      this.nav.push(EstudianteVerNotasPage);

    }else if(id === 6){
      this.nav.push(PadreVerHorarioHijoPage);
    }else if(id === 7){
      this.nav.push(AdminAsignarMaestroPage);

    }else if(id ===8){
      this.nav.push(AdminVerMaestrosPage);
    }else if(id === 9){
      this.nav.push(EstudianteVerJuegoPage);
    }
    
    //this.nav.push(TripDetailPage, {id: id});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminHomePage');
  }

}
