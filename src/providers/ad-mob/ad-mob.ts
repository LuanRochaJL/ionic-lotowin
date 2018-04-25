import { Injectable } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

import UtilitiesProvider from '../utilities/utilities';

@Injectable()
export default class AdMobProvider {

  constructor(private admob: AdMobFree, private util: UtilitiesProvider) {
  }

  close(){
    if(!this.util.ExecutandoViaBrowser){
      this.admob.banner.remove();    
    }
  }

  showBanner(){
    if(!this.util.ExecutandoViaBrowser){
      let bannerConfig: AdMobFreeBannerConfig = {
          isTesting: true, // Remove in production
          autoShow: true
          //id: Your Ad Unit ID goes here
      };

      this.admob.banner.config(bannerConfig);

      this.admob.banner.prepare().then(() => {
      }).catch(/*e => console.log(e)*/);
    }
  }

  launchInterstitial(){
    if(!this.util.ExecutandoViaBrowser){
      let interstitialConfig: AdMobFreeInterstitialConfig = {
          isTesting: true, // Remove in production
          autoShow: true
          //id: Your Ad Unit ID goes here
      }; 

      this.admob.interstitial.config(interstitialConfig);

      this.admob.interstitial.prepare().then(() => {
          // success
      }).catch(/*e => console.log(e)*/);
    }
  }
}
