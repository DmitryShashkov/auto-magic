import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BATTLES_ROUTES } from './battles.router';
import { BattlesListComponent } from './components/battles-list/battles-list.component';
import { BattlesComponent } from './battles.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(BATTLES_ROUTES),
    ],
    declarations: [
        BattlesListComponent,
        BattlesComponent,
    ],
})
export class BattlesModule {}
