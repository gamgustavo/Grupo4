import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import { TripService } from "../../../services/trip-service";
import { TripDetailPage } from "../../trip-detail/trip-detail";
import { profesorListarCursosPage } from "../profesorListarCursos/profesorListarCursos";


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
    if( id === 1 ){
      this.nav.push(profesorListarCursosPage);
    }else if( id === 2){

    }else{

    }
    //this.nav.push(TripDetailPage, {id: id});
  }
}
