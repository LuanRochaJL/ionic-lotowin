export class TipoJogo{
    private modalidade: string;
    private classe: string;
    private qtdJogoMin: number;
    private qtdJogoMax: number;
    private qtdNumMin: number;
    private qtdNumMax: number;
    private qtdNum: number;
    private preco:number;

    constructor(_modalidade: string, _classe: string, _qtdJogoMin: number, 
                _qtdJogoMax: number, _qtdNumMin: number, _qtdNumMax: number, 
                _qtdNum: number, _preco: number) {
        this.modalidade = _modalidade;
        this.classe = _classe;
        this.qtdJogoMin = _qtdJogoMin;
        this.qtdJogoMax = _qtdJogoMax;
        this.qtdNumMin = _qtdNumMin;
        this.qtdNumMax = _qtdNumMax;
        this.qtdNum = _qtdNum;
        this.preco = _preco;
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

    public getQtdJogoMax(): number{
        return this.qtdJogoMax;
    }

    public getQtdNumMin(): number{
        return this.qtdNumMin;
    }

    public getQtdNumMax(): number{
        return this.qtdNumMax;
    }

    public getQtdNum(): number{
        return this.qtdNum;
    }
};