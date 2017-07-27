"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_component_1 = require("../core/core.component");
var select_model_1 = require("../../models/select/select.model");
var select_styling_model_1 = require("../../models/select/select-styling.model");
var forms_1 = require("@angular/forms");
var select_template_1 = require("../../templates/select.template");
var template_service_1 = require("../../services/template-service/template.service");
/**
 * <p>CF Select Component</p>
 * <pre>
 * <code>
 * import { SelectModel } from 'cedrus-fusion'
 * import { SelectStylingModel } from 'cedrus-fusion'
 * <code><</code>cf-select<code>></code><code><</code><code>/</code>cf-select<code>></code>
 * </code>
 * </pre>
 */
var CfSelectComponent = CfSelectComponent_1 = (function (_super) {
    __extends(CfSelectComponent, _super);
    /**@hidden */
    function CfSelectComponent(/**@hidden */ elementRef, /**@hidden */ templateService) {
        var _this = _super.call(this, elementRef, templateService) || this;
        _this.elementRef = elementRef;
        /**@hidden */
        _this.onChange = function () { };
        /**@hidden */
        _this.onTouched = function () { };
        /**@hidden */
        _this.notifacationClickable = '';
        /**
         * <p>Value of the Filter input by which whole dropdown list items will be filtered<p>
         */
        _this.cfFilterBy = '';
        /**
         *<p> If select is required</p>
         */
        _this.required = false;
        /**
         * <p>Event to call when Select dropdown list was opened</p>
         */
        _this.cfOnOpen = new core_1.EventEmitter();
        /**
         * <p>Event to call when value of Select was changed</p>
         */
        _this.cfOnChange = new core_1.EventEmitter();
        /**
         * <p>Event to call when Select dropdown list was closed</p>
         */
        _this.cfOnClose = new core_1.EventEmitter();
        return _this;
    }
    /**@hidden */
    CfSelectComponent.prototype.writeValue = function (obj) {
        if (obj) {
            if (this.cfSelect != null)
                this.cfSelect["selected"] = obj;
        }
    };
    /**@hidden */
    CfSelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = function (value) { Promise.resolve(null).then(function () { return fn(value); }); };
    };
    /**@hidden */
    CfSelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = function (value) { Promise.resolve(null).then(function () { return fn(value); }); };
    };
    /**@hidden */
    CfSelectComponent.prototype.setDisabledState = function (isDisabled) {
    };
    /**@hidden
     * It is method which will emit corresponding event when Select dropdown list was opened.
     */
    CfSelectComponent.prototype.cfSelectOpened = function () { this.cfOnOpen.emit(); };
    /**hidden
     * It is method which will emit corresponding event when value of Select was changed.
     */
    CfSelectComponent.prototype.cfSelectChanged = function () {
        this.cfOnChange.emit(this.cfSelect["selected"]);
        this.onChange(this.cfSelect["selected"]);
        this.onTouched();
    };
    /**hidden
     * It is method which will emit corresponding event when Select dropdown list was closed.
     */
    CfSelectComponent.prototype.cfSelectClosed = function () { this.cfOnClose.emit(); };
    /**hidden
     * It is function for creating Notification click events by using Core Component <b>notificationAction</b> event emmiter.
     * @param notification    it is json notification object
     */
    CfSelectComponent.prototype.cfNotificationAction = function (notification) {
        this.notificationAction.emit(notification);
    };
    /**@hidden */
    CfSelectComponent.prototype.resetSelect = function () {
        this.cfSelect.selected = "";
        this.cfSelectChanged();
    };
    /**@hidden
     * It will be generated <b>cfSelect</b> object and rendered inside component template.
     */
    CfSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.notificationAction.observers.length > 0)
            this.notifacationClickable = 'notification-clickable';
        this.getMyTemplate("select", select_template_1.SelectTemplates).then(function () {
            if (_this.properties == null)
                _this.properties = new select_model_1.SelectModel(_this.activeTemplate["property"]);
            if (_this.styling == null)
                _this.styling = new select_styling_model_1.SelectStylingModel(_this.activeTemplate["style"]);
            _this.cfSelect = _this.properties;
        });
    };
    return CfSelectComponent;
}(core_component_1.CfCoreComponent));
__decorate([
    core_1.HostBinding('class'),
    __metadata("design:type", Object)
], CfSelectComponent.prototype, "notifacationClickable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", select_model_1.SelectModel)
], CfSelectComponent.prototype, "properties", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", select_styling_model_1.SelectStylingModel)
], CfSelectComponent.prototype, "styling", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CfSelectComponent.prototype, "required", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CfSelectComponent.prototype, "cfOnOpen", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CfSelectComponent.prototype, "cfOnChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CfSelectComponent.prototype, "cfOnClose", void 0);
CfSelectComponent = CfSelectComponent_1 = __decorate([
    core_1.Component({
        selector: 'cf-select',
        templateUrl: './lib/components/select/select.component.html',
        styleUrls: ['./lib/components/select/select.component.css'],
        providers: [
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return CfSelectComponent_1; }),
                multi: true
            }
        ]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, template_service_1.TemplateService])
], CfSelectComponent);
exports.CfSelectComponent = CfSelectComponent;
var CfSelectComponent_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0g7QUFDcEgseURBQXlEO0FBQ3pELGlFQUErRDtBQUMvRCxpRkFBOEU7QUFDOUUsd0NBQXFHO0FBQ3JHLG1FQUFrRTtBQUVsRSxxRkFBbUY7QUFFbkY7Ozs7Ozs7OztHQVNHO0FBY0gsSUFBYSxpQkFBaUI7SUFBUyxxQ0FBZTtJQTZKcEQsYUFBYTtJQUNiLDJCQUFjLGFBQWEsQ0FBTyxVQUFzQixFQUFDLGFBQWEsQ0FBQyxlQUErQjtRQUF0RyxZQUEwRyxrQkFBTSxVQUFVLEVBQUUsZUFBZSxDQUFDLFNBQUc7UUFBN0csZ0JBQVUsR0FBVixVQUFVLENBQVk7UUF6SXhELGFBQWE7UUFDZCxjQUFRLEdBQVEsY0FBUSxDQUFDLENBQUM7UUFDekIsYUFBYTtRQUNiLGVBQVMsR0FBUSxjQUFRLENBQUMsQ0FBQztRQUUzQixhQUFhO1FBQ1MsMkJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBZ0NqRDs7V0FFRztRQUNILGdCQUFVLEdBQVcsRUFBRSxDQUFDO1FBMEN4Qjs7V0FFRztRQUNhLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUM7O1dBRUc7UUFDTyxjQUFRLEdBQUcsSUFBSSxtQkFBWSxFQUFPLENBQUM7UUFFN0M7O1dBRUc7UUFDTyxnQkFBVSxHQUFHLElBQUksbUJBQVksRUFBTyxDQUFDO1FBRS9DOztXQUVHO1FBQ08sZUFBUyxHQUFHLElBQUksbUJBQVksRUFBTyxDQUFDOztJQW9DZ0csQ0FBQztJQTVKL0ksYUFBYTtJQUNiLHNDQUFVLEdBQVYsVUFBVyxHQUFRO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDTixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFFLElBQUksQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFV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QWtCO2tEQUFDO0FBS25DO0lBQVIsWUFBSyxFQUFFOzhCQUFrQixPQUFPO21EQUFTO0FBS2hDO0lBQVQsYUFBTSxFQUFFOzttREFBb0M7QUFLbkM7SUFBVCxhQUFNLEVBQUU7O3FEQUFzQztBQUtyQztJQUFULGFBQU0sRUFBRTs7b0RBQXFDO0FBMUhuQyxpQkFBaUI7SUFiN0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSwrQ0FBK0M7UUFDNUQsU0FBUyxFQUFFLENBQUMsOENBQThDLENBQUM7UUFDM0QsU0FBUyxFQUFFO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLHlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLGlCQUFVLENBQUMsY0FBTSxPQUFBLG1CQUFpQixFQUFqQixDQUFpQixDQUFDO2dCQUNoRCxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7S0FDRixDQUFDO3FDQWdLOEMsaUJBQVUsRUFBK0Isa0NBQWU7R0E5SjNGLGlCQUFpQixDQThLN0I7QUE5S1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENmQ29yZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvY29yZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0TW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvc2VsZWN0L3NlbGVjdC5tb2RlbCc7XG5pbXBvcnQgeyBTZWxlY3RTdHlsaW5nTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvc2VsZWN0L3NlbGVjdC1zdHlsaW5nLm1vZGVsJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiwgTkdfVkFMSURBVE9SUywgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTZWxlY3RUZW1wbGF0ZXMgfSBmcm9tICcuLi8uLi90ZW1wbGF0ZXMvc2VsZWN0LnRlbXBsYXRlJztcblxuaW1wb3J0IHsgVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGVtcGxhdGUtc2VydmljZS90ZW1wbGF0ZS5zZXJ2aWNlJztcblxuLyoqXG4gKiA8cD5DRiBTZWxlY3QgQ29tcG9uZW50PC9wPiBcbiAqIDxwcmU+XG4gKiA8Y29kZT5cbiAqIGltcG9ydCB7IFNlbGVjdE1vZGVsIH0gZnJvbSAnY2VkcnVzLWZ1c2lvbidcbiAqIGltcG9ydCB7IFNlbGVjdFN0eWxpbmdNb2RlbCB9IGZyb20gJ2NlZHJ1cy1mdXNpb24nXG4gKiA8Y29kZT48PC9jb2RlPmNmLXNlbGVjdDxjb2RlPj48L2NvZGU+PGNvZGU+PDwvY29kZT48Y29kZT4vPC9jb2RlPmNmLXNlbGVjdDxjb2RlPj48L2NvZGU+XG4gKiA8L2NvZGU+XG4gKiA8L3ByZT5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2Ytc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpYi9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saWIvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2ZTZWxlY3RDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDZlNlbGVjdENvbXBvbmVudCBleHRlbmRzIENmQ29yZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdFxuICAvKipAaGlkZGVuICovXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAob2JqKSB7XG4gICAgICBpZih0aGlzLmNmU2VsZWN0IT1udWxsKVxuXHRcdFx0ICB0aGlzLmNmU2VsZWN0W1wic2VsZWN0ZWRcIl0gPSBvYmo7XG5cdFx0fVxuXHR9XG4gIC8qKkBoaWRkZW4gKi9cblx0cmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vbkNoYW5nZSA9ICh2YWx1ZSkgPT4geyBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiBmbih2YWx1ZSkpIH07XG5cdH1cbiAgLyoqQGhpZGRlbiAqL1xuXHRyZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vblRvdWNoZWQgPSAodmFsdWUpID0+IHsgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4gZm4odmFsdWUpKSB9O1xuXHR9XG4gIC8qKkBoaWRkZW4gKi9cblx0c2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdH1cblxuICAvKipAaGlkZGVuICovXG5cdG9uQ2hhbmdlOiBhbnkgPSAoKSA9PiB7IH07XG4gIC8qKkBoaWRkZW4gKi9cbiAgb25Ub3VjaGVkOiBhbnkgPSAoKSA9PiB7IH07XG4gIFxuICAvKipAaGlkZGVuICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBub3RpZmFjYXRpb25DbGlja2FibGUgPSAnJztcblxuICAvKipAaGlkZGVuXG4gICAqIDxwPkl0IGlzIE9iamVjdCB3aGljaCB3aWxsIHJlY2l2ZSBkYXRhIGZyb20gPGI+U2VsZWN0TW9kZWw8L2I+IENsYXNzLiBJdCBpcyB1c2VkIGluIDxiPmNmLXNlbGVjdDwvYj4gdGVtcGxhdGUuPC9wPlxuICAgKiA8cD5FeGFtcGxlIG9mIDxiPlNlbGVjdE1vZGVsPC9iPiBDbGFzczo8L3A+XG4gICAqIDxwcmU+e1xuICAgKiAgcGxhY2Vob2xkZXI6ICdTZWxlY3QgZnJ1aXQ6ICcsXG4gICAqICBpdGVtczogW1xuICAgKiAgICAgIHsgdmFsdWU6ICdhcGwnLCBsYWJlbDogJ0FwcGxlJyB9LFxuICAgKiAgICAgIHsgdmFsdWU6ICdiYW4nLCBsYWJlbDogJ0JhbmFuYScgfSxcbiAgICogICAgICB7IHZhbHVlOiAnY2hlJywgbGFiZWw6ICdDaGVycnknIH0gICAgICAgXG4gICAqIF0sXG4gICAqICBpdGVtVmFsdWU6ICd2YWx1ZScsXG4gICAqICBpdGVtTGFiZWw6ICdsYWJlbCcsXG4gICAqICBzZWxlY3RlZDogJ2NoZScsXG4gICAqICBzaG93RmlsdGVyOiBmYWxzZSxcbiAgICogfTwvcHJlPlxuICAgKiA8aDQ+cGxhY2Vob2xkZXI6IHN0cmluZzwvaDQ+XG4gICAqIDxwPkl0IGlzIFNlbGVjdCBwbGFjZWhvbGRlciB0ZXh0LjwvcD5cbiAgICogPGg0Pml0ZW1zOiBBcnJheTwvaDQ+XG4gICAqIDxwPkl0IGlzIGFuIEFycmF5IHdpdGggaXRlbXMuIEVhY2ggaXRlbSBpcyBhbiBPYmplY3Qgd2l0aCBhdCBsZWFzdCB0d28gcHJvcGVydGllcyB0byBiZSB1c2VkIGluIFNlbGVjdCB0ZW1wbGF0ZS48L3A+XG4gICAqIDxoND5pdGVtVmFsdWU6IHN0cmluZzwvaDQ+XG4gICAqIEl0IGlzIG5hbWUgb2YgaXRlbSBwcm9wZXJ0eSwgd2hpY2ggd2lsbCBiZSB1c2VkIGFzIHZhbHVlIGZvciA8Yj5tZC1vcHRpb248L2I+LiBFYWNoIGl0ZW0gdmFsdWUgdHlwZSBvZiB0aGF0IHByb3BlcnR5IGNhbiBiZSBvbmx5IGxvZ2ljYWxseSBjb3JyZWN0LlxuICAgKiA8aDQ+aXRlbUxhYmVsOiBzdHJpbmc8L2g0PlxuICAgKiBJdCBpcyBuYW1lIG9mIGl0ZW0gcHJvcGVydHksIHdoaWNoIHdpbGwgYmUgdXNlZCBhcyBkaXNwbGF5aW5nIHRleHQgZm9yIDxiPm1kLW9wdGlvbjwvYj4gYW5kIGJ5IHRoaXMgcHJvcGVydHkgZmlsdGVyaW5nIHN5c3RlbSBpcyB3b3JraW5nLiBFYWNoIGl0ZW0gdmFsdWUgdHlwZSBvZiB0aGF0IHByb3BlcnR5IGNhbiBiZSBvbmx5IGxvZ2ljYWxseSBjb3JyZWN0LiBBbHNvIEhUTUwgdmFsdWVzIGFyZSBwb3NzaWJsZS5cbiAgICogPGg0PnNlbGVjdGVkOiBhbnk8L2g0PlxuICAgKiBJdCBpcyAnaXRlbVZhbHVlJyBvZiBvbmUgb2YgdGhlIGl0ZW1zIGFuZCB0aGF0IGl0ZW0gd2lsbCBiZSBzZWxlY3RlZC5cbiAgICogPGg0PnNob3dGaWx0ZXI6IEJvb2xlYW48L2g0PlxuICAgKiBJdCBzaG93L2hpZGUgRmlsdGVyIGluIGRyb3Bkb3duIGxpc3QuXG4gICAqL1xuICBjZlNlbGVjdDogU2VsZWN0TW9kZWw7XG5cbiAgLyoqXG4gICAqIDxwPlZhbHVlIG9mIHRoZSBGaWx0ZXIgaW5wdXQgYnkgd2hpY2ggd2hvbGUgZHJvcGRvd24gbGlzdCBpdGVtcyB3aWxsIGJlIGZpbHRlcmVkPHA+XG4gICAqL1xuICBjZkZpbHRlckJ5OiBzdHJpbmcgPSAnJztcblxuICAvKipcblx0ICogPHByZT57XG5cdCAqICBkaXNwbGF5OiBib29sZWFuLCAvLyBEZWZhdWx0OiBUcnVlXG4gICAqICBkaXNhYmxlOiBib29sZWFuLCAvLyBEZWZhdWx0OiBGYWxzZVxuXHQgKiAgaXRlbXM6IFNlbGVjdEl0ZW1Nb2RlbFtdLFxuICAgKiAgc2VsZWN0ZWQ6IHN0cmluZyxcbiAgICogIHBsYWNlaG9sZGVyOiBzdHJpbmcsXG4gICAqICBzaG93RmlsdGVyOiBib29sZWFuLFxuICAgKiAgcmVxdWlyZWQ6IGJvb2xlYW5cblx0ICogfVxuXHQgKiA8L3ByZT5cblx0ICovXG4gIEBJbnB1dCgpIHB1YmxpYyBwcm9wZXJ0aWVzOiBTZWxlY3RNb2RlbDtcblxuICAvKipcblx0ICAqIDxwcmU+e1xuXHQgICogLy8gc3R5bGluZyBvZiB0aGUgY29udGFpbmVyIHN1cnJvdW5kaW5nIHRoZSBzZWxlY3Rcblx0ICAqIGNvbnRhaW5lcjoge1xuXHQgICpcdFx0ZHluYW1pYyBjbGFzczogZnVuY3Rpb24oKSAtPiBzdHJpbmcsIC8vZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgc3RyaW5nIG9mIHRoZSBuYW1lIG9mIHRoZSBjbGFzc1xuXHQgICpcdFx0Y2xhc3M6IHN0cmluZyAvL25hbWUgb2YgdGhlIGNsYXNzIHNwZWNpZmllZCBpbiB5b3Ugc2Nzcy9jc3MgZmlsZVxuXHQgICpcdH0sXG5cdCAgKiAvLyBzdHlsaW5nIG9mIHRoZSBzZWxlY3Rcblx0ICAqIHNlbGVjdDoge1xuXHQgICpcdFx0ZHluYW1pYyBjbGFzczogZnVuY3Rpb24oKSAtPiBzdHJpbmcsIFxuXHQgICpcdFx0Y2xhc3M6IHN0cmluZyAsXG5cdCAgKlx0XHR0aGVtZUNvbG9yOiBzdHJpbmcgLCAvLyBwcmltYXJ5L2FjY2VudC93YXJuXG5cdCAgKiB9LFxuXHQgICogZmlsdGVyOiB7XG5cdCAgKlx0XHRkeW5hbWljIGNsYXNzOiBmdW5jdGlvbigpIC0+IHN0cmluZywgXG5cdCAgKlx0XHRjbGFzczogc3RyaW5nIFxuXHQgICogfSxcbiAgICAqIG9wdGlvbnM6IHtcblx0ICAqXHRcdGR5bmFtaWMgY2xhc3M6IGZ1bmN0aW9uKCkgLT4gc3RyaW5nLCBcblx0ICAqXHRcdGNsYXNzOiBzdHJpbmcgXG5cdCAgKiB9XG5cdCAgKn1cblx0ICAqIDwvcHJlPlxuXHQgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBzdHlsaW5nOiBTZWxlY3RTdHlsaW5nTW9kZWw7XG5cbiAgLyoqXG4gICAqPHA+IElmIHNlbGVjdCBpcyByZXF1aXJlZDwvcD5cbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyByZXF1aXJlZDogQm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiA8cD5FdmVudCB0byBjYWxsIHdoZW4gU2VsZWN0IGRyb3Bkb3duIGxpc3Qgd2FzIG9wZW5lZDwvcD5cbiAgICovXG4gIEBPdXRwdXQoKSBjZk9uT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiA8cD5FdmVudCB0byBjYWxsIHdoZW4gdmFsdWUgb2YgU2VsZWN0IHdhcyBjaGFuZ2VkPC9wPlxuICAgKi9cbiAgQE91dHB1dCgpIGNmT25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKipcbiAgICogPHA+RXZlbnQgdG8gY2FsbCB3aGVuIFNlbGVjdCBkcm9wZG93biBsaXN0IHdhcyBjbG9zZWQ8L3A+XG4gICAqL1xuICBAT3V0cHV0KCkgY2ZPbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqQGhpZGRlblxuICAgKiBJdCBpcyBtZXRob2Qgd2hpY2ggd2lsbCBlbWl0IGNvcnJlc3BvbmRpbmcgZXZlbnQgd2hlbiBTZWxlY3QgZHJvcGRvd24gbGlzdCB3YXMgb3BlbmVkLlxuICAgKi9cbiAgY2ZTZWxlY3RPcGVuZWQoKSB7IHRoaXMuY2ZPbk9wZW4uZW1pdCgpOyB9XG4gIFxuICAvKipoaWRkZW5cbiAgICogSXQgaXMgbWV0aG9kIHdoaWNoIHdpbGwgZW1pdCBjb3JyZXNwb25kaW5nIGV2ZW50IHdoZW4gdmFsdWUgb2YgU2VsZWN0IHdhcyBjaGFuZ2VkLlxuICAgKi9cbiAgY2ZTZWxlY3RDaGFuZ2VkKCkgeyBcbiAgICB0aGlzLmNmT25DaGFuZ2UuZW1pdCh0aGlzLmNmU2VsZWN0W1wic2VsZWN0ZWRcIl0pOyBcblx0XHR0aGlzLm9uQ2hhbmdlKHRoaXMuY2ZTZWxlY3RbXCJzZWxlY3RlZFwiXSk7XG5cdFx0dGhpcy5vblRvdWNoZWQoKTtcbiAgfVxuICBcbiAgLyoqaGlkZGVuXG4gICAqIEl0IGlzIG1ldGhvZCB3aGljaCB3aWxsIGVtaXQgY29ycmVzcG9uZGluZyBldmVudCB3aGVuIFNlbGVjdCBkcm9wZG93biBsaXN0IHdhcyBjbG9zZWQuXG4gICAqL1xuICBjZlNlbGVjdENsb3NlZCgpIHsgdGhpcy5jZk9uQ2xvc2UuZW1pdCgpOyB9XG4gIFxuICAvKipoaWRkZW5cbiAgICogSXQgaXMgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIE5vdGlmaWNhdGlvbiBjbGljayBldmVudHMgYnkgdXNpbmcgQ29yZSBDb21wb25lbnQgPGI+bm90aWZpY2F0aW9uQWN0aW9uPC9iPiBldmVudCBlbW1pdGVyLlxuICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uICAgIGl0IGlzIGpzb24gbm90aWZpY2F0aW9uIG9iamVjdFxuICAgKi9cbiAgY2ZOb3RpZmljYXRpb25BY3Rpb24obm90aWZpY2F0aW9uKSB7IFxuICAgIHRoaXMubm90aWZpY2F0aW9uQWN0aW9uLmVtaXQobm90aWZpY2F0aW9uKTsgXG4gIH1cblxuICAvKipAaGlkZGVuICovXG4gIHJlc2V0U2VsZWN0KCkge1xuICAgIHRoaXMuY2ZTZWxlY3Quc2VsZWN0ZWQgPSBcIlwiO1xuICAgIHRoaXMuY2ZTZWxlY3RDaGFuZ2VkKCk7XG4gIH1cblxuICAvKipAaGlkZGVuICovXG4gIGNvbnN0cnVjdG9yKCAgLyoqQGhpZGRlbiAqL3B1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLC8qKkBoaWRkZW4gKi8gdGVtcGxhdGVTZXJ2aWNlOlRlbXBsYXRlU2VydmljZSkgeyBzdXBlcihlbGVtZW50UmVmLCB0ZW1wbGF0ZVNlcnZpY2UpOyB9XG4gIFxuICAvKipAaGlkZGVuXG4gICAqIEl0IHdpbGwgYmUgZ2VuZXJhdGVkIDxiPmNmU2VsZWN0PC9iPiBvYmplY3QgYW5kIHJlbmRlcmVkIGluc2lkZSBjb21wb25lbnQgdGVtcGxhdGUuXG4gICAqL1xuICBuZ09uSW5pdCgpIHsgXG4gICAgaWYodGhpcy5ub3RpZmljYXRpb25BY3Rpb24ub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHRoaXMubm90aWZhY2F0aW9uQ2xpY2thYmxlID0gJ25vdGlmaWNhdGlvbi1jbGlja2FibGUnO1xuXG4gIFx0dGhpcy5nZXRNeVRlbXBsYXRlKFwic2VsZWN0XCIsU2VsZWN0VGVtcGxhdGVzKS50aGVuKCgpID0+IHtcbiAgICAgIGlmKHRoaXMucHJvcGVydGllcz09bnVsbClcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gbmV3IFNlbGVjdE1vZGVsKHRoaXMuYWN0aXZlVGVtcGxhdGVbXCJwcm9wZXJ0eVwiXSk7XG4gICAgICBpZih0aGlzLnN0eWxpbmc9PW51bGwpXG4gICAgICAgIHRoaXMuc3R5bGluZyA9IG5ldyBTZWxlY3RTdHlsaW5nTW9kZWwodGhpcy5hY3RpdmVUZW1wbGF0ZVtcInN0eWxlXCJdKTtcbiAgICAgIHRoaXMuY2ZTZWxlY3QgPSB0aGlzLnByb3BlcnRpZXM7IFxuICAgIH0pO1xuICB9XG59Il19