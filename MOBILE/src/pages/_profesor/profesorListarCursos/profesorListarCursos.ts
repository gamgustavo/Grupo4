import {Component} from "@angular/core";
import {NavController, LoadingController, ToastController} from "ionic-angular";
import { TripService } from "../../../services/trip-service";
import { HomePage } from "../../home/home";
import { HttpProvider } from "../../../services/http";


@Component({
  selector: 'profesorListarCursos',
  templateUrl: 'profesorListarCursos.html'
})
export class profesorListarCursosPage {
  public cursos: any[];
  // trip data
  public trip: any;
  // number of adults
  public adults = 2;
  // date
  public date = new Date();

  public paymethods = 'creditcard';

  constructor(public nav: NavController, public tripService: TripService, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public http: HttpProvider) {
    // set sample data
    this.trip = tripService.getItem(1);
    console.log("asdfaaaaaa");
    this.listar_cursos()
  }

 listar_cursos(){
   console.log("antes de llamada");
    try{
      console.log("antes de llamada2");
      this.http.listar_cursos().then(
        (res) => {
          this.cursos = JSON.parse(JSON.stringify(res));
          console.log(this.cursos);
        },
        (error) =>{
          console.log(error);
        }
      )  
    }catch(e){
      console.log("Error");
    }
 }    

  // process send button
  send() {
    // send booking info
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    // show message
    let toast = this.toastCtrl.create({
      showCloseButton: true,
      cssClass: 'profile-bg',
      message: 'Book Activity Success!',
      duration: 3000,
      position: 'bottom'
    });

    loader.present();

    setTimeout(() => {
      loader.dismiss();
      toast.present();
      // back to home page
      this.nav.setRoot(HomePage);
    }, 3000)
  }
}
