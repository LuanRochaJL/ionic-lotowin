import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from './../pages/home/home';

import { TipoJogo } from './../model/tipo.jogo';
import { ListaTipoJogoProvider } from './../providers/lista.tipo.jogo';
import { LoteriaProvider } from "../providers/loteria";
import { Utilities } from './../providers/utilities';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;

  private page: {imgOrigem: string};
  private tipos: TipoJogo[];

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
    this.tipos = [this.tipoJogo.MegaSena, this.tipoJogo.LotoFacil];
    this.page = {imgOrigem: this.util.imgOrigem(this.platform)}
    this.loteria.setConfigJogoPadrao(this.tipoJogo.MegaSena);  
  }

  ngOnDestroy(){
    //testar
    this.page = null;
    this.tipos = null;
  }

  changeLoto(tipoJogo) {
    this.loteria.setConfigJogoPadrao(tipoJogo);
    this.nav.setRoot(HomePage);
  }
}
