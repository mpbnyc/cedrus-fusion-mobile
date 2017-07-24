"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_component_1 = require("../core/core.component");
var icon_model_1 = require("../../models/icon/icon.model");
var button_model_1 = require("../../models/button/button.model");
var button_styling_model_1 = require("../../models/button/button-styling.model");
var button_template_1 = require("../../templates/button.template");
var template_service_1 = require("../../services/template-service/template.service");
/**
 * <p>CF Button Component</p>
 * <pre>
 * <code>
 * import { ButtonModel } from 'cedrus-fusion'
 * import { ButtonStylingModel } from 'cedrus-fusion'
 * <</code>cf-button<code>></code><code><</code><code>/</code>cf-button<code>>
 * </code>
 * </pre>
 */
var CfButtonComponent = (function (_super) {
    __extends(CfButtonComponent, _super);
    /**@hidden */
    function CfButtonComponent(/**@hidden */ elementRef, /**@hidden */ templateService) {
        var _this = _super.call(this, elementRef, templateService) || this;
        _this.elementRef = elementRef;
        /**@hidden */
        _this.notifacationClickable = '';
        /** <b>Output</b>
         * <p>The event will be emitted when the button is clicked</p>
         */
        _this.onClick = new core_1.EventEmitter();
        console.log("I am in the constrctor");
        return _this;
    }
    /** @hidden
     * <p>On initialization:</p>
     * <p>Check to see if any of the angular material button types are needed to be passed to the child button.</p>
     * <p>Types are: <b>md-button</b>, <b>md-raised-button</b>, <b>md-icon-button</b>, <b>md-fab</b>, <b>md-mini-fab</b></p>
     * <p> Then initialize the button element </p>
     */
    CfButtonComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.getMyTemplate("button", button_template_1.ButtonTemplates).then(function () {
            console.log('attempting to get template');
            if (_this.properties == null) {
                console.log('active template is:');
                console.log(_this.activeTemplate);
                _this.properties = new button_model_1.ButtonModel(_this.activeTemplate["property"]);
            }
            else {
                var mainKeys = Object.keys(_this.activeTemplate["property"]);
                for (var _i = 0, mainKeys_1 = mainKeys; _i < mainKeys_1.length; _i++) {
                    var key = mainKeys_1[_i];
                    if (_this.properties[key] == null)
                        _this.properties[key] = _this.activeTemplate["property"][key];
                }
            }
            if (_this.styling == null) {
                _this.styling = new button_styling_model_1.ButtonStylingModel(_this.activeTemplate["style"]);
            }
            if (_this.disable != null)
                _this.properties.disable = _this.disable;
            if (_this.wait != null)
                _this.properties.waiting.value = _this.wait;
            if (_this.display != null)
                _this.properties.display = _this.display;
            if (_this.label != null)
                _this.properties.label = _this.label;
            if (_this.iconPosition != null)
                _this.properties.iconPosition = _this.iconPosition;
            if (_this.iconName != null) {
                if (_this.properties.iconProperty == null)
                    _this.properties.iconProperty = new icon_model_1.IconModel();
                _this.properties.iconProperty.name = _this.iconName;
                if (_this.iconName.startsWith("fa-"))
                    _this.properties.iconProperty.type = "fa";
                else
                    _this.properties.iconProperty.type = "mi";
            }
            _this.cfButton = _this.properties;
            if (_this.notificationAction.observers.length > 0)
                _this.notifacationClickable = 'notification-clickable';
        });
    };
    /** @hidden
     * <p> Keep the properties object updated with any changes from external properties to keep the button dynamic.</p>
     * @param changes
     */
    CfButtonComponent.prototype.ngOnChanges = function (changes) {
        console.log("I am in ngonchanges");
        if (this.properties != null) {
            if (changes.disable != null)
                this.properties.disable = changes.disable.currentValue;
            if (changes.wait != null)
                this.properties.waiting.value = changes.wait.currentValue;
            if (changes.display != null)
                this.properties.display = changes.display.currentValue;
            if (changes.label != null)
                this.properties.label = changes.label.currentValue;
            if (changes.iconPosition != null)
                this.properties.iconPosition = changes.iconPosition.currentValue;
            if (changes.iconName != null) {
                if (this.properties.iconProperty == null)
                    this.properties.iconProperty = new icon_model_1.IconModel();
                this.properties.iconProperty.name = changes.iconName.currentValue;
                if (changes.iconName.currentValue.startsWith("fa-"))
                    this.properties.iconProperty.type = "fa";
                else
                    this.properties.iconProperty.type = "mi";
            }
        }
    };
    /** @hidden
     * <p>The method will emit event when the button is clicked</p>
     */
    CfButtonComponent.prototype.buttonClicked = function () {
        this.onClick.emit();
    };
    /** @hidden
     * It is function for creating Notification click events by using Core Component <b>notificationAction</b> event emmiter.
     * @param notification  it is json notification object
     */
    CfButtonComponent.prototype.cfNotificationAction = function (notification) {
        this.notificationAction.emit(notification);
    };
    /**@hidden */
    CfButtonComponent.prototype.getButtonClass = function () {
        if (this.styling != null && this.styling.button != null && this.cfButton != null) {
            try {
                var classes = "";
                var mainKeys = Object.keys(this.styling.button.dynamicClass);
                for (var _i = 0, mainKeys_2 = mainKeys; _i < mainKeys_2.length; _i++) {
                    var key = mainKeys_2[_i];
                    if (eval(this.styling.button.dynamicClass[key]) == true)
                        classes = classes + " " + key;
                }
                return classes;
            }
            catch (e) {
                //Do nothing
            }
        }
    };
    /**@hidden */
    CfButtonComponent.prototype.getContainerClass = function () {
        if (this.styling != null && this.styling.container != null && this.cfButton != null) {
            try {
                var classes = "";
                var mainKeys = Object.keys(this.styling.container.dynamicClass);
                for (var _i = 0, mainKeys_3 = mainKeys; _i < mainKeys_3.length; _i++) {
                    var key = mainKeys_3[_i];
                    if (eval(this.styling.container.dynamicClass[key]) == true)
                        classes = classes + " " + key;
                }
                return classes;
            }
            catch (e) {
                //Do nothing
            }
        }
    };
    return CfButtonComponent;
}(core_component_1.CfCoreComponent));
__decorate([
    core_1.HostBinding('class'),
    __metadata("design:type", Object)
], CfButtonComponent.prototype, "notifacationClickable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", button_model_1.ButtonModel)
], CfButtonComponent.prototype, "properties", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", button_styling_model_1.ButtonStylingModel)
], CfButtonComponent.prototype, "styling", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CfButtonComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CfButtonComponent.prototype, "iconName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CfButtonComponent.prototype, "iconPosition", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CfButtonComponent.prototype, "wait", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CfButtonComponent.prototype, "onClick", void 0);
CfButtonComponent = __decorate([
    core_1.Component({
        selector: 'cf-button',
        templateUrl: './lib/components/button/button.component.html',
        styleUrls: ['./lib/components/button/button.component.css']
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, template_service_1.TemplateService])
], CfButtonComponent);
exports.CfButtonComponent = CfButtonComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkg7QUFDM0gseURBQXlEO0FBRXpELDJEQUF5RDtBQUN6RCxpRUFBK0Q7QUFDL0QsaUZBQThFO0FBQzlFLG1FQUFrRTtBQUVsRSxxRkFBbUY7QUFFbkY7Ozs7Ozs7OztHQVNHO0FBTUgsSUFBYSxpQkFBaUI7SUFBUyxxQ0FBZTtJQW9HbkQsYUFBYTtJQUNkLDJCQUFhLGFBQWEsQ0FBTyxVQUFzQixFQUFDLGFBQWEsQ0FBQyxlQUErQjtRQUFyRyxZQUNFLGtCQUFNLFVBQVUsRUFBRSxlQUFlLENBQUMsU0FFbkM7UUFIZ0MsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFuR3ZELGFBQWE7UUFDUywyQkFBcUIsR0FBRyxFQUFFLENBQUM7UUEyRmpEOztXQUVHO1FBRUgsYUFBTyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBSzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQzs7SUFDeEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsb0NBQVEsR0FBUjtRQUFBLGlCQThDQztRQTdDQyxpQkFBTSxRQUFRLFdBQUUsQ0FBQztRQUVqQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBQyxpQ0FBZSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUMxQyxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsVUFBVSxJQUFFLElBQUksQ0FBQyxDQUN6QixDQUFDO2dCQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ2pDLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSwwQkFBVyxDQUFD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N091QjtJQUFyQixrQkFBVyxDQUFDLE9BQU8sQ0FBQzs7Z0VBQTRCO0FBeUNsRDtJQURFLFlBQUssRUFBRTs4QkFDVSwwQkFBVztxREFBQztBQXlCL0I7SUFERSxZQUFLLEVBQUU7OEJBQ08seUNBQWtCO2tEQUFDO0FBS3pCO0lBQVIsWUFBSyxFQUFFOztnREFBZTtBQU1kO0lBQVIsWUFBSyxFQUFFOzttREFBa0I7QUFPakI7SUFBUixZQUFLLEVBQUU7O3VEQUFzQjtBQUtyQjtJQUFSLFlBQUssRUFBRTs7K0NBQWU7QUFNdkI7SUFEQyxhQUFNLEVBQUU7O2tEQUNvQjtBQWxHbEIsaUJBQWlCO0lBTDdCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsK0NBQStDO1FBQzVELFNBQVMsRUFBRSxDQUFDLDhDQUE4QyxDQUFDO0tBQzVELENBQUM7cUNBc0c2QyxpQkFBVSxFQUErQixrQ0FBZTtHQXJHMUYsaUJBQWlCLENBZ1A3QjtBQWhQWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBWaWV3RW5jYXBzdWxhdGlvbiwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENmQ29yZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvY29yZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2ZJY29uQ29tcG9uZW50IH0gZnJvbSAnLi4vaWNvbi9pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJY29uTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvaWNvbi9pY29uLm1vZGVsJztcbmltcG9ydCB7IEJ1dHRvbk1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2J1dHRvbi9idXR0b24ubW9kZWwnO1xuaW1wb3J0IHsgQnV0dG9uU3R5bGluZ01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2J1dHRvbi9idXR0b24tc3R5bGluZy5tb2RlbCc7XG5pbXBvcnQgeyBCdXR0b25UZW1wbGF0ZXMgfSBmcm9tICcuLi8uLi90ZW1wbGF0ZXMvYnV0dG9uLnRlbXBsYXRlJztcblxuaW1wb3J0IHsgVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGVtcGxhdGUtc2VydmljZS90ZW1wbGF0ZS5zZXJ2aWNlJztcblxuLyoqXG4gKiA8cD5DRiBCdXR0b24gQ29tcG9uZW50PC9wPiBcbiAqIDxwcmU+XG4gKiA8Y29kZT5cbiAqIGltcG9ydCB7IEJ1dHRvbk1vZGVsIH0gZnJvbSAnY2VkcnVzLWZ1c2lvbidcbiAqIGltcG9ydCB7IEJ1dHRvblN0eWxpbmdNb2RlbCB9IGZyb20gJ2NlZHJ1cy1mdXNpb24nXG4gKiA8PC9jb2RlPmNmLWJ1dHRvbjxjb2RlPj48L2NvZGU+PGNvZGU+PDwvY29kZT48Y29kZT4vPC9jb2RlPmNmLWJ1dHRvbjxjb2RlPj5cbiAqIDwvY29kZT5cbiAqIDwvcHJlPlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZi1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpYi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENmQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgQ2ZDb3JlQ29tcG9uZW50ICBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgXG4gIC8qKkBoaWRkZW4gKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIG5vdGlmYWNhdGlvbkNsaWNrYWJsZSA9ICcnO1xuXG4gIC8qKiBAaGlkZGVuXG5cdCAqIEl0IGlzIHRoZSBidXR0b24gb2JqZWN0IGJvdW5kIHRvIHRoZSBidXR0b24gY29tcG9uZW50XG5cdCAqL1xuXHRjZkJ1dHRvbjogQnV0dG9uTW9kZWw7XG5cbiAgLyoqIEBoaWRkZW5cbiAgICogPHA+IFRoZSB0eXBlIG9mIHRoZSBuZWVkZWQgYnV0dG9uLjwvcD5cbiAgICogPHA+IFR5cGUgY2FuIGJlOiBtYXQtYnV0dG9uLCBtYXQtcmFpc2VkLWJ1dHRvbiwgbWF0LWZhYiwgbWF0LW1pbmktZmFiIGFuZCBtYXQtaWNvbi1idXR0b24uPC9wPlxuICAgKi9cbiAgYnV0dG9uVHlwZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiA8cHJlPntcbiAgICogIGRpc3BsYXk6IGJvb2xlYW4sICAgICAgICAgLy8gVHJ1ZSBvciBGYWxzZSA8Yj5EZWZhdWx0OiBUcnVlPC9iPlxuICAgKiAgZGlzYWJsZTogYm9vbGVhbiwgICAgICAgICAvLyBUcnVlIG9yIEZhbHNlIDxiPkRlZmF1bHQ6IEZhbHNlPC9iPlxuICAgKiAgbGFiZWw6IHN0cmluZywgICAgICAgICAgICAvLyA8Yj5EZWZhdWx0OiAnQnV0dG9uJzwvYj5cbiAgICogIGljb25Qcm9wZXJ0eTogSWNvbk1vZGVsLCAgLy9SZWZlciB0byBJY29uIENvbXBvbmVudFxuICAgKiAgaWNvblBvc2l0aW9uOiBzdHJpbmcsICAgICAvLydsZWZ0JywgJ3JpZ2h0JyA8Yj5EZWZhdWx0OiAnbGVmdCc8L2I+XG4gICAqICB3YWl0aW5nOiB7XG4gICAqICAgdmFsdWU6IGJvb2xlYW4sICAgICAgICAgLy9EaXNwbGF5IHdhaXRpbmcgbW9kZSAoSWNvbilcbiAgICogICBkaXNhYmxlOiBib29sZWFuLCAgICAgICAvLyBUcnVlIG9yIEZhbHNlXG4gICAqICAgaWNvblByb3BlcnR5OiBJY29uTW9kZWwgLy9SZWZlciB0byBJY29uIENvbXBvbmVudFxuICAgKiAgfVxuICAgKn1cbiAgICogPC9wcmU+XG4gICAqIDwvcHJlPlxuXHQgKiA8cD5FeGFtcGxlPC9wPlxuXHQgKiA8cHJlPntcblx0ICpcdGxhYmVsOiAnQ2FydCcsXG5cdCAqXHRpY29uUHJvcGVydHk6e1xuICAgKiAgbmFtZTogJ2ZhLXNob3BwaW5nLWNhcnQnLFxuXHQgKiAgc2l6ZTogJzE4cHgnLFxuXHQgKiAgdmFsdWU6ICdidXknLFxuICAgKiB9LFxuICAgKiBpY29uUG9zaXRpb246ICdyaWdodCdcblx0ICp9XG5cdCAqIDwvcHJlPlxuICAgKi9cbiAgQElucHV0KClcblx0cHVibGljIHByb3BlcnRpZXM6IEJ1dHRvbk1vZGVsO1xuXG5cdC8qKlxuXHQgKjxwPiBkeW5hbWljQ2xhc3M6IGZ1bmN0aW9uKCkgLT4gc3RyaW5nLFx0Ly8gRnVuY3Rpb24gdGhhdCByZXR1cm5zIG5hbWUgb2YgdGhlIGNsYXNzIDwvcD5cblx0ICo8cD4gY2xhc3M6IHN0cmluZ1x0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIC8vIE5hbWUgb2YgdGhlIGNzcyBjbGFzcyBzZWxlY3RvciA8L3A+XG5cdCAqPHA+IHRoZW1lQ29sb3I6IHN0cmluZ1x0XHRcdFx0XHRcdFx0XHRcdCAgLy8gcHJpbWFyeS9hY2NlbnQvd2FybiA8L3A+XG5cdCAqPHByZT5cblx0ICp7XG5cdCAqXHQvLyBDb250YWluZXIgc3Vycm91bmRpbmcgdGhlIEJ1dHRvblxuXHQgKlx0Y29udGFpbmVyOntcblx0ICpcdFx0ZHluYW1pY0NsYXNzLFxuXHQgKlx0XHRjbGFzc1xuXHQgKlx0fSxcblx0ICpcdC8vIG1kLWJ1dHRvbiBzdHlsaW5nXG5cdCAqXHRidXR0b246e1xuXHQgKlx0XHRkeW5hbWljQ2xhc3MsXG5cdCAqXHRcdGNsYXNzLFxuXHQgKlx0XHR0aGVtZUNvbG9yXG5cdCAqXHR9LFxuXHQgKlx0Ly8gSWNvbiBzdHlsaW5nOiBSZWZlciB0byBpY29uIGNvbXBvbmVudFxuXHQgKlx0aWNvblN0eWxpbmc6IEljb25TdHlsaW5nTW9kZWxcblx0ICp9XG5cdCAqIDwvcHJlPlxuXHQgKi9cbiAgQElucHV0KClcblx0cHVibGljIHN0eWxpbmc6IEJ1dHRvblN0eWxpbmdNb2RlbDtcblxuICAvKipcbiAgICogPHA+IFRoZSBsYWJlbCBmb3IgdGhlIGJ1dHRvbjwvcD5cbiAgICovXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIFxuICAvKipcbiAgICogPHA+IFRoZSBuYW1lIG9mIHRoZSBpY29uPC9wPlxuICAgKiA8cD4gUmVmZXIgdG8gaWNvbiBjb21wb25lbnQ8L3A+XG4gICAqL1xuICBASW5wdXQoKSBpY29uTmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiA8cD4gVGhlIGljb24gcG9zaXRpb24gb24gdGhlIGJ1dHRvbjwvcD5cbiAgICogPHA+IE9wdGlvbnM6ICdsZWZ0JyBvciAncmlnaHQnPC9wPlxuICAgKiA8cD4gRGVmYXVsdDogPGI+J2xlZnQnPC9iPjwvcD5cbiAgICovXG4gIEBJbnB1dCgpIGljb25Qb3NpdGlvbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiA8cD4gRGlzcGxheSB3YWl0aW5nIG1vZGUgKEljb24pPC9wPlxuICAgKi9cbiAgQElucHV0KCkgd2FpdDogYm9vbGVhbjtcblxuICAvKiogPGI+T3V0cHV0PC9iPlxuICAgKiA8cD5UaGUgZXZlbnQgd2lsbCBiZSBlbWl0dGVkIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkPC9wPlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIC8qKkBoaWRkZW4gKi9cbiAgY29uc3RydWN0b3IoIC8qKkBoaWRkZW4gKi9wdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwvKipAaGlkZGVuICovIHRlbXBsYXRlU2VydmljZTpUZW1wbGF0ZVNlcnZpY2UpIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCB0ZW1wbGF0ZVNlcnZpY2UpO1xuICAgIGNvbnNvbGUubG9nKFwiSSBhbSBpbiB0aGUgY29uc3RyY3RvclwiKTtcbiAgfVxuXG4gIC8qKiBAaGlkZGVuXG4gICAqIDxwPk9uIGluaXRpYWxpemF0aW9uOjwvcD5cbiAgICogPHA+Q2hlY2sgdG8gc2VlIGlmIGFueSBvZiB0aGUgYW5ndWxhciBtYXRlcmlhbCBidXR0b24gdHlwZXMgYXJlIG5lZWRlZCB0byBiZSBwYXNzZWQgdG8gdGhlIGNoaWxkIGJ1dHRvbi48L3A+XG4gICAqIDxwPlR5cGVzIGFyZTogPGI+bWQtYnV0dG9uPC9iPiwgPGI+bWQtcmFpc2VkLWJ1dHRvbjwvYj4sIDxiPm1kLWljb24tYnV0dG9uPC9iPiwgPGI+bWQtZmFiPC9iPiwgPGI+bWQtbWluaS1mYWI8L2I+PC9wPlxuICAgKiA8cD4gVGhlbiBpbml0aWFsaXplIHRoZSBidXR0b24gZWxlbWVudCA8L3A+XG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuXG4gICAgdGhpcy5nZXRNeVRlbXBsYXRlKFwiYnV0dG9uXCIsQnV0dG9uVGVtcGxhdGVzKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdhdHRlbXB0aW5nIHRvIGdldCB0ZW1wbGF0ZScpO1xuICAgICAgaWYodGhpcy5wcm9wZXJ0aWVzPT1udWxsKVxuICAgICAge1xuICAgICAgICBjb25zb2xlLmxvZygnYWN0aXZlIHRlbXBsYXRlIGlzOicpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFjdGl2ZVRlbXBsYXRlKTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gbmV3IEJ1dHRvbk1vZGVsKHRoaXMuYWN0aXZlVGVtcGxhdGVbXCJwcm9wZXJ0eVwiXSk7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIHZhciBtYWluS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuYWN0aXZlVGVtcGxhdGVbXCJwcm9wZXJ0eVwiXSk7XG4gICAgICAgIGZvcihsZXQga2V5IG9mIG1haW5LZXlzKVxuICAgICAgICB7XG4gICAgICAgICAgaWYodGhpcy5wcm9wZXJ0aWVzW2tleV09PW51bGwpXG4gICAgICAgICAgICB0aGlzLnByb3BlcnRpZXNba2V5XT10aGlzLmFjdGl2ZVRlbXBsYXRlW1wicHJvcGVydHlcIl1ba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZih0aGlzLnN0eWxpbmc9PW51bGwpXG4gICAgICB7XG4gICAgICAgIHRoaXMuc3R5bGluZyA9IG5ldyBCdXR0b25TdHlsaW5nTW9kZWwgKHRoaXMuYWN0aXZlVGVtcGxhdGVbXCJzdHlsZVwiXSk7XG4gICAgICB9XG4gICAgICBpZih0aGlzLmRpc2FibGUhPW51bGwpIHRoaXMucHJvcGVydGllcy5kaXNhYmxlID0gdGhpcy5kaXNhYmxlO1xuICAgICAgaWYodGhpcy53YWl0IT1udWxsKSB0aGlzLnByb3BlcnRpZXMud2FpdGluZy52YWx1ZSA9IHRoaXMud2FpdDtcbiAgICAgIGlmKHRoaXMuZGlzcGxheSE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLmRpc3BsYXkgPSB0aGlzLmRpc3BsYXk7XG4gICAgICBpZih0aGlzLmxhYmVsIT1udWxsKSB0aGlzLnByb3BlcnRpZXMubGFiZWwgPSB0aGlzLmxhYmVsO1xuICAgICAgaWYodGhpcy5pY29uUG9zaXRpb24hPW51bGwpIHRoaXMucHJvcGVydGllcy5pY29uUG9zaXRpb24gPSB0aGlzLmljb25Qb3NpdGlvbjtcbiAgICAgIGlmKHRoaXMuaWNvbk5hbWUhPW51bGwpXG4gICAgICB7XG4gICAgICAgIGlmKHRoaXMucHJvcGVydGllcy5pY29uUHJvcGVydHk9PW51bGwpXG4gICAgICAgICAgdGhpcy5wcm9wZXJ0aWVzLmljb25Qcm9wZXJ0eSA9IG5ldyBJY29uTW9kZWwoKTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzLmljb25Qcm9wZXJ0eS5uYW1lID0gdGhpcy5pY29uTmFtZTtcbiAgICAgICAgaWYodGhpcy5pY29uTmFtZS5zdGFydHNXaXRoKFwiZmEtXCIpKVxuICAgICAgICAgIHRoaXMucHJvcGVydGllcy5pY29uUHJvcGVydHkudHlwZSA9IFwiZmFcIjtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHRoaXMucHJvcGVydGllcy5pY29uUHJvcGVydHkudHlwZSA9IFwibWlcIjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jZkJ1dHRvbiA9IHRoaXMucHJvcGVydGllcztcblxuICAgICAgaWYodGhpcy5ub3RpZmljYXRpb25BY3Rpb24ub2JzZXJ2ZXJzLmxlbmd0aD4wKSB0aGlzLm5vdGlmYWNhdGlvbkNsaWNrYWJsZSA9ICdub3RpZmljYXRpb24tY2xpY2thYmxlJztcblxuXHRcdFx0fSk7XG4gIH1cblxuICAvKiogQGhpZGRlblxuICAgKiA8cD4gS2VlcCB0aGUgcHJvcGVydGllcyBvYmplY3QgdXBkYXRlZCB3aXRoIGFueSBjaGFuZ2VzIGZyb20gZXh0ZXJuYWwgcHJvcGVydGllcyB0byBrZWVwIHRoZSBidXR0b24gZHluYW1pYy48L3A+XG4gICAqIEBwYXJhbSBjaGFuZ2VzXG4gICAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhcIkkgYW0gaW4gbmdvbmNoYW5nZXNcIik7XG4gICAgaWYodGhpcy5wcm9wZXJ0aWVzIT1udWxsKVxuICAgIHtcbiAgICAgIGlmKGNoYW5nZXMuZGlzYWJsZSE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLmRpc2FibGUgPSBjaGFuZ2VzLmRpc2FibGUuY3VycmVudFZhbHVlO1xuICAgICAgaWYoY2hhbmdlcy53YWl0IT1udWxsKSB0aGlzLnByb3BlcnRpZXMud2FpdGluZy52YWx1ZSA9IGNoYW5nZXMud2FpdC5jdXJyZW50VmFsdWU7XG4gICAgICBpZihjaGFuZ2VzLmRpc3BsYXkhPW51bGwpIHRoaXMucHJvcGVydGllcy5kaXNwbGF5ID0gY2hhbmdlcy5kaXNwbGF5LmN1cnJlbnRWYWx1ZTtcbiAgICAgIGlmKGNoYW5nZXMubGFiZWwhPW51bGwpIHRoaXMucHJvcGVydGllcy5sYWJlbCA9IGNoYW5nZXMubGFiZWwuY3VycmVudFZhbHVlO1xuICAgICAgaWYoY2hhbmdlcy5pY29uUG9zaXRpb24hPW51bGwpIHRoaXMucHJvcGVydGllcy5pY29uUG9zaXRpb24gPSBjaGFuZ2VzLmljb25Qb3NpdGlvbi5jdXJyZW50VmFsdWU7XG4gICAgICBpZihjaGFuZ2VzLmljb25OYW1lIT1udWxsKVxuICAgICAge1xuICAgICAgICBpZih0aGlzLnByb3BlcnRpZXMuaWNvblByb3BlcnR5PT1udWxsKVxuICAgICAgICAgIHRoaXMucHJvcGVydGllcy5pY29uUHJvcGVydHkgPSBuZXcgSWNvbk1vZGVsKCk7XG4gICAgICAgIHRoaXMucHJvcGVydGllcy5pY29uUHJvcGVydHkubmFtZSA9IGNoYW5nZXMuaWNvbk5hbWUuY3VycmVudFZhbHVlO1xuICAgICAgICBpZihjaGFuZ2VzLmljb25OYW1lLmN1cnJlbnRWYWx1ZS5zdGFydHNXaXRoKFwiZmEtXCIpKVxuICAgICAgICAgIHRoaXMucHJvcGVydGllcy5pY29uUHJvcGVydHkudHlwZSA9IFwiZmFcIjtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHRoaXMucHJvcGVydGllcy5pY29uUHJvcGVydHkudHlwZSA9IFwibWlcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogQGhpZGRlblxuICAgKiA8cD5UaGUgbWV0aG9kIHdpbGwgZW1pdCBldmVudCB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZDwvcD5cbiAgICovXG4gIGJ1dHRvbkNsaWNrZWQoKSB7XG4gICAgdGhpcy5vbkNsaWNrLmVtaXQoKTtcbiAgfVxuXG4gIC8qKiBAaGlkZGVuXG4gICAqIEl0IGlzIGZ1bmN0aW9uIGZvciBjcmVhdGluZyBOb3RpZmljYXRpb24gY2xpY2sgZXZlbnRzIGJ5IHVzaW5nIENvcmUgQ29tcG9uZW50IDxiPm5vdGlmaWNhdGlvbkFjdGlvbjwvYj4gZXZlbnQgZW1taXRlci5cbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvbiAgaXQgaXMganNvbiBub3RpZmljYXRpb24gb2JqZWN0XG4gICAqL1xuICBjZk5vdGlmaWNhdGlvbkFjdGlvbihub3RpZmljYXRpb24pIHtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbkFjdGlvbi5lbWl0KG5vdGlmaWNhdGlvbik7XG4gIH1cblx0LyoqQGhpZGRlbiAqL1xuICBnZXRCdXR0b25DbGFzcygpe1xuICAgIGlmKHRoaXMuc3R5bGluZyE9bnVsbCAmJiB0aGlzLnN0eWxpbmcuYnV0dG9uIT1udWxsJiYgdGhpcy5jZkJ1dHRvbiE9bnVsbClcbiAgICB7XG4gICAgICB0cnlcbiAgICAgIHtcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBcIlwiO1xuICAgICAgICB2YXIgbWFpbktleXMgPSBPYmplY3Qua2V5cyh0aGlzLnN0eWxpbmcuYnV0dG9uLmR5bmFtaWNDbGFzcyk7XG4gICAgICAgIGZvcihsZXQga2V5IG9mIG1haW5LZXlzKXtcbiAgICAgICAgICBpZihldmFsKHRoaXMuc3R5bGluZy5idXR0b24uZHluYW1pY0NsYXNzW2tleV0pPT10cnVlKVxuICAgICAgICAgICAgY2xhc3NlcyA9IGNsYXNzZXMrXCIgXCIra2V5O1xuICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgICB9XG4gICAgICBjYXRjaChlKVxuICAgICAge1xuICAgICAgICAvL0RvIG5vdGhpbmdcbiAgICAgIH1cbiAgICB9XG4gIH1cblx0LyoqQGhpZGRlbiAqL1xuICBnZXRDb250YWluZXJDbGFzcygpe1xuICAgIGlmKHRoaXMuc3R5bGluZyE9bnVsbCAmJiB0aGlzLnN0eWxpbmcuY29udGFpbmVyIT1udWxsJiYgdGhpcy5jZkJ1dHRvbiE9bnVsbClcbiAgICB7XG4gICAgICB0cnlcbiAgICAgIHtcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBcIlwiO1xuICAgICAgICB2YXIgbWFpbktleXMgPSBPYmplY3Qua2V5cyh0aGlzLnN0eWxpbmcuY29udGFpbmVyLmR5bmFtaWNDbGFzcyk7XG4gICAgICAgIGZvcihsZXQga2V5IG9mIG1haW5LZXlzKXtcbiAgICAgICAgICBpZihldmFsKHRoaXMuc3R5bGluZy5jb250YWluZXIuZHluYW1pY0NsYXNzW2tleV0pPT10cnVlKVxuICAgICAgICAgICAgY2xhc3NlcyA9IGNsYXNzZXMrXCIgXCIra2V5O1xuICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgICB9XG4gICAgICBjYXRjaChlKVxuICAgICAge1xuICAgICAgICAvL0RvIG5vdGhpbmdcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=