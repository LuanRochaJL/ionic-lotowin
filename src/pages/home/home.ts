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
  private rngQtde: Array<{lblValor: string, qtdeMin: number, qtdeMax: number, qtde: number, tipo: string}>;
  private chk: Array<{lblValor: string, campo: string}>;
  objNumeros: number[] = [];

  constructor(public navCtrl: NavController, public admob: AdMobFree, private loteria: LoteriaProvider) {
    
  }

  ngOnInit(){
    this.rngQtde = [
        { lblValor: 'Qtde. jogos', qtdeMin: this.loteria.tipoJogo.getQtdJogoMin(), 
          qtdeMax: this.loteria.tipoJogo.getQtdJogoMax(), qtde: this.loteria.tipoJogo.getQtdJogoMin(), tipo: 'jogo'},
        { lblValor: 'Qtde. numeros', qtdeMin: this.loteria.tipoJogo.getQtdNumMin(), 
          qtdeMax: this.loteria.tipoJogo.getQtdNumMax(), qtde: this.loteria.tipoJogo.getQtdNumMin(), tipo: 'numero'}
      ];
    this.chk = [
          {lblValor: 'Não Repetir n° entre jogos', campo: 'noRepetirNumero'},
          {lblValor: 'Não permitir sequência de número em cruz', campo: 'noSequencia'}
      ];
    let i = 1;
    while(this.objNumeros.push(i++)<60){}
  }

  excluirNumero(chip: number) {
    debugger
    let index = this.loteria.configjogo.escolhidos.indexOf(chip);
    if (index > -1) {
      this.loteria.configjogo.escolhidos.splice(index, 1);
    }
  }

  GetAposta(){
    this.jogos = this.loteria.GetAposta();
    if(this.loteria.configjogo.qtdeJogos == 1){
      this.showBanner();
    }else{
      this.launchInterstitial();
    }
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
