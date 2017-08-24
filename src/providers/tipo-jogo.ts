export class TipoJogo{
    private modalidade: string;
    private classe: string;
    private qtdJogoMin: number;
    private qtdNumMin: number;
    private qtdNumTot: number;

    constructor(_modalidade: string, _classe: string, _qtdJogoMin: number, _qtdNumMin: number, _qtdNumTot: number) {
        this.modalidade = _modalidade;
        this.classe = _classe;
        this.qtdJogoMin = _qtdJogoMin;
        this.qtdNumMin = _qtdNumMin;
        this.qtdNumTot = _qtdNumTot;
    }

    public getModalidade(): string{
        return this.modalidade;
    }

    public getClasse(): string{
        return this.classe;
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