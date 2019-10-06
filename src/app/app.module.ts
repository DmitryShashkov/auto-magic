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
import { BearerModule } from './core/utils/bearer/bearer.module';
import { BattlesListComponent } from './components/features/battles-list/battles-list.component';
import { BattlesEntryResolver } from './components/features/battles-entry/battles-entry.resolver';
import { BattlesEntryComponent } from './components/features/battles-entry/battles-entry.component';
import { DirectivesModule } from './directives/directives.modules';
import { PaginatorModule } from './components/shared/paginator/paginator.module';

// disclaimer: the whole app is put into one module in order for routing animations
// to work correctly on all levels;
// since the app isn't supposed to be extremely big, this solution should suffice
@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,

        CardModule,
        LoaderModule,
        BearerModule,
        DirectivesModule,
        PaginatorModule,

        RouterModule.forRoot(APP_ROUTES),
    ],
    declarations: [
        HomeComponent,
        AppComponent,

        BattlesListComponent,
        BattlesEntryComponent,
    ],
    providers: [
        BattlesEntryResolver,
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule { }
