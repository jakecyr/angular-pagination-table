/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class PaginationTableService {
    /**
     * @param {?} data
     * @param {?} page
     * @param {?} perPage
     * @return {?}
     */
    getRowSet(data, page, perPage) {
        /** @type {?} */
        let set = [];
        /** @type {?} */
        const start = page * perPage;
        if (data && data.length > 0) {
            set = data.slice(start, start + perPage);
        }
        return set;
    }
    /**
     * @param {?} data
     * @param {?} perPage
     * @return {?}
     */
    getMaxPages(data, perPage) {
        /** @type {?} */
        let pages = 0;
        if (data && data.length > 0) {
            pages = Math.ceil(data.length / perPage);
        }
        return pages;
    }
}
PaginationTableService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ PaginationTableService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PaginationTableService_Factory() { return new PaginationTableService(); }, token: PaginationTableService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi10YWJsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGpha2VjeXIvcGFnaW5hdGlvbi10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdpbmF0aW9uLXRhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDLE1BQU0sT0FBTyxzQkFBc0I7Ozs7Ozs7SUFFL0IsU0FBUyxDQUFDLElBQWUsRUFBRSxJQUFZLEVBQUUsT0FBZTs7WUFDaEQsR0FBRyxHQUFHLEVBQUU7O2NBQ04sS0FBSyxHQUFHLElBQUksR0FBRyxPQUFPO1FBRTVCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3pCLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUE7U0FDM0M7UUFFRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7Ozs7OztJQUNELFdBQVcsQ0FBQyxJQUFlLEVBQUUsT0FBZTs7WUFDcEMsS0FBSyxHQUFHLENBQUM7UUFFYixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN6QixLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFBO1NBQzNDO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQzs7O1lBdkJKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFSb3cgfSBmcm9tICcuL21vZGVscy9kYXRhLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uVGFibGVTZXJ2aWNlIHtcblxuICAgIGdldFJvd1NldChkYXRhOiBEYXRhUm93W10sIHBhZ2U6IG51bWJlciwgcGVyUGFnZTogbnVtYmVyKTogRGF0YVJvd1tdIHtcbiAgICAgICAgbGV0IHNldCA9IFtdXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gcGFnZSAqIHBlclBhZ2VcblxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNldCA9IGRhdGEuc2xpY2Uoc3RhcnQsIHN0YXJ0ICsgcGVyUGFnZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZXQ7XG4gICAgfVxuICAgIGdldE1heFBhZ2VzKGRhdGE6IERhdGFSb3dbXSwgcGVyUGFnZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHBhZ2VzID0gMFxuXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcGFnZXMgPSBNYXRoLmNlaWwoZGF0YS5sZW5ndGggLyBwZXJQYWdlKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhZ2VzO1xuICAgIH1cbn1cbiJdfQ==