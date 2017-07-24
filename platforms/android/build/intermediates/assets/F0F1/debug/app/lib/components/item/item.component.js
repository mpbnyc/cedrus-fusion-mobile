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
            './item.component.css'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzRztBQUN0Ryx5REFBeUQ7QUFDekQsMkRBQXdEO0FBYXhELElBQWEsZUFBZTtJQUFTLG1DQUFlO0lBdUJuRCx5QkFBbUIsVUFBc0I7UUFBekMsWUFDQyxrQkFBTSxVQUFVLENBQUMsU0FDakI7UUFGa0IsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUF0QmhDLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFakMsbUJBQWEsR0FBYSxLQUFLLENBQUM7UUFFdkIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHNUIsb0JBQWMsR0FBMEIsSUFBSSxtQkFBWSxFQUFXLENBQUM7UUFFcEUsaUJBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQVUzQyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQXVDekIsa0JBQVksR0FBRyxJQUFJLHNCQUFTLENBQUU7WUFDMUIsSUFBSSxFQUFFLG1CQUFtQjtZQUN6QixJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxVQUFVO1lBQ2pCLE1BQU0sRUFBQztnQkFDSCxJQUFJLEVBQUUsbUJBQW1CO2dCQUN6QixJQUFJLEVBQUUsRUFBRTtnQkFDUixLQUFLLEVBQUUsVUFBVTthQUNwQjtTQUNKLENBQUMsQ0FBQzs7SUE1Q04sQ0FBQztJQWpCUSxzQkFBSSxxQ0FBUTthQUFaLGNBQWlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzthQUt0RCxVQUFhLEdBQUc7WUFFZixJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztZQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUMsQ0FBQzs7O09BVHFEO0lBbUJ0RCxrQ0FBUSxHQUFSO1FBQ0Msd0RBQXdEO1FBQ3hELHlCQUF5QjtRQUN6QixJQUFJO1FBQ0osdUVBQXVFO1FBQ3ZFLElBQUk7UUFDSixNQUFNO0lBQ1AsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxPQUFZO0lBQ3hCLENBQUM7SUFFRCxpRUFBaUU7SUFFakUsa0NBQVEsR0FBUjtRQUNDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUUsSUFBSSxDQUFDLENBQ3pCLENBQUM7WUFDQSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFDLENBQUMsQ0FBQztRQUM1RSxDQUFDO0lBQ0YsQ0FBQztJQUVELG9DQUFVLEdBQVY7UUFDQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFFLElBQUksQ0FBQyxDQUN6QixDQUFDO1lBQ0EsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFDLENBQUMsQ0FBQztRQUM3RSxDQUFDO0lBQ0MsQ0FBQztJQUVELHdDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQTtJQUN2QyxDQUFDO0lBWUwsc0JBQUM7QUFBRCxDQUFDLEFBdEVELENBQXFDLGdDQUFlLEdBc0VuRDtBQXJFUztJQUFSLFlBQUssRUFBRTs7Z0RBQXlCO0FBSXhCO0lBQVIsWUFBSyxFQUFFOzttREFBNkI7QUFDNUI7SUFBUixZQUFLLEVBQUU7O3FEQUE4QjtBQUU3QjtJQUFSLFlBQUssRUFBRTs7OytDQUE4QztBQUM1QztJQUFULGFBQU0sRUFBRTs4QkFBaUIsbUJBQVk7dURBQXdDO0FBRXBFO0lBQVQsYUFBTSxFQUFFOztvREFBa0M7QUFYL0IsZUFBZTtJQVozQixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLFNBQVM7UUFDaEIsV0FBVyxFQUFFLDJDQUEyQztRQUN4RCxTQUFTLEVBQUU7WUFDUCxzQkFBc0I7U0FDekI7S0FDSixDQUFDO0lBRUY7OztPQUdHOztxQ0F3QjZCLGlCQUFVO0dBdkI3QixlQUFlLENBc0UzQjtBQXRFWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDZkNvcmVDb21wb25lbnQgfSBmcm9tICcuLi9jb3JlL2NvcmUuY29tcG9uZW50JztcbmltcG9ydCB7IEljb25Nb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9pY29uL2ljb24ubW9kZWwnXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjZi1pdGVtJyxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xpYi9jb21wb25lbnRzL2l0ZW0vaXRlbS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1xuICAgICAgICAnLi9pdGVtLmNvbXBvbmVudC5jc3MnXG4gICAgXVxufSlcblxuLyoqXG4gKiA8cD4gVGhlIGl0ZW0gY29tcG9uZW50IGNhbiBiZSB1c2VkIGFueXdoZXJlIGFzIGEgZ2VuZXJhbCBpdGVtIG9yIGluc2lkZSBjZi1saXN0IGNvbXBvbmVudCBhcyBhIGxpc3QgaXRlbS48L3A+XG4gKiA8cD4gVGhlIGl0ZW0gY29tcG9uZW50IGNvbnNpc3RzIG9mIDIgdGFiczogRGVmYXVsdCB0ZW1wbGF0ZSAoYWx3YXlzIHNob3duKSBhbmQgdGhlIGRldGFpbHMgdGVtcGxhdGUuPC9wPlxuICovXG5leHBvcnQgY2xhc3MgQ2ZJdGVtQ29tcG9uZW50IGV4dGVuZHMgQ2ZDb3JlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCkgZGV0YWlsczogYm9vbGVhbiA9IHRydWU7XG5cblx0c2VsZWN0ZWRWYWx1ZTogYm9vbGVhbiAgPSBmYWxzZTtcblxuXHRASW5wdXQoKSBzZWxlY3RhYmxlOiBib29sZWFuID0gZmFsc2U7XG5cdEBJbnB1dCgpIHdpdGhDaGVja2JveDogYm9vbGVhbiA9IHRydWU7XG5cblx0QElucHV0KCkgZ2V0IHNlbGVjdGVkKCkgeyByZXR1cm4gdGhpcy5zZWxlY3RlZFZhbHVlOyB9XG5cdEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG5cdEBPdXRwdXQoKSBpdGVtQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRzZXQgc2VsZWN0ZWQodmFsKVxuXHR7XG5cdFx0dGhpcy5zZWxlY3RlZFZhbHVlID0gdmFsO1xuXHRcdHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkVmFsdWUpO1xuXHR9XG5cblx0aW50ZXJuYWxJZDogbnVtYmVyO1xuXG5cdHNob3dEZXRhaWxzOiBib29sZWFuID0gdHJ1ZTtcblx0XG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHQvLyB0aGlzLmdldE15VGVtcGxhdGUoXCJpdGVtXCIsSXRlbVRlbXBsYXRlcykudGhlbigoKSA9PiB7XG5cdFx0Ly8gaWYodGhpcy5zdHlsaW5nPT1udWxsKVxuXHRcdC8vIHtcblx0XHQvLyBcdHRoaXMuc3R5bGluZyA9IG5ldyBJdGVtU3R5bGluZ01vZGVsICh0aGlzLmFjdGl2ZVRlbXBsYXRlW1wic3R5bGVcIl0pO1xuXHRcdC8vIH1cblx0XHQvLyB9KTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSl7XG5cdH1cblxuXHQvLyBAVmlld0NoaWxkKENmQ2hlY2tib3hDb21wb25lbnQpIGNoZWNrYm94OiBDZkNoZWNrYm94Q29tcG9uZW50O1xuXG5cdHNlbGVjdE1lKCkge1xuXHRcdGlmKHRoaXMuc2VsZWN0YWJsZT09dHJ1ZSlcblx0XHR7XG5cdFx0XHR0aGlzLnNlbGVjdGVkID0gIXRoaXMuc2VsZWN0ZWQ7XG5cdFx0XHR0aGlzLml0ZW1DbGlja2VkLmVtaXQoe1wiaWRcIjp0aGlzLmludGVybmFsSWQsIFwidmFsdWVcIjogdGhpcy5zZWxlY3RlZFZhbHVlfSk7XG5cdFx0fVxuXHR9XG5cblx0bm90aWZ5TGlzdCgpe1xuXHRcdGlmKHRoaXMuc2VsZWN0YWJsZT09dHJ1ZSlcblx0XHR7XG5cdFx0XHR0aGlzLml0ZW1DbGlja2VkLmVtaXQoe1wiaWRcIjp0aGlzLmludGVybmFsSWQsIFwidmFsdWVcIjogIXRoaXMuc2VsZWN0ZWRWYWx1ZX0pO1xuXHRcdH1cbiAgICB9XG4gICAgXG4gICAgc2hvd1RoZURldGFpbHMoKSB7XG4gICAgICAgIHRoaXMuc2hvd0RldGFpbHMgPSF0aGlzLnNob3dEZXRhaWxzXG4gICAgfVxuXG4gICAgbXlGdXNpb25JY29uID0gbmV3IEljb25Nb2RlbCAoe1xuICAgICAgICBuYW1lOiAnbWRpLWNoZXZyb24tcmlnaHQnLFxuICAgICAgICBzaXplOiA1MCxcbiAgICAgICAgdmFsdWU6ICd3aGF0ZXZlcicsXG4gICAgICAgIHRvZ2dsZTp7XG4gICAgICAgICAgICBuYW1lOiAnbWRpLWNoZXZyb24tcmlnaHQnLFxuICAgICAgICAgICAgc2l6ZTogNTAsXG4gICAgICAgICAgICB2YWx1ZTogJ3doYXRldmVyJ1xuICAgICAgICB9XG4gICAgfSk7XG59Il19