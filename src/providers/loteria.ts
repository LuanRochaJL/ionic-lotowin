import { Injectable } from '@angular/core';

import { TipoJogo } from './tipo-jogo';
import { ConfiguracaoJogo } from './configuracao-jogo';
import { Utilities } from '../util/utilities';


@Injectable()
export class LoteriaProvider{
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

    constructor(private util: Utilities){
    }

    public setConfigJogoPadrao(pTipoJogo: TipoJogo) {
        this.tipoJogo = pTipoJogo;
        this.configjogo = new ConfiguracaoJogo();
        this.configjogo.qtdeJogos = pTipoJogo.getQtdJogoMin();
        this.configjogo.qtdeNumeros = pTipoJogo.getQtdNumMin();
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
		if (this.configjogo.noRepetirNumero){
			for(let i = 0; i < jogo; i++){
				check = (vJogo[i].indexOf(this.vNum)>-1);
			}
        };
        
		if(!check){
			if((vJogo[jogo].indexOf(this.vNum)>-1) ||
			   (this.checkCartela && (this.configjogo.excluidos.indexOf(this.vNum)>-1))||
			   ((this.configjogo.noSequencia) &&
			    ((vJogo[jogo].indexOf(this.vNum + 10)>-1||
			     (vJogo[jogo].indexOf(this.vNum - 10))>-1||
			     (vJogo[jogo].indexOf(this.vNum + 1)>-1)||
                 (vJogo[jogo].indexOf(this.vNum - 1)>-1))))){
				check = true;
			}
			else{
                if((!this.checkCartela) && this.configjogo.isQuadrante){
                    check = this.ValidaQuadrante();
                }
			}
		};
		return check;
    }

    GetAposta(): number[][]{
        debugger
        this.jogos = new Array(this.configjogo.qtdeJogos);
        this.checkCartela = !(this.configjogo.noRepetirNumero || this.configjogo.noSequencia); 
        if((this.configjogo.excluidos.length) + this.configjogo.qtdeNumeros > 60){
            //aposta.critica = "Quantidade de números insuficiente para jogar!";
        }
        else if((this.configjogo.escolhidos.length) > this.configjogo.qtdeNumeros){
            //aposta.critica = "Quantidade de números escolhidos para jogar excede a quantidade de número definida por jogo!";
        }
        else{
            for(let jogo = 0; jogo < this.configjogo.qtdeJogos; jogo++){
                this.checkQuadrante = [true, true, true, true];
                this.jogos[jogo] = new Array(this.configjogo.qtdeNumeros);
                for(let i = 0; i < this.configjogo.qtdeNumeros; i++){
                    do{
                        if(this.checkCartela && (this.configjogo.escolhidos.length > 0) && (i <= this.configjogo.escolhidos.length - 1)){
                            this.vNum = this.configjogo.escolhidos[i];
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