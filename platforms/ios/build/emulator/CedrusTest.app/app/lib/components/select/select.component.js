"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_component_1 = require("../core/core.component");
var select_model_1 = require("../../models/select/select.model");
// import { SelectModel } from '../../models/select/select.model';
// import { SelectStylingModel } from '../../models/select/select-styling.model';
var forms_1 = require("@angular/forms");
// import { SelectTemplates } from '../../templates/select.template';
// import { TemplateService } from '../../services/template-service/template.service';
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
    function CfSelectComponent(/**@hidden */ elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.elementRef = elementRef;
        _this.selectedItem = 'hello';
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
            * <pre>{
            * // styling of the container surrounding the select
            * container: {
            *		dynamic class: function() -> string, //function that returns a string of the name of the class
            *		class: string //name of the class specified in you scss/css file
            *	},
            * // styling of the select
            * select: {
            *		dynamic class: function() -> string,
            *		class: string ,
            *		themeColor: string , // primary/accent/warn
            * },
            * filter: {
            *		dynamic class: function() -> string,
            *		class: string
            * },
          * options: {
            *		dynamic class: function() -> string,
            *		class: string
            * }
            *}
            * </pre>
            */
        //   @Input() public styling: SelectStylingModel;
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
        this.cfOnChange.emit();
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
        // if(this.notificationAction.observers.length > 0) this.notifacationClickable = 'notification-clickable';
        // this.getMyTemplate("select",SelectTemplates).then(() => {
        //   if(this.properties==null)
        //     this.properties = new SelectModel(this.activeTemplate["property"]);
        //   if(this.styling==null)
        //     this.styling = new SelectStylingModel(this.activeTemplate["style"]);
        //   this.cfSelect = this.properties; 
        // });
    };
    return CfSelectComponent;
}(core_component_1.CfCoreComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CfSelectComponent.prototype, "items", void 0);
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
    __metadata("design:paramtypes", [core_1.ElementRef])
], CfSelectComponent);
exports.CfSelectComponent = CfSelectComponent;
var CfSelectComponent_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0g7QUFDcEgseURBQXlEO0FBQ3pELGlFQUErRDtBQUMvRCxrRUFBa0U7QUFDbEUsaUZBQWlGO0FBQ2pGLHdDQUFxRztBQUNyRyxxRUFBcUU7QUFFckUsc0ZBQXNGO0FBRXRGOzs7Ozs7Ozs7R0FTRztBQWNILElBQWEsaUJBQWlCO0lBQVMscUNBQWU7SUErSnBELGFBQWE7SUFDYiwyQkFBYyxhQUFhLENBQU8sVUFBc0I7UUFBeEQsWUFDSSxrQkFBTSxVQUFVLENBQUMsU0FDbEI7UUFGK0IsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUE3SnRELGtCQUFZLEdBQVcsT0FBTyxDQUFDO1FBb0JqQyxhQUFhO1FBQ2QsY0FBUSxHQUFRLGNBQVEsQ0FBQyxDQUFDO1FBQ3pCLGFBQWE7UUFDYixlQUFTLEdBQVEsY0FBUSxDQUFDLENBQUM7UUFFM0IsYUFBYTtRQUNTLDJCQUFxQixHQUFHLEVBQUUsQ0FBQztRQWdDakQ7O1dBRUc7UUFDSCxnQkFBVSxHQUFXLEVBQUUsQ0FBQztRQWdCeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2NBdUJHO1FBQ0wsaURBQWlEO1FBRS9DOztXQUVHO1FBQ2EsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUUxQzs7V0FFRztRQUNPLGNBQVEsR0FBRyxJQUFJLG1CQUFZLEVBQU8sQ0FBQztRQUU3Qzs7V0FFRztRQUNPLGdCQUFVLEdBQUcsSUFBSSxtQkFBWSxFQUFPLENBQUM7UUFFL0M7O1dBRUc7UUFDTyxlQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUFPLENBQUM7O0lBc0M1QyxDQUFDO0lBOUpILGFBQWE7SUFDYixzQ0FBVSxHQUFWLFVBQVcsR0FBUTtRQUNuQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ04sRUFBRSxDQUFBLENBQUMsSUFBSSxD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aUJBQWlCLENBa0w3QjtBQWxMWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2ZDb3JlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9jb3JlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9zZWxlY3Qvc2VsZWN0Lm1vZGVsJztcbi8vIGltcG9ydCB7IFNlbGVjdE1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3NlbGVjdC9zZWxlY3QubW9kZWwnO1xuLy8gaW1wb3J0IHsgU2VsZWN0U3R5bGluZ01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3NlbGVjdC9zZWxlY3Qtc3R5bGluZy5tb2RlbCc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IsIE5HX1ZBTElEQVRPUlMsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gaW1wb3J0IHsgU2VsZWN0VGVtcGxhdGVzIH0gZnJvbSAnLi4vLi4vdGVtcGxhdGVzL3NlbGVjdC50ZW1wbGF0ZSc7XG5cbi8vIGltcG9ydCB7IFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RlbXBsYXRlLXNlcnZpY2UvdGVtcGxhdGUuc2VydmljZSc7XG5cbi8qKlxuICogPHA+Q0YgU2VsZWN0IENvbXBvbmVudDwvcD4gXG4gKiA8cHJlPlxuICogPGNvZGU+XG4gKiBpbXBvcnQgeyBTZWxlY3RNb2RlbCB9IGZyb20gJ2NlZHJ1cy1mdXNpb24nXG4gKiBpbXBvcnQgeyBTZWxlY3RTdHlsaW5nTW9kZWwgfSBmcm9tICdjZWRydXMtZnVzaW9uJ1xuICogPGNvZGU+PDwvY29kZT5jZi1zZWxlY3Q8Y29kZT4+PC9jb2RlPjxjb2RlPjw8L2NvZGU+PGNvZGU+LzwvY29kZT5jZi1zZWxlY3Q8Y29kZT4+PC9jb2RlPlxuICogPC9jb2RlPlxuICogPC9wcmU+XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NmLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9saWIvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGliL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENmU2VsZWN0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuXG5leHBvcnQgY2xhc3MgQ2ZTZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBDZkNvcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHNlbGVjdGVkSW5kZXg6IGFueTtcbiAgICBASW5wdXQoKSBpdGVtczogc3RyaW5nW107XG4gICAgc2VsZWN0ZWRJdGVtOiBzdHJpbmcgPSAnaGVsbG8nO1xuICAvKipAaGlkZGVuICovXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAob2JqKSB7XG4gICAgICBpZih0aGlzLmNmU2VsZWN0IT1udWxsKVxuXHRcdFx0ICB0aGlzLmNmU2VsZWN0W1wic2VsZWN0ZWRcIl0gPSBvYmo7XG5cdFx0fVxuXHR9XG4gIC8qKkBoaWRkZW4gKi9cblx0cmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vbkNoYW5nZSA9ICh2YWx1ZSkgPT4geyBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiBmbih2YWx1ZSkpIH07XG5cdH1cbiAgLyoqQGhpZGRlbiAqL1xuXHRyZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vblRvdWNoZWQgPSAodmFsdWUpID0+IHsgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4gZm4odmFsdWUpKSB9O1xuXHR9XG4gIC8qKkBoaWRkZW4gKi9cblx0c2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdH1cblxuICAvKipAaGlkZGVuICovXG5cdG9uQ2hhbmdlOiBhbnkgPSAoKSA9PiB7IH07XG4gIC8qKkBoaWRkZW4gKi9cbiAgb25Ub3VjaGVkOiBhbnkgPSAoKSA9PiB7IH07XG4gIFxuICAvKipAaGlkZGVuICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBub3RpZmFjYXRpb25DbGlja2FibGUgPSAnJztcblxuICAvKipAaGlkZGVuXG4gICAqIDxwPkl0IGlzIE9iamVjdCB3aGljaCB3aWxsIHJlY2l2ZSBkYXRhIGZyb20gPGI+U2VsZWN0TW9kZWw8L2I+IENsYXNzLiBJdCBpcyB1c2VkIGluIDxiPmNmLXNlbGVjdDwvYj4gdGVtcGxhdGUuPC9wPlxuICAgKiA8cD5FeGFtcGxlIG9mIDxiPlNlbGVjdE1vZGVsPC9iPiBDbGFzczo8L3A+XG4gICAqIDxwcmU+e1xuICAgKiAgcGxhY2Vob2xkZXI6ICdTZWxlY3QgZnJ1aXQ6ICcsXG4gICAqICBpdGVtczogW1xuICAgKiAgICAgIHsgdmFsdWU6ICdhcGwnLCBsYWJlbDogJ0FwcGxlJyB9LFxuICAgKiAgICAgIHsgdmFsdWU6ICdiYW4nLCBsYWJlbDogJ0JhbmFuYScgfSxcbiAgICogICAgICB7IHZhbHVlOiAnY2hlJywgbGFiZWw6ICdDaGVycnknIH0gICAgICAgXG4gICAqIF0sXG4gICAqICBpdGVtVmFsdWU6ICd2YWx1ZScsXG4gICAqICBpdGVtTGFiZWw6ICdsYWJlbCcsXG4gICAqICBzZWxlY3RlZDogJ2NoZScsXG4gICAqICBzaG93RmlsdGVyOiBmYWxzZSxcbiAgICogfTwvcHJlPlxuICAgKiA8aDQ+cGxhY2Vob2xkZXI6IHN0cmluZzwvaDQ+XG4gICAqIDxwPkl0IGlzIFNlbGVjdCBwbGFjZWhvbGRlciB0ZXh0LjwvcD5cbiAgICogPGg0Pml0ZW1zOiBBcnJheTwvaDQ+XG4gICAqIDxwPkl0IGlzIGFuIEFycmF5IHdpdGggaXRlbXMuIEVhY2ggaXRlbSBpcyBhbiBPYmplY3Qgd2l0aCBhdCBsZWFzdCB0d28gcHJvcGVydGllcyB0byBiZSB1c2VkIGluIFNlbGVjdCB0ZW1wbGF0ZS48L3A+XG4gICAqIDxoND5pdGVtVmFsdWU6IHN0cmluZzwvaDQ+XG4gICAqIEl0IGlzIG5hbWUgb2YgaXRlbSBwcm9wZXJ0eSwgd2hpY2ggd2lsbCBiZSB1c2VkIGFzIHZhbHVlIGZvciA8Yj5tZC1vcHRpb248L2I+LiBFYWNoIGl0ZW0gdmFsdWUgdHlwZSBvZiB0aGF0IHByb3BlcnR5IGNhbiBiZSBvbmx5IGxvZ2ljYWxseSBjb3JyZWN0LlxuICAgKiA8aDQ+aXRlbUxhYmVsOiBzdHJpbmc8L2g0PlxuICAgKiBJdCBpcyBuYW1lIG9mIGl0ZW0gcHJvcGVydHksIHdoaWNoIHdpbGwgYmUgdXNlZCBhcyBkaXNwbGF5aW5nIHRleHQgZm9yIDxiPm1kLW9wdGlvbjwvYj4gYW5kIGJ5IHRoaXMgcHJvcGVydHkgZmlsdGVyaW5nIHN5c3RlbSBpcyB3b3JraW5nLiBFYWNoIGl0ZW0gdmFsdWUgdHlwZSBvZiB0aGF0IHByb3BlcnR5IGNhbiBiZSBvbmx5IGxvZ2ljYWxseSBjb3JyZWN0LiBBbHNvIEhUTUwgdmFsdWVzIGFyZSBwb3NzaWJsZS5cbiAgICogPGg0PnNlbGVjdGVkOiBhbnk8L2g0PlxuICAgKiBJdCBpcyAnaXRlbVZhbHVlJyBvZiBvbmUgb2YgdGhlIGl0ZW1zIGFuZCB0aGF0IGl0ZW0gd2lsbCBiZSBzZWxlY3RlZC5cbiAgICogPGg0PnNob3dGaWx0ZXI6IEJvb2xlYW48L2g0PlxuICAgKiBJdCBzaG93L2hpZGUgRmlsdGVyIGluIGRyb3Bkb3duIGxpc3QuXG4gICAqL1xuICBjZlNlbGVjdDogU2VsZWN0TW9kZWw7XG5cbiAgLyoqXG4gICAqIDxwPlZhbHVlIG9mIHRoZSBGaWx0ZXIgaW5wdXQgYnkgd2hpY2ggd2hvbGUgZHJvcGRvd24gbGlzdCBpdGVtcyB3aWxsIGJlIGZpbHRlcmVkPHA+XG4gICAqL1xuICBjZkZpbHRlckJ5OiBzdHJpbmcgPSAnJztcblxuICAvKipcblx0ICogPHByZT57XG5cdCAqICBkaXNwbGF5OiBib29sZWFuLCAvLyBEZWZhdWx0OiBUcnVlXG4gICAqICBkaXNhYmxlOiBib29sZWFuLCAvLyBEZWZhdWx0OiBGYWxzZVxuXHQgKiAgaXRlbXM6IFNlbGVjdEl0ZW1Nb2RlbFtdLFxuICAgKiAgc2VsZWN0ZWQ6IHN0cmluZyxcbiAgICogIHBsYWNlaG9sZGVyOiBzdHJpbmcsXG4gICAqICBzaG93RmlsdGVyOiBib29sZWFuLFxuICAgKiAgcmVxdWlyZWQ6IGJvb2xlYW5cblx0ICogfVxuXHQgKiA8L3ByZT5cblx0ICovXG4gIEBJbnB1dCgpIHB1YmxpYyBwcm9wZXJ0aWVzOiBTZWxlY3RNb2RlbDtcblxuICAvKipcblx0ICAqIDxwcmU+e1xuXHQgICogLy8gc3R5bGluZyBvZiB0aGUgY29udGFpbmVyIHN1cnJvdW5kaW5nIHRoZSBzZWxlY3Rcblx0ICAqIGNvbnRhaW5lcjoge1xuXHQgICpcdFx0ZHluYW1pYyBjbGFzczogZnVuY3Rpb24oKSAtPiBzdHJpbmcsIC8vZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgc3RyaW5nIG9mIHRoZSBuYW1lIG9mIHRoZSBjbGFzc1xuXHQgICpcdFx0Y2xhc3M6IHN0cmluZyAvL25hbWUgb2YgdGhlIGNsYXNzIHNwZWNpZmllZCBpbiB5b3Ugc2Nzcy9jc3MgZmlsZVxuXHQgICpcdH0sXG5cdCAgKiAvLyBzdHlsaW5nIG9mIHRoZSBzZWxlY3Rcblx0ICAqIHNlbGVjdDoge1xuXHQgICpcdFx0ZHluYW1pYyBjbGFzczogZnVuY3Rpb24oKSAtPiBzdHJpbmcsIFxuXHQgICpcdFx0Y2xhc3M6IHN0cmluZyAsXG5cdCAgKlx0XHR0aGVtZUNvbG9yOiBzdHJpbmcgLCAvLyBwcmltYXJ5L2FjY2VudC93YXJuXG5cdCAgKiB9LFxuXHQgICogZmlsdGVyOiB7XG5cdCAgKlx0XHRkeW5hbWljIGNsYXNzOiBmdW5jdGlvbigpIC0+IHN0cmluZywgXG5cdCAgKlx0XHRjbGFzczogc3RyaW5nIFxuXHQgICogfSxcbiAgICAqIG9wdGlvbnM6IHtcblx0ICAqXHRcdGR5bmFtaWMgY2xhc3M6IGZ1bmN0aW9uKCkgLT4gc3RyaW5nLCBcblx0ICAqXHRcdGNsYXNzOiBzdHJpbmcgXG5cdCAgKiB9XG5cdCAgKn1cblx0ICAqIDwvcHJlPlxuXHQgICovXG4vLyAgIEBJbnB1dCgpIHB1YmxpYyBzdHlsaW5nOiBTZWxlY3RTdHlsaW5nTW9kZWw7XG5cbiAgLyoqXG4gICAqPHA+IElmIHNlbGVjdCBpcyByZXF1aXJlZDwvcD5cbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyByZXF1aXJlZDogQm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiA8cD5FdmVudCB0byBjYWxsIHdoZW4gU2VsZWN0IGRyb3Bkb3duIGxpc3Qgd2FzIG9wZW5lZDwvcD5cbiAgICovXG4gIEBPdXRwdXQoKSBjZk9uT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiA8cD5FdmVudCB0byBjYWxsIHdoZW4gdmFsdWUgb2YgU2VsZWN0IHdhcyBjaGFuZ2VkPC9wPlxuICAgKi9cbiAgQE91dHB1dCgpIGNmT25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKipcbiAgICogPHA+RXZlbnQgdG8gY2FsbCB3aGVuIFNlbGVjdCBkcm9wZG93biBsaXN0IHdhcyBjbG9zZWQ8L3A+XG4gICAqL1xuICBAT3V0cHV0KCkgY2ZPbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqQGhpZGRlblxuICAgKiBJdCBpcyBtZXRob2Qgd2hpY2ggd2lsbCBlbWl0IGNvcnJlc3BvbmRpbmcgZXZlbnQgd2hlbiBTZWxlY3QgZHJvcGRvd24gbGlzdCB3YXMgb3BlbmVkLlxuICAgKi9cbiAgY2ZTZWxlY3RPcGVuZWQoKSB7IHRoaXMuY2ZPbk9wZW4uZW1pdCgpOyB9XG4gIFxuICAvKipoaWRkZW5cbiAgICogSXQgaXMgbWV0aG9kIHdoaWNoIHdpbGwgZW1pdCBjb3JyZXNwb25kaW5nIGV2ZW50IHdoZW4gdmFsdWUgb2YgU2VsZWN0IHdhcyBjaGFuZ2VkLlxuICAgKi9cbiAgY2ZTZWxlY3RDaGFuZ2VkKCkgeyBcbiAgICB0aGlzLmNmT25DaGFuZ2UuZW1pdCgpOyBcblx0XHR0aGlzLm9uQ2hhbmdlKHRoaXMuY2ZTZWxlY3RbXCJzZWxlY3RlZFwiXSk7XG5cdFx0dGhpcy5vblRvdWNoZWQoKTtcbiAgfVxuICBcbiAgLyoqaGlkZGVuXG4gICAqIEl0IGlzIG1ldGhvZCB3aGljaCB3aWxsIGVtaXQgY29ycmVzcG9uZGluZyBldmVudCB3aGVuIFNlbGVjdCBkcm9wZG93biBsaXN0IHdhcyBjbG9zZWQuXG4gICAqL1xuICBjZlNlbGVjdENsb3NlZCgpIHsgdGhpcy5jZk9uQ2xvc2UuZW1pdCgpOyB9XG4gIFxuICAvKipoaWRkZW5cbiAgICogSXQgaXMgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIE5vdGlmaWNhdGlvbiBjbGljayBldmVudHMgYnkgdXNpbmcgQ29yZSBDb21wb25lbnQgPGI+bm90aWZpY2F0aW9uQWN0aW9uPC9iPiBldmVudCBlbW1pdGVyLlxuICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uICAgIGl0IGlzIGpzb24gbm90aWZpY2F0aW9uIG9iamVjdFxuICAgKi9cbiAgY2ZOb3RpZmljYXRpb25BY3Rpb24obm90aWZpY2F0aW9uKSB7IFxuICAgIHRoaXMubm90aWZpY2F0aW9uQWN0aW9uLmVtaXQobm90aWZpY2F0aW9uKTsgXG4gIH1cblxuICAvKipAaGlkZGVuICovXG4gIHJlc2V0U2VsZWN0KCkge1xuICAgIHRoaXMuY2ZTZWxlY3Quc2VsZWN0ZWQgPSBcIlwiO1xuICAgIHRoaXMuY2ZTZWxlY3RDaGFuZ2VkKCk7XG4gIH1cblxuICAvKipAaGlkZGVuICovXG4gIGNvbnN0cnVjdG9yKCAgLyoqQGhpZGRlbiAqL3B1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLC8qKkBoaWRkZW4gKi8pIHtcbiAgICAgIHN1cGVyKGVsZW1lbnRSZWYpO1xuICAgIH1cbiAgXG4gIC8qKkBoaWRkZW5cbiAgICogSXQgd2lsbCBiZSBnZW5lcmF0ZWQgPGI+Y2ZTZWxlY3Q8L2I+IG9iamVjdCBhbmQgcmVuZGVyZWQgaW5zaWRlIGNvbXBvbmVudCB0ZW1wbGF0ZS5cbiAgICovXG4gIG5nT25Jbml0KCkgeyBcbiAgICAvLyBpZih0aGlzLm5vdGlmaWNhdGlvbkFjdGlvbi5vYnNlcnZlcnMubGVuZ3RoID4gMCkgdGhpcy5ub3RpZmFjYXRpb25DbGlja2FibGUgPSAnbm90aWZpY2F0aW9uLWNsaWNrYWJsZSc7XG5cbiAgXHQvLyB0aGlzLmdldE15VGVtcGxhdGUoXCJzZWxlY3RcIixTZWxlY3RUZW1wbGF0ZXMpLnRoZW4oKCkgPT4ge1xuICAgIC8vICAgaWYodGhpcy5wcm9wZXJ0aWVzPT1udWxsKVxuICAgIC8vICAgICB0aGlzLnByb3BlcnRpZXMgPSBuZXcgU2VsZWN0TW9kZWwodGhpcy5hY3RpdmVUZW1wbGF0ZVtcInByb3BlcnR5XCJdKTtcbiAgICAvLyAgIGlmKHRoaXMuc3R5bGluZz09bnVsbClcbiAgICAvLyAgICAgdGhpcy5zdHlsaW5nID0gbmV3IFNlbGVjdFN0eWxpbmdNb2RlbCh0aGlzLmFjdGl2ZVRlbXBsYXRlW1wic3R5bGVcIl0pO1xuICAgIC8vICAgdGhpcy5jZlNlbGVjdCA9IHRoaXMucHJvcGVydGllczsgXG4gICAgLy8gfSk7XG4gIH1cbn0iXX0=