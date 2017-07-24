"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_component_1 = require("../core/core.component");
var icon_model_1 = require("../../models/icon/icon.model");
var icon_styling_model_1 = require("../../models/icon/icon-styling.model");
var icon_template_1 = require("../../templates/icon.template");
var template_service_1 = require("../../services/template-service/template.service");
/**
 * <p>CF Icon Component</p>
 * <pre>
 * <code>
 * import { IconModel } from 'cedrus-fusion'
 * import { IconStylingModel } from 'cedrus-fusion'
 * <code><</code>cf-icon<code>></code><code><</code><code>/</code>cf-icon<code>></code>
 * </code>
 * </pre>
 */
var CfIconComponent = (function (_super) {
    __extends(CfIconComponent, _super);
    /**@hidden */
    function CfIconComponent(/**@hidden */ elementRef, /**@hidden */ templateService) {
        var _this = _super.call(this, elementRef, templateService) || this;
        _this.elementRef = elementRef;
        _this.templateService = templateService;
        /**@hidden */
        _this.notifacationClickable = '';
        /** @hidden
         * <p>Whether the icon is in toggle mode or normal mode.</p>
         */
        _this.checked = true;
        /**@hidden */
        _this.currentIcon = {};
        /**
         * <b>Output</b>
       * <p>Event emited on toggle</p>
       */
        _this.cfOnToggle = new core_1.EventEmitter();
        return _this;
    }
    /** @hidden
     * It is function for set correct toggle value/icon and emmit event with icon state value.
     */
    CfIconComponent.prototype.cfIconToggled = function () {
        if (this.properties.toggle != null) {
            this.checked = !this.checked;
            if (this.currentIcon == this.cfIcon)
                this.currentIcon = this.cfIcon.toggle;
            else
                this.currentIcon = this.cfIcon;
            this.cfOnToggle.emit(this.currentIcon.value);
        }
    };
    /** @hidden
     * It is function for creating Notification click events by using Core Component <b>notificationAction</b> event emmiter.
   * @param notification	it is json notification object
     */
    CfIconComponent.prototype.cfNotificationAction = function (notification) {
        this.notificationAction.emit(notification);
    };
    /** @hidden
     * <p>On Icon component initialization next things are heppening:</p>
     * <ul>
     * <li>Inititlaizing the properties and styling objects if not initialized and pass the external inputs to over write if any</li>
     * <li>Binding the html template object to the passed properties object</li>
     * </ul>
     *
     */
    CfIconComponent.prototype.ngOnInit = function () {
        var _this = this;
        // try{
        // 	console.log(this.configService.getConfiguration().templateURL);
        // }
        // catch(e)
        // {}
        if (this.notificationAction.observers.length > 0)
            this.notifacationClickable = 'notification-clickable';
        // this.activeTemplate = IconTemplates["defaultTemplate"];
        // if(this.compTemplate!=null && this.compTemplate!="")
        // {
        // 	if(IconTemplates[this.compTemplate]!=null)
        // 	{
        // 		this.activeTemplate = IconTemplates[this.compTemplate];
        // 	}
        // 	else
        // 		this.activeTemplate = this.compTemplate;
        // }
        this.getMyTemplate("icon", icon_template_1.IconTemplates).then(function () {
            if (_this.properties == null)
                _this.properties = new icon_model_1.IconModel(_this.activeTemplate["property"]);
            else {
                var mainKeys = Object.keys(_this.activeTemplate["property"]);
                if (_this.properties.toggle != null && _this.activeTemplate["property"].toggle != null) {
                    var toggleKeys = Object.keys(_this.activeTemplate["property"].toggle);
                    for (var _i = 0, toggleKeys_1 = toggleKeys; _i < toggleKeys_1.length; _i++) {
                        var key = toggleKeys_1[_i];
                        if (_this.properties["toggle"][key] == null)
                            _this.properties["toggle"][key] = _this.activeTemplate["property"]["toggle"][key];
                    }
                }
                for (var _a = 0, mainKeys_1 = mainKeys; _a < mainKeys_1.length; _a++) {
                    var key = mainKeys_1[_a];
                    if (_this.properties[key] == null)
                        _this.properties[key] = _this.activeTemplate["property"][key];
                }
            }
            if (_this.styling == null)
                _this.styling = new icon_styling_model_1.IconStylingModel(_this.activeTemplate["style"]);
            if (_this.display != null)
                _this.properties.display = _this.display;
            if (_this.name != null)
                _this.properties.name = _this.name;
            if (_this.properties.name.startsWith("fa-"))
                _this.properties.type = "fa";
            else
                _this.properties.type = "mi";
            if (_this.size != null)
                _this.properties.size = _this.size;
            _this.cfIcon = _this.properties;
            _this.currentIcon = _this.cfIcon;
            console.dir(_this.currentIcon);
        });
    };
    /** @hidden
     * <p> Updating the properties object if any of the external inputs has been changed to keep the component dynamic.</p>
     * @param changes <p> Changes that occured from the user.</p>
     */
    CfIconComponent.prototype.ngOnChanges = function (changes) {
        if (this.properties != null) {
            if (changes.display != null)
                this.properties.display = changes.display.currentValue;
            if (changes.name != null) {
                this.properties.name = changes.name.currentValue;
                if (changes.name.currentValue.startsWith("fa-"))
                    this.properties.type = "fa";
                else
                    this.properties.type = "mi";
            }
            if (changes.size != null)
                this.properties.size = changes.size.currentValue;
        }
    };
    /**@hidden */
    CfIconComponent.prototype.getIconClass = function () {
        if (this.styling != null && this.styling.icon != null && this.cfIcon != null) {
            var classes = "";
            if (this.checked == true) {
                try {
                    var mainKeys = Object.keys(this.styling.icon.dynamicClass);
                    for (var _i = 0, mainKeys_2 = mainKeys; _i < mainKeys_2.length; _i++) {
                        var key = mainKeys_2[_i];
                        if (eval(this.styling.icon.dynamicClass[key]) == true)
                            classes = classes + " " + key;
                    }
                    return classes;
                }
                catch (e) {
                    //Do nothing
                }
            }
            else {
                try {
                    var mainKeys = Object.keys(this.styling.toggleIcon.icon.dynamicClass);
                    for (var _a = 0, mainKeys_3 = mainKeys; _a < mainKeys_3.length; _a++) {
                        var key = mainKeys_3[_a];
                        if (eval(this.styling.toggleIcon.icon.dynamicClass[key]) == true)
                            classes = classes + " " + key;
                    }
                    return classes;
                }
                catch (e) {
                    //Do nothing
                }
            }
        }
    };
    /**@hidden */
    CfIconComponent.prototype.getContainerClass = function () {
        if (this.styling != null && this.styling.container != null && this.cfIcon != null) {
            var classes = "";
            if (this.checked == true) {
                try {
                    var mainKeys = Object.keys(this.styling.container.dynamicClass);
                    for (var _i = 0, mainKeys_4 = mainKeys; _i < mainKeys_4.length; _i++) {
                        var key = mainKeys_4[_i];
                        if (eval(this.styling.container.dynamicClass[key]) == true)
                            classes = classes + " " + key;
                    }
                    return classes;
                }
                catch (e) {
                    //Do nothing
                }
            }
            else {
                try {
                    var mainKeys = Object.keys(this.styling.toggleIcon.container.class);
                    for (var _a = 0, mainKeys_5 = mainKeys; _a < mainKeys_5.length; _a++) {
                        var key = mainKeys_5[_a];
                        if (eval(this.styling.toggleIcon.container.class[key]) == true)
                            classes = classes + " " + key;
                    }
                    return classes;
                }
                catch (e) {
                    //Do nothing
                }
            }
        }
    };
    return CfIconComponent;
}(core_component_1.CfCoreComponent));
__decorate([
    core_1.HostBinding('class'),
    __metadata("design:type", Object)
], CfIconComponent.prototype, "notifacationClickable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", icon_model_1.IconModel)
], CfIconComponent.prototype, "properties", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", icon_styling_model_1.IconStylingModel)
], CfIconComponent.prototype, "styling", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CfIconComponent.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CfIconComponent.prototype, "size", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CfIconComponent.prototype, "cfOnToggle", void 0);
CfIconComponent = __decorate([
    core_1.Component({
        selector: 'cf-icon',
        templateUrl: './lib/components/icon/icon.component.html',
        styleUrls: ['./lib/components/icon/icon.component.css']
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, template_service_1.TemplateService])
], CfIconComponent);
exports.CfIconComponent = CfIconComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RztBQUN4Ryx5REFBeUQ7QUFDekQsMkRBQXlEO0FBQ3pELDJFQUF3RTtBQUN4RSwrREFBOEQ7QUFFOUQscUZBQW1GO0FBRW5GOzs7Ozs7Ozs7R0FTRztBQU9ILElBQWEsZUFBZTtJQUFTLG1DQUFlO0lBMEhuRCxhQUFhO0lBQ2IseUJBQVksYUFBYSxDQUFPLFVBQXNCLEVBQUMsYUFBYSxDQUFRLGVBQStCO1FBQTNHLFlBQ0Msa0JBQU0sVUFBVSxFQUFDLGVBQWUsQ0FBQyxTQUNqQztRQUYrQixnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFzQixxQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUF6SDNHLGFBQWE7UUFDUywyQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFPakQ7O1dBRUc7UUFDSCxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGFBQWE7UUFDYixpQkFBVyxHQUFRLEVBQUUsQ0FBQztRQTJFdEI7OztTQUdJO1FBRUosZ0JBQVUsR0FBc0IsSUFBSSxtQkFBWSxFQUFPLENBQUM7O0lBNkJ4RCxDQUFDO0lBM0JEOztPQUVHO0lBQ0gsdUNBQWEsR0FBYjtRQUVDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFFLElBQUksQ0FBQyxDQUNoQyxDQUFDO1lBQ0EsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ3ZDLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2hD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QztnQkFDRCxLQUFLLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FDUixDQUFDO29CQUNBLFlBQVk7Z0JBQ2IsQ0FBQztZQUNGLENBQUM7UUFFQyxDQUFDO0lBQ0gsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQXRTRCxDQUFxQyxnQ0FBZSxHQXNTbkQ7QUFuU3NCO0lBQXJCLGtCQUFXLENBQUMsT0FBTyxDQUFDOzs4REFBNEI7QUEyQ2pEO0lBREMsWUFBSyxFQUFFOzhCQUNXLHNCQUFTO21EQUFDO0FBNEI3QjtJQURDLFlBQUssRUFBRTs4QkFDUSxxQ0FBZ0I7Z0RBQUM7QUFReEI7SUFBUixZQUFLLEVBQUU7OzZDQUFxQjtBQU9wQjtJQUFSLFlBQUssRUFBRTs7NkNBQXFCO0FBTzdCO0lBREMsYUFBTSxFQUFFOzhCQUNHLG1CQUFZO21EQUFnQztBQWhHNUMsZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLDJDQUEyQztRQUN4RCxTQUFTLEVBQUUsQ0FBQywwQ0FBMEMsQ0FBQztLQUN4RCxDQUFDO3FDQTZIMkMsaUJBQVUsRUFBc0Msa0NBQWU7R0EzSC9GLGVBQWUsQ0FzUzNCO0FBdFNZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENmQ29yZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvY29yZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWNvbk1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ljb24vaWNvbi5tb2RlbCc7XG5pbXBvcnQgeyBJY29uU3R5bGluZ01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ljb24vaWNvbi1zdHlsaW5nLm1vZGVsJztcbmltcG9ydCB7IEljb25UZW1wbGF0ZXMgfSBmcm9tICcuLi8uLi90ZW1wbGF0ZXMvaWNvbi50ZW1wbGF0ZSc7XG5cbmltcG9ydCB7IFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RlbXBsYXRlLXNlcnZpY2UvdGVtcGxhdGUuc2VydmljZSc7XG5cbi8qKlxuICogPHA+Q0YgSWNvbiBDb21wb25lbnQ8L3A+IFxuICogPHByZT5cbiAqIDxjb2RlPlxuICogaW1wb3J0IHsgSWNvbk1vZGVsIH0gZnJvbSAnY2VkcnVzLWZ1c2lvbidcbiAqIGltcG9ydCB7IEljb25TdHlsaW5nTW9kZWwgfSBmcm9tICdjZWRydXMtZnVzaW9uJ1xuICogPGNvZGU+PDwvY29kZT5jZi1pY29uPGNvZGU+PjwvY29kZT48Y29kZT48PC9jb2RlPjxjb2RlPi88L2NvZGU+Y2YtaWNvbjxjb2RlPj48L2NvZGU+XG4gKiA8L2NvZGU+XG4gKiA8L3ByZT5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2YtaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9saWIvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saWIvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQ2ZJY29uQ29tcG9uZW50IGV4dGVuZHMgQ2ZDb3JlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0XG5cdC8qKkBoaWRkZW4gKi9cblx0QEhvc3RCaW5kaW5nKCdjbGFzcycpIG5vdGlmYWNhdGlvbkNsaWNrYWJsZSA9ICcnO1xuXHRcblx0LyoqIEBoaWRkZW5cblx0ICogSXQgaXMgSWNvbiBvYmplY3Qgd2hpY2ggd2lsbCByZWNpdmUgdmFsdWVzIHByb3ZpZGVkIGJ5IEljb24gQ2xhc3MgYW5kIGFmdGVyIHRoYXQgPGI+bWQtaWNvbjwvYj4gd2lsbCBiZSBidWlsZGVkIG9uIHBhZ2UuXG5cdCAqL1xuXHRjZkljb246IEljb25Nb2RlbDtcblx0XG5cdC8qKiBAaGlkZGVuIFxuXHQgKiA8cD5XaGV0aGVyIHRoZSBpY29uIGlzIGluIHRvZ2dsZSBtb2RlIG9yIG5vcm1hbCBtb2RlLjwvcD5cblx0ICovXG5cdGNoZWNrZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdC8qKkBoaWRkZW4gKi9cblx0Y3VycmVudEljb246IGFueSA9IHt9O1xuXG4gIC8qKlxuXHQgKiA8cHJlPntcblx0ICogIGRpc3BsYXk6IGJvb2xlYW4sXHQvLyBUcnVlIG9yIEZhbHNlIDxiPkRlZmF1bHQ6IFRydWU8L2I+XG5cdCAqICBkaXNhYmxlOiBib29sZWFuLFx0Ly8gVHJ1ZSBvciBGYWxzZSA8Yj5EZWZhdWx0OiBGYWxzZTwvYj5cblx0ICogIG5hbWU6IHN0cmluZyxcdFx0XHQvLyBEZWZhdWx0OiAnSG9tZSdcblx0ICogIHNpemU6IHN0cmluZyxcdFx0XHQvLyAncHgnLCAnZW0nLCAnJScgPGI+RGVmYXVsdDogJzI0cHgnPC9iPlxuXHQgKiAgdmFsdWU6IGFueSxcdFx0XHRcdC8vIFZhbHVlIGVtaXR0ZWQgb24gY2xpY2tcblx0ICogIHRvZ2dsZTp7XHRcdFx0XHRcdC8vIFRvZ2dsaW5nIGljb24gc3RhdGVcblx0ICogICBuYW1lOiBzdHJpbmcsXHRcdC8vIE5hbWUgb2YgaWNvbiB0b2dnbGVkXG5cdCAqICAgc2l6ZTogc3RyaW5nLFx0XHQvLyBTaXplIG9mIGljb24gdG9nZ2xlZFxuXHQgKiAgIHZhbHVlOiBhbnlcdFx0XHQvLyBWYWx1ZSBvZiBpY29uIHRvZ2dsZWRcblx0ICogIH1cblx0ICp9XG5cdCAqIDwvcHJlPlxuXHQgKiA8cD5FeGFtcGxlPC9wPlxuXHQgKiA8cHJlPntcblx0ICpcdG5hbWU6ICdmYS1oZWFydC1vJyxcblx0ICpcdHNpemU6ICcxOHB4Jyxcblx0ICpcdHZhbHVlOiAnZW1wdHkgaGVhcnQnLFxuXHQgKlx0dG9nZ2xlOiB7XG5cdCAqXHRcdG5hbWU6ICdmYS1oZWFydCcsXG5cdCAqXHRcdHNpemU6ICcxOHB4Jyxcblx0ICpcdFx0dmFsdWU6ICdmdWxsIGhlYXJ0J1xuXHQgKlx0fVx0XG5cdCAqfVxuXHQgKiA8L3ByZT5cbiAgICovXG5cdEBJbnB1dCgpXG5cdHB1YmxpYyBwcm9wZXJ0aWVzOiBJY29uTW9kZWw7XG5cblx0LyoqXG5cdCAgKjxwPiBkeW5hbWljQ2xhc3M6IGZ1bmN0aW9uKCkgLT4gc3RyaW5nLFx0Ly8gRnVuY3Rpb24gdGhhdCByZXR1cm5zIG5hbWUgb2YgdGhlIGNsYXNzIDwvcD5cblx0XHQqPHA+IGNsYXNzOiBzdHJpbmdcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBOYW1lIG9mIHRoZSBjc3MgY2xhc3Mgc2VsZWN0b3IgPC9wPlxuXHRcdCo8cD4gdGhlbWVDb2xvcjogc3RyaW5nXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBwcmltYXJ5L2FjY2VudC93YXJuIDwvcD5cblx0ICAqPHByZT5cblx0XHQqe1xuXHQgICpcdC8vIENvbnRhaW5lciBzdXJyb3VuZGluZyB0aGUgSWNvblxuXHQgICpcdGNvbnRhaW5lcjp7XG5cdCAgKlx0XHRkeW5hbWljQ2xhc3MsXG5cdCAgKlx0XHRjbGFzc1xuXHQgICpcdH0sXG5cdCAgKlx0Ly8gbWQtaWNvbiBzdHlsaW5nXG5cdCAgKlx0aWNvbjp7XG5cdCAgKlx0XHRkeW5hbWljQ2xhc3MsXG5cdCAgKlx0XHRjbGFzcyxcblx0ICAqXHRcdHRoZW1lQ29sb3Jcblx0ICAqXHR9LFxuXHQgICpcdC8vIFRvZ2dsZSBJY29uIHN0eWxpbmcgd2l0aCBzYW1lIHN0cnVjdHVyZSBhcyBhYm92ZVxuXHQgICpcdHRvZ2dsZUljb246e1xuXHQgICpcdFx0Y29udGFpbmVyOiB7fSxcblx0ICAqXHRcdGljb246IHt9XG5cdCAgKlx0fVxuXHQgICp9XG5cdCAgKiA8L3ByZT5cblx0ICAqL1xuXHRASW5wdXQoKVxuXHRwdWJsaWMgc3R5bGluZzogSWNvblN0eWxpbmdNb2RlbDtcblx0XG5cdC8qKlxuXHQgKiA8cD48L3A+XG5cdCAqIDxwPk5hbWUgb2YgdGhlIGljb248L3A+XG5cdCAqIDxwPkRlZmF1bHQgaXMgPGI+aG9tZTwvYj48L3A+XG5cdCAqIDxwPkljb24gbGlicmFyaWVzIGF2YWlsYWJsZTogTWF0ZXJpYWwgSWNvbnMgYW5kIEZvbnQgQXdlc29tZSBJY29uczwvcD5cblx0ICovXG5cdEBJbnB1dCgpIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIDxwPkljb24gc2l6ZTwvcD5cblx0ICogPHA+Q2FuIGJlIGluIHBpeGVscywgZW0sIHBlcmNldGFnZXMgPC9wPlxuXHQgKiA8cD5EZWZhdWx0IGlzIDxiPicyNHB4JzwvYj48L3A+XG5cdCAqL1xuXHRASW5wdXQoKSBwdWJsaWMgc2l6ZTogbnVtYmVyO1xuXHRcblx0LyoqXG5cdCAqIDxiPk91dHB1dDwvYj5cbiAgICogPHA+RXZlbnQgZW1pdGVkIG9uIHRvZ2dsZTwvcD5cbiAgICovXG5cdEBPdXRwdXQoKVxuXHRjZk9uVG9nZ2xlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG5cdC8qKiBAaGlkZGVuXG5cdCAqIEl0IGlzIGZ1bmN0aW9uIGZvciBzZXQgY29ycmVjdCB0b2dnbGUgdmFsdWUvaWNvbiBhbmQgZW1taXQgZXZlbnQgd2l0aCBpY29uIHN0YXRlIHZhbHVlLlxuXHQgKi9cblx0Y2ZJY29uVG9nZ2xlZCgpIHsgXG5cblx0XHRpZih0aGlzLnByb3BlcnRpZXMudG9nZ2xlIT1udWxsKVxuXHRcdHtcblx0XHRcdHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG5cdFx0XHRpZih0aGlzLmN1cnJlbnRJY29uPT10aGlzLmNmSWNvbilcblx0XHRcdFx0dGhpcy5jdXJyZW50SWNvbiA9IHRoaXMuY2ZJY29uLnRvZ2dsZTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0dGhpcy5jdXJyZW50SWNvbiA9IHRoaXMuY2ZJY29uO1xuXHRcdFx0dGhpcy5jZk9uVG9nZ2xlLmVtaXQodGhpcy5jdXJyZW50SWNvbi52YWx1ZSk7IFxuXHRcdH1cblx0fVxuXHRcblx0LyoqIEBoaWRkZW5cblx0ICogSXQgaXMgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIE5vdGlmaWNhdGlvbiBjbGljayBldmVudHMgYnkgdXNpbmcgQ29yZSBDb21wb25lbnQgPGI+bm90aWZpY2F0aW9uQWN0aW9uPC9iPiBldmVudCBlbW1pdGVyLlxuICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHRpdCBpcyBqc29uIG5vdGlmaWNhdGlvbiBvYmplY3Rcblx0ICovXG5cdGNmTm90aWZpY2F0aW9uQWN0aW9uKG5vdGlmaWNhdGlvbikgeyBcblx0XHR0aGlzLm5vdGlmaWNhdGlvbkFjdGlvbi5lbWl0KG5vdGlmaWNhdGlvbik7IFxuXHR9XG5cdFxuXHQvKipAaGlkZGVuICovXG5cdGNvbnN0cnVjdG9yKC8qKkBoaWRkZW4gKi9wdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwvKipAaGlkZGVuICovIHB1YmxpYyB0ZW1wbGF0ZVNlcnZpY2U6VGVtcGxhdGVTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZix0ZW1wbGF0ZVNlcnZpY2UpO1xuXHR9XG5cblx0LyoqIEBoaWRkZW5cblx0ICogPHA+T24gSWNvbiBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24gbmV4dCB0aGluZ3MgYXJlIGhlcHBlbmluZzo8L3A+XG5cdCAqIDx1bD5cblx0ICogPGxpPkluaXRpdGxhaXppbmcgdGhlIHByb3BlcnRpZXMgYW5kIHN0eWxpbmcgb2JqZWN0cyBpZiBub3QgaW5pdGlhbGl6ZWQgYW5kIHBhc3MgdGhlIGV4dGVybmFsIGlucHV0cyB0byBvdmVyIHdyaXRlIGlmIGFueTwvbGk+XG5cdCAqIDxsaT5CaW5kaW5nIHRoZSBodG1sIHRlbXBsYXRlIG9iamVjdCB0byB0aGUgcGFzc2VkIHByb3BlcnRpZXMgb2JqZWN0PC9saT5cblx0ICogPC91bD5cblx0ICpcblx0ICovXG5cdG5nT25Jbml0KCkge1xuXHRcdC8vIHRyeXtcblx0XHQvLyBcdGNvbnNvbGUubG9nKHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWd1cmF0aW9uKCkudGVtcGxhdGVVUkwpO1xuXHRcdC8vIH1cblx0XHQvLyBjYXRjaChlKVxuXHRcdC8vIHt9XG5cdFx0aWYodGhpcy5ub3RpZmljYXRpb25BY3Rpb24ub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHRoaXMubm90aWZhY2F0aW9uQ2xpY2thYmxlID0gJ25vdGlmaWNhdGlvbi1jbGlja2FibGUnO1xuXG5cdFx0Ly8gdGhpcy5hY3RpdmVUZW1wbGF0ZSA9IEljb25UZW1wbGF0ZXNbXCJkZWZhdWx0VGVtcGxhdGVcIl07XG5cdFx0Ly8gaWYodGhpcy5jb21wVGVtcGxhdGUhPW51bGwgJiYgdGhpcy5jb21wVGVtcGxhdGUhPVwiXCIpXG5cdFx0Ly8ge1xuXHRcdC8vIFx0aWYoSWNvblRlbXBsYXRlc1t0aGlzLmNvbXBUZW1wbGF0ZV0hPW51bGwpXG5cdFx0Ly8gXHR7XG5cdFx0Ly8gXHRcdHRoaXMuYWN0aXZlVGVtcGxhdGUgPSBJY29uVGVtcGxhdGVzW3RoaXMuY29tcFRlbXBsYXRlXTtcblx0XHQvLyBcdH1cblx0XHQvLyBcdGVsc2Vcblx0XHQvLyBcdFx0dGhpcy5hY3RpdmVUZW1wbGF0ZSA9IHRoaXMuY29tcFRlbXBsYXRlO1xuXHRcdC8vIH1cblx0XHRcblx0XHR0aGlzLmdldE15VGVtcGxhdGUoXCJpY29uXCIsSWNvblRlbXBsYXRlcykudGhlbigoKSA9PiB7XG5cdFx0XHRcblx0XHRcdGlmKHRoaXMucHJvcGVydGllcz09bnVsbClcblx0XHRcdFx0dGhpcy5wcm9wZXJ0aWVzID0gbmV3IEljb25Nb2RlbCh0aGlzLmFjdGl2ZVRlbXBsYXRlW1wicHJvcGVydHlcIl0pO1xuXHRcdFx0ZWxzZVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgbWFpbktleXMgPSBPYmplY3Qua2V5cyh0aGlzLmFjdGl2ZVRlbXBsYXRlW1wicHJvcGVydHlcIl0pO1xuXHRcdFx0XHRpZih0aGlzLnByb3BlcnRpZXMudG9nZ2xlIT1udWxsICYmIHRoaXMuYWN0aXZlVGVtcGxhdGVbXCJwcm9wZXJ0eVwiXS50b2dnbGUhPW51bGwpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YXIgdG9nZ2xlS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuYWN0aXZlVGVtcGxhdGVbXCJwcm9wZXJ0eVwiXS50b2dnbGUpO1xuXHRcdFx0XHRcdGZvcihsZXQga2V5IG9mIHRvZ2dsZUtleXMpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aWYodGhpcy5wcm9wZXJ0aWVzW1widG9nZ2xlXCJdW2tleV09PW51bGwpXG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcGVydGllc1tcInRvZ2dsZVwiXVtrZXldPXRoaXMuYWN0aXZlVGVtcGxhdGVbXCJwcm9wZXJ0eVwiXVtcInRvZ2dsZVwiXVtrZXldO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBcblx0XHRcdFx0Zm9yKGxldCBrZXkgb2YgbWFpbktleXMpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZih0aGlzLnByb3BlcnRpZXNba2V5XT09bnVsbClcblx0XHRcdFx0XHRcdHRoaXMucHJvcGVydGllc1trZXldPXRoaXMuYWN0aXZlVGVtcGxhdGVbXCJwcm9wZXJ0eVwiXVtrZXldO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZih0aGlzLnN0eWxpbmc9PW51bGwpXG5cdFx0XHRcdHRoaXMuc3R5bGluZyA9IG5ldyBJY29uU3R5bGluZ01vZGVsKHRoaXMuYWN0aXZlVGVtcGxhdGVbXCJzdHlsZVwiXSk7XG5cdFx0XHRpZih0aGlzLmRpc3BsYXkhPW51bGwpIHRoaXMucHJvcGVydGllcy5kaXNwbGF5ID0gdGhpcy5kaXNwbGF5O1xuXHRcdFx0aWYodGhpcy5uYW1lIT1udWxsKSB0aGlzLnByb3BlcnRpZXMubmFtZSA9IHRoaXMubmFtZTtcblxuXHRcdFx0aWYodGhpcy5wcm9wZXJ0aWVzLm5hbWUuc3RhcnRzV2l0aChcImZhLVwiKSlcblx0XHRcdFx0dGhpcy5wcm9wZXJ0aWVzLnR5cGUgPSBcImZhXCI7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHRoaXMucHJvcGVydGllcy50eXBlID0gXCJtaVwiO1xuXHRcdFx0XHRcblx0XHRcdGlmKHRoaXMuc2l6ZSE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLnNpemUgPSB0aGlzLnNpemU7XG5cblx0XHRcdHRoaXMuY2ZJY29uID0gdGhpcy5wcm9wZXJ0aWVzO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50SWNvbiA9IHRoaXMuY2ZJY29uO1xuICAgICAgICAgICAgY29uc29sZS5kaXIodGhpcy5jdXJyZW50SWNvbik7XG5cdFx0XHR9KTtcblx0fVxuXG5cdC8qKiBAaGlkZGVuXG5cdCAqIDxwPiBVcGRhdGluZyB0aGUgcHJvcGVydGllcyBvYmplY3QgaWYgYW55IG9mIHRoZSBleHRlcm5hbCBpbnB1dHMgaGFzIGJlZW4gY2hhbmdlZCB0byBrZWVwIHRoZSBjb21wb25lbnQgZHluYW1pYy48L3A+XG5cdCAqIEBwYXJhbSBjaGFuZ2VzIDxwPiBDaGFuZ2VzIHRoYXQgb2NjdXJlZCBmcm9tIHRoZSB1c2VyLjwvcD5cblx0ICovXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSl7XG5cdFx0aWYodGhpcy5wcm9wZXJ0aWVzIT1udWxsKVxuXHRcdHtcblx0XHRcdGlmKGNoYW5nZXMuZGlzcGxheSE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLmRpc3BsYXkgPSBjaGFuZ2VzLmRpc3BsYXkuY3VycmVudFZhbHVlO1xuXHRcdFx0aWYoY2hhbmdlcy5uYW1lIT1udWxsKVxuXHRcdFx0eyBcblx0XHRcdFx0dGhpcy5wcm9wZXJ0aWVzLm5hbWUgPSBjaGFuZ2VzLm5hbWUuY3VycmVudFZhbHVlO1xuXHRcdFx0XHRpZihjaGFuZ2VzLm5hbWUuY3VycmVudFZhbHVlLnN0YXJ0c1dpdGgoXCJmYS1cIikpXG5cdFx0XHRcdFx0dGhpcy5wcm9wZXJ0aWVzLnR5cGUgPSBcImZhXCI7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHR0aGlzLnByb3BlcnRpZXMudHlwZSA9IFwibWlcIjtcblx0XHRcdH1cblx0XHRcdGlmKGNoYW5nZXMuc2l6ZSE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLnNpemUgPSBjaGFuZ2VzLnNpemUuY3VycmVudFZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdC8qKkBoaWRkZW4gKi9cblx0Z2V0SWNvbkNsYXNzKCl7XG5cdFx0aWYodGhpcy5zdHlsaW5nIT1udWxsICYmIHRoaXMuc3R5bGluZy5pY29uIT1udWxsJiYgdGhpcy5jZkljb24hPW51bGwpXG5cdFx0e1xuXHRcdFx0dmFyIGNsYXNzZXMgPSBcIlwiO1xuXHRcdFx0aWYodGhpcy5jaGVja2VkPT10cnVlKVxuXHRcdFx0e1xuXHRcdFx0XHR0cnlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhciBtYWluS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc3R5bGluZy5pY29uLmR5bmFtaWNDbGFzcyk7XG5cdFx0XHRcdFx0Zm9yKGxldCBrZXkgb2YgbWFpbktleXMpe1xuXHRcdFx0XHRcdGlmKGV2YWwodGhpcy5zdHlsaW5nLmljb24uZHluYW1pY0NsYXNzW2tleV0pPT10cnVlKVxuXHRcdFx0XHRcdFx0Y2xhc3NlcyA9IGNsYXNzZXMrXCIgXCIra2V5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gY2xhc3Nlcztcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXRjaChlKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Ly9EbyBub3RoaW5nXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdHtcblx0XHRcdFx0dHJ5XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YXIgbWFpbktleXMgPSBPYmplY3Qua2V5cyh0aGlzLnN0eWxpbmcudG9nZ2xlSWNvbi5pY29uLmR5bmFtaWNDbGFzcyk7XG5cdFx0XHRcdFx0Zm9yKGxldCBrZXkgb2YgbWFpbktleXMpe1xuXHRcdFx0XHRcdGlmKGV2YWwodGhpcy5zdHlsaW5nLnRvZ2dsZUljb24uaWNvbi5keW5hbWljQ2xhc3Nba2V5XSk9PXRydWUpXG5cdFx0XHRcdFx0XHRjbGFzc2VzID0gY2xhc3NlcytcIiBcIitrZXk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBjbGFzc2VzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNhdGNoKGUpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQvL0RvIG5vdGhpbmdcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cbiAgfVxuXHRcblx0LyoqQGhpZGRlbiAqL1xuICBnZXRDb250YWluZXJDbGFzcygpe1xuICAgIGlmKHRoaXMuc3R5bGluZyE9bnVsbCAmJiB0aGlzLnN0eWxpbmcuY29udGFpbmVyIT1udWxsJiYgdGhpcy5jZkljb24hPW51bGwpXG4gICAge1xuXHRcdHZhciBjbGFzc2VzID0gXCJcIjtcblx0XHRpZih0aGlzLmNoZWNrZWQ9PXRydWUpXG5cdFx0e1xuXHRcdFx0dHJ5XG5cdFx0XHR7XG5cdFx0XHRcdHZhciBtYWluS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc3R5bGluZy5jb250YWluZXIuZHluYW1pY0NsYXNzKTtcblx0XHRcdFx0Zm9yKGxldCBrZXkgb2YgbWFpbktleXMpe1xuXHRcdFx0XHRpZihldmFsKHRoaXMuc3R5bGluZy5jb250YWluZXIuZHluYW1pY0NsYXNzW2tleV0pPT10cnVlKVxuXHRcdFx0XHRcdGNsYXNzZXMgPSBjbGFzc2VzK1wiIFwiK2tleTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gY2xhc3Nlcztcblx0XHRcdH1cblx0XHRcdGNhdGNoKGUpXG5cdFx0XHR7XG5cdFx0XHRcdC8vRG8gbm90aGluZ1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0dHJ5XG5cdFx0XHR7XG5cdFx0XHRcdHZhciBtYWluS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc3R5bGluZy50b2dnbGVJY29uLmNvbnRhaW5lci5jbGFzcyk7XG5cdFx0XHRcdGZvcihsZXQga2V5IG9mIG1haW5LZXlzKXtcblx0XHRcdFx0aWYoZXZhbCh0aGlzLnN0eWxpbmcudG9nZ2xlSWNvbi5jb250YWluZXIuY2xhc3Nba2V5XSk9PXRydWUpXG5cdFx0XHRcdFx0Y2xhc3NlcyA9IGNsYXNzZXMrXCIgXCIra2V5O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBjbGFzc2VzO1xuXHRcdFx0fVxuXHRcdFx0Y2F0Y2goZSlcblx0XHRcdHtcblx0XHRcdFx0Ly9EbyBub3RoaW5nXG5cdFx0XHR9XG5cdFx0fVxuXG4gICAgfVxuICB9XG59Il19