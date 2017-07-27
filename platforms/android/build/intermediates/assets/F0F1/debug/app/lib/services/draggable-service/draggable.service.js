"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_storage_service_1 = require("../page-storage-service/page-storage-service");
/**
 * <p>Service to drag and drop components.</p>
 */
var DraggableService = (function () {
    function DraggableService() {
        this.draggable = true;
        this.injector = core_1.ReflectiveInjector.resolveAndCreate([page_storage_service_1.PageStorageService]);
        this.pageStorageService = this.injector.get(page_storage_service_1.PageStorageService);
    }
    DraggableService.prototype.ngOnInit = function () { };
    DraggableService.prototype.makeDraggable = function (compId, nativeElement, value) {
        var _this = this;
        this.nativeElement = nativeElement;
        // css changes
        if (this.draggable) {
            this.nativeElement.style.position = 'absolute';
        }
        this.draggable = value;
        if (this.draggable) {
            // events
            this.nativeElement.addEventListener('mousedown', function (event) {
                _this.moving = true;
                _this.topStart = event.clientY - _this.nativeElement.style.top.replace('px', '');
                _this.leftStart = event.clientX - _this.nativeElement.style.left.replace('px', '');
            });
            this.nativeElement.addEventListener('mouseup', function (event) {
                _this.moving = false;
                _this.pageStorageService.storeComponentOptions(compId, {
                    tagName: _this.nativeElement.tagName,
                    left: _this.nativeElement.offsetLeft,
                    top: _this.nativeElement.offsetTop
                });
            });
            this.nativeElement.addEventListener('mousemove', function (event) {
                if (_this.moving && _this.draggable) {
                    _this.nativeElement.style.position = 'absolute';
                    _this.nativeElement.style.top = (event.clientY - _this.topStart) + 'px';
                    _this.nativeElement.style.left = (event.clientX - _this.leftStart) + 'px';
                }
            });
            this.nativeElement.addEventListener('mouseleave', function (event) {
                _this.moving = false;
            });
        }
    };
    return DraggableService;
}());
DraggableService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], DraggableService);
exports.DraggableService = DraggableService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkcmFnZ2FibGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRjtBQUVuRixxRkFBa0Y7QUFFbEY7O0dBRUc7QUFFSCxJQUFhLGdCQUFnQjtJQVd6QjtRQU5RLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFHbEMsYUFBUSxHQUFHLHlCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUMseUNBQWtCLENBQUMsQ0FBQyxDQUFDO1FBSWpFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyx5Q0FBa0IsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxtQ0FBUSxHQUFSLGNBQVksQ0FBQztJQUViLHdDQUFhLEdBQWIsVUFBYyxNQUFjLEVBQUUsYUFBa0IsRUFBRSxLQUFjO1FBQWhFLGlCQXdDQztRQXZDRyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUVuQyxjQUFjO1FBQ2QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUNuRCxDQUFDO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFFdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDakIsU0FBUztZQUNULElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBSztnQkFDbkQsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBQyxFQUFFLENBQUMsQ0FBQztnQkFDOUUsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3BGLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBQyxLQUFLO2dCQUNqRCxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFFcEIsS0FBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRTtvQkFDbEQsT0FBTyxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTztvQkFDbkMsSUFBSSxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVTtvQkFDbkMsR0FBRyxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUztpQkFDcEMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxVQUFDLEtBQUs7Z0JBQ25ELEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLElBQUksS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7b0JBQy9DLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDdEUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUM1RSxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxVQUFDLEtBQUs7Z0JBQ3BELEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUExREQsSUEwREM7QUExRFksZ0JBQWdCO0lBRDVCLGlCQUFVLEVBQUU7O0dBQ0EsZ0JBQWdCLENBMEQ1QjtBQTFEWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmLCBPbkluaXQsIFJlZmxlY3RpdmVJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdlU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi9wYWdlLXN0b3JhZ2Utc2VydmljZS9wYWdlLXN0b3JhZ2Utc2VydmljZSc7XG5cbi8qKlxuICogPHA+U2VydmljZSB0byBkcmFnIGFuZCBkcm9wIGNvbXBvbmVudHMuPC9wPlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlU2VydmljZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbmF0aXZlRWxlbWVudDogYW55O1xuXG4gICAgcHJpdmF0ZSB0b3BTdGFydDogbnVtYmVyO1xuICAgIHByaXZhdGUgbGVmdFN0YXJ0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBkcmFnZ2FibGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgbW92aW5nOiBib29sZWFuO1xuXG4gICAgaW5qZWN0b3IgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZUFuZENyZWF0ZShbUGFnZVN0b3JhZ2VTZXJ2aWNlXSk7XG4gICAgcGFnZVN0b3JhZ2VTZXJ2aWNlOiBQYWdlU3RvcmFnZVNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wYWdlU3RvcmFnZVNlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChQYWdlU3RvcmFnZVNlcnZpY2UpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge31cblxuICAgIG1ha2VEcmFnZ2FibGUoY29tcElkOiBzdHJpbmcsIG5hdGl2ZUVsZW1lbnQ6IGFueSwgdmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50ID0gbmF0aXZlRWxlbWVudDtcblxuICAgICAgICAvLyBjc3MgY2hhbmdlc1xuICAgICAgICBpZiAodGhpcy5kcmFnZ2FibGUpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRyYWdnYWJsZSA9IHZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLmRyYWdnYWJsZSkge1xuICAgICAgICAgICAgLy8gZXZlbnRzXG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhcnQgPSBldmVudC5jbGllbnRZIC0gdGhpcy5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcC5yZXBsYWNlKCdweCcsJycpO1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdFN0YXJ0ID0gZXZlbnQuY2xpZW50WCAtIHRoaXMubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0LnJlcGxhY2UoJ3B4JywnJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlU3RvcmFnZVNlcnZpY2Uuc3RvcmVDb21wb25lbnRPcHRpb25zKGNvbXBJZCwge1xuICAgICAgICAgICAgICAgICAgICB0YWdOYW1lOiB0aGlzLm5hdGl2ZUVsZW1lbnQudGFnTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGhpcy5uYXRpdmVFbGVtZW50Lm9mZnNldExlZnQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGhpcy5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3ZpbmcgJiYgdGhpcy5kcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IChldmVudC5jbGllbnRZIC0gdGhpcy50b3BTdGFydCkgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9IChldmVudC5jbGllbnRYIC0gdGhpcy5sZWZ0U3RhcnQpICsgJ3B4JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59Il19