import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoteriaProvider } from "../../providers/loteria";
import { adMobProvider } from "../../providers/adMob";
import { SocialSharing } from '@ionic-native/social-sharing';
/*import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';*/

@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class ResultadoPage {

  private jogos: number[][];
  private jogosSelecionados: number[] = [];
  //private fileTransfer: FileTransferObject = this.transfer.create();
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private loteria: LoteriaProvider,
              private adMob: adMobProvider,
              private socialSharing: SocialSharing/*,
              private transfer: FileTransfer,
  private file: File*/) {
  }

  GetAposta(){
    this.jogos = this.loteria.GetAposta();
    if(this.loteria.configjogo.qtdeJogos == 1){
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

  getClasseSelecionado(id){
    let index = this.jogosSelecionados.indexOf(id);
    if(index > -1){
      return "selected";
    }else{
      return "";
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

  SalvarAposta(){
    /*const url = 'http://www.example.com/file.pdf';
    this.fileTransfer.download(url, this.file.externalApplicationStorageDirectory + '/arquivos/jogos.json')
                     .then((entry) => {
      alert('download complete: ' + entry.toURL());
    }, (error) => {
      // handle error
    }); */ 
    /*this.file.writeFile(this.file.externalApplicationStorageDirectory + '/arquivos/jogos.json', 
                        'jogos.txt',this.getJogosSelecionados(), {replace: true})
             .then(entry => alert(entry))
             .catch(err => alert(err));*/
    
  }

}
