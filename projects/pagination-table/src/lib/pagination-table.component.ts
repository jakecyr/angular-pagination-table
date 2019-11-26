import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { PaginationTableService } from './pagination-table.service';
import { DataRow } from './models/data.model';
import { Header } from './models/header.model'

@Component({
    selector: 'lib-pagination-table',
    templateUrl: './pagination-table.component.html',
})
export class PaginationTableComponent implements OnChanges {

    @Input() data: DataRow[];
    @Input() headers: Header[];
    @Input() tableClasses: string;
    @Input() buttonClasses: string;
    @Input() perPage: number;

    @Output() clickRow = new EventEmitter<DataRow[]>();

    currentPage: number;
    currentData: DataRow[] = []
    maxPages: number;

    readonly defaultPerPage: number = 10;

    constructor(
        private paginationTableService: PaginationTableService,
    ) { }

    ngOnChanges() {
        this.currentPage = 0
        this.refreshTable()
    }
    incrementPage() {
        this.currentPage++;
        this.refreshTable()
    }
    decrementPage() {
        this.currentPage--;
        this.refreshTable()
    }
    private refreshTable() {
        const perPage = this.perPage || this.defaultPerPage;
        this.currentData = this.paginationTableService.getRowSet(this.data, this.currentPage, perPage)
        this.maxPages = this.paginationTableService.getMaxPages(this.data, perPage)
    }
}
