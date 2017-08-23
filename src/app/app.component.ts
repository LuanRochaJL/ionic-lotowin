import { Loteria2Provider } from './../providers/loteria2';

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { TipoJogo } from './../providers/tipo-jogo';
import { ListaTipoJogoProvider } from './../providers/lista-tipo-jogo';
import { LoteriaProvider } from "../providers/loteria";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = TabsPage;
  private loteria: LoteriaProvider;
  private tipoJogo : ListaTipoJogoProvider;
  pages: Array<{title: string, avatar: string, component: any, tipo: TipoJogo}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen, 
              private _loteria: LoteriaProvider,
              private _tipoJogo: ListaTipoJogoProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.tipoJogo = _tipoJogo;
    this.loteria = _loteria;
    this.loteria.setConfigJogoPadrao(this.tipoJogo.MegaSena);  

    this.pages = [
      { title: 'MEGA-SENA', avatar: 'megasena', component: HomePage, tipo: this.tipoJogo.MegaSena},
      { title: 'LOTOFÁCIL', avatar: 'lotofacil', component: HomePage, tipo: this.tipoJogo.LotoFacil},
      { title: 'List', avatar: 'megasena', component: ListPage, tipo: this.tipoJogo.MegaSena}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit(){

  }

  openPage(page) {
    this.loteria.setConfigJogoPadrao(page.tipo);
    this.nav.setRoot(page.component);
  }
}
