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
  constructor(public navCtrl: NavController, public admob: AdMobFree) {
    this.tipojogo = ListaTipoJogo.MegaSena;
    this.loteria = new Loteria(ListaTipoJogo.MegaSena);
  }

  teste(){
    alert(this.loteria.GetAposta())
  }

  showBanner(){
    /*var admobid = {}
    if (/(android)/i.test(navigator.userAgent)) {  // for android & amazon-fireos
      admobid = {
        banner: 'ca-app-pub-3940256099942544/6300978111',
        interstitial: 'ca-app-pub-3940256099942544/1033173712',
      }
    } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {  // for ios
      admobid = {
        banner: 'ca-app-pub-3940256099942544/2934735716',
        interstitial: 'ca-app-pub-3940256099942544/4411468910',
      }
    }*/
    let bannerConfig: AdMobFreeBannerConfig = {
      isTesting: true, // Remove in production
      autoShow: true
      //id: Your Ad Unit ID goes here
    };

    this.admob.banner.config(bannerConfig);

    this.admob.banner.prepare();
    //.then(() => {
    //}).catch(e => console.log(e));
    this.admob.banner.show();
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
    });
  }
}
