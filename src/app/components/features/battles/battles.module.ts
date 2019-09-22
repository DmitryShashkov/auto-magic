import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BATTLES_ROUTES } from './battles.router';
import { BattlesListComponent } from './components/battles-list/battles-list.component';
import { BattlesComponent } from './battles.component';
import { BattlesService } from './battles.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(BATTLES_ROUTES),
    ],
    declarations: [
        BattlesListComponent,
        BattlesComponent,
    ],
    providers: [
        BattlesService,
    ],
})
export class BattlesModule {}
