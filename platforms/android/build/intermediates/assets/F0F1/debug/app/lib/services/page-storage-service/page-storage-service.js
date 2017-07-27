"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var COMP_PREFIX = 'cf_comp_';
var PAGE_PREFIX = 'cf_page_';
/**
 * <p>Components storage service.</p>
 */
var PageStorageService = (function () {
    function PageStorageService() {
    }
    PageStorageService.prototype.ngOnInit = function () { };
    PageStorageService.prototype.storeComponent = function (compId, compName, compData, pageId) {
        // remove DynamicComponentLoader specific data, no need to store them
        var compDataCopy = Object.assign({}, compData);
        delete compDataCopy.component;
        delete compDataCopy.loadedInstance;
        // prepare object to store
        var pageDef = JSON.parse(localStorage.getItem(PAGE_PREFIX + pageId)) || {};
        pageDef.components = pageDef.components || {};
        var compDef = pageDef.components[compId] || {};
        compDef.id = compId;
        compDef.name = compName;
        compDef.data = compDataCopy;
        pageDef.components[compId] = compDef;
        localStorage.setItem(PAGE_PREFIX + pageId, JSON.stringify(pageDef));
    };
    PageStorageService.prototype.storeComponentOptions = function (compId, compOptions) {
        var pageId = this.getPageId();
        var pageDef = JSON.parse(localStorage.getItem(PAGE_PREFIX + pageId)) || {};
        pageDef.components = pageDef.components || {};
        var compDef = pageDef.components[compId] || {};
        compDef.id = compId;
        compDef.options = compOptions;
        pageDef.components[compId] = compDef;
        localStorage.setItem(PAGE_PREFIX + pageId, JSON.stringify(pageDef));
    };
    PageStorageService.prototype.getPageComponentsDefinitions = function (pageId) {
        var pageDef = JSON.parse(localStorage.getItem(PAGE_PREFIX + pageId)) || {};
        var components = pageDef.components || {};
        var pageCompsDefs = [];
        Object.keys(components).forEach(function (compId) {
            pageCompsDefs.push(components[compId]);
        });
        return pageCompsDefs;
    };
    PageStorageService.prototype.removeComponent = function (compId, pageId) {
        var pageDef = JSON.parse(localStorage.getItem(PAGE_PREFIX + pageId)) || {};
        if (pageDef.components) {
            delete pageDef.components[compId];
        }
        localStorage.setItem(PAGE_PREFIX + pageId, JSON.stringify(pageDef));
    };
    PageStorageService.prototype.getPageId = function () {
        return document.getElementsByTagName('body')[0].getAttribute('pageId');
    };
    return PageStorageService;
}());
PageStorageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], PageStorageService);
exports.PageStorageService = PageStorageService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zdG9yYWdlLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlLXN0b3JhZ2Utc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRDtBQUluRCxJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUM7QUFDL0IsSUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDO0FBRS9COztHQUVHO0FBRUgsSUFBYSxrQkFBa0I7SUFFM0I7SUFBZSxDQUFDO0lBRWhCLHFDQUFRLEdBQVIsY0FBa0IsQ0FBQztJQUVuQiwyQ0FBYyxHQUFkLFVBQWUsTUFBYyxFQUFFLFFBQWdCLEVBQUUsUUFBYSxFQUFFLE1BQWM7UUFDMUUscUVBQXFFO1FBQ3JFLElBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sWUFBWSxDQUFDLFNBQVMsQ0FBQztRQUM5QixPQUFPLFlBQVksQ0FBQyxjQUFjLENBQUM7UUFFbkMsMEJBQTBCO1FBQzFCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUUsSUFBSSxFQUFFLENBQUM7UUFDN0UsT0FBTyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztRQUU5QyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvQyxPQUFPLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQztRQUNwQixPQUFPLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUN4QixPQUFPLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztRQUM1QixPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUVyQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxrREFBcUIsR0FBckIsVUFBc0IsTUFBYyxFQUFFLFdBQWdCO1FBQ2xELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUU5QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxDQUFFLElBQUksRUFBRSxDQUFDO1FBQzdFLE9BQU8sQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7UUFFOUMsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0MsT0FBTyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUM7UUFDcEIsT0FBTyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7UUFDOUIsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUM7UUFFckMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQseURBQTRCLEdBQTVCLFVBQTZCLE1BQWM7UUFDdkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRSxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsQ0FBRSxJQUFJLEVBQUUsQ0FBQztRQUM3RSxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztRQUUxQyxJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ25DLGFBQWEsQ0FBQyxJQUFJLENBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFFLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQ3pCLENBQUM7SUFFRCw0Q0FBZSxHQUFmLFVBQWdCLE1BQWMsRUFBRSxNQUFjO1FBQzFDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUUsSUFBSSxFQUFFLENBQUM7UUFFN0UsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDckIsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFFRCxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxzQ0FBUyxHQUFUO1FBQ0ksTUFBTSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQS9ERCxJQStEQztBQS9EWSxrQkFBa0I7SUFEOUIsaUJBQVUsRUFBRTs7R0FDQSxrQkFBa0IsQ0ErRDlCO0FBL0RZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEcmFnZ2FibGVTZXJ2aWNlIH0gZnJvbSAnLi4vZHJhZ2dhYmxlLXNlcnZpY2UvZHJhZ2dhYmxlLnNlcnZpY2UnO1xuXG5jb25zdCBDT01QX1BSRUZJWCA9ICdjZl9jb21wXyc7XG5jb25zdCBQQUdFX1BSRUZJWCA9ICdjZl9wYWdlXyc7XG5cbi8qKlxuICogPHA+Q29tcG9uZW50cyBzdG9yYWdlIHNlcnZpY2UuPC9wPlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnZVN0b3JhZ2VTZXJ2aWNlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge31cblxuICAgIHN0b3JlQ29tcG9uZW50KGNvbXBJZDogc3RyaW5nLCBjb21wTmFtZTogc3RyaW5nLCBjb21wRGF0YTogYW55LCBwYWdlSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICAvLyByZW1vdmUgRHluYW1pY0NvbXBvbmVudExvYWRlciBzcGVjaWZpYyBkYXRhLCBubyBuZWVkIHRvIHN0b3JlIHRoZW1cbiAgICAgICAgdmFyIGNvbXBEYXRhQ29weSA9IE9iamVjdC5hc3NpZ24oe30sIGNvbXBEYXRhKTtcbiAgICAgICAgZGVsZXRlIGNvbXBEYXRhQ29weS5jb21wb25lbnQ7XG4gICAgICAgIGRlbGV0ZSBjb21wRGF0YUNvcHkubG9hZGVkSW5zdGFuY2U7XG5cbiAgICAgICAgLy8gcHJlcGFyZSBvYmplY3QgdG8gc3RvcmVcbiAgICAgICAgbGV0IHBhZ2VEZWYgPSBKU09OLnBhcnNlKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShQQUdFX1BSRUZJWCArIHBhZ2VJZCkgKSB8fCB7fTtcbiAgICAgICAgcGFnZURlZi5jb21wb25lbnRzID0gcGFnZURlZi5jb21wb25lbnRzIHx8IHt9O1xuXG4gICAgICAgIGxldCBjb21wRGVmID0gcGFnZURlZi5jb21wb25lbnRzW2NvbXBJZF0gfHwge307XG4gICAgICAgIGNvbXBEZWYuaWQgPSBjb21wSWQ7XG4gICAgICAgIGNvbXBEZWYubmFtZSA9IGNvbXBOYW1lO1xuICAgICAgICBjb21wRGVmLmRhdGEgPSBjb21wRGF0YUNvcHk7XG4gICAgICAgIHBhZ2VEZWYuY29tcG9uZW50c1tjb21wSWRdID0gY29tcERlZjtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShQQUdFX1BSRUZJWCArIHBhZ2VJZCwgSlNPTi5zdHJpbmdpZnkocGFnZURlZikpO1xuICAgIH1cblxuICAgIHN0b3JlQ29tcG9uZW50T3B0aW9ucyhjb21wSWQ6IHN0cmluZywgY29tcE9wdGlvbnM6IGFueSk6IHZvaWQge1xuICAgICAgICBsZXQgcGFnZUlkID0gdGhpcy5nZXRQYWdlSWQoKTtcblxuICAgICAgICBsZXQgcGFnZURlZiA9IEpTT04ucGFyc2UoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFBBR0VfUFJFRklYICsgcGFnZUlkKSApIHx8IHt9O1xuICAgICAgICBwYWdlRGVmLmNvbXBvbmVudHMgPSBwYWdlRGVmLmNvbXBvbmVudHMgfHwge307XG5cbiAgICAgICAgbGV0IGNvbXBEZWYgPSBwYWdlRGVmLmNvbXBvbmVudHNbY29tcElkXSB8fCB7fTtcbiAgICAgICAgY29tcERlZi5pZCA9IGNvbXBJZDtcbiAgICAgICAgY29tcERlZi5vcHRpb25zID0gY29tcE9wdGlvbnM7XG4gICAgICAgIHBhZ2VEZWYuY29tcG9uZW50c1tjb21wSWRdID0gY29tcERlZjtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShQQUdFX1BSRUZJWCArIHBhZ2VJZCwgSlNPTi5zdHJpbmdpZnkocGFnZURlZikpO1xuICAgIH1cblxuICAgIGdldFBhZ2VDb21wb25lbnRzRGVmaW5pdGlvbnMocGFnZUlkOiBzdHJpbmcpOiBhbnlbXSB7XG4gICAgICAgIGxldCBwYWdlRGVmID0gSlNPTi5wYXJzZSggbG9jYWxTdG9yYWdlLmdldEl0ZW0oUEFHRV9QUkVGSVggKyBwYWdlSWQpICkgfHwge307XG4gICAgICAgIGxldCBjb21wb25lbnRzID0gcGFnZURlZi5jb21wb25lbnRzIHx8IHt9O1xuXG4gICAgICAgIGxldCBwYWdlQ29tcHNEZWZzID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKGNvbXBvbmVudHMpLmZvckVhY2goKGNvbXBJZCkgPT4ge1xuICAgICAgICAgICAgcGFnZUNvbXBzRGVmcy5wdXNoKCBjb21wb25lbnRzW2NvbXBJZF0gKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYWdlQ29tcHNEZWZzO1xuICAgIH1cblxuICAgIHJlbW92ZUNvbXBvbmVudChjb21wSWQ6IHN0cmluZywgcGFnZUlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgbGV0IHBhZ2VEZWYgPSBKU09OLnBhcnNlKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShQQUdFX1BSRUZJWCArIHBhZ2VJZCkgKSB8fCB7fTtcblxuICAgICAgICBpZiAocGFnZURlZi5jb21wb25lbnRzKSB7XG4gICAgICAgICAgICBkZWxldGUgcGFnZURlZi5jb21wb25lbnRzW2NvbXBJZF07XG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShQQUdFX1BSRUZJWCArIHBhZ2VJZCwgSlNPTi5zdHJpbmdpZnkocGFnZURlZikpO1xuICAgIH1cblxuICAgIGdldFBhZ2VJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5nZXRBdHRyaWJ1dGUoJ3BhZ2VJZCcpO1xuICAgIH1cbn0iXX0=