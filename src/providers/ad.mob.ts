import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';
import { Injectable } from '@angular/core';

@Injectable()
export class adMobProvider {
    constructor(public admob: AdMobFree) {
    }

    close(){
        this.admob.banner.remove();
    }

    showBanner(){
        let bannerConfig: AdMobFreeBannerConfig = {
            isTesting: true, // Remove in production
            autoShow: true
            //id: Your Ad Unit ID goes here
        };

        this.admob.banner.config(bannerConfig);

        this.admob.banner.prepare().then(() => {
        }).catch(/*e => console.log(e)*/);
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
        }).catch(/*e => console.log(e)*/);
    }
}