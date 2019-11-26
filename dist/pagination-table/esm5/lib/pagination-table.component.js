/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PaginationTableService } from './pagination-table.service';
var PaginationTableComponent = /** @class */ (function () {
    function PaginationTableComponent(paginationTableService) {
        this.paginationTableService = paginationTableService;
        this.clickRow = new EventEmitter();
        this.currentData = [];
        this.defaultPerPage = 10;
    }
    /**
     * @return {?}
     */
    PaginationTableComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.currentPage = 0;
        this.refreshTable();
    };
    /**
     * @return {?}
     */
    PaginationTableComponent.prototype.incrementPage = /**
     * @return {?}
     */
    function () {
        this.currentPage++;
        this.refreshTable();
    };
    /**
     * @return {?}
     */
    PaginationTableComponent.prototype.decrementPage = /**
     * @return {?}
     */
    function () {
        this.currentPage--;
        this.refreshTable();
    };
    /**
     * @private
     * @return {?}
     */
    PaginationTableComponent.prototype.refreshTable = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var perPage = this.perPage || this.defaultPerPage;
        this.currentData = this.paginationTableService.getRowSet(this.data, this.currentPage, perPage);
        this.maxPages = this.paginationTableService.getMaxPages(this.data, perPage);
    };
    PaginationTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-pagination-table',
                    template: "<div *ngIf=\"data && headers\">\n    <table [class]=\"tableClasses\">\n        <thead>\n            <tr>\n                <th *ngFor=\"let header of headers\">{{ header.title || header.key }}</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let row of currentData\">\n                <td *ngFor=\"let header of headers\">{{ row[header.key] }}</td>\n            </tr>\n        </tbody>\n    </table>\n\n    <div class=\"\">\n        <button [class]=\"buttonClasses\" [disabled]=\"currentPage == 0 || maxPages == 0\" (click)=\"decrementPage()\">Previous</button>\n        <button [class]=\"buttonClasses\" [disabled]=\"currentPage == (maxPages - 1) || maxPages == 0\" (click)=\"incrementPage()\">Next</button>\n    </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    PaginationTableComponent.ctorParameters = function () { return [
        { type: PaginationTableService }
    ]; };
    PaginationTableComponent.propDecorators = {
        data: [{ type: Input }],
        headers: [{ type: Input }],
        tableClasses: [{ type: Input }],
        buttonClasses: [{ type: Input }],
        perPage: [{ type: Input }],
        clickRow: [{ type: Output }]
    };
    return PaginationTableComponent;
}());
export { PaginationTableComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AamFrZWN5ci9wYWdpbmF0aW9uLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL3BhZ2luYXRpb24tdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRWxGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBSXBFO0lBb0JJLGtDQUNZLHNCQUE4QztRQUE5QywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBVGhELGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBR25ELGdCQUFXLEdBQWMsRUFBRSxDQUFBO1FBR2xCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO0lBSWpDLENBQUM7Ozs7SUFFTCw4Q0FBVzs7O0lBQVg7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQTtRQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDdkIsQ0FBQzs7OztJQUNELGdEQUFhOzs7SUFBYjtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDdkIsQ0FBQzs7OztJQUNELGdEQUFhOzs7SUFBYjtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDdkIsQ0FBQzs7Ozs7SUFDTywrQ0FBWTs7OztJQUFwQjs7WUFDVSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQzlGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQy9FLENBQUM7O2dCQXhDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMseXdCQUFnRDtpQkFDbkQ7Ozs7Z0JBUFEsc0JBQXNCOzs7dUJBVTFCLEtBQUs7MEJBQ0wsS0FBSzsrQkFDTCxLQUFLO2dDQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFFTCxNQUFNOztJQTZCWCwrQkFBQztDQUFBLEFBekNELElBeUNDO1NBckNZLHdCQUF3Qjs7O0lBRWpDLHdDQUF5Qjs7SUFDekIsMkNBQTJCOztJQUMzQixnREFBOEI7O0lBQzlCLGlEQUErQjs7SUFDL0IsMkNBQXlCOztJQUV6Qiw0Q0FBbUQ7O0lBRW5ELCtDQUFvQjs7SUFDcEIsK0NBQTJCOztJQUMzQiw0Q0FBaUI7O0lBRWpCLGtEQUFxQzs7Ozs7SUFHakMsMERBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdpbmF0aW9uVGFibGVTZXJ2aWNlIH0gZnJvbSAnLi9wYWdpbmF0aW9uLXRhYmxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVJvdyB9IGZyb20gJy4vbW9kZWxzL2RhdGEubW9kZWwnO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi9tb2RlbHMvaGVhZGVyLm1vZGVsJ1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi1wYWdpbmF0aW9uLXRhYmxlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5hdGlvbi10YWJsZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25UYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgICBASW5wdXQoKSBkYXRhOiBEYXRhUm93W107XG4gICAgQElucHV0KCkgaGVhZGVyczogSGVhZGVyW107XG4gICAgQElucHV0KCkgdGFibGVDbGFzc2VzOiBzdHJpbmc7XG4gICAgQElucHV0KCkgYnV0dG9uQ2xhc3Nlczogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHBlclBhZ2U6IG51bWJlcjtcblxuICAgIEBPdXRwdXQoKSBjbGlja1JvdyA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0YVJvd1tdPigpO1xuXG4gICAgY3VycmVudFBhZ2U6IG51bWJlcjtcbiAgICBjdXJyZW50RGF0YTogRGF0YVJvd1tdID0gW11cbiAgICBtYXhQYWdlczogbnVtYmVyO1xuXG4gICAgcmVhZG9ubHkgZGVmYXVsdFBlclBhZ2U6IG51bWJlciA9IDEwO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcGFnaW5hdGlvblRhYmxlU2VydmljZTogUGFnaW5hdGlvblRhYmxlU2VydmljZSxcbiAgICApIHsgfVxuXG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAwXG4gICAgICAgIHRoaXMucmVmcmVzaFRhYmxlKClcbiAgICB9XG4gICAgaW5jcmVtZW50UGFnZSgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSsrO1xuICAgICAgICB0aGlzLnJlZnJlc2hUYWJsZSgpXG4gICAgfVxuICAgIGRlY3JlbWVudFBhZ2UoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UtLTtcbiAgICAgICAgdGhpcy5yZWZyZXNoVGFibGUoKVxuICAgIH1cbiAgICBwcml2YXRlIHJlZnJlc2hUYWJsZSgpIHtcbiAgICAgICAgY29uc3QgcGVyUGFnZSA9IHRoaXMucGVyUGFnZSB8fCB0aGlzLmRlZmF1bHRQZXJQYWdlO1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRhID0gdGhpcy5wYWdpbmF0aW9uVGFibGVTZXJ2aWNlLmdldFJvd1NldCh0aGlzLmRhdGEsIHRoaXMuY3VycmVudFBhZ2UsIHBlclBhZ2UpXG4gICAgICAgIHRoaXMubWF4UGFnZXMgPSB0aGlzLnBhZ2luYXRpb25UYWJsZVNlcnZpY2UuZ2V0TWF4UGFnZXModGhpcy5kYXRhLCBwZXJQYWdlKVxuICAgIH1cbn1cbiJdfQ==