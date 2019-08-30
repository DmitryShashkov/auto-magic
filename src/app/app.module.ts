import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.router';
import { HttpClientModule } from '@angular/common/http';
import { LoaderModule } from './components/shared/loader/loader.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        LoaderModule,
        RouterModule.forRoot(APP_ROUTES)
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule { }
