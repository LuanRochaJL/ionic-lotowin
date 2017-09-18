export class ConfiguracaoJogo{
    public escolhidos: number[] = [];
    public excluidos: number[] = [];
    public qtdeJogos: number;
    public qtdeNumeros: number;
    public noRepetirNumero: boolean = false;
    public noSequencia: boolean = false;
    public isQuadrante: boolean = false;

    constructor(){   
    }

    setQtdeJogos(_qtdeJogos: number){
        this.qtdeJogos = _qtdeJogos;
    }

    setQtdeNumeros(_qtdeNumeros: number){
        this.qtdeNumeros = _qtdeNumeros;
    }

    setNoRepetirNumero(_noRepetirNumero: boolean){
        this.noRepetirNumero = _noRepetirNumero;
    }

    setNoSequencia(_noSequencia: boolean){
        this.noSequencia = _noSequencia;
    }

    setIsQuadrante(_isQuadrante: boolean){
        this.isQuadrante = _isQuadrante;
    }
}