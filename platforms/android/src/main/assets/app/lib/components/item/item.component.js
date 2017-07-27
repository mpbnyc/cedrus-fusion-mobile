"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_component_1 = require("../core/core.component");
var checkbox_component_1 = require("../checkbox/checkbox.component");
var item_styling_model_1 = require("../../models/item/item-styling.model");
var item_template_1 = require("../../templates/item.template");
var template_service_1 = require("../../services/template-service/template.service");
var CfItemComponent = (function (_super) {
    __extends(CfItemComponent, _super);
    function CfItemComponent(elementRef, /**@hidden */ templateService) {
        var _this = _super.call(this, elementRef, templateService) || this;
        _this.elementRef = elementRef;
        /**
         * <p> True if the item will contain a details tab.</p>
         */
        _this.details = false;
        _this.selectedValue = false;
        /**
         * <p> If the item is selectable, then show a checkbox</p>
         */
        _this.selectable = false;
        _this.withCheckbox = true;
        _this.selectedChange = new core_1.EventEmitter();
        _this.itemClicked = new core_1.EventEmitter();
        /**
         * <p> Set to true when the user presses on the details icon.</p>
         */
        _this.showDetails = false;
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
        var _this = this;
        this.getMyTemplate("item", item_template_1.ItemTemplates).then(function () {
            if (_this.styling == null) {
                _this.styling = new item_styling_model_1.ItemStylingModel(_this.activeTemplate["style"]);
            }
        });
    };
    CfItemComponent.prototype.ngOnChanges = function (changes) {
    };
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
    return CfItemComponent;
}(core_component_1.CfCoreComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", item_styling_model_1.ItemStylingModel)
], CfItemComponent.prototype, "styling", void 0);
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
__decorate([
    core_1.ViewChild(checkbox_component_1.CfCheckboxComponent),
    __metadata("design:type", checkbox_component_1.CfCheckboxComponent)
], CfItemComponent.prototype, "checkbox", void 0);
CfItemComponent = __decorate([
    core_1.Component({
        selector: 'cf-item',
        templateUrl: './lib/components/item/item.component.html',
        styleUrls: ['./lib/components/item/item.component.css']
    })
    /**
     * <p> The item component can be used anywhere as a general item or inside cf-list component as a list item.</p>
     * <p> The item component consists of 2 tabs: Default template (always shown) and the details template.</p>
     */
    ,
    __metadata("design:paramtypes", [core_1.ElementRef, template_service_1.TemplateService])
], CfItemComponent);
exports.CfItemComponent = CfItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzRztBQUN0Ryx5REFBeUQ7QUFDekQscUVBQXFFO0FBRXJFLDJFQUF3RTtBQUN4RSwrREFBOEQ7QUFFOUQscUZBQW1GO0FBWW5GLElBQWEsZUFBZTtJQUFTLG1DQUFlO0lBbUNuRCx5QkFBbUIsVUFBc0IsRUFBQyxhQUFhLENBQUMsZUFBK0I7UUFBdkYsWUFDQyxrQkFBTSxVQUFVLEVBQUUsZUFBZSxDQUFDLFNBQ2xDO1FBRmtCLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBL0J6Qzs7V0FFRztRQUNNLGFBQU8sR0FBVyxLQUFLLENBQUM7UUFFakMsbUJBQWEsR0FBYSxLQUFLLENBQUM7UUFFaEM7O1dBRUc7UUFDTSxnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc1QixvQkFBYyxHQUEwQixJQUFJLG1CQUFZLEVBQVcsQ0FBQztRQUVwRSxpQkFBVyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBVTNDOztXQUVHO1FBQ0gsaUJBQVcsR0FBWSxLQUFLLENBQUM7O0lBSTdCLENBQUM7SUFwQlEsc0JBQUkscUNBQVE7YUFBWixjQUFpQixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7YUFLdEQsVUFBYSxHQUFHO1lBRWYsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7WUFDekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzlDLENBQUM7OztPQVRxRDtJQXNCdEQsa0NBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUMsNkJBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM5QyxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsT0FBTyxJQUFFLElBQUksQ0FBQyxDQUN0QixDQUFDO2dCQUNBLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxxQ0FBZ0IsQ0FBRSxLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDcEUsQ0FBQztRQUNELENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxPQUFZO0lBQ3hCLENBQUM7SUFJRCxrQ0FBUSxHQUFSO1FBQ0MsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBRSxJQUFJLENBQUMsQ0FDekIsQ0FBQztZQUNBLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUMsQ0FBQyxDQUFDO1FBQzVFLENBQUM7SUFDRixDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUNDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUUsSUFBSSxDQUFDLENBQ3pCLENBQUM7WUFDQSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUMsQ0FBQyxDQUFDO1FBQzdFLENBQUM7SUFDRixDQUFDO0lBQ0Ysc0JBQUM7QUFBRCxDQUFDLEFBbkVELENBQXFDLGdDQUFlLEdBbUVuRDtBQWhFQTtJQURDLFlBQUssRUFBRTs4QkFDQyxxQ0FBZ0I7Z0RBQUM7QUFJakI7SUFBUixZQUFLLEVBQUU7O2dEQUF5QjtBQU94QjtJQUFSLFlBQUssRUFBRTs7bURBQTZCO0FBQzVCO0lBQVIsWUFBSyxFQUFFOztxREFBOEI7QUFFN0I7SUFBUixZQUFLLEVBQUU7OzsrQ0FBOEM7QUFDNUM7SUFBVCxhQUFNLEVBQUU7OEJBQWlCLG1CQUFZO3VEQUF3QztBQUVwRTtJQUFULGFBQU0sRUFBRTs7b0RBQWtDO0FBK0JYO0lBQS9CLGdCQUFTLENBQUMsd0NBQW1CLENBQUM7OEJBQVcsd0NBQW1CO2lEQUFDO0FBbkRsRCxlQUFlO0lBVjNCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsMkNBQTJDO1FBQ3hELFNBQVMsRUFBRSxDQUFDLDBDQUEwQyxDQUFDO0tBQ3ZELENBQUM7SUFFRjs7O09BR0c7O3FDQW9DNkIsaUJBQVUsRUFBK0Isa0NBQWU7R0FuQzNFLGVBQWUsQ0FtRTNCO0FBbkVZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZkNvcmVDb21wb25lbnQgfSBmcm9tICcuLi9jb3JlL2NvcmUuY29tcG9uZW50JztcbmltcG9ydCB7IENmQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuLi9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBJdGVtU3R5bGluZ01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2l0ZW0vaXRlbS1zdHlsaW5nLm1vZGVsJztcbmltcG9ydCB7IEl0ZW1UZW1wbGF0ZXMgfSBmcm9tICcuLi8uLi90ZW1wbGF0ZXMvaXRlbS50ZW1wbGF0ZSc7XG5cbmltcG9ydCB7IFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RlbXBsYXRlLXNlcnZpY2UvdGVtcGxhdGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NmLWl0ZW0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vbGliL2NvbXBvbmVudHMvaXRlbS9pdGVtLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vbGliL2NvbXBvbmVudHMvaXRlbS9pdGVtLmNvbXBvbmVudC5jc3MnXVxufSlcblxuLyoqXG4gKiA8cD4gVGhlIGl0ZW0gY29tcG9uZW50IGNhbiBiZSB1c2VkIGFueXdoZXJlIGFzIGEgZ2VuZXJhbCBpdGVtIG9yIGluc2lkZSBjZi1saXN0IGNvbXBvbmVudCBhcyBhIGxpc3QgaXRlbS48L3A+XG4gKiA8cD4gVGhlIGl0ZW0gY29tcG9uZW50IGNvbnNpc3RzIG9mIDIgdGFiczogRGVmYXVsdCB0ZW1wbGF0ZSAoYWx3YXlzIHNob3duKSBhbmQgdGhlIGRldGFpbHMgdGVtcGxhdGUuPC9wPlxuICovXG5leHBvcnQgY2xhc3MgQ2ZJdGVtQ29tcG9uZW50IGV4dGVuZHMgQ2ZDb3JlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0XG5cdEBJbnB1dCgpXG5cdHN0eWxpbmc6IEl0ZW1TdHlsaW5nTW9kZWw7XG5cdC8qKlxuXHQgKiA8cD4gVHJ1ZSBpZiB0aGUgaXRlbSB3aWxsIGNvbnRhaW4gYSBkZXRhaWxzIHRhYi48L3A+XG5cdCAqL1xuXHRASW5wdXQoKSBkZXRhaWxzOmJvb2xlYW4gPSBmYWxzZTtcblxuXHRzZWxlY3RlZFZhbHVlOiBib29sZWFuICA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiA8cD4gSWYgdGhlIGl0ZW0gaXMgc2VsZWN0YWJsZSwgdGhlbiBzaG93IGEgY2hlY2tib3g8L3A+XG5cdCAqL1xuXHRASW5wdXQoKSBzZWxlY3RhYmxlOiBib29sZWFuID0gZmFsc2U7XG5cdEBJbnB1dCgpIHdpdGhDaGVja2JveDogYm9vbGVhbiA9IHRydWU7XG5cblx0QElucHV0KCkgZ2V0IHNlbGVjdGVkKCkgeyByZXR1cm4gdGhpcy5zZWxlY3RlZFZhbHVlOyB9XG5cdEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG5cdEBPdXRwdXQoKSBpdGVtQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRzZXQgc2VsZWN0ZWQodmFsKVxuXHR7XG5cdFx0dGhpcy5zZWxlY3RlZFZhbHVlID0gdmFsO1xuXHRcdHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkVmFsdWUpO1xuXHR9XG5cblx0aW50ZXJuYWxJZDogbnVtYmVyO1xuXG5cdC8qKlxuXHQgKiA8cD4gU2V0IHRvIHRydWUgd2hlbiB0aGUgdXNlciBwcmVzc2VzIG9uIHRoZSBkZXRhaWxzIGljb24uPC9wPlxuXHQgKi9cblx0c2hvd0RldGFpbHM6IGJvb2xlYW4gPSBmYWxzZTtcblx0XG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLC8qKkBoaWRkZW4gKi8gdGVtcGxhdGVTZXJ2aWNlOlRlbXBsYXRlU2VydmljZSkge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYsIHRlbXBsYXRlU2VydmljZSk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmdldE15VGVtcGxhdGUoXCJpdGVtXCIsSXRlbVRlbXBsYXRlcykudGhlbigoKSA9PiB7XG5cdFx0aWYodGhpcy5zdHlsaW5nPT1udWxsKVxuXHRcdHtcblx0XHRcdHRoaXMuc3R5bGluZyA9IG5ldyBJdGVtU3R5bGluZ01vZGVsICh0aGlzLmFjdGl2ZVRlbXBsYXRlW1wic3R5bGVcIl0pO1xuXHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSl7XG5cdH1cblxuXHRAVmlld0NoaWxkKENmQ2hlY2tib3hDb21wb25lbnQpIGNoZWNrYm94OiBDZkNoZWNrYm94Q29tcG9uZW50O1xuXG5cdHNlbGVjdE1lKCkge1xuXHRcdGlmKHRoaXMuc2VsZWN0YWJsZT09dHJ1ZSlcblx0XHR7XG5cdFx0XHR0aGlzLnNlbGVjdGVkID0gIXRoaXMuc2VsZWN0ZWQ7XG5cdFx0XHR0aGlzLml0ZW1DbGlja2VkLmVtaXQoe1wiaWRcIjp0aGlzLmludGVybmFsSWQsIFwidmFsdWVcIjogdGhpcy5zZWxlY3RlZFZhbHVlfSk7XG5cdFx0fVxuXHR9XG5cblx0bm90aWZ5TGlzdCgpe1xuXHRcdGlmKHRoaXMuc2VsZWN0YWJsZT09dHJ1ZSlcblx0XHR7XG5cdFx0XHR0aGlzLml0ZW1DbGlja2VkLmVtaXQoe1wiaWRcIjp0aGlzLmludGVybmFsSWQsIFwidmFsdWVcIjogIXRoaXMuc2VsZWN0ZWRWYWx1ZX0pO1xuXHRcdH1cblx0fVxufSJdfQ==