import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import {RegisterPage} from "../register/register";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { profesorHomePage } from "../_profesor/profesorHome/profesorHome";
import { AdminHomePage } from "../_admin/admin-home/admin-home";
import { PadreHomePage } from "../_padre/padre-home/padre-home";
import { EstudianteHomePage } from "../_estudiante/estudiante-home/estudiante-home";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  myForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public nav: NavController, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController) {
    this.menu.swipeEnable(false);
    this.myForm = this.createMyForm();
  }

  private createMyForm() {
    return this.formBuilder.group({
      email: ['', Validators.required],
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

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
