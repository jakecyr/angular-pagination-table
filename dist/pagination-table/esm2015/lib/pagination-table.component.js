/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PaginationTableService } from './pagination-table.service';
export class PaginationTableComponent {
    /**
     * @param {?} paginationTableService
     */
    constructor(paginationTableService) {
        this.paginationTableService = paginationTableService;
        this.clickRow = new EventEmitter();
        this.currentData = [];
        this.defaultPerPage = 10;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.currentPage = 0;
        this.refreshTable();
    }
    /**
     * @return {?}
     */
    incrementPage() {
        this.currentPage++;
        this.refreshTable();
    }
    /**
     * @return {?}
     */
    decrementPage() {
        this.currentPage--;
        this.refreshTable();
    }
    /**
     * @private
     * @return {?}
     */
    refreshTable() {
        /** @type {?} */
        const perPage = this.perPage || this.defaultPerPage;
        this.currentData = this.paginationTableService.getRowSet(this.data, this.currentPage, perPage);
        this.maxPages = this.paginationTableService.getMaxPages(this.data, perPage);
    }
}
PaginationTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-pagination-table',
                template: "<div *ngIf=\"data && headers\">\n    <table [class]=\"tableClasses\">\n        <thead>\n            <tr>\n                <th *ngFor=\"let header of headers\">{{ header.title || header.key }}</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let row of currentData\">\n                <td *ngFor=\"let header of headers\">{{ row[header.key] }}</td>\n            </tr>\n        </tbody>\n    </table>\n\n    <div class=\"\">\n        <button [class]=\"buttonClasses\" [disabled]=\"currentPage == 0 || maxPages == 0\" (click)=\"decrementPage()\">Previous</button>\n        <button [class]=\"buttonClasses\" [disabled]=\"currentPage == (maxPages - 1) || maxPages == 0\" (click)=\"incrementPage()\">Next</button>\n    </div>\n</div>\n"
            }] }
];
/** @nocollapse */
PaginationTableComponent.ctorParameters = () => [
    { type: PaginationTableService }
];
PaginationTableComponent.propDecorators = {
    data: [{ type: Input }],
    headers: [{ type: Input }],
    tableClasses: [{ type: Input }],
    buttonClasses: [{ type: Input }],
    perPage: [{ type: Input }],
    clickRow: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    PaginationTableComponent.prototype.data;
    /** @type {?} */
    PaginationTableComponent.prototype.headers;
    /** @type {?} */
    PaginationTableComponent.prototype.tableClasses;
    /** @type {?} */
    PaginationTableComponent.prototype.buttonClasses;
    /** @type {?} */
    PaginationTableComponent.prototype.perPage;
    /** @type {?} */
    PaginationTableComponent.prototype.clickRow;
    /** @type {?} */
    PaginationTableComponent.prototype.currentPage;
    /** @type {?} */
    PaginationTableComponent.prototype.currentData;
    /** @type {?} */
    PaginationTableComponent.prototype.maxPages;
    /** @type {?} */
    PaginationTableComponent.prototype.defaultPerPage;
    /**
     * @type {?}
     * @private
     */
    PaginationTableComponent.prototype.paginationTableService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AamFrZWN5ci9wYWdpbmF0aW9uLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL3BhZ2luYXRpb24tdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRWxGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBUXBFLE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFnQmpDLFlBQ1ksc0JBQThDO1FBQTlDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFUaEQsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFHbkQsZ0JBQVcsR0FBYyxFQUFFLENBQUE7UUFHbEIsbUJBQWMsR0FBVyxFQUFFLENBQUM7SUFJakMsQ0FBQzs7OztJQUVMLFdBQVc7UUFDUCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQTtRQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDdkIsQ0FBQzs7OztJQUNELGFBQWE7UUFDVCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3ZCLENBQUM7Ozs7SUFDRCxhQUFhO1FBQ1QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUN2QixDQUFDOzs7OztJQUNPLFlBQVk7O2NBQ1YsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLGNBQWM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUM5RixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUMvRSxDQUFDOzs7WUF4Q0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLHl3QkFBZ0Q7YUFDbkQ7Ozs7WUFQUSxzQkFBc0I7OzttQkFVMUIsS0FBSztzQkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUVMLE1BQU07Ozs7SUFOUCx3Q0FBeUI7O0lBQ3pCLDJDQUEyQjs7SUFDM0IsZ0RBQThCOztJQUM5QixpREFBK0I7O0lBQy9CLDJDQUF5Qjs7SUFFekIsNENBQW1EOztJQUVuRCwrQ0FBb0I7O0lBQ3BCLCtDQUEyQjs7SUFDM0IsNENBQWlCOztJQUVqQixrREFBcUM7Ozs7O0lBR2pDLDBEQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5hdGlvblRhYmxlU2VydmljZSB9IGZyb20gJy4vcGFnaW5hdGlvbi10YWJsZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFSb3cgfSBmcm9tICcuL21vZGVscy9kYXRhLm1vZGVsJztcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4vbW9kZWxzL2hlYWRlci5tb2RlbCdcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWItcGFnaW5hdGlvbi10YWJsZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luYXRpb24tdGFibGUuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gICAgQElucHV0KCkgZGF0YTogRGF0YVJvd1tdO1xuICAgIEBJbnB1dCgpIGhlYWRlcnM6IEhlYWRlcltdO1xuICAgIEBJbnB1dCgpIHRhYmxlQ2xhc3Nlczogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGJ1dHRvbkNsYXNzZXM6IHN0cmluZztcbiAgICBASW5wdXQoKSBwZXJQYWdlOiBudW1iZXI7XG5cbiAgICBAT3V0cHV0KCkgY2xpY2tSb3cgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGFSb3dbXT4oKTtcblxuICAgIGN1cnJlbnRQYWdlOiBudW1iZXI7XG4gICAgY3VycmVudERhdGE6IERhdGFSb3dbXSA9IFtdXG4gICAgbWF4UGFnZXM6IG51bWJlcjtcblxuICAgIHJlYWRvbmx5IGRlZmF1bHRQZXJQYWdlOiBudW1iZXIgPSAxMDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBhZ2luYXRpb25UYWJsZVNlcnZpY2U6IFBhZ2luYXRpb25UYWJsZVNlcnZpY2UsXG4gICAgKSB7IH1cblxuICAgIG5nT25DaGFuZ2VzKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMFxuICAgICAgICB0aGlzLnJlZnJlc2hUYWJsZSgpXG4gICAgfVxuICAgIGluY3JlbWVudFBhZ2UoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UrKztcbiAgICAgICAgdGhpcy5yZWZyZXNoVGFibGUoKVxuICAgIH1cbiAgICBkZWNyZW1lbnRQYWdlKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlLS07XG4gICAgICAgIHRoaXMucmVmcmVzaFRhYmxlKClcbiAgICB9XG4gICAgcHJpdmF0ZSByZWZyZXNoVGFibGUoKSB7XG4gICAgICAgIGNvbnN0IHBlclBhZ2UgPSB0aGlzLnBlclBhZ2UgfHwgdGhpcy5kZWZhdWx0UGVyUGFnZTtcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0YSA9IHRoaXMucGFnaW5hdGlvblRhYmxlU2VydmljZS5nZXRSb3dTZXQodGhpcy5kYXRhLCB0aGlzLmN1cnJlbnRQYWdlLCBwZXJQYWdlKVxuICAgICAgICB0aGlzLm1heFBhZ2VzID0gdGhpcy5wYWdpbmF0aW9uVGFibGVTZXJ2aWNlLmdldE1heFBhZ2VzKHRoaXMuZGF0YSwgcGVyUGFnZSlcbiAgICB9XG59XG4iXX0=