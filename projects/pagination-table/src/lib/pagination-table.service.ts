import { Injectable } from '@angular/core';
import { DataRow } from './models/data.model';

@Injectable({
    providedIn: 'root'
})
export class PaginationTableService {

    getRowSet(data: DataRow[], page: number, perPage: number): DataRow[] {
        let set = []
        const start = page * perPage

        if (data && data.length > 0) {
            set = data.slice(start, start + perPage)
        }

        return set;
    }
    getMaxPages(data: DataRow[], perPage: number): number {
        let pages = 0

        if (data && data.length > 0) {
            pages = Math.ceil(data.length / perPage)
        }

        return pages;
    }
}
