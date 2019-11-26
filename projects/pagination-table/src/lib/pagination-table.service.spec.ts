import { TestBed } from '@angular/core/testing';
import { PaginationTableService } from './pagination-table.service';
import { DataRow } from './models/data.model';

describe('PaginationTableService', () => {
    beforeEach(() => TestBed.configureTestingModule({}))

    it('should be created', () => {
        const service: PaginationTableService = TestBed.get(PaginationTableService)
        expect(service).toBeTruthy()
    })

    it('should return a row set', () => {
        const service: PaginationTableService = TestBed.get(PaginationTableService)

        const rows: DataRow[] = [
            { item: 1, title: 'Test item 1' },
            { item: 2, title: 'Test item 2' },
            { item: 3, title: 'Test item 3' },
            { item: 4, title: 'Test item 4' },
        ]

        expect(service.getRowSet(rows, 0, 2))
            .toEqual([
                { item: 1, title: 'Test item 1' },
                { item: 2, title: 'Test item 2' },
            ])

        expect(service.getRowSet(rows, 1, 2))
            .toEqual([
                { item: 3, title: 'Test item 3' },
                { item: 4, title: 'Test item 4' },
            ])
    })

    it('should return the max number of pages', () => {
        const service: PaginationTableService = TestBed.get(PaginationTableService)

        const rows: DataRow[] = [
            { item: 1, title: 'Test item 1' },
            { item: 2, title: 'Test item 2' },
            { item: 3, title: 'Test item 3' },
            { item: 4, title: 'Test item 4' },
        ]

        expect(service.getMaxPages(rows, 2))
            .toEqual(2)
    })

    it('should return 0 for the max number of pages when the data set is null / undefined', () => {
        const service: PaginationTableService = TestBed.get(PaginationTableService)

        expect(service.getMaxPages(null, 2)).toEqual(0)
        expect(service.getMaxPages(undefined, 2)).toEqual(0)
    })

    it('should return 0 for max number of pages when array is empty', () => {
        const service: PaginationTableService = TestBed.get(PaginationTableService)
    
        expect(service.getMaxPages([], 2))
            .toEqual(0)
    })
})
