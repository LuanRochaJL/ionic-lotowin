import { NgModule } from '@angular/core';
import { ListaJogoComponent } from './lista-jogo/lista-jogo';
import { ListaChipsComponent } from './lista-chips/lista-chips';
@NgModule({
	declarations: [ListaJogoComponent,
    ListaChipsComponent],
	imports: [],
	exports: [
		ListaJogoComponent,
    ListaChipsComponent,
	]
})
export class ComponentsModule {}
