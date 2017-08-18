export class TipoJogo{
    private qtdJogoMin;
    private qtdNumMin;
    private qtdNumTot;

    constructor(pQtdJogoMin: string, pQtdNumMin: string, pQtdNumTot: string) {
        this.qtdJogoMin = pQtdJogoMin;
        this.qtdNumMin = pQtdNumMin;
        this.qtdNumTot = pQtdNumTot;
    }

    public getQtdJogoMin(){
        return this.qtdJogoMin;
    }

    public getQtdNumMin(){
        return this.qtdNumMin;
    }

    public getQtdNumTot(){
        return this.qtdNumTot;
    }
};