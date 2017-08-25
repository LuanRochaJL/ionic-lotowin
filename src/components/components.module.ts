import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ListaJogoComponent } from './lista-jogo/lista-jogo';
import { ListaChipsComponent } from './lista-chips/lista-chips';
import { LotoLabelComponent } from './loto-label/loto-label';
import { LotoChkboxComponent } from './loto-chkbox/loto-chkbox';
import { LotoRangeComponent } from './loto-range/loto-range';
import { IonicModule } from "ionic-angular";


@NgModule({
	declarations: [
        ListaJogoComponent,
        ListaChipsComponent,
        LotoLabelComponent,
        LotoChkboxComponent,
        LotoRangeComponent
    ],
	imports: [
        CommonModule,
        IonicModule.forRoot(LotoLabelComponent)
    ],
	exports: [
		ListaJogoComponent,
        ListaChipsComponent,
        LotoLabelComponent,
        LotoChkboxComponent,
        LotoRangeComponent
	]
})
export class ComponentsModule {}
