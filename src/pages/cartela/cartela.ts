import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-cartela',
  templateUrl: 'cartela.html',
})
export class CartelaPage {
  cartela: number[][];

  constructor(public navCtrl: NavController) {
  }

  ngOnInit(){
    this.cartela = new Array(6);
    for(let linha = 0;linha<6;linha++){
        this.cartela[linha] = new Array(10);
      for(let coluna = 0;coluna < 10;coluna++){
        this.cartela[linha][coluna] = (coluna+1)+(linha*10);
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartelaPage');
  }

}
