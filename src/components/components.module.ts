import { NgModule } from '@angular/core';
import { ListaJogoComponent } from './lista-jogo/lista-jogo';
import { SeletorQtdeComponent } from './seletor-qtde/seletor-qtde';
@NgModule({
	declarations: [ListaJogoComponent,
    SeletorQtdeComponent],
	imports: [],
	exports: [
		ListaJogoComponent,
		SeletorQtdeComponent
	]
})
export class ComponentsModule {}
