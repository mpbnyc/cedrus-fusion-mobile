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
        _this.cfOnTap = new core_1.EventEmitter();
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
        else {
            this.cfOnTap.emit();
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
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CfIconComponent.prototype, "cfOnTap", void 0);
CfIconComponent = __decorate([
    core_1.Component({
        selector: 'cf-icon',
        templateUrl: './lib/components/icon/icon.component.html',
        styleUrls: ['./lib/components/icon/icon.component.css']
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, template_service_1.TemplateService])
], CfIconComponent);
exports.CfIconComponent = CfIconComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RztBQUN4Ryx5REFBeUQ7QUFDekQsMkRBQXlEO0FBQ3pELDJFQUF3RTtBQUN4RSwrREFBOEQ7QUFFOUQscUZBQW1GO0FBRW5GOzs7Ozs7Ozs7R0FTRztBQU9ILElBQWEsZUFBZTtJQUFTLG1DQUFlO0lBK0huRCxhQUFhO0lBQ2IseUJBQVksYUFBYSxDQUFPLFVBQXNCLEVBQUMsYUFBYSxDQUFRLGVBQStCO1FBQTNHLFlBQ0Msa0JBQU0sVUFBVSxFQUFDLGVBQWUsQ0FBQyxTQUNqQztRQUYrQixnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFzQixxQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUE5SDNHLGFBQWE7UUFDUywyQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFPakQ7O1dBRUc7UUFDSCxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGFBQWE7UUFDYixpQkFBVyxHQUFRLEVBQUUsQ0FBQztRQTJFdEI7OztTQUdJO1FBRUosZ0JBQVUsR0FBc0IsSUFBSSxtQkFBWSxFQUFPLENBQUM7UUFHeEQsYUFBTyxHQUFzQixJQUFJLG1CQUFZLEVBQU8sQ0FBQzs7SUErQnJELENBQUM7SUE3QkQ7O09BRUc7SUFDSCx1Q0FBYSxHQUFiO1FBRUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUUsSUFBSSxDQUFDLENBQ2hDLENBQUM7WUFDQSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM3QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDdkMsSUFBSTtnQkFDSCxJQUFJLENB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QUFDLElBQUUsSUFBSSxDQUFDOzRCQUMzRCxPQUFPLEdBQUcsT0FBTyxHQUFDLEdBQUcsR0FBQyxHQUFHLENBQUM7cUJBQzFCO29CQUNELE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ2hCLENBQUM7Z0JBQ0QsS0FBSyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQ1IsQ0FBQztvQkFDQSxZQUFZO2dCQUNiLENBQUM7WUFDRixDQUFDO1FBRUMsQ0FBQztJQUNILENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUEzU0QsQ0FBcUMsZ0NBQWUsR0EyU25EO0FBeFNzQjtJQUFyQixrQkFBVyxDQUFDLE9BQU8sQ0FBQzs7OERBQTRCO0FBMkNqRDtJQURDLFlBQUssRUFBRTs4QkFDVyxzQkFBUzttREFBQztBQTRCN0I7SUFEQyxZQUFLLEVBQUU7OEJBQ1EscUNBQWdCO2dEQUFDO0FBUXhCO0lBQVIsWUFBSyxFQUFFOzs2Q0FBcUI7QUFPcEI7SUFBUixZQUFLLEVBQUU7OzZDQUFxQjtBQU83QjtJQURDLGFBQU0sRUFBRTs4QkFDRyxtQkFBWTttREFBZ0M7QUFHeEQ7SUFEQyxhQUFNLEVBQUU7OEJBQ0EsbUJBQVk7Z0RBQWdDO0FBbkd6QyxlQUFlO0lBTjNCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsMkNBQTJDO1FBQ3hELFNBQVMsRUFBRSxDQUFDLDBDQUEwQyxDQUFDO0tBQ3hELENBQUM7cUNBa0kyQyxpQkFBVSxFQUFzQyxrQ0FBZTtHQWhJL0YsZUFBZSxDQTJTM0I7QUEzU1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2ZDb3JlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9jb3JlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJY29uTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvaWNvbi9pY29uLm1vZGVsJztcbmltcG9ydCB7IEljb25TdHlsaW5nTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvaWNvbi9pY29uLXN0eWxpbmcubW9kZWwnO1xuaW1wb3J0IHsgSWNvblRlbXBsYXRlcyB9IGZyb20gJy4uLy4uL3RlbXBsYXRlcy9pY29uLnRlbXBsYXRlJztcblxuaW1wb3J0IHsgVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGVtcGxhdGUtc2VydmljZS90ZW1wbGF0ZS5zZXJ2aWNlJztcblxuLyoqXG4gKiA8cD5DRiBJY29uIENvbXBvbmVudDwvcD4gXG4gKiA8cHJlPlxuICogPGNvZGU+XG4gKiBpbXBvcnQgeyBJY29uTW9kZWwgfSBmcm9tICdjZWRydXMtZnVzaW9uJ1xuICogaW1wb3J0IHsgSWNvblN0eWxpbmdNb2RlbCB9IGZyb20gJ2NlZHJ1cy1mdXNpb24nXG4gKiA8Y29kZT48PC9jb2RlPmNmLWljb248Y29kZT4+PC9jb2RlPjxjb2RlPjw8L2NvZGU+PGNvZGU+LzwvY29kZT5jZi1pY29uPGNvZGU+PjwvY29kZT5cbiAqIDwvY29kZT5cbiAqIDwvcHJlPlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZi1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpYi9jb21wb25lbnRzL2ljb24vaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpYi9jb21wb25lbnRzL2ljb24vaWNvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBDZkljb25Db21wb25lbnQgZXh0ZW5kcyBDZkNvcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRcblx0LyoqQGhpZGRlbiAqL1xuXHRASG9zdEJpbmRpbmcoJ2NsYXNzJykgbm90aWZhY2F0aW9uQ2xpY2thYmxlID0gJyc7XG5cdFxuXHQvKiogQGhpZGRlblxuXHQgKiBJdCBpcyBJY29uIG9iamVjdCB3aGljaCB3aWxsIHJlY2l2ZSB2YWx1ZXMgcHJvdmlkZWQgYnkgSWNvbiBDbGFzcyBhbmQgYWZ0ZXIgdGhhdCA8Yj5tZC1pY29uPC9iPiB3aWxsIGJlIGJ1aWxkZWQgb24gcGFnZS5cblx0ICovXG5cdGNmSWNvbjogSWNvbk1vZGVsO1xuXHRcblx0LyoqIEBoaWRkZW4gXG5cdCAqIDxwPldoZXRoZXIgdGhlIGljb24gaXMgaW4gdG9nZ2xlIG1vZGUgb3Igbm9ybWFsIG1vZGUuPC9wPlxuXHQgKi9cblx0Y2hlY2tlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0LyoqQGhpZGRlbiAqL1xuXHRjdXJyZW50SWNvbjogYW55ID0ge307XG5cbiAgLyoqXG5cdCAqIDxwcmU+e1xuXHQgKiAgZGlzcGxheTogYm9vbGVhbixcdC8vIFRydWUgb3IgRmFsc2UgPGI+RGVmYXVsdDogVHJ1ZTwvYj5cblx0ICogIGRpc2FibGU6IGJvb2xlYW4sXHQvLyBUcnVlIG9yIEZhbHNlIDxiPkRlZmF1bHQ6IEZhbHNlPC9iPlxuXHQgKiAgbmFtZTogc3RyaW5nLFx0XHRcdC8vIERlZmF1bHQ6ICdIb21lJ1xuXHQgKiAgc2l6ZTogc3RyaW5nLFx0XHRcdC8vICdweCcsICdlbScsICclJyA8Yj5EZWZhdWx0OiAnMjRweCc8L2I+XG5cdCAqICB2YWx1ZTogYW55LFx0XHRcdFx0Ly8gVmFsdWUgZW1pdHRlZCBvbiBjbGlja1xuXHQgKiAgdG9nZ2xlOntcdFx0XHRcdFx0Ly8gVG9nZ2xpbmcgaWNvbiBzdGF0ZVxuXHQgKiAgIG5hbWU6IHN0cmluZyxcdFx0Ly8gTmFtZSBvZiBpY29uIHRvZ2dsZWRcblx0ICogICBzaXplOiBzdHJpbmcsXHRcdC8vIFNpemUgb2YgaWNvbiB0b2dnbGVkXG5cdCAqICAgdmFsdWU6IGFueVx0XHRcdC8vIFZhbHVlIG9mIGljb24gdG9nZ2xlZFxuXHQgKiAgfVxuXHQgKn1cblx0ICogPC9wcmU+XG5cdCAqIDxwPkV4YW1wbGU8L3A+XG5cdCAqIDxwcmU+e1xuXHQgKlx0bmFtZTogJ2ZhLWhlYXJ0LW8nLFxuXHQgKlx0c2l6ZTogJzE4cHgnLFxuXHQgKlx0dmFsdWU6ICdlbXB0eSBoZWFydCcsXG5cdCAqXHR0b2dnbGU6IHtcblx0ICpcdFx0bmFtZTogJ2ZhLWhlYXJ0Jyxcblx0ICpcdFx0c2l6ZTogJzE4cHgnLFxuXHQgKlx0XHR2YWx1ZTogJ2Z1bGwgaGVhcnQnXG5cdCAqXHR9XHRcblx0ICp9XG5cdCAqIDwvcHJlPlxuICAgKi9cblx0QElucHV0KClcblx0cHVibGljIHByb3BlcnRpZXM6IEljb25Nb2RlbDtcblxuXHQvKipcblx0ICAqPHA+IGR5bmFtaWNDbGFzczogZnVuY3Rpb24oKSAtPiBzdHJpbmcsXHQvLyBGdW5jdGlvbiB0aGF0IHJldHVybnMgbmFtZSBvZiB0aGUgY2xhc3MgPC9wPlxuXHRcdCo8cD4gY2xhc3M6IHN0cmluZ1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIE5hbWUgb2YgdGhlIGNzcyBjbGFzcyBzZWxlY3RvciA8L3A+XG5cdFx0KjxwPiB0aGVtZUNvbG9yOiBzdHJpbmdcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHByaW1hcnkvYWNjZW50L3dhcm4gPC9wPlxuXHQgICo8cHJlPlxuXHRcdCp7XG5cdCAgKlx0Ly8gQ29udGFpbmVyIHN1cnJvdW5kaW5nIHRoZSBJY29uXG5cdCAgKlx0Y29udGFpbmVyOntcblx0ICAqXHRcdGR5bmFtaWNDbGFzcyxcblx0ICAqXHRcdGNsYXNzXG5cdCAgKlx0fSxcblx0ICAqXHQvLyBtZC1pY29uIHN0eWxpbmdcblx0ICAqXHRpY29uOntcblx0ICAqXHRcdGR5bmFtaWNDbGFzcyxcblx0ICAqXHRcdGNsYXNzLFxuXHQgICpcdFx0dGhlbWVDb2xvclxuXHQgICpcdH0sXG5cdCAgKlx0Ly8gVG9nZ2xlIEljb24gc3R5bGluZyB3aXRoIHNhbWUgc3RydWN0dXJlIGFzIGFib3ZlXG5cdCAgKlx0dG9nZ2xlSWNvbjp7XG5cdCAgKlx0XHRjb250YWluZXI6IHt9LFxuXHQgICpcdFx0aWNvbjoge31cblx0ICAqXHR9XG5cdCAgKn1cblx0ICAqIDwvcHJlPlxuXHQgICovXG5cdEBJbnB1dCgpXG5cdHB1YmxpYyBzdHlsaW5nOiBJY29uU3R5bGluZ01vZGVsO1xuXHRcblx0LyoqXG5cdCAqIDxwPjwvcD5cblx0ICogPHA+TmFtZSBvZiB0aGUgaWNvbjwvcD5cblx0ICogPHA+RGVmYXVsdCBpcyA8Yj5ob21lPC9iPjwvcD5cblx0ICogPHA+SWNvbiBsaWJyYXJpZXMgYXZhaWxhYmxlOiBNYXRlcmlhbCBJY29ucyBhbmQgRm9udCBBd2Vzb21lIEljb25zPC9wPlxuXHQgKi9cblx0QElucHV0KCkgcHVibGljIG5hbWU6IHN0cmluZztcblxuXHQvKipcblx0ICogPHA+SWNvbiBzaXplPC9wPlxuXHQgKiA8cD5DYW4gYmUgaW4gcGl4ZWxzLCBlbSwgcGVyY2V0YWdlcyA8L3A+XG5cdCAqIDxwPkRlZmF1bHQgaXMgPGI+JzI0cHgnPC9iPjwvcD5cblx0ICovXG5cdEBJbnB1dCgpIHB1YmxpYyBzaXplOiBudW1iZXI7XG5cdFxuXHQvKipcblx0ICogPGI+T3V0cHV0PC9iPlxuICAgKiA8cD5FdmVudCBlbWl0ZWQgb24gdG9nZ2xlPC9wPlxuICAgKi9cblx0QE91dHB1dCgpXG5cdGNmT25Ub2dnbGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cblx0QE91dHB1dCgpXG5cdGNmT25UYXA6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cblx0LyoqIEBoaWRkZW5cblx0ICogSXQgaXMgZnVuY3Rpb24gZm9yIHNldCBjb3JyZWN0IHRvZ2dsZSB2YWx1ZS9pY29uIGFuZCBlbW1pdCBldmVudCB3aXRoIGljb24gc3RhdGUgdmFsdWUuXG5cdCAqL1xuXHRjZkljb25Ub2dnbGVkKCkgeyBcblxuXHRcdGlmKHRoaXMucHJvcGVydGllcy50b2dnbGUhPW51bGwpXG5cdFx0e1xuXHRcdFx0dGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcblx0XHRcdGlmKHRoaXMuY3VycmVudEljb249PXRoaXMuY2ZJY29uKVxuXHRcdFx0XHR0aGlzLmN1cnJlbnRJY29uID0gdGhpcy5jZkljb24udG9nZ2xlO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHR0aGlzLmN1cnJlbnRJY29uID0gdGhpcy5jZkljb247XG5cdFx0XHR0aGlzLmNmT25Ub2dnbGUuZW1pdCh0aGlzLmN1cnJlbnRJY29uLnZhbHVlKTsgXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY2ZPblRhcC5lbWl0KCk7XG5cdFx0fVxuXHR9XG5cdFxuXHQvKiogQGhpZGRlblxuXHQgKiBJdCBpcyBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgTm90aWZpY2F0aW9uIGNsaWNrIGV2ZW50cyBieSB1c2luZyBDb3JlIENvbXBvbmVudCA8Yj5ub3RpZmljYXRpb25BY3Rpb248L2I+IGV2ZW50IGVtbWl0ZXIuXG4gICAqIEBwYXJhbSBub3RpZmljYXRpb25cdGl0IGlzIGpzb24gbm90aWZpY2F0aW9uIG9iamVjdFxuXHQgKi9cblx0Y2ZOb3RpZmljYXRpb25BY3Rpb24obm90aWZpY2F0aW9uKSB7IFxuXHRcdHRoaXMubm90aWZpY2F0aW9uQWN0aW9uLmVtaXQobm90aWZpY2F0aW9uKTsgXG5cdH1cblx0XG5cdC8qKkBoaWRkZW4gKi9cblx0Y29uc3RydWN0b3IoLyoqQGhpZGRlbiAqL3B1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLC8qKkBoaWRkZW4gKi8gcHVibGljIHRlbXBsYXRlU2VydmljZTpUZW1wbGF0ZVNlcnZpY2UpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmLHRlbXBsYXRlU2VydmljZSk7XG5cdH1cblxuXHQvKiogQGhpZGRlblxuXHQgKiA8cD5PbiBJY29uIGNvbXBvbmVudCBpbml0aWFsaXphdGlvbiBuZXh0IHRoaW5ncyBhcmUgaGVwcGVuaW5nOjwvcD5cblx0ICogPHVsPlxuXHQgKiA8bGk+SW5pdGl0bGFpemluZyB0aGUgcHJvcGVydGllcyBhbmQgc3R5bGluZyBvYmplY3RzIGlmIG5vdCBpbml0aWFsaXplZCBhbmQgcGFzcyB0aGUgZXh0ZXJuYWwgaW5wdXRzIHRvIG92ZXIgd3JpdGUgaWYgYW55PC9saT5cblx0ICogPGxpPkJpbmRpbmcgdGhlIGh0bWwgdGVtcGxhdGUgb2JqZWN0IHRvIHRoZSBwYXNzZWQgcHJvcGVydGllcyBvYmplY3Q8L2xpPlxuXHQgKiA8L3VsPlxuXHQgKlxuXHQgKi9cblx0bmdPbkluaXQoKSB7XG5cdFx0Ly8gdHJ5e1xuXHRcdC8vIFx0Y29uc29sZS5sb2codGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZ3VyYXRpb24oKS50ZW1wbGF0ZVVSTCk7XG5cdFx0Ly8gfVxuXHRcdC8vIGNhdGNoKGUpXG5cdFx0Ly8ge31cblx0XHRpZih0aGlzLm5vdGlmaWNhdGlvbkFjdGlvbi5vYnNlcnZlcnMubGVuZ3RoID4gMCkgdGhpcy5ub3RpZmFjYXRpb25DbGlja2FibGUgPSAnbm90aWZpY2F0aW9uLWNsaWNrYWJsZSc7XG5cblx0XHQvLyB0aGlzLmFjdGl2ZVRlbXBsYXRlID0gSWNvblRlbXBsYXRlc1tcImRlZmF1bHRUZW1wbGF0ZVwiXTtcblx0XHQvLyBpZih0aGlzLmNvbXBUZW1wbGF0ZSE9bnVsbCAmJiB0aGlzLmNvbXBUZW1wbGF0ZSE9XCJcIilcblx0XHQvLyB7XG5cdFx0Ly8gXHRpZihJY29uVGVtcGxhdGVzW3RoaXMuY29tcFRlbXBsYXRlXSE9bnVsbClcblx0XHQvLyBcdHtcblx0XHQvLyBcdFx0dGhpcy5hY3RpdmVUZW1wbGF0ZSA9IEljb25UZW1wbGF0ZXNbdGhpcy5jb21wVGVtcGxhdGVdO1xuXHRcdC8vIFx0fVxuXHRcdC8vIFx0ZWxzZVxuXHRcdC8vIFx0XHR0aGlzLmFjdGl2ZVRlbXBsYXRlID0gdGhpcy5jb21wVGVtcGxhdGU7XG5cdFx0Ly8gfVxuXHRcdFxuXHRcdHRoaXMuZ2V0TXlUZW1wbGF0ZShcImljb25cIixJY29uVGVtcGxhdGVzKS50aGVuKCgpID0+IHtcblx0XHRcdFxuXHRcdFx0aWYodGhpcy5wcm9wZXJ0aWVzPT1udWxsKVxuXHRcdFx0XHR0aGlzLnByb3BlcnRpZXMgPSBuZXcgSWNvbk1vZGVsKHRoaXMuYWN0aXZlVGVtcGxhdGVbXCJwcm9wZXJ0eVwiXSk7XG5cdFx0XHRlbHNlXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBtYWluS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuYWN0aXZlVGVtcGxhdGVbXCJwcm9wZXJ0eVwiXSk7XG5cdFx0XHRcdGlmKHRoaXMucHJvcGVydGllcy50b2dnbGUhPW51bGwgJiYgdGhpcy5hY3RpdmVUZW1wbGF0ZVtcInByb3BlcnR5XCJdLnRvZ2dsZSE9bnVsbClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhciB0b2dnbGVLZXlzID0gT2JqZWN0LmtleXModGhpcy5hY3RpdmVUZW1wbGF0ZVtcInByb3BlcnR5XCJdLnRvZ2dsZSk7XG5cdFx0XHRcdFx0Zm9yKGxldCBrZXkgb2YgdG9nZ2xlS2V5cylcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRpZih0aGlzLnByb3BlcnRpZXNbXCJ0b2dnbGVcIl1ba2V5XT09bnVsbClcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wZXJ0aWVzW1widG9nZ2xlXCJdW2tleV09dGhpcy5hY3RpdmVUZW1wbGF0ZVtcInByb3BlcnR5XCJdW1widG9nZ2xlXCJdW2tleV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IFxuXHRcdFx0XHRmb3IobGV0IGtleSBvZiBtYWluS2V5cylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlmKHRoaXMucHJvcGVydGllc1trZXldPT1udWxsKVxuXHRcdFx0XHRcdFx0dGhpcy5wcm9wZXJ0aWVzW2tleV09dGhpcy5hY3RpdmVUZW1wbGF0ZVtcInByb3BlcnR5XCJdW2tleV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmKHRoaXMuc3R5bGluZz09bnVsbClcblx0XHRcdFx0dGhpcy5zdHlsaW5nID0gbmV3IEljb25TdHlsaW5nTW9kZWwodGhpcy5hY3RpdmVUZW1wbGF0ZVtcInN0eWxlXCJdKTtcblx0XHRcdGlmKHRoaXMuZGlzcGxheSE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLmRpc3BsYXkgPSB0aGlzLmRpc3BsYXk7XG5cdFx0XHRpZih0aGlzLm5hbWUhPW51bGwpIHRoaXMucHJvcGVydGllcy5uYW1lID0gdGhpcy5uYW1lO1xuXG5cdFx0XHRpZih0aGlzLnByb3BlcnRpZXMubmFtZS5zdGFydHNXaXRoKFwiZmEtXCIpKVxuXHRcdFx0XHR0aGlzLnByb3BlcnRpZXMudHlwZSA9IFwiZmFcIjtcblx0XHRcdGVsc2Vcblx0XHRcdFx0dGhpcy5wcm9wZXJ0aWVzLnR5cGUgPSBcIm1pXCI7XG5cdFx0XHRcdFxuXHRcdFx0aWYodGhpcy5zaXplIT1udWxsKSB0aGlzLnByb3BlcnRpZXMuc2l6ZSA9IHRoaXMuc2l6ZTtcblxuXHRcdFx0dGhpcy5jZkljb24gPSB0aGlzLnByb3BlcnRpZXM7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJY29uID0gdGhpcy5jZkljb247XG4gICAgICAgICAgICBjb25zb2xlLmRpcih0aGlzLmN1cnJlbnRJY29uKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0LyoqIEBoaWRkZW5cblx0ICogPHA+IFVwZGF0aW5nIHRoZSBwcm9wZXJ0aWVzIG9iamVjdCBpZiBhbnkgb2YgdGhlIGV4dGVybmFsIGlucHV0cyBoYXMgYmVlbiBjaGFuZ2VkIHRvIGtlZXAgdGhlIGNvbXBvbmVudCBkeW5hbWljLjwvcD5cblx0ICogQHBhcmFtIGNoYW5nZXMgPHA+IENoYW5nZXMgdGhhdCBvY2N1cmVkIGZyb20gdGhlIHVzZXIuPC9wPlxuXHQgKi9cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogYW55KXtcblx0XHRpZih0aGlzLnByb3BlcnRpZXMhPW51bGwpXG5cdFx0e1xuXHRcdFx0aWYoY2hhbmdlcy5kaXNwbGF5IT1udWxsKSB0aGlzLnByb3BlcnRpZXMuZGlzcGxheSA9IGNoYW5nZXMuZGlzcGxheS5jdXJyZW50VmFsdWU7XG5cdFx0XHRpZihjaGFuZ2VzLm5hbWUhPW51bGwpXG5cdFx0XHR7IFxuXHRcdFx0XHR0aGlzLnByb3BlcnRpZXMubmFtZSA9IGNoYW5nZXMubmFtZS5jdXJyZW50VmFsdWU7XG5cdFx0XHRcdGlmKGNoYW5nZXMubmFtZS5jdXJyZW50VmFsdWUuc3RhcnRzV2l0aChcImZhLVwiKSlcblx0XHRcdFx0XHR0aGlzLnByb3BlcnRpZXMudHlwZSA9IFwiZmFcIjtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHRoaXMucHJvcGVydGllcy50eXBlID0gXCJtaVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYoY2hhbmdlcy5zaXplIT1udWxsKSB0aGlzLnByb3BlcnRpZXMuc2l6ZSA9IGNoYW5nZXMuc2l6ZS5jdXJyZW50VmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0LyoqQGhpZGRlbiAqL1xuXHRnZXRJY29uQ2xhc3MoKXtcblx0XHRpZih0aGlzLnN0eWxpbmchPW51bGwgJiYgdGhpcy5zdHlsaW5nLmljb24hPW51bGwmJiB0aGlzLmNmSWNvbiE9bnVsbClcblx0XHR7XG5cdFx0XHR2YXIgY2xhc3NlcyA9IFwiXCI7XG5cdFx0XHRpZih0aGlzLmNoZWNrZWQ9PXRydWUpXG5cdFx0XHR7XG5cdFx0XHRcdHRyeVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFyIG1haW5LZXlzID0gT2JqZWN0LmtleXModGhpcy5zdHlsaW5nLmljb24uZHluYW1pY0NsYXNzKTtcblx0XHRcdFx0XHRmb3IobGV0IGtleSBvZiBtYWluS2V5cyl7XG5cdFx0XHRcdFx0aWYoZXZhbCh0aGlzLnN0eWxpbmcuaWNvbi5keW5hbWljQ2xhc3Nba2V5XSk9PXRydWUpXG5cdFx0XHRcdFx0XHRjbGFzc2VzID0gY2xhc3NlcytcIiBcIitrZXk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBjbGFzc2VzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNhdGNoKGUpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQvL0RvIG5vdGhpbmdcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0e1xuXHRcdFx0XHR0cnlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhciBtYWluS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc3R5bGluZy50b2dnbGVJY29uLmljb24uZHluYW1pY0NsYXNzKTtcblx0XHRcdFx0XHRmb3IobGV0IGtleSBvZiBtYWluS2V5cyl7XG5cdFx0XHRcdFx0aWYoZXZhbCh0aGlzLnN0eWxpbmcudG9nZ2xlSWNvbi5pY29uLmR5bmFtaWNDbGFzc1trZXldKT09dHJ1ZSlcblx0XHRcdFx0XHRcdGNsYXNzZXMgPSBjbGFzc2VzK1wiIFwiK2tleTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIGNsYXNzZXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2F0Y2goZSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdC8vRG8gbm90aGluZ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuICB9XG5cdFxuXHQvKipAaGlkZGVuICovXG4gIGdldENvbnRhaW5lckNsYXNzKCl7XG4gICAgaWYodGhpcy5zdHlsaW5nIT1udWxsICYmIHRoaXMuc3R5bGluZy5jb250YWluZXIhPW51bGwmJiB0aGlzLmNmSWNvbiE9bnVsbClcbiAgICB7XG5cdFx0dmFyIGNsYXNzZXMgPSBcIlwiO1xuXHRcdGlmKHRoaXMuY2hlY2tlZD09dHJ1ZSlcblx0XHR7XG5cdFx0XHR0cnlcblx0XHRcdHtcblx0XHRcdFx0dmFyIG1haW5LZXlzID0gT2JqZWN0LmtleXModGhpcy5zdHlsaW5nLmNvbnRhaW5lci5keW5hbWljQ2xhc3MpO1xuXHRcdFx0XHRmb3IobGV0IGtleSBvZiBtYWluS2V5cyl7XG5cdFx0XHRcdGlmKGV2YWwodGhpcy5zdHlsaW5nLmNvbnRhaW5lci5keW5hbWljQ2xhc3Nba2V5XSk9PXRydWUpXG5cdFx0XHRcdFx0Y2xhc3NlcyA9IGNsYXNzZXMrXCIgXCIra2V5O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBjbGFzc2VzO1xuXHRcdFx0fVxuXHRcdFx0Y2F0Y2goZSlcblx0XHRcdHtcblx0XHRcdFx0Ly9EbyBub3RoaW5nXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHR0cnlcblx0XHRcdHtcblx0XHRcdFx0dmFyIG1haW5LZXlzID0gT2JqZWN0LmtleXModGhpcy5zdHlsaW5nLnRvZ2dsZUljb24uY29udGFpbmVyLmNsYXNzKTtcblx0XHRcdFx0Zm9yKGxldCBrZXkgb2YgbWFpbktleXMpe1xuXHRcdFx0XHRpZihldmFsKHRoaXMuc3R5bGluZy50b2dnbGVJY29uLmNvbnRhaW5lci5jbGFzc1trZXldKT09dHJ1ZSlcblx0XHRcdFx0XHRjbGFzc2VzID0gY2xhc3NlcytcIiBcIitrZXk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGNsYXNzZXM7XG5cdFx0XHR9XG5cdFx0XHRjYXRjaChlKVxuXHRcdFx0e1xuXHRcdFx0XHQvL0RvIG5vdGhpbmdcblx0XHRcdH1cblx0XHR9XG5cbiAgICB9XG4gIH1cbn0iXX0=