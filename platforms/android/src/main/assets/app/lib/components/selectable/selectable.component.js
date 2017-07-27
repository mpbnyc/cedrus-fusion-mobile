"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_component_1 = require("../core/core.component");
var selectable_model_1 = require("../../models/selectable/selectable.model");
var template_service_1 = require("../../services/template-service/template.service");
/**
 * <p>CF Selectable Component</p>
 * <p>Selectable component can be Checkbox, Switch or Radio</p>
 * <pre>
 * <code>
 * import { SelectableModel } from 'cedrus-fusion'
 * import { CheckboxStylingModel } from 'cedrus-fusion' (in case of checkbox)
 * <code><</code>cf-checkbox<code>></code><code><</code><code>/</code>cf-checkbox<code>></code>
 * <code><</code>cf-switch<code>></code><code><</code><code>/</code>cf-switch<code>></code>
 * <code><</code>cf-radio<code>></code><code><</code><code>/</code>cf-radio<code>></code>
 * </code>
 * </pre>
 */
var CfSelectableComponent = (function (_super) {
    __extends(CfSelectableComponent, _super);
    /**@hidden */
    function CfSelectableComponent(elementRef, /**@hidden */ templateService) {
        var _this = _super.call(this, elementRef, templateService) || this;
        _this.elementRef = elementRef;
        /**@hidden */
        _this.notifacationClickable = '';
        /**@hidden */
        _this.checkedChange = new core_1.EventEmitter();
        /**@hidden */
        _this.clicked = new core_1.EventEmitter();
        return _this;
    }
    Object.defineProperty(CfSelectableComponent.prototype, "checked", {
        /**
         * <p> Checked or not checked</p>
         * <p> Double binded variable to get or set the checked value of the selectable.</p>
         * <p> Default is <b>false</b></p>
         */
        get: function () { return this.selected; },
        /**@hidden */
        set: function (val) {
            this.selected = val;
            this.checkedChange.emit(this.selected);
            if (this.properties != null)
                this.properties.checked = this.selected;
        },
        enumerable: true,
        configurable: true
    });
    /**@hidden
     * It is function for creating Notification click events by using Core Component <b>notificationAction</b> event emmiter.
     * @param notification	it is json notification object
     */
    CfSelectableComponent.prototype.cfNotificationAction = function (notification) {
        this.notificationAction.emit(notification);
    };
    /**@hidden
   * It will be generated <b>cfCheckbox</b> object and rendered inside component template. Also cfCheckStates function will initialize checkboxes states.
   */
    CfSelectableComponent.prototype.ngOnInit = function () {
        if (this.notificationAction.observers.length > 0)
            this.notifacationClickable = 'notification-clickable';
    };
    /**@hidden */
    CfSelectableComponent.prototype.notifyGroup = function () {
        this.clicked.emit({ "id": this.internalId, "value": this.selected });
    };
    /**@hidden */
    CfSelectableComponent.prototype.updateFromGroup = function (val) {
        this.checked = val;
    };
    return CfSelectableComponent;
}(core_component_1.CfCoreComponent));
__decorate([
    core_1.HostBinding('class'),
    __metadata("design:type", Object)
], CfSelectableComponent.prototype, "notifacationClickable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", selectable_model_1.SelectableModel)
], CfSelectableComponent.prototype, "properties", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CfSelectableComponent.prototype, "value", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CfSelectableComponent.prototype, "item", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CfSelectableComponent.prototype, "checked", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CfSelectableComponent.prototype, "itemPosition", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CfSelectableComponent.prototype, "checkedChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CfSelectableComponent.prototype, "clicked", void 0);
CfSelectableComponent = __decorate([
    core_1.Component({
        selector: 'cf-selectable',
        templateUrl: './lib/components/selectable/selectable.component.html',
        styleUrls: []
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, template_service_1.TemplateService])
], CfSelectableComponent);
exports.CfSelectableComponent = CfSelectableComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWxlY3RhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpSjtBQUNqSix5REFBeUQ7QUFDekQsNkVBQTJFO0FBRzNFLHFGQUFtRjtBQUVuRjs7Ozs7Ozs7Ozs7O0dBWUc7QUFNSCxJQUFhLHFCQUFxQjtJQUFTLHlDQUFlO0lBdUV6RCxhQUFhO0lBQ2IsK0JBQW1CLFVBQXNCLEVBQUMsYUFBYSxDQUFDLGVBQStCO1FBQXZGLFlBQTJGLGtCQUFNLFVBQVUsRUFBRSxlQUFlLENBQUMsU0FBRztRQUE3RyxnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQXZFekMsYUFBYTtRQUNTLDJCQUFxQixHQUFHLEVBQUUsQ0FBQztRQW1EakQsYUFBYTtRQUNILG1CQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDN0MsYUFBYTtRQUNILGFBQU8sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQzs7SUFnQndGLENBQUM7SUE1QnZILHNCQUFJLDBDQUFPO1FBTHBCOzs7O1dBSUc7YUFDTSxjQUFnQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFhaEQsYUFBYTthQUNiLFVBQVksR0FBRztZQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFFLElBQUksQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMxQyxDQUFDOzs7T0FuQitDO0lBb0JoRDs7O09BR0c7SUFDSCxvREFBb0IsR0FBcEIsVUFBcUIsWUFBWTtRQUNoQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFHRDs7S0FFSTtJQUNKLHdDQUFRLEdBQVI7UUFDQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsd0JBQXdCLENBQUM7SUFDeEcsQ0FBQztJQUNELGFBQWE7SUFDYiwyQ0FBVyxHQUFYO1FBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUNELGFBQWE7SUFDYiwrQ0FBZSxHQUFmLFVBQWdCLEdBQVk7UUFFM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUNGLDRCQUFDO0FBQUQsQ0FBQyxBQXhGRCxDQUEyQyxnQ0FBZSxHQXdGekQ7QUF0RnNCO0lBQXJCLGtCQUFXLENBQUMsT0FBTyxDQUFDOztvRUFBNEI7QUF3QnhDO0lBQVIsWUFBSyxFQUFFOzhCQUFvQixrQ0FBZTt5REFBQztBQU1uQztJQUFSLFlBQUssRUFBRTs7b0RBQXNCO0FBS3JCO0lBQVIsWUFBSyxFQUFFOzttREFBa0I7QUFPakI7SUFBUixZQUFLLEVBQUU7OztvREFBd0M7QUFPdkM7SUFBUixZQUFLLEVBQUU7OzJEQUE2QjtBQUczQjtJQUFULGFBQU0sRUFBRTs7NERBQW9DO0FBRW5DO0lBQVQsYUFBTSxFQUFFOztzREFBOEI7QUF4RDNCLHFCQUFxQjtJQUxqQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGVBQWU7UUFDekIsV0FBVyxFQUFFLHVEQUF1RDtRQUNwRSxTQUFTLEVBQUUsRUFBRTtLQUNkLENBQUM7cUNBeUU4QixpQkFBVSxFQUErQixrQ0FBZTtHQXhFM0UscUJBQXFCLENBd0ZqQztBQXhGWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBDb250ZW50Q2hpbGQsIFRlbXBsYXRlUmVmLCBIb3N0QmluZGluZywgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZkNvcmVDb21wb25lbnQgfSBmcm9tICcuLi9jb3JlL2NvcmUuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdGFibGVNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9zZWxlY3RhYmxlL3NlbGVjdGFibGUubW9kZWwnO1xuaW1wb3J0IHsgU2VsZWN0YWJsZVN0eWxpbmdNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9zZWxlY3RhYmxlL3NlbGVjdGFibGUtc3R5bGluZy5tb2RlbCc7XG5cbmltcG9ydCB7IFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RlbXBsYXRlLXNlcnZpY2UvdGVtcGxhdGUuc2VydmljZSc7XG5cbi8qKlxuICogPHA+Q0YgU2VsZWN0YWJsZSBDb21wb25lbnQ8L3A+IFxuICogPHA+U2VsZWN0YWJsZSBjb21wb25lbnQgY2FuIGJlIENoZWNrYm94LCBTd2l0Y2ggb3IgUmFkaW88L3A+XG4gKiA8cHJlPlxuICogPGNvZGU+XG4gKiBpbXBvcnQgeyBTZWxlY3RhYmxlTW9kZWwgfSBmcm9tICdjZWRydXMtZnVzaW9uJ1xuICogaW1wb3J0IHsgQ2hlY2tib3hTdHlsaW5nTW9kZWwgfSBmcm9tICdjZWRydXMtZnVzaW9uJyAoaW4gY2FzZSBvZiBjaGVja2JveClcbiAqIDxjb2RlPjw8L2NvZGU+Y2YtY2hlY2tib3g8Y29kZT4+PC9jb2RlPjxjb2RlPjw8L2NvZGU+PGNvZGU+LzwvY29kZT5jZi1jaGVja2JveDxjb2RlPj48L2NvZGU+XG4gKiA8Y29kZT48PC9jb2RlPmNmLXN3aXRjaDxjb2RlPj48L2NvZGU+PGNvZGU+PDwvY29kZT48Y29kZT4vPC9jb2RlPmNmLXN3aXRjaDxjb2RlPj48L2NvZGU+XG4gKiA8Y29kZT48PC9jb2RlPmNmLXJhZGlvPGNvZGU+PjwvY29kZT48Y29kZT48PC9jb2RlPjxjb2RlPi88L2NvZGU+Y2YtcmFkaW88Y29kZT4+PC9jb2RlPlxuICogPC9jb2RlPlxuICogPC9wcmU+XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NmLXNlbGVjdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGliL2NvbXBvbmVudHMvc2VsZWN0YWJsZS9zZWxlY3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBDZlNlbGVjdGFibGVDb21wb25lbnQgZXh0ZW5kcyBDZkNvcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHQvKipAaGlkZGVuICovXG5cdEBIb3N0QmluZGluZygnY2xhc3MnKSBub3RpZmFjYXRpb25DbGlja2FibGUgPSAnJztcblx0LyoqQGhpZGRlbiAqL1xuXHRzZWxlY3RlZDogYm9vbGVhbjtcblx0LyoqQGhpZGRlbiAqL1xuXHRpbnRlcm5hbElkOiBudW1iZXI7XG4gIFx0LyoqXG5cdCAqIDxwcmU+e1xuXHQgKiAgZGlzcGxheTogYm9vbGVhbixcdC8vIFRydWUgb3IgRmFsc2UgPGI+RGVmYXVsdDogVHJ1ZTwvYj5cblx0ICogIGRpc2FibGU6IGJvb2xlYW4sXHQvLyBUcnVlIG9yIEZhbHNlIDxiPkRlZmF1bHQ6IEZhbHNlPC9iPlxuXHQgKiAgdmFsdWU6IHN0cmluZyxcdFx0XHQvLyBEZWZhdWx0OiAndmFsdWUnXG5cdCAqICBpdGVtOiBhbnksXHRcdFx0Ly8gaXRlbSBjYW4gYmUgYSBzdHJpbmcgb3IgYW55IG9iamVjdCB0byBiZSBwdXQgYWxvbmcgc2lkZSB0aGUgY29udHJvbFxuXHQgKiAgY2hlY2tlZDogYm9vbGVhbixcdFx0XHRcdC8vIFRydWUgb3IgRmFzZSA8Yj5EZWZhdWx0OiBGYWxzZTwvYj5cblx0ICogIGl0ZW1Qb3NpdGlvbjogc3RyaW5nXHQvL0RlZmF1bHQ6ICdhZnRlcidcblx0ICp9XG5cdCAqIDwvcHJlPlxuXHQgKiA8cD5FeGFtcGxlPC9wPlxuXHQgKiA8cHJlPntcblx0ICpcdHZhbHVlOiAncGl6emEnLFxuXHQgKlx0aXRlbTogJ1BpenphJyxcblx0ICpcdGNoZWNrZWQ6IHRydWUsXG5cdCAqXHRpdGVtUG9zaXRpb246ICdhZnRlcidcblx0ICp9XG5cdCAqIDwvcHJlPlxuICAgKi9cblx0QElucHV0KCkgcHVibGljIHByb3BlcnRpZXM6IFNlbGVjdGFibGVNb2RlbDtcblx0XG5cdC8qKiBcblx0ICogPHA+IFRoZSBpbnRlcm5hbCB2YWx1ZSBvZiB0aGUgc2VsZWN0YWJsZSBlbWl0dGVkIHdoZW4gc2VsZWN0ZWQuPC9wPlxuXHQgKiA8cD4gRGVmYXVsdCBpcyA8Yj52YWx1ZTwvYj48L3A+XG5cdCAqL1xuXHRASW5wdXQoKSBwdWJsaWMgdmFsdWU6IHN0cmluZztcblxuXHQvKipcblx0ICogPHA+SXRlbSBjYW4gYmUgYSBsYWJlbCBvciBhbnkgb3RoZXIgb2JqZWN0IGJhc2VkIG9uIHRoZSBodG1sIHRlbXBsYXRlIHBhc3NlZCB0byB0aGUgc2VsZWN0YWJsZTwvcD5cblx0ICovXG5cdEBJbnB1dCgpIHB1YmxpYyBpdGVtOiBhbnk7XG5cblx0LyoqXG5cdCAqIDxwPiBDaGVja2VkIG9yIG5vdCBjaGVja2VkPC9wPlxuXHQgKiA8cD4gRG91YmxlIGJpbmRlZCB2YXJpYWJsZSB0byBnZXQgb3Igc2V0IHRoZSBjaGVja2VkIHZhbHVlIG9mIHRoZSBzZWxlY3RhYmxlLjwvcD5cblx0ICogPHA+IERlZmF1bHQgaXMgPGI+ZmFsc2U8L2I+PC9wPlxuXHQgKi9cblx0QElucHV0KCkgZ2V0IGNoZWNrZWQoKSB7IHJldHVybiB0aGlzLnNlbGVjdGVkOyB9XG5cblx0LyoqXG5cdCAqIDxwPkl0ZW0gUG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIGNvbnRyb2w8L3A+XG5cdCAqIDxwPk9wdGlvbnMgOiAnYmVmb3JlJyAsICdhZnRlcic8L3A+XG5cdCAqIDxwPkRlZmF1bHQgPGI+YWZ0ZXI8L2I+XG5cdCAqL1xuXHRASW5wdXQoKSBwdWJsaWMgaXRlbVBvc2l0aW9uOiBzdHJpbmc7XG5cblx0LyoqQGhpZGRlbiAqL1xuXHRAT3V0cHV0KCkgY2hlY2tlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0LyoqQGhpZGRlbiAqL1xuXHRAT3V0cHV0KCkgY2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0LyoqQGhpZGRlbiAqL1xuXHRzZXQgY2hlY2tlZCh2YWwpIHtcblx0XHR0aGlzLnNlbGVjdGVkID0gdmFsO1xuXHRcdHRoaXMuY2hlY2tlZENoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWQpO1xuXHRcdGlmKHRoaXMucHJvcGVydGllcyE9bnVsbClcblx0XHRcdHRoaXMucHJvcGVydGllcy5jaGVja2VkID0gdGhpcy5zZWxlY3RlZDtcblx0fVxuXHQvKipAaGlkZGVuXG5cdCAqIEl0IGlzIGZ1bmN0aW9uIGZvciBjcmVhdGluZyBOb3RpZmljYXRpb24gY2xpY2sgZXZlbnRzIGJ5IHVzaW5nIENvcmUgQ29tcG9uZW50IDxiPm5vdGlmaWNhdGlvbkFjdGlvbjwvYj4gZXZlbnQgZW1taXRlci5cbiAgXHQgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHRpdCBpcyBqc29uIG5vdGlmaWNhdGlvbiBvYmplY3Rcblx0ICovXG5cdGNmTm90aWZpY2F0aW9uQWN0aW9uKG5vdGlmaWNhdGlvbikgeyBcblx0XHR0aGlzLm5vdGlmaWNhdGlvbkFjdGlvbi5lbWl0KG5vdGlmaWNhdGlvbik7IFxuXHR9XG5cdC8qKkBoaWRkZW4gKi9cblx0Y29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsLyoqQGhpZGRlbiAqLyB0ZW1wbGF0ZVNlcnZpY2U6VGVtcGxhdGVTZXJ2aWNlKSB7IHN1cGVyKGVsZW1lbnRSZWYsIHRlbXBsYXRlU2VydmljZSk7IH1cblx0LyoqQGhpZGRlblxuICAgKiBJdCB3aWxsIGJlIGdlbmVyYXRlZCA8Yj5jZkNoZWNrYm94PC9iPiBvYmplY3QgYW5kIHJlbmRlcmVkIGluc2lkZSBjb21wb25lbnQgdGVtcGxhdGUuIEFsc28gY2ZDaGVja1N0YXRlcyBmdW5jdGlvbiB3aWxsIGluaXRpYWxpemUgY2hlY2tib3hlcyBzdGF0ZXMuXG4gICAqL1xuXHRuZ09uSW5pdCgpIHsgXG5cdFx0aWYodGhpcy5ub3RpZmljYXRpb25BY3Rpb24ub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHRoaXMubm90aWZhY2F0aW9uQ2xpY2thYmxlID0gJ25vdGlmaWNhdGlvbi1jbGlja2FibGUnO1xuXHR9XG5cdC8qKkBoaWRkZW4gKi9cblx0bm90aWZ5R3JvdXAoKXtcblx0XHR0aGlzLmNsaWNrZWQuZW1pdCh7XCJpZFwiOnRoaXMuaW50ZXJuYWxJZCwgXCJ2YWx1ZVwiOiB0aGlzLnNlbGVjdGVkfSk7XG5cdH1cblx0LyoqQGhpZGRlbiAqL1xuXHR1cGRhdGVGcm9tR3JvdXAodmFsOiBib29sZWFuKVxuXHR7XG5cdFx0dGhpcy5jaGVja2VkID0gdmFsO1xuXHR9XG59Il19