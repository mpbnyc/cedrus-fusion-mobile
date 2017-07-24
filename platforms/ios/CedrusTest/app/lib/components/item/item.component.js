"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_component_1 = require("../core/core.component");
var icon_model_1 = require("../../models/icon/icon.model");
var CfItemComponent = (function (_super) {
    __extends(CfItemComponent, _super);
    function CfItemComponent(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.elementRef = elementRef;
        _this.details = true;
        _this.selectedValue = false;
        _this.selectable = false;
        _this.withCheckbox = true;
        _this.selectedChange = new core_1.EventEmitter();
        _this.itemClicked = new core_1.EventEmitter();
        _this.showDetails = true;
        _this.myFusionIcon = new icon_model_1.IconModel({
            name: 'mdi-chevron-right',
            size: 50,
            value: 'whatever',
            toggle: {
                name: 'mdi-chevron-right',
                size: 50,
                value: 'whatever'
            }
        });
        return _this;
    }
    Object.defineProperty(CfItemComponent.prototype, "selected", {
        get: function () { return this.selectedValue; },
        set: function (val) {
            this.selectedValue = val;
            this.selectedChange.emit(this.selectedValue);
        },
        enumerable: true,
        configurable: true
    });
    CfItemComponent.prototype.ngOnInit = function () {
        // this.getMyTemplate("item",ItemTemplates).then(() => {
        // if(this.styling==null)
        // {
        // 	this.styling = new ItemStylingModel (this.activeTemplate["style"]);
        // }
        // });
    };
    CfItemComponent.prototype.ngOnChanges = function (changes) {
    };
    // @ViewChild(CfCheckboxComponent) checkbox: CfCheckboxComponent;
    CfItemComponent.prototype.selectMe = function () {
        if (this.selectable == true) {
            this.selected = !this.selected;
            this.itemClicked.emit({ "id": this.internalId, "value": this.selectedValue });
        }
    };
    CfItemComponent.prototype.notifyList = function () {
        if (this.selectable == true) {
            this.itemClicked.emit({ "id": this.internalId, "value": !this.selectedValue });
        }
    };
    CfItemComponent.prototype.showTheDetails = function () {
        this.showDetails = !this.showDetails;
    };
    return CfItemComponent;
}(core_component_1.CfCoreComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CfItemComponent.prototype, "details", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CfItemComponent.prototype, "selectable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CfItemComponent.prototype, "withCheckbox", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CfItemComponent.prototype, "selected", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CfItemComponent.prototype, "selectedChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CfItemComponent.prototype, "itemClicked", void 0);
CfItemComponent = __decorate([
    core_1.Component({
        selector: 'cf-item',
        templateUrl: "./lib/components/item/item.component.html",
        styleUrls: [
            './lib/components/item/item.component.css'
        ]
    })
    /**
     * <p> The item component can be used anywhere as a general item or inside cf-list component as a list item.</p>
     * <p> The item component consists of 2 tabs: Default template (always shown) and the details template.</p>
     */
    ,
    __metadata("design:paramtypes", [core_1.ElementRef])
], CfItemComponent);
exports.CfItemComponent = CfItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzRztBQUN0Ryx5REFBeUQ7QUFDekQsMkRBQXdEO0FBYXhELElBQWEsZUFBZTtJQUFTLG1DQUFlO0lBdUJuRCx5QkFBbUIsVUFBc0I7UUFBekMsWUFDQyxrQkFBTSxVQUFVLENBQUMsU0FDakI7UUFGa0IsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUF0QmhDLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFakMsbUJBQWEsR0FBYSxLQUFLLENBQUM7UUFFdkIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHNUIsb0JBQWMsR0FBMEIsSUFBSSxtQkFBWSxFQUFXLENBQUM7UUFFcEUsaUJBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQVUzQyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQXVDekIsa0JBQVksR0FBRyxJQUFJLHNCQUFTLENBQUU7WUFDMUIsSUFBSSxFQUFFLG1CQUFtQjtZQUN6QixJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxVQUFVO1lBQ2pCLE1BQU0sRUFBQztnQkFDSCxJQUFJLEVBQUUsbUJBQW1CO2dCQUN6QixJQUFJLEVBQUUsRUFBRTtnQkFDUixLQUFLLEVBQUUsVUFBVTthQUNwQjtTQUNKLENBQUMsQ0FBQzs7SUE1Q04sQ0FBQztJQWpCUSxzQkFBSSxxQ0FBUTthQUFaLGNBQWlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzthQUt0RCxVQUFhLEdBQUc7WUFFZixJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztZQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUMsQ0FBQzs7O09BVHFEO0lBbUJ0RCxrQ0FBUSxHQUFSO1FBQ0Msd0RBQXdEO1FBQ3hELHlCQUF5QjtRQUN6QixJQUFJO1FBQ0osdUVBQXVFO1FBQ3ZFLElBQUk7UUFDSixNQUFNO0lBQ1AsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxPQUFZO0lBQ3hCLENBQUM7SUFFRCxpRUFBaUU7SUFFakUsa0NBQVEsR0FBUjtRQUNDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUUsSUFBSSxDQUFDLENBQ3pCLENBQUM7WUFDQSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFDLENBQUMsQ0FBQztRQUM1RSxDQUFDO0lBQ0YsQ0FBQztJQUVELG9DQUFVLEdBQVY7UUFDQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFFLElBQUksQ0FBQyxDQUN6QixDQUFDO1lBQ0EsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFDLENBQUMsQ0FBQztRQUM3RSxDQUFDO0lBQ0MsQ0FBQztJQUVELHdDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQTtJQUN2QyxDQUFDO0lBWUwsc0JBQUM7QUFBRCxDQUFDLEFBdEVELENBQXFDLGdDQUFlLEdBc0VuRDtBQXJFUztJQUFSLFlBQUssRUFBRTs7Z0RBQXlCO0FBSXhCO0lBQVIsWUFBSyxFQUFFOzttREFBNkI7QUFDNUI7SUFBUixZQUFLLEVBQUU7O3FEQUE4QjtBQUU3QjtJQUFSLFlBQUssRUFBRTs7OytDQUE4QztBQUM1QztJQUFULGFBQU0sRUFBRTs4QkFBaUIsbUJBQVk7dURBQXdDO0FBRXBFO0lBQVQsYUFBTSxFQUFFOztvREFBa0M7QUFYL0IsZUFBZTtJQVozQixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLFNBQVM7UUFDaEIsV0FBVyxFQUFFLDJDQUEyQztRQUN4RCxTQUFTLEVBQUU7WUFDUCwwQ0FBMEM7U0FDN0M7S0FDSixDQUFDO0lBRUY7OztPQUdHOztxQ0F3QjZCLGlCQUFVO0dBdkI3QixlQUFlLENBc0UzQjtBQXRFWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDZkNvcmVDb21wb25lbnQgfSBmcm9tICcuLi9jb3JlL2NvcmUuY29tcG9uZW50JztcbmltcG9ydCB7IEljb25Nb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9pY29uL2ljb24ubW9kZWwnXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjZi1pdGVtJyxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xpYi9jb21wb25lbnRzL2l0ZW0vaXRlbS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1xuICAgICAgICAnLi9saWIvY29tcG9uZW50cy9pdGVtL2l0ZW0uY29tcG9uZW50LmNzcydcbiAgICBdXG59KVxuXG4vKipcbiAqIDxwPiBUaGUgaXRlbSBjb21wb25lbnQgY2FuIGJlIHVzZWQgYW55d2hlcmUgYXMgYSBnZW5lcmFsIGl0ZW0gb3IgaW5zaWRlIGNmLWxpc3QgY29tcG9uZW50IGFzIGEgbGlzdCBpdGVtLjwvcD5cbiAqIDxwPiBUaGUgaXRlbSBjb21wb25lbnQgY29uc2lzdHMgb2YgMiB0YWJzOiBEZWZhdWx0IHRlbXBsYXRlIChhbHdheXMgc2hvd24pIGFuZCB0aGUgZGV0YWlscyB0ZW1wbGF0ZS48L3A+XG4gKi9cbmV4cG9ydCBjbGFzcyBDZkl0ZW1Db21wb25lbnQgZXh0ZW5kcyBDZkNvcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRASW5wdXQoKSBkZXRhaWxzOiBib29sZWFuID0gdHJ1ZTtcblxuXHRzZWxlY3RlZFZhbHVlOiBib29sZWFuICA9IGZhbHNlO1xuXG5cdEBJbnB1dCgpIHNlbGVjdGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcblx0QElucHV0KCkgd2l0aENoZWNrYm94OiBib29sZWFuID0gdHJ1ZTtcblxuXHRASW5wdXQoKSBnZXQgc2VsZWN0ZWQoKSB7IHJldHVybiB0aGlzLnNlbGVjdGVkVmFsdWU7IH1cblx0QE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cblx0QE91dHB1dCgpIGl0ZW1DbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHNldCBzZWxlY3RlZCh2YWwpXG5cdHtcblx0XHR0aGlzLnNlbGVjdGVkVmFsdWUgPSB2YWw7XG5cdFx0dGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRWYWx1ZSk7XG5cdH1cblxuXHRpbnRlcm5hbElkOiBudW1iZXI7XG5cblx0c2hvd0RldGFpbHM6IGJvb2xlYW4gPSB0cnVlO1xuXHRcblx0Y29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdC8vIHRoaXMuZ2V0TXlUZW1wbGF0ZShcIml0ZW1cIixJdGVtVGVtcGxhdGVzKS50aGVuKCgpID0+IHtcblx0XHQvLyBpZih0aGlzLnN0eWxpbmc9PW51bGwpXG5cdFx0Ly8ge1xuXHRcdC8vIFx0dGhpcy5zdHlsaW5nID0gbmV3IEl0ZW1TdHlsaW5nTW9kZWwgKHRoaXMuYWN0aXZlVGVtcGxhdGVbXCJzdHlsZVwiXSk7XG5cdFx0Ly8gfVxuXHRcdC8vIH0pO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogYW55KXtcblx0fVxuXG5cdC8vIEBWaWV3Q2hpbGQoQ2ZDaGVja2JveENvbXBvbmVudCkgY2hlY2tib3g6IENmQ2hlY2tib3hDb21wb25lbnQ7XG5cblx0c2VsZWN0TWUoKSB7XG5cdFx0aWYodGhpcy5zZWxlY3RhYmxlPT10cnVlKVxuXHRcdHtcblx0XHRcdHRoaXMuc2VsZWN0ZWQgPSAhdGhpcy5zZWxlY3RlZDtcblx0XHRcdHRoaXMuaXRlbUNsaWNrZWQuZW1pdCh7XCJpZFwiOnRoaXMuaW50ZXJuYWxJZCwgXCJ2YWx1ZVwiOiB0aGlzLnNlbGVjdGVkVmFsdWV9KTtcblx0XHR9XG5cdH1cblxuXHRub3RpZnlMaXN0KCl7XG5cdFx0aWYodGhpcy5zZWxlY3RhYmxlPT10cnVlKVxuXHRcdHtcblx0XHRcdHRoaXMuaXRlbUNsaWNrZWQuZW1pdCh7XCJpZFwiOnRoaXMuaW50ZXJuYWxJZCwgXCJ2YWx1ZVwiOiAhdGhpcy5zZWxlY3RlZFZhbHVlfSk7XG5cdFx0fVxuICAgIH1cbiAgICBcbiAgICBzaG93VGhlRGV0YWlscygpIHtcbiAgICAgICAgdGhpcy5zaG93RGV0YWlscyA9IXRoaXMuc2hvd0RldGFpbHNcbiAgICB9XG5cbiAgICBteUZ1c2lvbkljb24gPSBuZXcgSWNvbk1vZGVsICh7XG4gICAgICAgIG5hbWU6ICdtZGktY2hldnJvbi1yaWdodCcsXG4gICAgICAgIHNpemU6IDUwLFxuICAgICAgICB2YWx1ZTogJ3doYXRldmVyJyxcbiAgICAgICAgdG9nZ2xlOntcbiAgICAgICAgICAgIG5hbWU6ICdtZGktY2hldnJvbi1yaWdodCcsXG4gICAgICAgICAgICBzaXplOiA1MCxcbiAgICAgICAgICAgIHZhbHVlOiAnd2hhdGV2ZXInXG4gICAgICAgIH1cbiAgICB9KTtcbn0iXX0=