import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TipoJogo } from './../providers/tipo-jogo';
import { ListaTipoJogoProvider } from './../providers/lista-tipo-jogo';
import { LoteriaProvider } from "../providers/loteria";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;

  pages: Array<{title: string, avatar: string, component: any, tipo: TipoJogo}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen, 
              private loteria: LoteriaProvider,
              private tipoJogo: ListaTipoJogoProvider) {
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit(){
    this.initializeApp();
    this.loteria.setConfigJogoPadrao(this.tipoJogo.MegaSena);  
    
    this.pages = [
      { title: 'MEGA-SENA', avatar: 'megasena', component: HomePage, tipo: this.tipoJogo.MegaSena},
      { title: 'LOTOFÁCIL', avatar: 'lotofacil', component: HomePage, tipo: this.tipoJogo.LotoFacil}
    ];
  }

  ngOnDestroy(){
    //implementar
  }

  openPage(page) {
    this.loteria.setConfigJogoPadrao(page.tipo);
    this.nav.setRoot(page.component);
  }
}
