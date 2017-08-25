export class ConfiguracaoJogo{
    escolhidos: number[] = [];
    private excluidos: number[] = [];
    private qtdeJogo;
    private qtdeNumeros;
    private repetirNumero: boolean;
    private noSequencia: boolean;

    constructor(){   
    }

    public getEscolhidos(): number[] {
        return this.escolhidos;
    }

    public setEscolhidos(escolhidos: number[]) {
        this.escolhidos = escolhidos;
    }

    public getExcluidos(): number[] {
        return this.excluidos;
    }

    public setExcluidos(excluidos: number[]) {
        this.excluidos = excluidos;
    }

    public getQtdeJogos(){
        return this.qtdeJogo;
    }

    public setQtdeJogos(qtdeJogo){
        this.qtdeJogo = qtdeJogo;
    }

    public getQtdeNumeros(){
        return this.qtdeNumeros;
    }

    public setQtdeNumeros(qtdeNumeros){
        this.qtdeNumeros = qtdeNumeros;
    }

    public getNoSequencia(): boolean {
        return this.noSequencia;
    }

    public setNoSequencia(noSequencia: boolean) {
        this.noSequencia = noSequencia;
    }

    public getRepetirNumero(): boolean {
        return this.repetirNumero;
    }

    public setRepetirNumero(repetirNumero: boolean) {
        this.repetirNumero = repetirNumero;
    }
}