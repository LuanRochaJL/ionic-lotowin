import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import LoteriaProvider from "../../providers/loteria/loteria";
import AdMobProvider from '../../providers/ad-mob/ad-mob';
import { SocialSharing } from '@ionic-native/social-sharing';
import PrinterProvider from '../../providers/printer/printer';

@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class ResultadoPage {

  private jogos: number[][];
  private jogosSelecionados: number[] = [];
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private loteria: LoteriaProvider,
              private adMob: AdMobProvider,
              private socialSharing: SocialSharing,
              private printer: PrinterProvider) {
  }

  GetAposta(){
    this.jogos = this.loteria.GetAposta();
    
    if(this.loteria.configjogo.QtdeJogos == 1){
      this.adMob.showBanner();
    }else{
      this.adMob.launchInterstitial();
    }
  }

  selecionarJogo(id){
    let index = this.jogosSelecionados.indexOf(id);
    if(index > -1){
      this.jogosSelecionados.splice(index, 1);
    }else{
      this.jogosSelecionados.push(id);
    }
  }

  getCheckBoxSelecionado(id){
    let index = this.jogosSelecionados.indexOf(id);
    if(index > -1){
      return "true";
    }else{
      return "false";
    }
  }

  getJogosSelecionados(): string{
    let selecionados: string = "";

    if(this.jogosSelecionados.length == 0){
      for(let i=0; i < this.jogos.length; i++){
        selecionados += this.jogos[i].toString()+"\n";
      }
    }else{
      for(let i=0; i < this.jogosSelecionados.length; i++){
        selecionados += this.jogos[this.jogosSelecionados[i]].toString()+"\n";
      }
    }
    
    return selecionados;
  }

  whatsappShare(){
    this.socialSharing.shareViaWhatsApp(this.getJogosSelecionados(), null, null); 
  }

  ngOnInit(){
    this.GetAposta();
  }

  ionViewWillLeave(){
    this.adMob.close();
  }

  ImprimirAposta(){
    this.printer.imprimirJogosHtm(this.jogos, this.loteria.tipoJogo.getCor());
  }

}
