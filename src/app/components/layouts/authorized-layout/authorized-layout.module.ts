import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AUTHORIZED_LAYOUT_ROUTES } from './authorized-layout.router';
import { AuthorizedLayoutComponent } from './authorized-layout.component';
import { AuthorizedGuard } from 'src/app/core/guards/authorized.guards';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AUTHORIZED_LAYOUT_ROUTES),
    ],
    declarations: [
        AuthorizedLayoutComponent,
    ],
    providers: [
        AuthorizedGuard,
    ]
})
export class AuthorizedLayoutModule { }
