import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMobFree } from '@ionic-native/admob-free';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Printer } from '@ionic-native/printer';
import { HttpModule } from '@angular/http';

import { PagesModule } from './../pages/pages.module';
import { ComponentsModule } from "../components/components.module";

import AdMobProvider from '../providers/ad-mob/ad-mob';
import UtilitiesProvider from '../providers/utilities/utilities';
import PrinterProvider from '../providers/printer/printer';
import LoteriaProvider from '../providers/loteria/loteria';
import TiposJogoProvider from '../providers/tipos-jogo/tipos-jogo';
import LoteriaServiceProvider from '../providers/loteria-service/loteria-service';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    PagesModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AdMobFree,
    SocialSharing,
    Printer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoteriaProvider,
    AdMobProvider,
    UtilitiesProvider,
    PrinterProvider,
    LoteriaProvider,
    TiposJogoProvider,
    LoteriaServiceProvider
  ]
})
export class AppModule {}