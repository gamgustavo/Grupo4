import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstudianteHomePage } from './estudiante-home';

@NgModule({
  declarations: [
    EstudianteHomePage,
  ],
  imports: [
    IonicPageModule.forChild(EstudianteHomePage),
  ],
})
export class EstudianteHomePageModule {}
