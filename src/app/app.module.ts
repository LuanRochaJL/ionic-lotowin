
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMobFree } from '@ionic-native/admob-free';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoteriaProvider } from './../providers/loteria';
import { ListaTipoJogoProvider } from "../providers/lista-tipo-jogo";
import { ListaJogoComponent } from './../components/lista-jogo/lista-jogo';
import { ListaChipsComponent } from "../components/lista-chips/lista-chips";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ListaJogoComponent,
    ListaChipsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AdMobFree,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoteriaProvider,
    ListaTipoJogoProvider
  ]
})
export class AppModule {}
