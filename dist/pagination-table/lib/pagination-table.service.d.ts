import { DataRow } from './models/data.model';
export declare class PaginationTableService {
    getRowSet(data: DataRow[], page: number, perPage: number): DataRow[];
    getMaxPages(data: DataRow[], perPage: number): number;
}
