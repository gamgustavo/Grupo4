import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { profesorHomePage } from "../_profesor/profesorHome/profesorHome";
import { AdminHomePage } from "../_admin/admin-home/admin-home";
import { PadreHomePage } from "../_padre/padre-home/padre-home";
import { EstudianteHomePage } from "../_estudiante/estudiante-home/estudiante-home";


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  myForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public nav: NavController, public menu: MenuController, public toastCtrl: ToastController) {
    this.menu.swipeEnable(false);
    this.myForm = this.createMyForm();
  }

  private createMyForm() {
    return this.formBuilder.group({

      email: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  login() {
    console.log(this.myForm.value.email);
    console.log(this.myForm.value.password);
    let tipoUsuario = this.myForm.value.email;


    if(tipoUsuario === 'profesor'){
      this.nav.setRoot(profesorHomePage);

    }else if( tipoUsuario === 'admin'){
      this.nav.setRoot(AdminHomePage);

    }else if( tipoUsuario === 'padre' ){
      this.nav.setRoot(PadreHomePage);

    }else if(tipoUsuario === 'estudiante' ){
      this.nav.setRoot(EstudianteHomePage);
    }

  }

}
