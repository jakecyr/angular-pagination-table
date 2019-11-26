import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaginationTableModule } from 'pagination-table/public-api';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        PaginationTableModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
