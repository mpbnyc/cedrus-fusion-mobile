"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_component_1 = require("../core/core.component");
var image_model_1 = require("../../models/image/image.model");
var image_styling_model_1 = require("../../models/image/image-styling.model");
var image_template_1 = require("../../templates/image.template");
var template_service_1 = require("../../services/template-service/template.service");
/**
 * <p>CF Image Component</p>
 * <pre>
 * <code>
 * import { ImageModel } from 'cedrus-fusion'
 * import { ImageStylingModel } from 'cedrus-fusion'
 * <code><</code>cf-image<code>></code><code><</code><code>/</code>cf-image<code>></code>
 * </code>
 * </pre>
 */
var CfImageComponent = (function (_super) {
    __extends(CfImageComponent, _super);
    /**@hidden */
    function CfImageComponent(/**@hidden */ elementRef, /**@hidden */ templateService) {
        var _this = _super.call(this, elementRef, templateService) || this;
        _this.elementRef = elementRef;
        /**@hidden */
        _this.notifacationClickable = '';
        return _this;
    }
    /** @hidden
     * It is function for creating Notification click events by using Core Component <b>notificationAction</b> event emmiter.
     * @param notification	it is json notification object
     */
    CfImageComponent.prototype.cfNotificationAction = function (notification) {
        this.notificationAction.emit(notification);
    };
    /** @hidden
     * <p> Initialize the proerties and styling object with the appropriate values.</p>
     */
    CfImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.notificationAction.observers.length > 0)
            this.notifacationClickable = 'notification-clickable';
        this.getMyTemplate("image", image_template_1.ImageTemplates).then(function () {
            if (_this.properties == null) {
                _this.properties = new image_model_1.ImageModel(_this.activeTemplate["property"]);
            }
            else {
                var mainKeys = Object.keys(_this.activeTemplate["property"]);
                for (var _i = 0, mainKeys_1 = mainKeys; _i < mainKeys_1.length; _i++) {
                    var key = mainKeys_1[_i];
                    if (_this.properties[key] == null)
                        _this.properties[key] = _this.activeTemplate["property"][key];
                }
            }
            if (_this.styling == null)
                _this.styling = new image_styling_model_1.ImageStylingModel(_this.activeTemplate["style"]);
            if (_this.display != null)
                _this.properties.display = _this.display;
            if (_this.label != null)
                _this.properties.label = _this.label;
            if (_this.labelPosition != null)
                _this.properties.labelPosition = _this.labelPosition;
            if (_this.url != null)
                _this.properties.url = _this.url;
            _this.cfImage = _this.properties;
        });
    };
    /** @hidden
     * <p> Update the properties object with hte changes on the inputs to keep the image dynamic.</p>
     * @param changes
     */
    CfImageComponent.prototype.ngOnChanges = function (changes) {
        if (this.properties != null) {
            if (changes.display != null)
                this.properties.display = changes.display.currentValue;
            if (changes.label != null)
                this.properties.label = changes.label.currentValue;
            if (changes.labelPosition != null)
                this.properties.labelPosition = changes.labelPosition.currentValue;
            if (changes.url != null)
                this.properties.url = changes.url.currentValue;
        }
    };
    CfImageComponent.prototype.getImageClass = function () {
        if (this.styling != null && this.styling.image != null && this.cfImage != null) {
            try {
                var classes = "";
                var mainKeys = Object.keys(this.styling.image.dynamicClass);
                for (var _i = 0, mainKeys_2 = mainKeys; _i < mainKeys_2.length; _i++) {
                    var key = mainKeys_2[_i];
                    if (eval(this.styling.image.dynamicClass[key]) == true)
                        classes = classes + " " + key;
                }
                return classes;
            }
            catch (e) {
                //Do nothing
            }
        }
    };
    CfImageComponent.prototype.getContainerClass = function () {
        if (this.styling != null && this.styling.container != null && this.cfImage != null) {
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
    CfImageComponent.prototype.getLabelClass = function () {
        if (this.styling != null && this.styling.label != null && this.cfImage != null) {
            try {
                var classes = "";
                var mainKeys = Object.keys(this.styling.label.dynamicClass);
                for (var _i = 0, mainKeys_4 = mainKeys; _i < mainKeys_4.length; _i++) {
                    var key = mainKeys_4[_i];
                    if (eval(this.styling.label.dynamicClass[key]) == true)
                        classes = classes + " " + key;
                }
                return classes;
            }
            catch (e) {
                //Do nothing
            }
        }
    };
    return CfImageComponent;
}(core_component_1.CfCoreComponent));
__decorate([
    core_1.HostBinding('class'),
    __metadata("design:type", Object)
], CfImageComponent.prototype, "notifacationClickable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", image_model_1.ImageModel)
], CfImageComponent.prototype, "properties", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", image_styling_model_1.ImageStylingModel)
], CfImageComponent.prototype, "styling", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CfImageComponent.prototype, "display", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CfImageComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CfImageComponent.prototype, "alt", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CfImageComponent.prototype, "labelPosition", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CfImageComponent.prototype, "url", void 0);
CfImageComponent = __decorate([
    core_1.Component({
        selector: 'cf-image',
        templateUrl: './lib/components/image/image.component.html',
        styleUrls: ['./lib/components/image/image.component.scss']
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, template_service_1.TemplateService])
], CfImageComponent);
exports.CfImageComponent = CfImageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW1hZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtGO0FBQ2xGLHlEQUF5RDtBQUN6RCw4REFBNEQ7QUFDNUQsOEVBQTJFO0FBQzNFLGlFQUFnRTtBQUVoRSxxRkFBbUY7QUFHbkY7Ozs7Ozs7OztHQVNHO0FBTUgsSUFBYSxnQkFBZ0I7SUFBUyxvQ0FBZTtJQTZGcEQsYUFBYTtJQUNiLDBCQUFZLGFBQWEsQ0FBTyxVQUFzQixFQUFDLGFBQWEsQ0FBQyxlQUErQjtRQUFwRyxZQUNDLGtCQUFNLFVBQVUsRUFBRSxlQUFlLENBQUMsU0FDbEM7UUFGK0IsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUE1RnRELGFBQWE7UUFDUywyQkFBcUIsR0FBRyxFQUFFLENBQUM7O0lBNkZqRCxDQUFDO0lBWEQ7OztPQUdHO0lBQ0gsK0NBQW9CLEdBQXBCLFVBQXFCLFlBQVk7UUFDaEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBT0Q7O09BRUc7SUFDSCxtQ0FBUSxHQUFSO1FBQUEsaUJBMkJDO1FBMUJBLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyx3QkFBd0IsQ0FBQztRQUN2RyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBQywrQkFBYyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQy9DLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxVQUFVLElBQUUsSUFBSSxDQUFDLENBQ3pCLENBQUM7Z0JBQ0EsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLHdCQUFVLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ25FLENBQUM7WUFDRCxJ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Vyx3QkFBVTtvREFBQztBQTJCOUI7SUFEQyxZQUFLLEVBQUU7OEJBQ1EsdUNBQWlCO2lEQUFDO0FBS3pCO0lBQVIsWUFBSyxFQUFFOztpREFBeUI7QUFLeEI7SUFBUixZQUFLLEVBQUU7OytDQUFzQjtBQUtyQjtJQUFSLFlBQUssRUFBRTs7NkNBQW9CO0FBTW5CO0lBQVIsWUFBSyxFQUFFOzt1REFBOEI7QUFLN0I7SUFBUixZQUFLLEVBQUU7OzZDQUFvQjtBQW5GaEIsZ0JBQWdCO0lBTDVCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsNkNBQTZDO1FBQzFELFNBQVMsRUFBRSxDQUFDLDZDQUE2QyxDQUFDO0tBQzFELENBQUM7cUNBK0YyQyxpQkFBVSxFQUErQixrQ0FBZTtHQTlGeEYsZ0JBQWdCLENBMk01QjtBQTNNWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZkNvcmVDb21wb25lbnQgfSBmcm9tICcuLi9jb3JlL2NvcmUuY29tcG9uZW50JztcbmltcG9ydCB7IEltYWdlTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1hZ2UvaW1hZ2UubW9kZWwnO1xuaW1wb3J0IHsgSW1hZ2VTdHlsaW5nTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1hZ2UvaW1hZ2Utc3R5bGluZy5tb2RlbCc7XG5pbXBvcnQgeyBJbWFnZVRlbXBsYXRlcyB9IGZyb20gJy4uLy4uL3RlbXBsYXRlcy9pbWFnZS50ZW1wbGF0ZSc7XG5cbmltcG9ydCB7IFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RlbXBsYXRlLXNlcnZpY2UvdGVtcGxhdGUuc2VydmljZSc7XG5cblxuLyoqXG4gKiA8cD5DRiBJbWFnZSBDb21wb25lbnQ8L3A+IFxuICogPHByZT5cbiAqIDxjb2RlPlxuICogaW1wb3J0IHsgSW1hZ2VNb2RlbCB9IGZyb20gJ2NlZHJ1cy1mdXNpb24nXG4gKiBpbXBvcnQgeyBJbWFnZVN0eWxpbmdNb2RlbCB9IGZyb20gJ2NlZHJ1cy1mdXNpb24nXG4gKiA8Y29kZT48PC9jb2RlPmNmLWltYWdlPGNvZGU+PjwvY29kZT48Y29kZT48PC9jb2RlPjxjb2RlPi88L2NvZGU+Y2YtaW1hZ2U8Y29kZT4+PC9jb2RlPlxuICogPC9jb2RlPlxuICogPC9wcmU+XG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NmLWltYWdlJyxcblx0dGVtcGxhdGVVcmw6ICcuL2xpYi9jb21wb25lbnRzL2ltYWdlL2ltYWdlLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vbGliL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDZkltYWdlQ29tcG9uZW50IGV4dGVuZHMgQ2ZDb3JlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0XG5cdC8qKkBoaWRkZW4gKi9cblx0QEhvc3RCaW5kaW5nKCdjbGFzcycpIG5vdGlmYWNhdGlvbkNsaWNrYWJsZSA9ICcnO1xuXG5cdC8qKiBAaGlkZGVuXG5cdCAqIDxwPiBUaGUgb2JqZWN0IGJvdW5kIHRvIHRoZSB0ZW1wYWx0ZS48cD5cblx0ICovXG5cdGNmSW1hZ2U6IEltYWdlTW9kZWw7XG5cbiAgLyoqXG5cdCAqIDxwcmU+e1xuXHQgKiAgZGlzcGxheTogYm9vbGVhbiwgICAgICAvLyBUcnVlIG9yIEZhbHNlIDxiPkRlZmF1bHQ6IFRydWU8L2I+XG5cdCAqICBkaXNhYmxlOiBib29sZWFuLCAgICAgIC8vIFRydWUgb3IgRmFsc2UgPGI+RGVmYXVsdDogRmFsc2U8L2I+XG4gICAqICBsYWJlbDogc3RyaW5nLCAgICAgICAgIC8vIERlZmF1bHQ6ICdEZWZhdWx0IENhcHRpb24nXG5cdCAqICBsYWJlbFBvc2l0aW9uOiBzdHJpbmcsIC8vIERlZmF1bHQ6ICdib3R0b20nXG5cdCAqICB1cmw6IHN0cmluZyAgICAgICAgICAgIC8vRGVmYXVsdDogJ2h0dHBzOi4uLi9qcGcnXG5cdCAqfVxuXHQgKiA8L3ByZT5cblx0ICogPC9wcmU+XG5cdCAqIDxwPkV4YW1wbGU8L3A+XG5cdCAqIDxwcmU+e1xuXHQgKiAgZGlzcGxheTogdHJ1ZSxcblx0ICogIGxhYmVsOiAnU2liZXJpYW4gSHVza3knXG4gICAqICBsYWJlbFBvc2l0aW9uOiAnbGVmdCcsXG5cdCAqICB1cmw6ICdhc3NldHMvaW1hZ2VzL3NpYmVyaWFuLWh1c2t5LmpwZydcblx0ICp9XG5cdCAqIDwvcHJlPlxuICAgKi9cblx0QElucHV0KClcblx0cHVibGljIHByb3BlcnRpZXM6IEltYWdlTW9kZWw7XG5cblx0LyoqXG5cdCAgKjxwPiBkeW5hbWljQ2xhc3M6IGZ1bmN0aW9uKCkgLT4gc3RyaW5nLFx0Ly8gRnVuY3Rpb24gdGhhdCByZXR1cm5zIG5hbWUgb2YgdGhlIGNsYXNzIDwvcD5cblx0XHQqPHA+IGNsYXNzOiBzdHJpbmdcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBOYW1lIG9mIHRoZSBjc3MgY2xhc3Mgc2VsZWN0b3IgPC9wPlxuXHRcdCo8cD4gdGhlbWVDb2xvcjogc3RyaW5nXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBwcmltYXJ5L2FjY2VudC93YXJuIDwvcD5cblx0ICAqPHByZT5cblx0XHQqe1xuXHQgICpcdC8vIENvbnRhaW5lciBzdXJyb3VuZGluZyB0aGUgSW1hZ2Vcblx0ICAqXHRjb250YWluZXI6e1xuXHQgICpcdFx0ZHluYW1pY0NsYXNzLFxuXHQgICpcdFx0Y2xhc3Ncblx0ICAqXHR9LFxuXHQgICpcdC8vIGltYWdlIHN0eWxpbmdcblx0ICAqXHRpbWFnZTp7XG5cdCAgKlx0XHRkeW5hbWljQ2xhc3MsXG5cdCAgKlx0XHRjbGFzc1xuXHQgICpcdH0sXG5cdCAgKlx0Ly8gbGFiZWwgc3R5bGluZ1xuXHQgICpcdGxhYmVsOntcblx0ICAqXHRcdGR5bmFtaWNDbGFzcyxcblx0ICAqXHRcdGNsYXNzXG5cdCAgKlx0fVxuXHQgICp9XG5cdCAgKiA8L3ByZT5cblx0ICAqL1xuXHRASW5wdXQoKVxuXHRwdWJsaWMgc3R5bGluZzogSW1hZ2VTdHlsaW5nTW9kZWw7XG5cblx0LyoqXG5cdCAqIDxwPiBEaXNwbGF5IG9yIGhpZGUgdGhlIGltYWdlPC9wPlxuXHQgKi9cblx0QElucHV0KCkgcHVibGljIGRpc3BsYXk6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIDxwPiBUaGUgbGFiZWwgb2YgdGhlIGltYWdlPC9wPlxuXHQgKi9cblx0QElucHV0KCkgcHVibGljIGxhYmVsOiBzdHJpbmc7XG4gICAgXG4gICAgLyoqXG5cdCAqIDxwPiBUaGUgYWx0IHRleHQgb2YgdGhlIGltYWdlPC9wPlxuXHQgKi9cblx0QElucHV0KCkgcHVibGljIGFsdDogc3RyaW5nO1xuXG5cdC8qKlxuXHQgKiA8cD4gVGhlIGxhYmVsIHBvc2l0aW9uIG9mIHRoZSBpbWFnZTwvcD5cblx0ICogPHA+IE9wdGlvbnM6ICd0b3AnLCAnYm90dG9tJywgJ3JpZ2h0JywgJ2xlZnQnPC9wPlxuXHQgKi9cblx0QElucHV0KCkgcHVibGljIGxhYmVsUG9zaXRpb246IHN0cmluZztcblx0XG5cdC8qKlxuXHQgKiA8cD4gVGhlIHVybCBvZiB0aGUgaWFtZ2UuPC9wPlxuXHQgKi9cblx0QElucHV0KCkgcHVibGljIHVybDogc3RyaW5nO1xuXG5cdC8qKiBAaGlkZGVuXG5cdCAqIEl0IGlzIGZ1bmN0aW9uIGZvciBjcmVhdGluZyBOb3RpZmljYXRpb24gY2xpY2sgZXZlbnRzIGJ5IHVzaW5nIENvcmUgQ29tcG9uZW50IDxiPm5vdGlmaWNhdGlvbkFjdGlvbjwvYj4gZXZlbnQgZW1taXRlci5cbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHRpdCBpcyBqc29uIG5vdGlmaWNhdGlvbiBvYmplY3Rcblx0ICovXG5cdGNmTm90aWZpY2F0aW9uQWN0aW9uKG5vdGlmaWNhdGlvbikge1xuXHRcdHRoaXMubm90aWZpY2F0aW9uQWN0aW9uLmVtaXQobm90aWZpY2F0aW9uKTtcblx0fVxuXG5cdC8qKkBoaWRkZW4gKi9cblx0Y29uc3RydWN0b3IoLyoqQGhpZGRlbiAqL3B1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLC8qKkBoaWRkZW4gKi8gdGVtcGxhdGVTZXJ2aWNlOlRlbXBsYXRlU2VydmljZSkge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYsIHRlbXBsYXRlU2VydmljZSk7XG5cdH1cblxuXHQvKiogQGhpZGRlblxuXHQgKiA8cD4gSW5pdGlhbGl6ZSB0aGUgcHJvZXJ0aWVzIGFuZCBzdHlsaW5nIG9iamVjdCB3aXRoIHRoZSBhcHByb3ByaWF0ZSB2YWx1ZXMuPC9wPlxuXHQgKi9cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0aWYodGhpcy5ub3RpZmljYXRpb25BY3Rpb24ub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHRoaXMubm90aWZhY2F0aW9uQ2xpY2thYmxlID0gJ25vdGlmaWNhdGlvbi1jbGlja2FibGUnO1xuXHRcdHRoaXMuZ2V0TXlUZW1wbGF0ZShcImltYWdlXCIsSW1hZ2VUZW1wbGF0ZXMpLnRoZW4oKCkgPT4ge1xuXHRcdFx0aWYodGhpcy5wcm9wZXJ0aWVzPT1udWxsKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLnByb3BlcnRpZXMgPSBuZXcgSW1hZ2VNb2RlbCh0aGlzLmFjdGl2ZVRlbXBsYXRlW1wicHJvcGVydHlcIl0pO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgbWFpbktleXMgPSBPYmplY3Qua2V5cyh0aGlzLmFjdGl2ZVRlbXBsYXRlW1wicHJvcGVydHlcIl0pO1xuXHRcdFx0XHRmb3IobGV0IGtleSBvZiBtYWluS2V5cylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlmKHRoaXMucHJvcGVydGllc1trZXldPT1udWxsKVxuXHRcdFx0XHRcdFx0dGhpcy5wcm9wZXJ0aWVzW2tleV09dGhpcy5hY3RpdmVUZW1wbGF0ZVtcInByb3BlcnR5XCJdW2tleV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYodGhpcy5zdHlsaW5nPT1udWxsKVxuXHRcdFx0XHR0aGlzLnN0eWxpbmcgPSBuZXcgSW1hZ2VTdHlsaW5nTW9kZWwgKHRoaXMuYWN0aXZlVGVtcGxhdGVbXCJzdHlsZVwiXSk7XG5cblx0XHRcdGlmKHRoaXMuZGlzcGxheSE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLmRpc3BsYXkgPSB0aGlzLmRpc3BsYXk7XG5cdFx0XHRpZih0aGlzLmxhYmVsIT1udWxsKSB0aGlzLnByb3BlcnRpZXMubGFiZWwgPSB0aGlzLmxhYmVsO1xuXHRcdFx0aWYodGhpcy5sYWJlbFBvc2l0aW9uIT1udWxsKSB0aGlzLnByb3BlcnRpZXMubGFiZWxQb3NpdGlvbiA9IHRoaXMubGFiZWxQb3NpdGlvbjtcblx0XHRcdGlmKHRoaXMudXJsIT1udWxsKSB0aGlzLnByb3BlcnRpZXMudXJsID0gdGhpcy51cmw7XG5cblx0XHRcdHRoaXMuY2ZJbWFnZSA9IHRoaXMucHJvcGVydGllcztcblx0XHR9KTtcblx0fVxuXG5cdC8qKiBAaGlkZGVuXG5cdCAqIDxwPiBVcGRhdGUgdGhlIHByb3BlcnRpZXMgb2JqZWN0IHdpdGggaHRlIGNoYW5nZXMgb24gdGhlIGlucHV0cyB0byBrZWVwIHRoZSBpbWFnZSBkeW5hbWljLjwvcD5cblx0ICogQHBhcmFtIGNoYW5nZXNcblx0ICovXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSl7XG5cdFx0aWYodGhpcy5wcm9wZXJ0aWVzIT1udWxsKVxuXHRcdHtcblx0XHRcdGlmKGNoYW5nZXMuZGlzcGxheSE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLmRpc3BsYXkgPSBjaGFuZ2VzLmRpc3BsYXkuY3VycmVudFZhbHVlO1xuXHRcdFx0aWYoY2hhbmdlcy5sYWJlbCE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLmxhYmVsID0gY2hhbmdlcy5sYWJlbC5jdXJyZW50VmFsdWU7XG5cdFx0XHRpZihjaGFuZ2VzLmxhYmVsUG9zaXRpb24hPW51bGwpIHRoaXMucHJvcGVydGllcy5sYWJlbFBvc2l0aW9uID0gY2hhbmdlcy5sYWJlbFBvc2l0aW9uLmN1cnJlbnRWYWx1ZTtcblx0XHRcdGlmKGNoYW5nZXMudXJsIT1udWxsKSB0aGlzLnByb3BlcnRpZXMudXJsID0gY2hhbmdlcy51cmwuY3VycmVudFZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdGdldEltYWdlQ2xhc3MoKXtcbiAgICBpZih0aGlzLnN0eWxpbmchPW51bGwgJiYgdGhpcy5zdHlsaW5nLmltYWdlIT1udWxsJiYgdGhpcy5jZkltYWdlIT1udWxsKVxuICAgIHtcbiAgICAgIHRyeVxuICAgICAge1xuICAgICAgICB2YXIgY2xhc3NlcyA9IFwiXCI7XG4gICAgICAgIHZhciBtYWluS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc3R5bGluZy5pbWFnZS5keW5hbWljQ2xhc3MpO1xuICAgICAgICBmb3IobGV0IGtleSBvZiBtYWluS2V5cyl7XG4gICAgICAgICAgaWYoZXZhbCh0aGlzLnN0eWxpbmcuaW1hZ2UuZHluYW1pY0NsYXNzW2tleV0pPT10cnVlKVxuICAgICAgICAgICAgY2xhc3NlcyA9IGNsYXNzZXMrXCIgXCIra2V5O1xuICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgICB9XG4gICAgICBjYXRjaChlKVxuICAgICAge1xuICAgICAgICAvL0RvIG5vdGhpbmdcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRDb250YWluZXJDbGFzcygpe1xuICAgIGlmKHRoaXMuc3R5bGluZyE9bnVsbCAmJiB0aGlzLnN0eWxpbmcuY29udGFpbmVyIT1udWxsJiYgdGhpcy5jZkltYWdlIT1udWxsKVxuICAgIHtcbiAgICAgIHRyeVxuICAgICAge1xuICAgICAgICB2YXIgY2xhc3NlcyA9IFwiXCI7XG4gICAgICAgIHZhciBtYWluS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc3R5bGluZy5jb250YWluZXIuZHluYW1pY0NsYXNzKTtcbiAgICAgICAgZm9yKGxldCBrZXkgb2YgbWFpbktleXMpe1xuICAgICAgICAgIGlmKGV2YWwodGhpcy5zdHlsaW5nLmNvbnRhaW5lci5keW5hbWljQ2xhc3Nba2V5XSk9PXRydWUpXG4gICAgICAgICAgICBjbGFzc2VzID0gY2xhc3NlcytcIiBcIitrZXk7XG4gICAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xhc3NlcztcbiAgICAgIH1cbiAgICAgIGNhdGNoKGUpXG4gICAgICB7XG4gICAgICAgIC8vRG8gbm90aGluZ1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cdGdldExhYmVsQ2xhc3MoKXtcbiAgICBpZih0aGlzLnN0eWxpbmchPW51bGwgJiYgdGhpcy5zdHlsaW5nLmxhYmVsIT1udWxsJiYgdGhpcy5jZkltYWdlIT1udWxsKVxuICAgIHtcbiAgICAgIHRyeVxuICAgICAge1xuICAgICAgICB2YXIgY2xhc3NlcyA9IFwiXCI7XG4gICAgICAgIHZhciBtYWluS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc3R5bGluZy5sYWJlbC5keW5hbWljQ2xhc3MpO1xuICAgICAgICBmb3IobGV0IGtleSBvZiBtYWluS2V5cyl7XG4gICAgICAgICAgaWYoZXZhbCh0aGlzLnN0eWxpbmcubGFiZWwuZHluYW1pY0NsYXNzW2tleV0pPT10cnVlKVxuICAgICAgICAgICAgY2xhc3NlcyA9IGNsYXNzZXMrXCIgXCIra2V5O1xuICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgICB9XG4gICAgICBjYXRjaChlKVxuICAgICAge1xuICAgICAgICAvL0RvIG5vdGhpbmdcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=