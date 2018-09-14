import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import { TripService } from "../../../services/trip-service";
import { TripDetailPage } from "../../trip-detail/trip-detail";
import { profesorListarCursosPage } from "../profesorListarCursos/profesorListarCursos";
import { ProfesorVerActividadesCursoPage } from "../profesor-ver-actividades-curso/profesor-ver-actividades-curso";
import { ProfesorActividadPage } from "../profesor-actividad/profesor-actividad";
import { ProfesorVerNotasPage } from "../profesor-ver-notas/profesor-ver-notas";
import { EstudianteVerHorarioPage } from "../../_estudiante/estudiante-ver-horario/estudiante-ver-horario";
import { EstudianteVerNotasPage } from "../../_estudiante/estudiante-ver-notas/estudiante-ver-notas";
import { PadreVerHorarioHijoPage } from "../../_padre/padre-ver-horario-hijo/padre-ver-horario-hijo";
import { AdminAsignarMaestroPage } from "../../_admin/admin-asignar-maestro/admin-asignar-maestro";
import { AdminVerMaestrosPage } from "../../_admin/admin-ver-maestros/admin-ver-maestros";
import { EstudianteVerJuegoPage } from "../../_estudiante/estudiante-ver-juego/estudiante-ver-juego";


@Component({
  selector: 'profesorHome',
  templateUrl: 'profesorHome.html'
})
export class profesorHomePage {
  // list of trips
  public trips: any;

  constructor(public nav: NavController, public tripService: TripService) {
    // set sample data
    this.trips = tripService.getAll();
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
}
