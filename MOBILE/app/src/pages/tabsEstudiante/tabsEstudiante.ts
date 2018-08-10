import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {YoutubePage} from '../youtube/youtube';

@Component({
  templateUrl: 'tabs.html'
})
export class tabsEstudiantePage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = YoutubePage;

  public tabsparams: String;
  
  constructor( public navParams: NavParams) {
     console.log(String(this.navParams.get('usuario_id')));    
     this.tabsparams = String(this.navParams.get('usuario_id'));
  }
}
