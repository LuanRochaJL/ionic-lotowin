import { ListaTipoJogo } from './../../providers/lista-tipo-jogo';
import { Loteria } from './../../providers/loteria';
import { TipoJogo } from './../../providers/tipo-jogo';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private tipojogo: TipoJogo;
  private loteria: Loteria;
  private jogos: number[][];
  private qtdeJogos: number = 1;
  private qtdeNumeros: number = 6;
  constructor(public navCtrl: NavController, public admob: AdMobFree) {
    this.tipojogo = ListaTipoJogo.MegaSena;
    this.loteria = new Loteria(ListaTipoJogo.MegaSena);
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
    this.loteria.setQtdeJogos(this.qtdeJogos);
  }

  setQtdeNumeros(){
    this.loteria.setQtdeNumeros(this.qtdeNumeros);
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
