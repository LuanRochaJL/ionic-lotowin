export class TipoJogo{
    private modalidade: string;
    private qtdJogoMin: number;
    private qtdNumMin: number;
    private qtdNumTot: number;

    constructor(_modalidade: string, _QtdJogoMin: number, _QtdNumMin: number, _QtdNumTot: number) {
        this.modalidade = _modalidade;
        this.qtdJogoMin = _QtdJogoMin;
        this.qtdNumMin = _QtdNumMin;
        this.qtdNumTot = _QtdNumTot;
    }

    public getModalidade(): string{
        return this.modalidade;
    }

    public getQtdJogoMin(): number{
        return this.qtdJogoMin;
    }

    public getQtdNumMin(): number{
        return this.qtdNumMin;
    }

    public getQtdNumTot(): number{
        return this.qtdNumTot;
    }
};