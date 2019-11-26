/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var PaginationTableService = /** @class */ (function () {
    function PaginationTableService() {
    }
    /**
     * @param {?} data
     * @param {?} page
     * @param {?} perPage
     * @return {?}
     */
    PaginationTableService.prototype.getRowSet = /**
     * @param {?} data
     * @param {?} page
     * @param {?} perPage
     * @return {?}
     */
    function (data, page, perPage) {
        /** @type {?} */
        var set = [];
        /** @type {?} */
        var start = page * perPage;
        if (data && data.length > 0) {
            set = data.slice(start, start + perPage);
        }
        return set;
    };
    /**
     * @param {?} data
     * @param {?} perPage
     * @return {?}
     */
    PaginationTableService.prototype.getMaxPages = /**
     * @param {?} data
     * @param {?} perPage
     * @return {?}
     */
    function (data, perPage) {
        /** @type {?} */
        var pages = 0;
        if (data && data.length > 0) {
            pages = Math.ceil(data.length / perPage);
        }
        return pages;
    };
    PaginationTableService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ PaginationTableService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PaginationTableService_Factory() { return new PaginationTableService(); }, token: PaginationTableService, providedIn: "root" });
    return PaginationTableService;
}());
export { PaginationTableService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi10YWJsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGpha2VjeXIvcGFnaW5hdGlvbi10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdpbmF0aW9uLXRhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDO0lBQUE7S0F3QkM7Ozs7Ozs7SUFuQkcsMENBQVM7Ozs7OztJQUFULFVBQVUsSUFBZSxFQUFFLElBQVksRUFBRSxPQUFlOztZQUNoRCxHQUFHLEdBQUcsRUFBRTs7WUFDTixLQUFLLEdBQUcsSUFBSSxHQUFHLE9BQU87UUFFNUIsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDekIsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQTtTQUMzQztRQUVELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBQ0QsNENBQVc7Ozs7O0lBQVgsVUFBWSxJQUFlLEVBQUUsT0FBZTs7WUFDcEMsS0FBSyxHQUFHLENBQUM7UUFFYixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN6QixLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFBO1NBQzNDO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQzs7Z0JBdkJKLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OztpQ0FMRDtDQTJCQyxBQXhCRCxJQXdCQztTQXJCWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhUm93IH0gZnJvbSAnLi9tb2RlbHMvZGF0YS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvblRhYmxlU2VydmljZSB7XG5cbiAgICBnZXRSb3dTZXQoZGF0YTogRGF0YVJvd1tdLCBwYWdlOiBudW1iZXIsIHBlclBhZ2U6IG51bWJlcik6IERhdGFSb3dbXSB7XG4gICAgICAgIGxldCBzZXQgPSBbXVxuICAgICAgICBjb25zdCBzdGFydCA9IHBhZ2UgKiBwZXJQYWdlXG5cbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZXQgPSBkYXRhLnNsaWNlKHN0YXJ0LCBzdGFydCArIHBlclBhZ2UpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2V0O1xuICAgIH1cbiAgICBnZXRNYXhQYWdlcyhkYXRhOiBEYXRhUm93W10sIHBlclBhZ2U6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCBwYWdlcyA9IDBcblxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHBhZ2VzID0gTWF0aC5jZWlsKGRhdGEubGVuZ3RoIC8gcGVyUGFnZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYWdlcztcbiAgICB9XG59XG4iXX0=