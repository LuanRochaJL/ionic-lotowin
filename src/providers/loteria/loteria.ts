import { Injectable } from '@angular/core';

import ConfiguracaoJogo from '../../model/configuracao-jogo';
import TipoJogo from '../../model/tipo-jogo';
import UtilitiesProvider from '../utilities/utilities';

@Injectable()
export default class LoteriaProvider {
  public configjogo: ConfiguracaoJogo;
  public chkQuadrante: number[][] = 
      [[1,2,3,4,5,11,12,13,14,15,21,22,23,24,25],
       [6,7,8,9,10,16,17,18,19,20,26,27,28,29,30],
       [31,32,33,34,35,41,42,43,44,45,51,52,53,54,55],
       [36,37,38,39,40,46,47,48,49,50,56,57,58,59,60]];
  private checkQuadrante: boolean[];
  private checkCartela: boolean;
  private vNum: number = 0;
  public tipoJogo: TipoJogo;
  private jogos: number[][];

  constructor(private util: UtilitiesProvider){
  }

  public setConfigJogoPadrao(pTipoJogo: TipoJogo) {
      this.tipoJogo = pTipoJogo;
      this.configjogo = new ConfiguracaoJogo();
      this.configjogo.QtdeJogos = pTipoJogo.getQtdJogoMin();
      this.configjogo.QtdeNumeros = pTipoJogo.getQtdNumMin();
  }

  private ValidaQuadrante(): boolean{
      let check: boolean = false;

      if (this.checkQuadrante[0]){
          check = !(this.chkQuadrante[0].indexOf(this.vNum) > -1);
          this.checkQuadrante[0] = check;
      }
      else if(this.checkQuadrante[1]){
          check = !(this.chkQuadrante[1].indexOf(this.vNum) > -1);
          this.checkQuadrante[1] = check;
      }
      else if(this.checkQuadrante[2]){
          check = !(this.chkQuadrante[2].indexOf(this.vNum) > -1);
          this.checkQuadrante[2] = check;
      }
      else if(this.checkQuadrante[3]){
          check = !(this.chkQuadrante[3].indexOf(this.vNum) > -1);
          this.checkQuadrante[3] = check;
      };
      return check;
  }

  private ValidaNumero(vJogo: number[][], jogo: number): boolean{
    let check: boolean = false;
  if (this.configjogo.NaoRepetirNumero){
    for(let i = 0; i < jogo; i++){
      check = (vJogo[i].indexOf(this.vNum)>-1);
    }
      };
      
  if(!check){
    if((vJogo[jogo].indexOf(this.vNum)>-1) ||
       (this.checkCartela && (this.configjogo.Excluidos.indexOf(this.vNum)>-1))||
       ((this.configjogo.NaoPermitirSequenciaCruz) &&
        ((vJogo[jogo].indexOf(this.vNum + 10)>-1||
         (vJogo[jogo].indexOf(this.vNum - 10))>-1||
         (vJogo[jogo].indexOf(this.vNum + 1)>-1)||
               (vJogo[jogo].indexOf(this.vNum - 1)>-1))))){
      check = true;
    }
    else{
              if((!this.checkCartela) && this.configjogo.Quadrante){
                  check = this.ValidaQuadrante();
              }
    }
  };
  return check;
  }

  GetAposta(): number[][]{
      this.jogos = new Array(this.configjogo.QtdeJogos);
      this.checkCartela = !(this.configjogo.NaoRepetirNumero || this.configjogo.NaoPermitirSequenciaCruz); 
      if((this.configjogo.Excluidos.length) + this.configjogo.QtdeNumeros > 60){
          //aposta.critica = "Quantidade de números insuficiente para jogar!";
      }
      else if((this.configjogo.Escolhidos.length) > this.configjogo.QtdeNumeros){
          //aposta.critica = "Quantidade de números escolhidos para jogar excede a quantidade de número definida por jogo!";
      }
      else{
          for(let jogo = 0; jogo < this.configjogo.QtdeJogos; jogo++){
              this.checkQuadrante = [true, true, true, true];
              this.jogos[jogo] = new Array(this.configjogo.QtdeNumeros);
              for(let i = 0; i < this.configjogo.QtdeNumeros; i++){
                  do{
                      if(this.checkCartela && (this.configjogo.Escolhidos.length > 0) && (i <= this.configjogo.Escolhidos.length - 1)){
                          this.vNum = this.configjogo.Escolhidos[i];
                      }
                      else{
                          this.vNum = this.util.getRandom(1,60);
                      }
                  }while(this.ValidaNumero(this.jogos,jogo));

                  this.jogos[jogo][i] = this.vNum;
                  
              }
              this.jogos[jogo].sort(this.util.compararNumeros);
          }
      };
      
      return this.jogos;
  }
}
