import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from './../pages/home/home';

import { TipoJogo } from './../providers/tipo-jogo';
import { ListaTipoJogoProvider } from './../providers/lista-tipo-jogo';
import { LoteriaProvider } from "../providers/loteria";
import { Utilities } from './../util/utilities';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;

  page: {imgOrigem: string};
  tipos: Array<{title: string, avatar: string, tipo: TipoJogo}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen, 
              private loteria: LoteriaProvider,
              private tipoJogo: ListaTipoJogoProvider,
              private util: Utilities) {
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit(){
    this.initializeApp();
    this.page = {imgOrigem: this.util.imgOrigem(this.platform)}
    this.loteria.setConfigJogoPadrao(this.tipoJogo.MegaSena);  
  
    this.tipos = [
      { title: 'MEGA-SENA', avatar: 'megasena', tipo: this.tipoJogo.MegaSena},
      { title: 'LOTOFÁCIL', avatar: 'lotofacil', tipo: this.tipoJogo.LotoFacil}
    ];
  }

  ngOnDestroy(){
    //implementar
  }

  changeLoto(tipoJogo) {
    this.loteria.setConfigJogoPadrao(tipoJogo.tipo);
    this.nav.setRoot(HomePage);
  }
}
