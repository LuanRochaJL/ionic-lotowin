import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { LoteriaProvider } from './../../providers/loteria';
import { adMobProvider } from './../../providers/adMob';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private indice: {rngQtde:{jogo: number,numero: number},
                   chk:{repetir: number,sequencia: number}};
  private jogos: number[][];
  private rngQtde: Array<{lblValor: string, classe: string, qtdeMin: number, qtdeMax: number, qtde: number}>;
  private chk: Array<{lblValor: string, classe: string}>;
  cartela: number[][];

  constructor(public navCtrl: NavController, 
              private loteria: LoteriaProvider, 
              private adMob: adMobProvider,
              private alertCtrl: AlertController) {
  }

  ngOnInit(){
    this.indice = {rngQtde:{jogo:0,numero:1},
                   chk:{repetir:0,sequencia:1}};
    this.rngQtde = [
        { lblValor: 'Qtde. jogos', classe: this.loteria.tipoJogo.getClasse(), qtdeMin: this.loteria.tipoJogo.getQtdJogoMin(), 
          qtdeMax: this.loteria.tipoJogo.getQtdJogoMax(), qtde: this.loteria.tipoJogo.getQtdJogoMin()},
        { lblValor: 'Qtde. numeros', classe: this.loteria.tipoJogo.getClasse(), qtdeMin: this.loteria.tipoJogo.getQtdNumMin(), 
          qtdeMax: this.loteria.tipoJogo.getQtdNumMax(), qtde: this.loteria.tipoJogo.getQtdNumMin()}
      ];
    this.chk = [
          {lblValor: 'Não Repetir n° entre jogos', classe: this.loteria.tipoJogo.getClasse()},
          {lblValor: 'Não permitir sequência de número em cruz', classe: this.loteria.tipoJogo.getClasse()}
      ];

    this.cartela = new Array(6);
    for(let linha = 0;linha<6;linha++){
        this.cartela[linha] = new Array(10);
      for(let coluna = 0;coluna < 10;coluna++){
        this.cartela[linha][coluna] = (coluna+1)+(linha*10);
      }
    }
  }

  listaNumeros() {
    debugger
    let alert = this.alertCtrl.create();
    alert.setTitle('Selecione os números!');
    for(let num = 1;num <= 60;num++){
      alert.addInput({
        type: 'checkbox',
        label: num.toString(),
        value: num.toString(),
        checked: this.loteria.configjogo.escolhidos.indexOf(num) > -1
      });
    }

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Ok',
      handler: (data: number[]) => {
        console.log('Checkbox data:', data);
        this.loteria.configjogo.escolhidos = [];
        for (let num of data){
          this.loteria.configjogo.escolhidos.push(+num);
        }
      }
    });

    alert.present();
  }

  excluirNumero(chip: number) {
    debugger
    let index = this.loteria.configjogo.escolhidos.indexOf(+chip);
    if (index > -1) {
      this.loteria.configjogo.escolhidos.splice(index, 1);
    }
  }

  GetAposta(){
    this.jogos = this.loteria.GetAposta();
    if(this.loteria.configjogo.qtdeJogos == 1){
      this.adMob.showBanner();
    }else{
      this.adMob.launchInterstitial();
    }
  }
}
