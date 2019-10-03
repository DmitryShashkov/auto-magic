import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BATTLES_ROUTES } from './battles.router';
import { BattlesListComponent } from './components/battles-list/battles-list.component';
import { BattlesComponent } from './battles.component';
import { BattlesService } from './battles.service';
import { PaginatorModule } from '../../shared/paginator/paginator.module';
import { DirectivesModule } from 'src/app/directives/directives.modules';
import { BattlesEntryComponent } from './components/battles-entry/battles-entry.component';

@NgModule({
    imports: [
        CommonModule,
        PaginatorModule,
        DirectivesModule,
        RouterModule.forChild(BATTLES_ROUTES),
    ],
    declarations: [
        BattlesListComponent,
        BattlesEntryComponent,
        BattlesComponent,
    ],
    providers: [
        BattlesService,
    ],
})
export class BattlesModule {}
