import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './loader.interceptor';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        LoaderComponent,
    ],
    exports: [
        LoaderComponent,
    ],
    entryComponents: [
        LoaderComponent,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoaderInterceptor,
            multi: true,
        },
    ],
})
export class LoaderModule { }
