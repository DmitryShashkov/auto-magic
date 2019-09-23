import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';
import { PaginatorModule as NGPaginatorModule } from 'primeng/paginator';

@NgModule({
    imports: [
        CommonModule,
        NGPaginatorModule,
    ],
    declarations: [
        PaginatorComponent,
    ],
    exports: [
        PaginatorComponent,
    ],
})
export class PaginatorModule {}
