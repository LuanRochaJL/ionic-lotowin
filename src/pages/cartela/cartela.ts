import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { LoteriaProvider } from "../../providers/loteria";

@Component({
  selector: 'page-cartela',
  templateUrl: 'cartela.html',
})
export class CartelaPage {
  cartela: number[][];

  constructor(public navCtrl: NavController, 
              private loteria: LoteriaProvider,
              private alertCtrl: AlertController) {
  }

  ngOnInit(){
    this.cartela = new Array(6);
    for(let linha = 0;linha<6;linha++){
        this.cartela[linha] = new Array(10);
      for(let coluna = 0;coluna < 10;coluna++){
        this.cartela[linha][coluna] = (coluna+1)+(linha*10);
      }
    }
  }

  doCheckbox() {
    debugger
    let alert = this.alertCtrl.create();
    alert.setTitle('Selecione os números!');
    for(let num = 1;num <= 60;num++){
      alert.addInput({
        type: 'checkbox',
        label: num.toString(),
        value: num.toString(),
        checked: this.loteria.configjogo.escolhidos.indexOf(num) > -1
      });
    }

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Ok',
      handler: (data: number[]) => {
        console.log('Checkbox data:', data);
        this.loteria.configjogo.escolhidos = [];
        for (let num of data){
          this.loteria.configjogo.escolhidos.push(+num);
        }
      }
    });

    alert.present();
  }

  excluirNumero(chip: number) {
    debugger
    let index = this.loteria.configjogo.escolhidos.indexOf(+chip);
    if (index > -1) {
      this.loteria.configjogo.escolhidos.splice(index, 1);
    }
  }

  SetNumCartela(evento){
    debugger
    let num = +evento.target.attributes.id.nodeValue;
    let indexEscolhido = this.loteria.configjogo.escolhidos.indexOf(num);
    let indexExcluido = this.loteria.configjogo.excluidos.indexOf(num);
    
    if(indexEscolhido > -1){
      this.loteria.configjogo.escolhidos.splice(indexEscolhido, 1);
      this.loteria.configjogo.excluidos.push(num);
      evento.target.classList.remove('cartela-escolhido-'+this.loteria.tipoJogo.getClasse());
      evento.target.classList.add('cartela-excluido-'+this.loteria.tipoJogo.getClasse());
    }else if(indexExcluido > -1){
      this.loteria.configjogo.excluidos.splice(indexEscolhido, 1);
      evento.target.classList.remove('cartela-excluido-'+this.loteria.tipoJogo.getClasse());
    }else{
      this.loteria.configjogo.escolhidos.push(num);
      evento.target.classList.add('cartela-escolhido-'+this.loteria.tipoJogo.getClasse());
    }
  }

}
