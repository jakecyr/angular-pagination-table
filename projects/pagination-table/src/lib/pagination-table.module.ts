import { NgModule } from '@angular/core';
import { PaginationTableComponent } from './pagination-table.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        PaginationTableComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        PaginationTableComponent,
    ],
})
export class PaginationTableModule { }
