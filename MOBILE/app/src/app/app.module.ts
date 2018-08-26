import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { YoutubePage } from '../pages/youtube/youtube';
import { TabsPage } from '../pages/tabs/tabs';
import { InfoNegociosPage } from '../pages/info-negocios/info-negocios'
import { NuevoNegocioPage } from '../pages/nuevo-negocio/nuevo-negocio'
import { UsuarioRegistroPage } from '../pages/usuario-registro/usuario-registro'

import { InfoProductoPage } from '../pages/info-producto/info-producto'
import { NuevoProductoPage } from '../pages/nuevo-producto/nuevo-producto'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpProvider } from '../providers/http/http';
import { HttpClientModule } from '@angular/common/http';
import { TabsProfesorPage } from "../pages/TabsProfesor/TabsProfesorPage";
import { ProfesorCrearJuegoPage } from "../pages/profesor-crear-juego/profesor-crear-juego";
import { ProfesorVerAgregarNotaPage } from "../pages/profesor-ver-agregar-nota/profesor-ver-agregar-nota";
import { ProfesorVerModificarNotaPage } from "../pages/profesor-ver-modificar-nota/profesor-ver-modificar-nota";
import { ProfesorVerNotasPage } from "../pages/profesor-ver-notas/profesor-ver-notas";
import { tabsEstudiantePage } from "../pages/tabsEstudiante/tabsEstudiante";
import { tabsPadrePage } from "../pages/tabsPadre/tabsPadre";
import { tabsAdminPage } from "../pages/tabsAdmin/tabsAdmin";
import { ProfesorMensajePadresPage } from "../pages/profesor-mensaje-padres/profesor-mensaje-padres";
import { PadresListadoHijosPage } from "../pages/padres-listado-hijos/padres-listado-hijos";
import { PadreVerMensajesPage } from "../pages/padre-ver-mensajes/padre-ver-mensajes";
import { PadresVerNotasHijosPage } from "../pages/padres-ver-notas-hijos/padres-ver-notas-hijos";
import { ProfesorPlanificacionPage } from "../pages/profesor-planificacion/profesor-planificacion";
import { ProfesorVerNotasCursoPage } from "../pages/profesor-ver-notas-curso/profesor-ver-notas-curso";
import { ProfesorActividadPage } from '../pages/profesor-actividad/profesor-actividad';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    YoutubePage,
    InfoNegociosPage,
    NuevoNegocioPage,
    InfoProductoPage,
    NuevoProductoPage,
    UsuarioRegistroPage,
    TabsPage,
    TabsProfesorPage,
    tabsEstudiantePage,
    tabsPadrePage,
    tabsAdminPage,
    PadresListadoHijosPage,
    PadreVerMensajesPage,
    PadresVerNotasHijosPage,    
    ProfesorCrearJuegoPage,
    ProfesorVerAgregarNotaPage,
    ProfesorVerModificarNotaPage,
    ProfesorMensajePadresPage,
    ProfesorVerNotasPage,
    ProfesorPlanificacionPage,
    ProfesorVerNotasCursoPage,
    ProfesorActividadPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    YoutubePage,
    InfoNegociosPage,
    NuevoNegocioPage,
    InfoProductoPage,
    NuevoProductoPage,
    UsuarioRegistroPage,
    TabsPage,
    TabsProfesorPage,
    tabsEstudiantePage,
    tabsPadrePage,
    tabsAdminPage,
    PadresListadoHijosPage,
    PadreVerMensajesPage,
    PadresVerNotasHijosPage,
    ProfesorCrearJuegoPage,
    ProfesorVerAgregarNotaPage,
    ProfesorVerModificarNotaPage,
    ProfesorMensajePadresPage,
    ProfesorVerNotasPage,
    ProfesorPlanificacionPage,
    ProfesorVerNotasCursoPage,
    ProfesorActividadPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
  ]
})
export class AppModule {}
