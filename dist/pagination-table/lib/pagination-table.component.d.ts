import { EventEmitter, OnChanges } from '@angular/core';
import { PaginationTableService } from './pagination-table.service';
import { DataRow } from './models/data.model';
import { Header } from './models/header.model';
export declare class PaginationTableComponent implements OnChanges {
    private paginationTableService;
    data: DataRow[];
    headers: Header[];
    tableClasses: string;
    buttonClasses: string;
    perPage: number;
    clickRow: EventEmitter<DataRow[]>;
    currentPage: number;
    currentData: DataRow[];
    maxPages: number;
    readonly defaultPerPage: number;
    constructor(paginationTableService: PaginationTableService);
    ngOnChanges(): void;
    incrementPage(): void;
    decrementPage(): void;
    private refreshTable;
}
