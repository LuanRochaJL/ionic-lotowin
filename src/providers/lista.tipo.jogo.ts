import { Injectable } from '@angular/core';
import { TipoJogo } from '../model/tipo.jogo';

@Injectable()
export class ListaTipoJogoProvider{
    MegaSena = new TipoJogo('MEGA-SENA', 'megasena', 1 , 10, 6, 16, 60, 3.50);
    LotoFacil = new TipoJogo('LOTOFÁCIL','lotofacil', 3, 12, 7, 8, 50, 3.50);
    Quina = new TipoJogo('QUINA','quina',1, 13, 0, 0, 0, 3.50);
}