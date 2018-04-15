import { Platform } from "ionic-angular";
import { Injectable } from "@angular/core";

@Injectable()
export class Utilities {

    constructor() {
    }
    
    getRandom(min, max) {
        return Math.floor(Math.random() * ((max+1) - min) + min);
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