import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CartelaPage } from './../cartela/cartela';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CartelaPage;

  constructor() {
  }
}
