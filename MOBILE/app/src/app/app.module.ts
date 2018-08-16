import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';
import { UsuarioRegistroPage } from '../pages/usuario-registro/usuario-registro'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpProvider } from '../providers/http/http';
import { HttpClientModule } from '@angular/common/http';
import { TabsProfesorPage } from "../pages/TabsProfesor/TabsProfesorPage";
import { tabsEstudiantePage } from "../pages/tabsEstudiante/tabsEstudiante";
import { tabsPadrePage } from "../pages/tabsPadre/tabsPadre";
import { tabsAdminPage } from "../pages/tabsAdmin/tabsAdmin";
import { PadresListadoHijosPage } from "../pages/padre/padres-listado-hijos/padres-listado-hijos";
import { PadreVerMensajesPage } from "../pages/padre/padre-ver-mensajes/padre-ver-mensajes";
import { PadresVerNotasHijosPage } from "../pages/padre/padres-ver-notas-hijos/padres-ver-notas-hijos";
import { ProfesorCrearJuegoPage } from "../pages/profesor/profesor-crear-juego/profesor-crear-juego";
import { ProfesorVerAgregarNotaPage } from "../pages/profesor/profesor-ver-agregar-nota/profesor-ver-agregar-nota";
import { ProfesorVerModificarNotaPage } from "../pages/profesor/profesor-ver-modificar-nota/profesor-ver-modificar-nota";
import { ProfesorMensajePadresPage } from "../pages/profesor/profesor-mensaje-padres/profesor-mensaje-padres";
import { ProfesorPlanificacionPage } from "../pages/profesor/profesor-planificacion/profesor-planificacion";
import { ProfesorVerNotasPage } from "../pages/profesor/profesor-ver-notas/profesor-ver-notas";
import { ProfesorVerNotasCursoPage } from "../pages/profesor/profesor-ver-notas-curso/profesor-ver-notas-curso";



@NgModule({
  declarations: [
    MyApp,
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
    ProfesorVerNotasCursoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
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
    ProfesorVerNotasCursoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
  ]
})
export class AppModule {}
