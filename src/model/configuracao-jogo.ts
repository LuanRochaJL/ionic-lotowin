export default class ConfiguracaoJogo{
    public Escolhidos: number[] = [];
    public Excluidos: number[] = [];
    public QtdeJogos: number;
    public QtdeNumeros: number;
    public NaoRepetirNumero: boolean = false;
    public NaoPermitirSequenciaCruz: boolean = false;
    public Quadrante: boolean = false;

    constructor(){   
    }

    setQtdeJogos(qtdeJogos: number){
        this.QtdeJogos = qtdeJogos;
    }

    setQtdeNumeros(qtdeNumeros: number){
        this.QtdeNumeros = qtdeNumeros;
    }

    setNoRepetirNumero(naoRepetirNumero: boolean){
        this.NaoRepetirNumero = naoRepetirNumero;
    }

    setNoSequencia(naoPermitirSequenciaCruz: boolean){
        this.NaoPermitirSequenciaCruz = naoPermitirSequenciaCruz;
    }

    setIsQuadrante(quadrante: boolean){
        this.Quadrante = quadrante;
    }
}