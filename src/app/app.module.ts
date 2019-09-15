import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.router';
import { HttpClientModule } from '@angular/common/http';
import { LoaderModule } from './components/shared/loader/loader.module';
import { HomeComponent } from './components/features/home/home.component';
import { CardModule } from './components/shared/card/card.module';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CardModule,
        LoaderModule,
        RouterModule.forRoot(APP_ROUTES),
    ],
    declarations: [
        HomeComponent,
        AppComponent,
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule { }
