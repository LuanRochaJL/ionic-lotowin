export class ConfiguracaoJogo{
    private escolhidos: string[] = [];
    private excluidos: string[] = [];
    private qtdeJogo;
    private qtdeNumeros;
    private repetirNumero: boolean;
    private noSequencia: boolean;

    public getEscolhidos(): string[] {
        return this.escolhidos;
    }

    public setEscolhidos(escolhidos: string[]) {
        this.escolhidos = escolhidos;
    }

    public getExcluidos(): string[] {
        return this.excluidos;
    }

    public setExcluidos(excluidos: string[]) {
        this.excluidos = excluidos;
    }

    public getQtdeJogo(){
        return this.qtdeJogo;
    }

    public setQtdeJogo(qtdeJogo){
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

    constructor(){}
}