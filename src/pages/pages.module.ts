import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ComponentsModule } from "../components/components.module";
import { ResultadoPage } from "./resultado/resultado";

@NgModule({
  declarations: [
    HomePage,
    TabsPage,
    ResultadoPage
  ],
  imports: [
    IonicModule.forRoot(HomePage),
    ComponentsModule,
    CommonModule
  ],
  exports: [
    HomePage,
    TabsPage,
    ResultadoPage
  ],
  entryComponents: [
    HomePage,
    TabsPage,
    ResultadoPage
  ]
})
export class PagesModule {}
