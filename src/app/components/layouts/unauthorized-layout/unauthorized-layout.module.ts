import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UNAUTHORIZED_LAYOUT_ROUTES } from './unauthorized-layout.router';
import { UnauthorizedLayoutComponent } from './unauthorized-layout.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UNAUTHORIZED_LAYOUT_ROUTES),
    ],
    declarations: [
        UnauthorizedLayoutComponent,
    ],
})
export class UnauthorizedLayoutModule { }
