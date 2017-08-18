import { ListaTipoJogo } from './../../providers/lista-tipo-jogo';
import { Loteria } from './../../providers/loteria';
import { TipoJogo } from './../../providers/tipo-jogo';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private tipojogo: TipoJogo;
  private loteria: Loteria;
  title: string;
  constructor(public navCtrl: NavController) {
    this.tipojogo = ListaTipoJogo.MegaSena;
    this.loteria = new Loteria(ListaTipoJogo.MegaSena);
  }

  teste(){
    alert(this.loteria.GetAposta())
  }

}
