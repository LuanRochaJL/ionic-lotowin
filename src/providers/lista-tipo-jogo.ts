import { Injectable } from '@angular/core';
import { TipoJogo } from './tipo-jogo';

@Injectable()
export class ListaTipoJogoProvider{
    MegaSena = new TipoJogo('MEGA-SENA',1,6,60);
    LotoFacil = new TipoJogo('LOTOFÁCIL', 3,7,50);
    Quina = new TipoJogo('QUINA',1,0,0);
}