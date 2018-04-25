import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import LoteriaProvider from './../../providers/loteria/loteria';
import { ResultadoPage } from './../resultado/resultado';
import UtilitiesProvider from './../../providers/utilities/utilities';
import LoteriaServiceProvider from '../../providers/loteria-service/loteria-service';
import LoteriaService from '../../model/loteria-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private indice: {
                    rngQtde:{jogo: number,numero: number},
                    chk:{repetir: number,sequencia: number,quandrante: number},
                    cartela:{escolhidos: number,excluidos: number}
                    tipoCartela:{escolhidos: boolean,excluidos: boolean}
                  };
  private rngQtde: Array<{lblValor: string, classe: string, qtdeMin: number, qtdeMax: number, qtde: number}>;
  private chk: Array<{lblValor: string, classe: string}>;
  private cartela: Array<{lblValor: string, index: boolean}>;
  private page: {imgOrigem: string};
  private ultimoJogo: LoteriaService = new LoteriaService();
  private concursoAtualCarregado: boolean = false;

  constructor(public platform: Platform,
              public navCtrl: NavController, 
              private loteria: LoteriaProvider, 
              private util: UtilitiesProvider,
  private loteriaService: LoteriaServiceProvider) {
  }

  ngOnInit(){
    this.indice = {rngQtde:{jogo:0,numero:1},
                   chk:{repetir:0,sequencia:1,quandrante:2},
                   cartela:{escolhidos: 0,excluidos: 1},
                   tipoCartela:{escolhidos: true,excluidos: false}
                  };

    this.rngQtde = [
        { lblValor: 'Jogos', classe: this.loteria.tipoJogo.getClasse(), qtdeMin: this.loteria.tipoJogo.getQtdJogoMin(), 
          qtdeMax: this.loteria.tipoJogo.getQtdJogoMax(), qtde: this.loteria.tipoJogo.getQtdJogoMin()},
        { lblValor: 'Números', classe: this.loteria.tipoJogo.getClasse(), qtdeMin: this.loteria.tipoJogo.getQtdNumMin(), 
          qtdeMax: this.loteria.tipoJogo.getQtdNumMax(), qtde: this.loteria.tipoJogo.getQtdNumMin()}
      ];

    this.chk = [
        {lblValor: 'Não Repetir n°', classe: this.loteria.tipoJogo.getClasse()},
        {lblValor: 'Não permitir sequência de número em cruz', classe: this.loteria.tipoJogo.getClasse()},
        {lblValor: 'Dividir n° em quadrantes', classe: this.loteria.tipoJogo.getClasse()}
      ];

    this.cartela = [
      { lblValor: 'Escolher n°', index: this.indice.tipoCartela.escolhidos},
      { lblValor: 'Excluir n°', index: this.indice.tipoCartela.excluidos}
    ];

    this.page = {imgOrigem: this.util.imgOrigem()}

    this.getUltimoJogo();
  }

  excluirNumero(chip: number, tipo: boolean) {
    if(tipo){
      let index = this.loteria.configjogo.Escolhidos.indexOf(+chip);
      if (index > -1) {
        this.loteria.configjogo.Escolhidos.splice(index, 1);
      }
    }else{
      let index = this.loteria.configjogo.Excluidos.indexOf(+chip);
      if (index > -1) {
        this.loteria.configjogo.Excluidos.splice(index, 1);
      }
    }
  }

  GetAposta(){
    this.navCtrl.push(ResultadoPage);
  }

  getUltimoJogo(): void {
    this.loteriaService.getUltimoJogo()
        .subscribe((data: LoteriaService) => {  
          this.ultimoJogo = data; 
          this.ultimoJogo.resultadoSeparado = this.ultimoJogo.resultadoOrdenado.split("-", this.loteria.tipoJogo.getQtdNumMin()); 
          this.concursoAtualCarregado = true;
        }/*,
      error => console.log(error)*/);
  }

  trocaConcursoAtual(){
    this.concursoAtualCarregado = !this.concursoAtualCarregado ;
  }
}
