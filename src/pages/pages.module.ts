import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ComponentsModule } from "../components/components.module";

@NgModule({
  declarations: [
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(HomePage),
    ComponentsModule,
    CommonModule
  ],
  exports: [
    HomePage,
    TabsPage
  ]
})
export class PagesModule {}
