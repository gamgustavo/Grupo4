import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PadreHomePage } from './padre-home';

@NgModule({
  declarations: [
    PadreHomePage,
  ],
  imports: [
    IonicPageModule.forChild(PadreHomePage),
  ],
})
export class PadreHomePageModule {}
