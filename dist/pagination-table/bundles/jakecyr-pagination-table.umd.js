(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@jakecyr/pagination-table', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.jakecyr = global.jakecyr || {}, global.jakecyr['pagination-table'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ PaginationTableService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function PaginationTableService_Factory() { return new PaginationTableService(); }, token: PaginationTableService, providedIn: "root" });
        return PaginationTableService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PaginationTableComponent = /** @class */ (function () {
        function PaginationTableComponent(paginationTableService) {
            this.paginationTableService = paginationTableService;
            this.clickRow = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'lib-pagination-table',
                        template: "<div *ngIf=\"data && headers\">\n    <table [class]=\"tableClasses\">\n        <thead>\n            <tr>\n                <th *ngFor=\"let header of headers\">{{ header.title || header.key }}</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let row of currentData\">\n                <td *ngFor=\"let header of headers\">{{ row[header.key] }}</td>\n            </tr>\n        </tbody>\n    </table>\n\n    <div class=\"\">\n        <button [class]=\"buttonClasses\" [disabled]=\"currentPage == 0 || maxPages == 0\" (click)=\"decrementPage()\">Previous</button>\n        <button [class]=\"buttonClasses\" [disabled]=\"currentPage == (maxPages - 1) || maxPages == 0\" (click)=\"incrementPage()\">Next</button>\n    </div>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        PaginationTableComponent.ctorParameters = function () { return [
            { type: PaginationTableService }
        ]; };
        PaginationTableComponent.propDecorators = {
            data: [{ type: core.Input }],
            headers: [{ type: core.Input }],
            tableClasses: [{ type: core.Input }],
            buttonClasses: [{ type: core.Input }],
            perPage: [{ type: core.Input }],
            clickRow: [{ type: core.Output }]
        };
        return PaginationTableComponent;
    }());
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PaginationTableModule = /** @class */ (function () {
        function PaginationTableModule() {
        }
        PaginationTableModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            PaginationTableComponent,
                        ],
                        imports: [
                            common.CommonModule,
                        ],
                        exports: [
                            PaginationTableComponent,
                        ],
                    },] }
        ];
        return PaginationTableModule;
    }());

    exports.PaginationTableComponent = PaginationTableComponent;
    exports.PaginationTableModule = PaginationTableModule;
    exports.PaginationTableService = PaginationTableService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=jakecyr-pagination-table.umd.js.map
