"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_component_1 = require("../core/core.component");
var selectable_model_1 = require("../../models/selectable/selectable.model");
// import { SelectableStylingModel } from '../../models/selectable/selectable-styling.model';
// import { TemplateService } from '../../services/template-service/template.service';
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
    function CfSelectableComponent(elementRef) {
        var _this = _super.call(this, elementRef) || this;
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
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], CfSelectableComponent);
exports.CfSelectableComponent = CfSelectableComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWxlY3RhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpSjtBQUNqSix5REFBeUQ7QUFDekQsNkVBQTJFO0FBQzNFLDZGQUE2RjtBQUU3RixzRkFBc0Y7QUFFdEY7Ozs7Ozs7Ozs7OztHQVlHO0FBS0gsSUFBYSxxQkFBcUI7SUFBUyx5Q0FBZTtJQXVFekQsYUFBYTtJQUNiLCtCQUFtQixVQUFzQjtRQUF6QyxZQUEyRCxrQkFBTSxVQUFVLENBQUMsU0FBRztRQUE1RCxnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQXZFekMsYUFBYTtRQUNTLDJCQUFxQixHQUFHLEVBQUUsQ0FBQztRQW1EakQsYUFBYTtRQUNILG1CQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDN0MsYUFBYTtRQUNILGFBQU8sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQzs7SUFnQnVDLENBQUM7SUE1QnRFLHNCQUFJLDBDQUFPO1FBTHBCOzs7O1dBSUc7YUFDTSxjQUFnQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFhaEQsYUFBYTthQUNiLFVBQVksR0FBRztZQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFFLElBQUksQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMxQyxDQUFDOzs7T0FuQitDO0lBb0JoRDs7O09BR0c7SUFDSCxvREFBb0IsR0FBcEIsVUFBcUIsWUFBWTtRQUNoQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFHRDs7S0FFSTtJQUNKLHdDQUFRLEdBQVI7UUFDQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsd0JBQXdCLENBQUM7SUFDeEcsQ0FBQztJQUNELGFBQWE7SUFDYiwyQ0FBVyxHQUFYO1FBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUNELGFBQWE7SUFDYiwrQ0FBZSxHQUFmLFVBQWdCLEdBQVk7UUFFM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUNGLDRCQUFDO0FBQUQsQ0FBQyxBQXhGRCxDQUEyQyxnQ0FBZSxHQXdGekQ7QUF0RnNCO0lBQXJCLGtCQUFXLENBQUMsT0FBTyxDQUFDOztvRUFBNEI7QUF3QnhDO0lBQVIsWUFBSyxFQUFFOzhCQUFvQixrQ0FBZTt5REFBQztBQU1uQztJQUFSLFlBQUssRUFBRTs7b0RBQXNCO0FBS3JCO0lBQVIsWUFBSyxFQUFFOzttREFBa0I7QUFPakI7SUFBUixZQUFLLEVBQUU7OztvREFBd0M7QUFPdkM7SUFBUixZQUFLLEVBQUU7OzJEQUE2QjtBQUczQjtJQUFULGFBQU0sRUFBRTs7NERBQW9DO0FBRW5DO0lBQVQsYUFBTSxFQUFFOztzREFBOEI7QUF4RDNCLHFCQUFxQjtJQUpqQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGVBQWU7UUFDekIsUUFBUSxFQUFFLDJCQUEyQjtLQUN0QyxDQUFDO3FDQXlFOEIsaUJBQVU7R0F4RTdCLHFCQUFxQixDQXdGakM7QUF4Rlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgQ29udGVudENoaWxkLCBUZW1wbGF0ZVJlZiwgSG9zdEJpbmRpbmcsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2ZDb3JlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9jb3JlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RhYmxlTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvc2VsZWN0YWJsZS9zZWxlY3RhYmxlLm1vZGVsJztcbi8vIGltcG9ydCB7IFNlbGVjdGFibGVTdHlsaW5nTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvc2VsZWN0YWJsZS9zZWxlY3RhYmxlLXN0eWxpbmcubW9kZWwnO1xuXG4vLyBpbXBvcnQgeyBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90ZW1wbGF0ZS1zZXJ2aWNlL3RlbXBsYXRlLnNlcnZpY2UnO1xuXG4vKipcbiAqIDxwPkNGIFNlbGVjdGFibGUgQ29tcG9uZW50PC9wPiBcbiAqIDxwPlNlbGVjdGFibGUgY29tcG9uZW50IGNhbiBiZSBDaGVja2JveCwgU3dpdGNoIG9yIFJhZGlvPC9wPlxuICogPHByZT5cbiAqIDxjb2RlPlxuICogaW1wb3J0IHsgU2VsZWN0YWJsZU1vZGVsIH0gZnJvbSAnY2VkcnVzLWZ1c2lvbidcbiAqIGltcG9ydCB7IENoZWNrYm94U3R5bGluZ01vZGVsIH0gZnJvbSAnY2VkcnVzLWZ1c2lvbicgKGluIGNhc2Ugb2YgY2hlY2tib3gpXG4gKiA8Y29kZT48PC9jb2RlPmNmLWNoZWNrYm94PGNvZGU+PjwvY29kZT48Y29kZT48PC9jb2RlPjxjb2RlPi88L2NvZGU+Y2YtY2hlY2tib3g8Y29kZT4+PC9jb2RlPlxuICogPGNvZGU+PDwvY29kZT5jZi1zd2l0Y2g8Y29kZT4+PC9jb2RlPjxjb2RlPjw8L2NvZGU+PGNvZGU+LzwvY29kZT5jZi1zd2l0Y2g8Y29kZT4+PC9jb2RlPlxuICogPGNvZGU+PDwvY29kZT5jZi1yYWRpbzxjb2RlPj48L2NvZGU+PGNvZGU+PDwvY29kZT48Y29kZT4vPC9jb2RlPmNmLXJhZGlvPGNvZGU+PjwvY29kZT5cbiAqIDwvY29kZT5cbiAqIDwvcHJlPlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZi1zZWxlY3RhYmxlJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2ZTZWxlY3RhYmxlQ29tcG9uZW50IGV4dGVuZHMgQ2ZDb3JlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0LyoqQGhpZGRlbiAqL1xuXHRASG9zdEJpbmRpbmcoJ2NsYXNzJykgbm90aWZhY2F0aW9uQ2xpY2thYmxlID0gJyc7XG5cdC8qKkBoaWRkZW4gKi9cblx0c2VsZWN0ZWQ6IGJvb2xlYW47XG5cdC8qKkBoaWRkZW4gKi9cblx0aW50ZXJuYWxJZDogbnVtYmVyO1xuICBcdC8qKlxuXHQgKiA8cHJlPntcblx0ICogIGRpc3BsYXk6IGJvb2xlYW4sXHQvLyBUcnVlIG9yIEZhbHNlIDxiPkRlZmF1bHQ6IFRydWU8L2I+XG5cdCAqICBkaXNhYmxlOiBib29sZWFuLFx0Ly8gVHJ1ZSBvciBGYWxzZSA8Yj5EZWZhdWx0OiBGYWxzZTwvYj5cblx0ICogIHZhbHVlOiBzdHJpbmcsXHRcdFx0Ly8gRGVmYXVsdDogJ3ZhbHVlJ1xuXHQgKiAgaXRlbTogYW55LFx0XHRcdC8vIGl0ZW0gY2FuIGJlIGEgc3RyaW5nIG9yIGFueSBvYmplY3QgdG8gYmUgcHV0IGFsb25nIHNpZGUgdGhlIGNvbnRyb2xcblx0ICogIGNoZWNrZWQ6IGJvb2xlYW4sXHRcdFx0XHQvLyBUcnVlIG9yIEZhc2UgPGI+RGVmYXVsdDogRmFsc2U8L2I+XG5cdCAqICBpdGVtUG9zaXRpb246IHN0cmluZ1x0Ly9EZWZhdWx0OiAnYWZ0ZXInXG5cdCAqfVxuXHQgKiA8L3ByZT5cblx0ICogPHA+RXhhbXBsZTwvcD5cblx0ICogPHByZT57XG5cdCAqXHR2YWx1ZTogJ3BpenphJyxcblx0ICpcdGl0ZW06ICdQaXp6YScsXG5cdCAqXHRjaGVja2VkOiB0cnVlLFxuXHQgKlx0aXRlbVBvc2l0aW9uOiAnYWZ0ZXInXG5cdCAqfVxuXHQgKiA8L3ByZT5cbiAgICovXG5cdEBJbnB1dCgpIHB1YmxpYyBwcm9wZXJ0aWVzOiBTZWxlY3RhYmxlTW9kZWw7XG5cdFxuXHQvKiogXG5cdCAqIDxwPiBUaGUgaW50ZXJuYWwgdmFsdWUgb2YgdGhlIHNlbGVjdGFibGUgZW1pdHRlZCB3aGVuIHNlbGVjdGVkLjwvcD5cblx0ICogPHA+IERlZmF1bHQgaXMgPGI+dmFsdWU8L2I+PC9wPlxuXHQgKi9cblx0QElucHV0KCkgcHVibGljIHZhbHVlOiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIDxwPkl0ZW0gY2FuIGJlIGEgbGFiZWwgb3IgYW55IG90aGVyIG9iamVjdCBiYXNlZCBvbiB0aGUgaHRtbCB0ZW1wbGF0ZSBwYXNzZWQgdG8gdGhlIHNlbGVjdGFibGU8L3A+XG5cdCAqL1xuXHRASW5wdXQoKSBwdWJsaWMgaXRlbTogYW55O1xuXG5cdC8qKlxuXHQgKiA8cD4gQ2hlY2tlZCBvciBub3QgY2hlY2tlZDwvcD5cblx0ICogPHA+IERvdWJsZSBiaW5kZWQgdmFyaWFibGUgdG8gZ2V0IG9yIHNldCB0aGUgY2hlY2tlZCB2YWx1ZSBvZiB0aGUgc2VsZWN0YWJsZS48L3A+XG5cdCAqIDxwPiBEZWZhdWx0IGlzIDxiPmZhbHNlPC9iPjwvcD5cblx0ICovXG5cdEBJbnB1dCgpIGdldCBjaGVja2VkKCkgeyByZXR1cm4gdGhpcy5zZWxlY3RlZDsgfVxuXG5cdC8qKlxuXHQgKiA8cD5JdGVtIFBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBjb250cm9sPC9wPlxuXHQgKiA8cD5PcHRpb25zIDogJ2JlZm9yZScgLCAnYWZ0ZXInPC9wPlxuXHQgKiA8cD5EZWZhdWx0IDxiPmFmdGVyPC9iPlxuXHQgKi9cblx0QElucHV0KCkgcHVibGljIGl0ZW1Qb3NpdGlvbjogc3RyaW5nO1xuXG5cdC8qKkBoaWRkZW4gKi9cblx0QE91dHB1dCgpIGNoZWNrZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdC8qKkBoaWRkZW4gKi9cblx0QE91dHB1dCgpIGNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdC8qKkBoaWRkZW4gKi9cblx0c2V0IGNoZWNrZWQodmFsKSB7XG5cdFx0dGhpcy5zZWxlY3RlZCA9IHZhbDtcblx0XHR0aGlzLmNoZWNrZWRDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkKTtcblx0XHRpZih0aGlzLnByb3BlcnRpZXMhPW51bGwpXG5cdFx0XHR0aGlzLnByb3BlcnRpZXMuY2hlY2tlZCA9IHRoaXMuc2VsZWN0ZWQ7XG5cdH1cblx0LyoqQGhpZGRlblxuXHQgKiBJdCBpcyBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgTm90aWZpY2F0aW9uIGNsaWNrIGV2ZW50cyBieSB1c2luZyBDb3JlIENvbXBvbmVudCA8Yj5ub3RpZmljYXRpb25BY3Rpb248L2I+IGV2ZW50IGVtbWl0ZXIuXG4gIFx0ICogQHBhcmFtIG5vdGlmaWNhdGlvblx0aXQgaXMganNvbiBub3RpZmljYXRpb24gb2JqZWN0XG5cdCAqL1xuXHRjZk5vdGlmaWNhdGlvbkFjdGlvbihub3RpZmljYXRpb24pIHsgXG5cdFx0dGhpcy5ub3RpZmljYXRpb25BY3Rpb24uZW1pdChub3RpZmljYXRpb24pOyBcblx0fVxuXHQvKipAaGlkZGVuICovXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLC8qKkBoaWRkZW4gKi8pIHsgc3VwZXIoZWxlbWVudFJlZik7IH1cblx0LyoqQGhpZGRlblxuICAgKiBJdCB3aWxsIGJlIGdlbmVyYXRlZCA8Yj5jZkNoZWNrYm94PC9iPiBvYmplY3QgYW5kIHJlbmRlcmVkIGluc2lkZSBjb21wb25lbnQgdGVtcGxhdGUuIEFsc28gY2ZDaGVja1N0YXRlcyBmdW5jdGlvbiB3aWxsIGluaXRpYWxpemUgY2hlY2tib3hlcyBzdGF0ZXMuXG4gICAqL1xuXHRuZ09uSW5pdCgpIHsgXG5cdFx0aWYodGhpcy5ub3RpZmljYXRpb25BY3Rpb24ub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHRoaXMubm90aWZhY2F0aW9uQ2xpY2thYmxlID0gJ25vdGlmaWNhdGlvbi1jbGlja2FibGUnO1xuXHR9XG5cdC8qKkBoaWRkZW4gKi9cblx0bm90aWZ5R3JvdXAoKXtcblx0XHR0aGlzLmNsaWNrZWQuZW1pdCh7XCJpZFwiOnRoaXMuaW50ZXJuYWxJZCwgXCJ2YWx1ZVwiOiB0aGlzLnNlbGVjdGVkfSk7XG5cdH1cblx0LyoqQGhpZGRlbiAqL1xuXHR1cGRhdGVGcm9tR3JvdXAodmFsOiBib29sZWFuKVxuXHR7XG5cdFx0dGhpcy5jaGVja2VkID0gdmFsO1xuXHR9XG59Il19