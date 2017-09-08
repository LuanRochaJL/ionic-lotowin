import { Platform } from "ionic-angular";

export class Utilities {

    constructor() {
          
    }

    compararNumeros(a, b) {
        return a - b;
    }

    imgOrigem(platform: Platform): string{
        let origem: string = "assets/img/"; 
        if(platform.is('core')){
            origem = "../../" + origem;
        }
        return origem;
    }
}