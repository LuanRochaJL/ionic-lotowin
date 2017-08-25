import { Injectable } from '@angular/core';
import { Jogo } from './jogo';
import { TipoJogo } from './tipo-jogo';
import { ConfiguracaoJogo } from './configuracao-jogo';


@Injectable()
export class LoteriaProvider{
    public configjogo: ConfiguracaoJogo;
    private chkQuadrante: number[][] = 
        [[1,2,3,4,5,11,12,13,14,15,21,22,23,24,25],
         [6,7,8,9,10,16,17,18,19,20,26,27,28,29,30],
         [31,32,33,34,35,41,42,43,44,45,51,52,53,54,55],
         [36,37,38,39,40,46,47,48,49,50,56,57,58,59,60]];
    private checkQuadrante: boolean[] = [false, false, false, false];
    private vNum = 0;
    public tipoJogo: TipoJogo;

    constructor(){
    }
    
    getRandom(min, max) {
        return Math.floor(Math.random() * ((max+1) - min) + min);
    } 

    public setConfigJogoPadrao(pTipoJogo: TipoJogo) {
        this.tipoJogo = pTipoJogo;
        this.configjogo = new ConfiguracaoJogo();
        //this.configjogo.escolhidos = new Array(1,3,5);
        //this.configjogo.excluidos = new Array();
        
        this.configjogo.qtdeJogos = pTipoJogo.getQtdJogoMin();
        this.configjogo.qtdeNumeros = pTipoJogo.getQtdNumMin();
    }

    private ValidaQuadrante(): boolean{
        let check: boolean = false;

        if (!this.checkQuadrante[0]){
            check = this.chkQuadrante[0].indexOf(this.vNum) > -1;
            this.checkQuadrante[0] = check;
        }
        else if(!this.checkQuadrante[1]){
            check = this.chkQuadrante[1].indexOf(this.vNum) > -1;
            this.checkQuadrante[1] = check;
        }
        else if(!this.checkQuadrante[2]){
            check = this.chkQuadrante[2].indexOf(this.vNum) > -1;
            this.checkQuadrante[2] = check;
        }
        else if(!this.checkQuadrante[3]){
            check = this.chkQuadrante[3].indexOf(this.vNum) > -1;
            this.checkQuadrante[3] = check;
        };
        return check;
    }

    private ValidaNumero(vJogo: number[][], jogo: number): boolean{
	    let check: boolean = false;
		debugger
		if (this.configjogo.noRepetirNumero){
			for(let i = 0; i < jogo; i++){
				check = (vJogo[i].indexOf(this.vNum)>-1);
			}
        };
        
		if(!check){
			if((vJogo[jogo].indexOf(this.vNum)>-1) ||
			   (this.configjogo.excluidos.indexOf(this.vNum)>-1)||
			   ((this.configjogo.noSequencia) &&
			    ((vJogo[jogo].indexOf(this.vNum + 10)>-1||
			     (vJogo[jogo].indexOf(this.vNum - 10))>-1||
			     (vJogo[jogo].indexOf(this.vNum + 1)>-1)||
                 (vJogo[jogo].indexOf(this.vNum - 1)>-1))))){
				check = true;
			}
			else{
				check = false;//this.ValidaQuadrante();
			}
		};
		return check;
    }

    compararNumeros(a, b) {
        return a - b;
    }

    GetAposta(): number[][]{
        let aposta = new Jogo();
        
        aposta.jogos = new Array(this.configjogo.qtdeJogos);
        if((this.configjogo.excluidos.length) + this.configjogo.qtdeNumeros > 60){
            aposta.critica = "Quantidade de números insuficiente para jogar!";
        }
        else if((this.configjogo.escolhidos.length) > this.configjogo.qtdeNumeros){
            aposta.critica = "Quantidade de números escolhidos para jogar excede a quantidade de número definida por jogo!";
        }
        else{
            for(let jogo = 0; jogo < this.configjogo.qtdeJogos; jogo++){
                debugger
                aposta.jogos[jogo] = new Array(this.configjogo.qtdeNumeros);
                for(let i = 0; i < this.configjogo.qtdeNumeros; i++){
                    do{
                        if((this.configjogo.escolhidos.length > 0) && (i <= this.configjogo.escolhidos.length - 1)){
                            this.vNum = this.configjogo.escolhidos[i];
                        }
                        else{
                            this.vNum = this.getRandom(1,60);
                        }
                    }while(this.ValidaNumero(aposta.jogos,jogo));

                    aposta.jogos[jogo][i] = this.vNum;
                    aposta.jogo += this.vNum + " - ";
                    
                }
                aposta.jogos[jogo].sort(this.compararNumeros);
                aposta.jogo += "\n";
            }
            aposta.valido = true;
        };
        
        return aposta.jogos;
    }
}