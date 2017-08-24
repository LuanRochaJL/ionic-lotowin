import { Injectable } from '@angular/core';
import { TipoJogo } from './tipo-jogo';

@Injectable()
export class ListaTipoJogoProvider{
    MegaSena = new TipoJogo('MEGA-SENA','megasena',1,6,60);
    LotoFacil = new TipoJogo('LOTOFÁCIL','lotofacil', 3,7,50);
    Quina = new TipoJogo('QUINA','quina',1,0,0);
}