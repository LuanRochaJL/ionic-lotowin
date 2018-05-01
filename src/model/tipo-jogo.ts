export default class TipoJogo{
    
    constructor(
        private Modalidade: string,
        private Classe: string,
        private QtdJogoMin: number,
        private QtdJogoMax: number,
        private QtdNumMin: number,
        private QtdNumMax: number,
        private QtdNum: number,
        private Preco:number,
        private Url: string,
        private Cor: string
    ) {
    }

    public getModalidade(): string{
        return this.Modalidade;
    }

    public getClasse(): string{
        return this.Classe;
    }

    public getQtdJogoMin(): number{
        return this.QtdJogoMin;
    }

    public getQtdJogoMax(): number{
        return this.QtdJogoMax;
    }

    public getQtdNumMin(): number{
        return this.QtdNumMin;
    }

    public getQtdNumMax(): number{
        return this.QtdNumMax;
    }

    public getQtdNum(): number{
        return this.QtdNum;
    }

    public getPreco(): number{
        return this.Preco;
    }

    public getUrl(): string{
        return this.Url;
    }

    public getCor(): string{
        return this.Cor;
    }
};