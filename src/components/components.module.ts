import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { LotoLabelComponent } from './loto-label/loto-label';
import { LotoChkboxComponent } from './loto-chkbox/loto-chkbox';
import { LotoRangeComponent } from './loto-range/loto-range';
import { IonicModule } from "ionic-angular";
import { LotoBadgeComponent } from './loto-badge/loto-badge';
import { LotoChipComponent } from './loto-chip/loto-chip';
import { LotoCartelaComponent } from './loto-cartela/loto-cartela';


@NgModule({
	declarations: [
        LotoLabelComponent,
        LotoChkboxComponent,
        LotoRangeComponent,
        LotoBadgeComponent,
        LotoChipComponent,
        LotoCartelaComponent
    ],
	imports: [
        CommonModule,
        IonicModule.forRoot(LotoLabelComponent)
    ],
	exports: [
        LotoLabelComponent,
        LotoChkboxComponent,
        LotoRangeComponent,
        LotoBadgeComponent,
        LotoChipComponent,
        LotoCartelaComponent
	]
})
export class ComponentsModule {}
