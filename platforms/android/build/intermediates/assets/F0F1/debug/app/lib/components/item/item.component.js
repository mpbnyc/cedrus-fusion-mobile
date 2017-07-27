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
        styleUrls: ['./lib/components/item/item.component.scss']
    })
    /**
     * <p> The item component can be used anywhere as a general item or inside cf-list component as a list item.</p>
     * <p> The item component consists of 2 tabs: Default template (always shown) and the details template.</p>
     */
    ,
    __metadata("design:paramtypes", [core_1.ElementRef, template_service_1.TemplateService])
], CfItemComponent);
exports.CfItemComponent = CfItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzRztBQUN0Ryx5REFBeUQ7QUFDekQscUVBQXFFO0FBRXJFLDJFQUF3RTtBQUN4RSwrREFBOEQ7QUFFOUQscUZBQW1GO0FBWW5GLElBQWEsZUFBZTtJQUFTLG1DQUFlO0lBbUNuRCx5QkFBbUIsVUFBc0IsRUFBQyxhQUFhLENBQUMsZUFBK0I7UUFBdkYsWUFDQyxrQkFBTSxVQUFVLEVBQUUsZUFBZSxDQUFDLFNBQ2xDO1FBRmtCLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBL0J6Qzs7V0FFRztRQUNNLGFBQU8sR0FBVyxLQUFLLENBQUM7UUFFakMsbUJBQWEsR0FBYSxLQUFLLENBQUM7UUFFaEM7O1dBRUc7UUFDTSxnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc1QixvQkFBYyxHQUEwQixJQUFJLG1CQUFZLEVBQVcsQ0FBQztRQUVwRSxpQkFBVyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBVTNDOztXQUVHO1FBQ0gsaUJBQVcsR0FBWSxLQUFLLENBQUM7O0lBSTdCLENBQUM7SUFwQlEsc0JBQUkscUNBQVE7YUFBWixjQUFpQixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7YUFLdEQsVUFBYSxHQUFHO1lBRWYsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7WUFDekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzlDLENBQUM7OztPQVRxRDtJQXNCdEQsa0NBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUMsNkJBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM5QyxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsT0FBTyxJQUFFLElBQUksQ0FBQyxDQUN0QixDQUFDO2dCQUNBLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxxQ0FBZ0IsQ0FBRSxLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDcEUsQ0FBQztRQUNELENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxPQUFZO0lBQ3hCLENBQUM7SUFJRCxrQ0FBUSxHQUFSO1FBQ0MsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBRSxJQUFJLENBQUMsQ0FDekIsQ0FBQztZQUNBLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUMsQ0FBQyxDQUFDO1FBQzVFLENBQUM7SUFDRixDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUNDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUUsSUFBSSxDQUFDLENBQ3pCLENBQUM7WUFDQSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUMsQ0FBQyxDQUFDO1FBQzdFLENBQUM7SUFDRixDQUFDO0lBQ0Ysc0JBQUM7QUFBRCxDQUFDLEFBbkVELENBQXFDLGdDQUFlLEdBbUVuRDtBQWhFQTtJQURDLFlBQUssRUFBRTs4QkFDQyxxQ0FBZ0I7Z0RBQUM7QUFJakI7SUFBUixZQUFLLEVBQUU7O2dEQUF5QjtBQU94QjtJQUFSLFlBQUssRUFBRTs7bURBQTZCO0FBQzVCO0lBQVIsWUFBSyxFQUFFOztxREFBOEI7QUFFN0I7SUFBUixZQUFLLEVBQUU7OzsrQ0FBOEM7QUFDNUM7SUFBVCxhQUFNLEVBQUU7OEJBQWlCLG1CQUFZO3VEQUF3QztBQUVwRTtJQUFULGFBQU0sRUFBRTs7b0RBQWtDO0FBK0JYO0lBQS9CLGdCQUFTLENBQUMsd0NBQW1CLENBQUM7OEJBQVcsd0NBQW1CO2lEQUFDO0FBbkRsRCxlQUFlO0lBVjNCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsMkNBQTJDO1FBQ3hELFNBQVMsRUFBRSxDQUFDLDJDQUEyQyxDQUFDO0tBQ3hELENBQUM7SUFFRjs7O09BR0c7O3FDQW9DNkIsaUJBQVUsRUFBK0Isa0NBQWU7R0FuQzNFLGVBQWUsQ0FtRTNCO0FBbkVZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZkNvcmVDb21wb25lbnQgfSBmcm9tICcuLi9jb3JlL2NvcmUuY29tcG9uZW50JztcbmltcG9ydCB7IENmQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuLi9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBJdGVtU3R5bGluZ01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2l0ZW0vaXRlbS1zdHlsaW5nLm1vZGVsJztcbmltcG9ydCB7IEl0ZW1UZW1wbGF0ZXMgfSBmcm9tICcuLi8uLi90ZW1wbGF0ZXMvaXRlbS50ZW1wbGF0ZSc7XG5cbmltcG9ydCB7IFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RlbXBsYXRlLXNlcnZpY2UvdGVtcGxhdGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NmLWl0ZW0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vbGliL2NvbXBvbmVudHMvaXRlbS9pdGVtLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vbGliL2NvbXBvbmVudHMvaXRlbS9pdGVtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbi8qKlxuICogPHA+IFRoZSBpdGVtIGNvbXBvbmVudCBjYW4gYmUgdXNlZCBhbnl3aGVyZSBhcyBhIGdlbmVyYWwgaXRlbSBvciBpbnNpZGUgY2YtbGlzdCBjb21wb25lbnQgYXMgYSBsaXN0IGl0ZW0uPC9wPlxuICogPHA+IFRoZSBpdGVtIGNvbXBvbmVudCBjb25zaXN0cyBvZiAyIHRhYnM6IERlZmF1bHQgdGVtcGxhdGUgKGFsd2F5cyBzaG93bikgYW5kIHRoZSBkZXRhaWxzIHRlbXBsYXRlLjwvcD5cbiAqL1xuZXhwb3J0IGNsYXNzIENmSXRlbUNvbXBvbmVudCBleHRlbmRzIENmQ29yZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdFxuXHRASW5wdXQoKVxuXHRzdHlsaW5nOiBJdGVtU3R5bGluZ01vZGVsO1xuXHQvKipcblx0ICogPHA+IFRydWUgaWYgdGhlIGl0ZW0gd2lsbCBjb250YWluIGEgZGV0YWlscyB0YWIuPC9wPlxuXHQgKi9cblx0QElucHV0KCkgZGV0YWlsczpib29sZWFuID0gZmFsc2U7XG5cblx0c2VsZWN0ZWRWYWx1ZTogYm9vbGVhbiAgPSBmYWxzZTtcblxuXHQvKipcblx0ICogPHA+IElmIHRoZSBpdGVtIGlzIHNlbGVjdGFibGUsIHRoZW4gc2hvdyBhIGNoZWNrYm94PC9wPlxuXHQgKi9cblx0QElucHV0KCkgc2VsZWN0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXHRASW5wdXQoKSB3aXRoQ2hlY2tib3g6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdEBJbnB1dCgpIGdldCBzZWxlY3RlZCgpIHsgcmV0dXJuIHRoaXMuc2VsZWN0ZWRWYWx1ZTsgfVxuXHRAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuXHRAT3V0cHV0KCkgaXRlbUNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0c2V0IHNlbGVjdGVkKHZhbClcblx0e1xuXHRcdHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHZhbDtcblx0XHR0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZFZhbHVlKTtcblx0fVxuXG5cdGludGVybmFsSWQ6IG51bWJlcjtcblxuXHQvKipcblx0ICogPHA+IFNldCB0byB0cnVlIHdoZW4gdGhlIHVzZXIgcHJlc3NlcyBvbiB0aGUgZGV0YWlscyBpY29uLjwvcD5cblx0ICovXG5cdHNob3dEZXRhaWxzOiBib29sZWFuID0gZmFsc2U7XG5cdFxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwvKipAaGlkZGVuICovIHRlbXBsYXRlU2VydmljZTpUZW1wbGF0ZVNlcnZpY2UpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmLCB0ZW1wbGF0ZVNlcnZpY2UpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5nZXRNeVRlbXBsYXRlKFwiaXRlbVwiLEl0ZW1UZW1wbGF0ZXMpLnRoZW4oKCkgPT4ge1xuXHRcdGlmKHRoaXMuc3R5bGluZz09bnVsbClcblx0XHR7XG5cdFx0XHR0aGlzLnN0eWxpbmcgPSBuZXcgSXRlbVN0eWxpbmdNb2RlbCAodGhpcy5hY3RpdmVUZW1wbGF0ZVtcInN0eWxlXCJdKTtcblx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpe1xuXHR9XG5cblx0QFZpZXdDaGlsZChDZkNoZWNrYm94Q29tcG9uZW50KSBjaGVja2JveDogQ2ZDaGVja2JveENvbXBvbmVudDtcblxuXHRzZWxlY3RNZSgpIHtcblx0XHRpZih0aGlzLnNlbGVjdGFibGU9PXRydWUpXG5cdFx0e1xuXHRcdFx0dGhpcy5zZWxlY3RlZCA9ICF0aGlzLnNlbGVjdGVkO1xuXHRcdFx0dGhpcy5pdGVtQ2xpY2tlZC5lbWl0KHtcImlkXCI6dGhpcy5pbnRlcm5hbElkLCBcInZhbHVlXCI6IHRoaXMuc2VsZWN0ZWRWYWx1ZX0pO1xuXHRcdH1cblx0fVxuXG5cdG5vdGlmeUxpc3QoKXtcblx0XHRpZih0aGlzLnNlbGVjdGFibGU9PXRydWUpXG5cdFx0e1xuXHRcdFx0dGhpcy5pdGVtQ2xpY2tlZC5lbWl0KHtcImlkXCI6dGhpcy5pbnRlcm5hbElkLCBcInZhbHVlXCI6ICF0aGlzLnNlbGVjdGVkVmFsdWV9KTtcblx0XHR9XG5cdH1cbn0iXX0=