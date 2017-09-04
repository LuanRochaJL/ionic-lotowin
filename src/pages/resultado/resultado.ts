import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoteriaProvider } from "../../providers/loteria";
import { adMobProvider } from "../../providers/adMob";

@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class ResultadoPage {

  private jogos: number[][];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private loteria: LoteriaProvider,
              private adMob: adMobProvider) {
  }

  GetAposta(){
    this.jogos = this.loteria.GetAposta();
    if(this.loteria.configjogo.qtdeJogos == 1){
      this.adMob.showBanner();
    }else{
      this.adMob.launchInterstitial();
    }
  }

  ngOnInit(){
    this.GetAposta();
  }

  ionViewDidLoad() {
  }

}
