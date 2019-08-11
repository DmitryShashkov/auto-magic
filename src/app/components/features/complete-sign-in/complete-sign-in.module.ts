import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { COMPLETE_SIGN_IN_ROUTES } from './complete-sign-in.router';
import { CompleteSignInComponent } from './complete-sign-in.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(COMPLETE_SIGN_IN_ROUTES),
    ],
    declarations: [
        CompleteSignInComponent,
    ],
})
export class CompleteSignInModule { }
