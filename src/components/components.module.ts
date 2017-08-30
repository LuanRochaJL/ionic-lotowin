import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ListaJogoComponent } from './lista-jogo/lista-jogo';
import { LotoLabelComponent } from './loto-label/loto-label';
import { LotoChkboxComponent } from './loto-chkbox/loto-chkbox';
import { LotoRangeComponent } from './loto-range/loto-range';
import { IonicModule } from "ionic-angular";
import { LotoBadgeComponent } from './loto-badge/loto-badge';


@NgModule({
	declarations: [
        ListaJogoComponent,
        LotoLabelComponent,
        LotoChkboxComponent,
        LotoRangeComponent,
        LotoBadgeComponent
    ],
	imports: [
        CommonModule,
        IonicModule.forRoot(LotoLabelComponent)
    ],
	exports: [
		ListaJogoComponent,
        LotoLabelComponent,
        LotoChkboxComponent,
        LotoRangeComponent,
        LotoBadgeComponent
	]
})
export class ComponentsModule {}
