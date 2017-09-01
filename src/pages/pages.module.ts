import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ComponentsModule } from "../components/components.module";
import { CartelaPage } from "./cartela/cartela";

@NgModule({
  declarations: [
    HomePage,
    TabsPage,
    CartelaPage
  ],
  imports: [
    IonicModule.forRoot(HomePage),
    ComponentsModule,
    CommonModule
  ],
  exports: [
    HomePage,
    TabsPage,
    CartelaPage
  ],
  entryComponents: [
    HomePage,
    TabsPage,
    CartelaPage
  ]
})
export class PagesModule {}
