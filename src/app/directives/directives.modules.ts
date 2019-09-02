import { NgModule } from '@angular/core';
import { ProgressiveImageDirective } from './progressive-image/progressive-image.directive';

@NgModule({
    declarations: [
        ProgressiveImageDirective,
    ],
    exports: [
        ProgressiveImageDirective,
    ],
})
export class DirectivesModule { }
