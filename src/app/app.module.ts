import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMobFree } from '@ionic-native/admob-free';
import { SocialSharing } from '@ionic-native/social-sharing';

import { PagesModule } from './../pages/pages.module';
import { ComponentsModule } from "../components/components.module";

import { LoteriaProvider } from './../providers/loteria';
import { ListaTipoJogoProvider } from "../providers/lista.tipo.jogo";
import { adMobProvider } from "../providers/ad.mob";
import { Utilities } from '../providers/utilities';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    PagesModule,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Utilities,
    LoteriaProvider,
    ListaTipoJogoProvider,
    adMobProvider,
  ]
})
export class AppModule {}
