import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { LoteriaProvider } from './../../providers/loteria';
import { ResultadoPage } from './../resultado/resultado';
import { Utilities } from "../../util/utilities";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private indice: {
                    rngQtde:{jogo: number,numero: number},
                    chk:{repetir: number,sequencia: number},
                    cartela:{escolhidos: number,excluidos: number}
                    tipoCartela:{escolhidos: boolean,excluidos: boolean}
                  };
  private rngQtde: Array<{lblValor: string, classe: string, qtdeMin: number, qtdeMax: number, qtde: number}>;
  private chk: Array<{lblValor: string, classe: string}>;
  private cartela: Array<{lblValor: string, index: boolean, disable: boolean}>;
  private page: {imgOrigem: string};

  constructor(public platform: Platform,
              public navCtrl: NavController, 
              private loteria: LoteriaProvider, 
              private util: Utilities) {
  }

  ngOnInit(){
    this.indice = {rngQtde:{jogo:0,numero:1},
                   chk:{repetir:0,sequencia:1},
                   cartela:{escolhidos: 0,excluidos: 1},
                   tipoCartela:{escolhidos: true,excluidos: false}
                  };

    this.rngQtde = [
        { lblValor: 'Qtde. jogos', classe: this.loteria.tipoJogo.getClasse(), qtdeMin: this.loteria.tipoJogo.getQtdJogoMin(), 
          qtdeMax: this.loteria.tipoJogo.getQtdJogoMax(), qtde: this.loteria.tipoJogo.getQtdJogoMin()},
        { lblValor: 'Qtde. números', classe: this.loteria.tipoJogo.getClasse(), qtdeMin: this.loteria.tipoJogo.getQtdNumMin(), 
          qtdeMax: this.loteria.tipoJogo.getQtdNumMax(), qtde: this.loteria.tipoJogo.getQtdNumMin()}
      ];

    this.chk = [
        {lblValor: 'Não Repetir n° entre jogos', classe: this.loteria.tipoJogo.getClasse()},
        {lblValor: 'Não permitir sequência de número em cruz', classe: this.loteria.tipoJogo.getClasse()}
      ];

    let disable = this.loteria.configjogo.noRepetirNumero || this.loteria.configjogo.noSequencia;
    this.cartela = [
      { lblValor: 'Números selecionados', index: this.indice.tipoCartela.escolhidos, disable: disable},
      { lblValor: 'Números excluídos', index: this.indice.tipoCartela.excluidos, disable: disable}
    ];

    this.page = {imgOrigem: this.util.imgOrigem(this.platform)}
  }

  excluirNumero(chip: number, tipo: boolean) {
    if(tipo){
      let index = this.loteria.configjogo.escolhidos.indexOf(+chip);
      if (index > -1) {
        this.loteria.configjogo.escolhidos.splice(index, 1);
      }
    }else{
      let index = this.loteria.configjogo.excluidos.indexOf(+chip);
      if (index > -1) {
        this.loteria.configjogo.excluidos.splice(index, 1);
      }
    }
  }

  GetAposta(){
    this.navCtrl.push(ResultadoPage);
  }
}
