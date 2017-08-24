import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

import { LoteriaProvider } from './../../providers/loteria';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private jogos: number[][];
  private qtdeJogos: number;
  private qtdeNumeros: number;
  private nomesComponentes: string[] = ["Qtde. jogos:","Qtde. jogos2:"];

  constructor(public navCtrl: NavController, public admob: AdMobFree, private loteria: LoteriaProvider) {
  }

  ngOnInit(){
    //this.loteria = this._loteria;
    this.qtdeJogos = this.loteria.configjogo.getQtdeJogos();
    this.qtdeNumeros = this.loteria.configjogo.getQtdeNumeros();
  }

  GetAposta(){
    this.jogos = this.loteria.GetAposta();
    if(this.qtdeJogos == 1){
      this.showBanner();
    }else{
      this.launchInterstitial();
    }
  }

  setQtdeJogos(){
    this.loteria.configjogo.setQtdeJogos(this.qtdeJogos);
  }

  setQtdeNumeros(){
    this.loteria.configjogo.setQtdeNumeros(this.qtdeNumeros);
  }

  showBanner(){
    let bannerConfig: AdMobFreeBannerConfig = {
      isTesting: true, // Remove in production
      autoShow: true
      //id: Your Ad Unit ID goes here
    };

    this.admob.banner.config(bannerConfig);

    this.admob.banner.prepare().then(() => {
    }).catch(e => console.log(e));
  }

  launchInterstitial(){
    let interstitialConfig: AdMobFreeInterstitialConfig = {
        isTesting: true, // Remove in production
        autoShow: true
        //id: Your Ad Unit ID goes here
    }; 

    this.admob.interstitial.config(interstitialConfig);

    this.admob.interstitial.prepare().then(() => {
        // success
    }).catch(e => console.log(e));
  }
}
