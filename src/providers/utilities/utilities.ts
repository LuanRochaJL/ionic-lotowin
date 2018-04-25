import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

@Injectable()
export default class UtilitiesProvider {

  public ExecutandoViaBrowser: boolean;  

  constructor() {
  }

  carregarExecutandoViaBrowser(platform: Platform): void{
    this.ExecutandoViaBrowser = platform.is('core');
  }
  

  getRandom(min, max) {
    return Math.floor(Math.random() * ((max+1) - min) + min);
  } 

  compararNumeros(a, b) {
      return a - b;
  }

  imgOrigem(): string{
      let origem: string = "assets/imgs/"; 
      if(this.ExecutandoViaBrowser){
          origem = "../../" + origem;
      }
      return origem;
  }

}
