import { Jogo } from './jogo';
import { TipoJogo } from './tipo-jogo';
import { ConfiguracaoJogo } from './configuracao-jogo';

export class Loteria{
    private configjogo: ConfiguracaoJogo;
    private chkQuadrante: number[][] = 
        [[1,2,3,4,5,11,12,13,14,15,21,22,23,24,25],
         [6,7,8,9,10,16,17,18,19,20,26,27,28,29,30],
         [31,32,33,34,35,41,42,43,44,45,51,52,53,54,55],
         [36,37,38,39,40,46,47,48,49,50,56,57,58,59,60]];
    private checkQuadrante: boolean[] = [false, false, false, false];
    //private vQtdeJogo = '0';
    private vNum = 0;
    //private vJogo: string[60] = [''];
    public tipoJogo: TipoJogo;
    
    getRandom(min, max) {
        return Math.floor(Math.random() * ((max+1) - min) + min);
    } 
    public setConfigJogoPadrao(pTipoJogo: TipoJogo) {
        this.configjogo = new ConfiguracaoJogo();
        //this.configjogo.escolhidos = new ArrayList<Byte>();
        //this.configjogo.excluidos = new ArrayList<Byte>();
        
        this.configjogo.setQtdeJogo(pTipoJogo.getQtdJogoMin());
        this.configjogo.setQtdeNumeros(pTipoJogo.getQtdNumMin());
        this.configjogo.setRepetirNumero(true);
        this.configjogo.setNoSequencia(true);
        //this.vJogo = number[this.configjogo.getQtdeNumeros];
    }

    public setQtdeJogos(pQtdeJogo) {
        this.configjogo.setQtdeJogo(pQtdeJogo);
    }

    public setQtdeNumeros(pQtdeNumero) {
        this.configjogo.setQtdeNumeros(pQtdeNumero);
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
	    let check: boolean = true;
		
		if ((!this.configjogo.getRepetirNumero()) && (this.configjogo.getQtdeJogo() > 0)){
			for(let i = 1; i == this.configjogo.getQtdeJogo(); i++){
				check = !(vJogo[i].indexOf(this.vNum)>-1);
			}
        };
        
		if(check){
			if((vJogo[jogo].indexOf(this.vNum)>-1) ||
			   (this.configjogo.getExcluidos().indexOf(this.vNum)>-1)||
			   ((this.configjogo.getNoSequencia()) &&
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

    constructor(pTipoJogo: TipoJogo){
        this.setConfigJogoPadrao(pTipoJogo);
    }

    compararNumeros(a, b) {
        return a - b;
    }

    GetAposta(): number[][]{
        let aposta = new Jogo();
        
        aposta.jogos.length = this.configjogo.getQtdeJogo();
        if((this.configjogo.getExcluidos().length) + this.configjogo.getQtdeNumeros() > 60){
            aposta.critica = "Quantidade de números insuficiente para jogar!";
        }
        else if((this.configjogo.getEscolhidos().length) > this.configjogo.getQtdeNumeros()){
            aposta.critica = "Quantidade de números escolhidos para jogar excede a quantidade de número definida por jogo!";
        }
        else{
            for(let jogo = 0; jogo < this.configjogo.getQtdeJogo(); jogo++){
                aposta.jogos[jogo].length = this.configjogo.getQtdeNumeros();
                for(let i = 0; i < this.configjogo.getQtdeNumeros(); i++){
                    do{
                        if((this.configjogo.getEscolhidos().length > 0) && (i <= this.configjogo.getEscolhidos().length)){
                            this.vNum = this.configjogo.getEscolhidos()[i - 1];
                        }
                        else{
                            this.vNum = this.getRandom(1,60);
                        }
                    }while(this.ValidaNumero(aposta.jogos,jogo));

                    //this.vJogo[jogo] += this.vNum;
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