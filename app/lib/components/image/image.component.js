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
        styleUrls: ['./lib/components/image/image.component.css']
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, template_service_1.TemplateService])
], CfImageComponent);
exports.CfImageComponent = CfImageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW1hZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtGO0FBQ2xGLHlEQUF5RDtBQUN6RCw4REFBNEQ7QUFDNUQsOEVBQTJFO0FBQzNFLGlFQUFnRTtBQUVoRSxxRkFBbUY7QUFHbkY7Ozs7Ozs7OztHQVNHO0FBTUgsSUFBYSxnQkFBZ0I7SUFBUyxvQ0FBZTtJQTZGcEQsYUFBYTtJQUNiLDBCQUFZLGFBQWEsQ0FBTyxVQUFzQixFQUFDLGFBQWEsQ0FBQyxlQUErQjtRQUFwRyxZQUNDLGtCQUFNLFVBQVUsRUFBRSxlQUFlLENBQUMsU0FDbEM7UUFGK0IsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUE1RnRELGFBQWE7UUFDUywyQkFBcUIsR0FBRyxFQUFFLENBQUM7O0lBNkZqRCxDQUFDO0lBWEQ7OztPQUdHO0lBQ0gsK0NBQW9CLEdBQXBCLFVBQXFCLFlBQVk7UUFDaEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBT0Q7O09BRUc7SUFDSCxtQ0FBUSxHQUFSO1FBQUEsaUJBMkJDO1FBMUJBLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyx3QkFBd0IsQ0FBQztRQUN2RyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBQywrQkFBYyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQy9DLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxVQUFVLElBQUUsSUFBSSxDQUFDLENBQ3pCLENBQUM7Z0JBQ0EsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLHdCQUFVLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ25FLENBQUM7WUFDRCxJ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Vyx3QkFBVTtvREFBQztBQTJCOUI7SUFEQyxZQUFLLEVBQUU7OEJBQ1EsdUNBQWlCO2lEQUFDO0FBS3pCO0lBQVIsWUFBSyxFQUFFOztpREFBeUI7QUFLeEI7SUFBUixZQUFLLEVBQUU7OytDQUFzQjtBQUtyQjtJQUFSLFlBQUssRUFBRTs7NkNBQW9CO0FBTW5CO0lBQVIsWUFBSyxFQUFFOzt1REFBOEI7QUFLN0I7SUFBUixZQUFLLEVBQUU7OzZDQUFvQjtBQW5GaEIsZ0JBQWdCO0lBTDVCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsNkNBQTZDO1FBQzFELFNBQVMsRUFBRSxDQUFDLDRDQUE0QyxDQUFDO0tBQ3pELENBQUM7cUNBK0YyQyxpQkFBVSxFQUErQixrQ0FBZTtHQTlGeEYsZ0JBQWdCLENBMk01QjtBQTNNWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZkNvcmVDb21wb25lbnQgfSBmcm9tICcuLi9jb3JlL2NvcmUuY29tcG9uZW50JztcbmltcG9ydCB7IEltYWdlTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1hZ2UvaW1hZ2UubW9kZWwnO1xuaW1wb3J0IHsgSW1hZ2VTdHlsaW5nTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1hZ2UvaW1hZ2Utc3R5bGluZy5tb2RlbCc7XG5pbXBvcnQgeyBJbWFnZVRlbXBsYXRlcyB9IGZyb20gJy4uLy4uL3RlbXBsYXRlcy9pbWFnZS50ZW1wbGF0ZSc7XG5cbmltcG9ydCB7IFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RlbXBsYXRlLXNlcnZpY2UvdGVtcGxhdGUuc2VydmljZSc7XG5cblxuLyoqXG4gKiA8cD5DRiBJbWFnZSBDb21wb25lbnQ8L3A+IFxuICogPHByZT5cbiAqIDxjb2RlPlxuICogaW1wb3J0IHsgSW1hZ2VNb2RlbCB9IGZyb20gJ2NlZHJ1cy1mdXNpb24nXG4gKiBpbXBvcnQgeyBJbWFnZVN0eWxpbmdNb2RlbCB9IGZyb20gJ2NlZHJ1cy1mdXNpb24nXG4gKiA8Y29kZT48PC9jb2RlPmNmLWltYWdlPGNvZGU+PjwvY29kZT48Y29kZT48PC9jb2RlPjxjb2RlPi88L2NvZGU+Y2YtaW1hZ2U8Y29kZT4+PC9jb2RlPlxuICogPC9jb2RlPlxuICogPC9wcmU+XG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NmLWltYWdlJyxcblx0dGVtcGxhdGVVcmw6ICcuL2xpYi9jb21wb25lbnRzL2ltYWdlL2ltYWdlLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vbGliL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENmSW1hZ2VDb21wb25lbnQgZXh0ZW5kcyBDZkNvcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRcblx0LyoqQGhpZGRlbiAqL1xuXHRASG9zdEJpbmRpbmcoJ2NsYXNzJykgbm90aWZhY2F0aW9uQ2xpY2thYmxlID0gJyc7XG5cblx0LyoqIEBoaWRkZW5cblx0ICogPHA+IFRoZSBvYmplY3QgYm91bmQgdG8gdGhlIHRlbXBhbHRlLjxwPlxuXHQgKi9cblx0Y2ZJbWFnZTogSW1hZ2VNb2RlbDtcblxuICAvKipcblx0ICogPHByZT57XG5cdCAqICBkaXNwbGF5OiBib29sZWFuLCAgICAgIC8vIFRydWUgb3IgRmFsc2UgPGI+RGVmYXVsdDogVHJ1ZTwvYj5cblx0ICogIGRpc2FibGU6IGJvb2xlYW4sICAgICAgLy8gVHJ1ZSBvciBGYWxzZSA8Yj5EZWZhdWx0OiBGYWxzZTwvYj5cbiAgICogIGxhYmVsOiBzdHJpbmcsICAgICAgICAgLy8gRGVmYXVsdDogJ0RlZmF1bHQgQ2FwdGlvbidcblx0ICogIGxhYmVsUG9zaXRpb246IHN0cmluZywgLy8gRGVmYXVsdDogJ2JvdHRvbSdcblx0ICogIHVybDogc3RyaW5nICAgICAgICAgICAgLy9EZWZhdWx0OiAnaHR0cHM6Li4uL2pwZydcblx0ICp9XG5cdCAqIDwvcHJlPlxuXHQgKiA8L3ByZT5cblx0ICogPHA+RXhhbXBsZTwvcD5cblx0ICogPHByZT57XG5cdCAqICBkaXNwbGF5OiB0cnVlLFxuXHQgKiAgbGFiZWw6ICdTaWJlcmlhbiBIdXNreSdcbiAgICogIGxhYmVsUG9zaXRpb246ICdsZWZ0Jyxcblx0ICogIHVybDogJ2Fzc2V0cy9pbWFnZXMvc2liZXJpYW4taHVza3kuanBnJ1xuXHQgKn1cblx0ICogPC9wcmU+XG4gICAqL1xuXHRASW5wdXQoKVxuXHRwdWJsaWMgcHJvcGVydGllczogSW1hZ2VNb2RlbDtcblxuXHQvKipcblx0ICAqPHA+IGR5bmFtaWNDbGFzczogZnVuY3Rpb24oKSAtPiBzdHJpbmcsXHQvLyBGdW5jdGlvbiB0aGF0IHJldHVybnMgbmFtZSBvZiB0aGUgY2xhc3MgPC9wPlxuXHRcdCo8cD4gY2xhc3M6IHN0cmluZ1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIE5hbWUgb2YgdGhlIGNzcyBjbGFzcyBzZWxlY3RvciA8L3A+XG5cdFx0KjxwPiB0aGVtZUNvbG9yOiBzdHJpbmdcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHByaW1hcnkvYWNjZW50L3dhcm4gPC9wPlxuXHQgICo8cHJlPlxuXHRcdCp7XG5cdCAgKlx0Ly8gQ29udGFpbmVyIHN1cnJvdW5kaW5nIHRoZSBJbWFnZVxuXHQgICpcdGNvbnRhaW5lcjp7XG5cdCAgKlx0XHRkeW5hbWljQ2xhc3MsXG5cdCAgKlx0XHRjbGFzc1xuXHQgICpcdH0sXG5cdCAgKlx0Ly8gaW1hZ2Ugc3R5bGluZ1xuXHQgICpcdGltYWdlOntcblx0ICAqXHRcdGR5bmFtaWNDbGFzcyxcblx0ICAqXHRcdGNsYXNzXG5cdCAgKlx0fSxcblx0ICAqXHQvLyBsYWJlbCBzdHlsaW5nXG5cdCAgKlx0bGFiZWw6e1xuXHQgICpcdFx0ZHluYW1pY0NsYXNzLFxuXHQgICpcdFx0Y2xhc3Ncblx0ICAqXHR9XG5cdCAgKn1cblx0ICAqIDwvcHJlPlxuXHQgICovXG5cdEBJbnB1dCgpXG5cdHB1YmxpYyBzdHlsaW5nOiBJbWFnZVN0eWxpbmdNb2RlbDtcblxuXHQvKipcblx0ICogPHA+IERpc3BsYXkgb3IgaGlkZSB0aGUgaW1hZ2U8L3A+XG5cdCAqL1xuXHRASW5wdXQoKSBwdWJsaWMgZGlzcGxheTogYm9vbGVhbjtcblxuXHQvKipcblx0ICogPHA+IFRoZSBsYWJlbCBvZiB0aGUgaW1hZ2U8L3A+XG5cdCAqL1xuXHRASW5wdXQoKSBwdWJsaWMgbGFiZWw6IHN0cmluZztcbiAgICBcbiAgICAvKipcblx0ICogPHA+IFRoZSBhbHQgdGV4dCBvZiB0aGUgaW1hZ2U8L3A+XG5cdCAqL1xuXHRASW5wdXQoKSBwdWJsaWMgYWx0OiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIDxwPiBUaGUgbGFiZWwgcG9zaXRpb24gb2YgdGhlIGltYWdlPC9wPlxuXHQgKiA8cD4gT3B0aW9uczogJ3RvcCcsICdib3R0b20nLCAncmlnaHQnLCAnbGVmdCc8L3A+XG5cdCAqL1xuXHRASW5wdXQoKSBwdWJsaWMgbGFiZWxQb3NpdGlvbjogc3RyaW5nO1xuXHRcblx0LyoqXG5cdCAqIDxwPiBUaGUgdXJsIG9mIHRoZSBpYW1nZS48L3A+XG5cdCAqL1xuXHRASW5wdXQoKSBwdWJsaWMgdXJsOiBzdHJpbmc7XG5cblx0LyoqIEBoaWRkZW5cblx0ICogSXQgaXMgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIE5vdGlmaWNhdGlvbiBjbGljayBldmVudHMgYnkgdXNpbmcgQ29yZSBDb21wb25lbnQgPGI+bm90aWZpY2F0aW9uQWN0aW9uPC9iPiBldmVudCBlbW1pdGVyLlxuICAgICAqIEBwYXJhbSBub3RpZmljYXRpb25cdGl0IGlzIGpzb24gbm90aWZpY2F0aW9uIG9iamVjdFxuXHQgKi9cblx0Y2ZOb3RpZmljYXRpb25BY3Rpb24obm90aWZpY2F0aW9uKSB7XG5cdFx0dGhpcy5ub3RpZmljYXRpb25BY3Rpb24uZW1pdChub3RpZmljYXRpb24pO1xuXHR9XG5cblx0LyoqQGhpZGRlbiAqL1xuXHRjb25zdHJ1Y3RvcigvKipAaGlkZGVuICovcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsLyoqQGhpZGRlbiAqLyB0ZW1wbGF0ZVNlcnZpY2U6VGVtcGxhdGVTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZiwgdGVtcGxhdGVTZXJ2aWNlKTtcblx0fVxuXG5cdC8qKiBAaGlkZGVuXG5cdCAqIDxwPiBJbml0aWFsaXplIHRoZSBwcm9lcnRpZXMgYW5kIHN0eWxpbmcgb2JqZWN0IHdpdGggdGhlIGFwcHJvcHJpYXRlIHZhbHVlcy48L3A+XG5cdCAqL1xuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHRpZih0aGlzLm5vdGlmaWNhdGlvbkFjdGlvbi5vYnNlcnZlcnMubGVuZ3RoID4gMCkgdGhpcy5ub3RpZmFjYXRpb25DbGlja2FibGUgPSAnbm90aWZpY2F0aW9uLWNsaWNrYWJsZSc7XG5cdFx0dGhpcy5nZXRNeVRlbXBsYXRlKFwiaW1hZ2VcIixJbWFnZVRlbXBsYXRlcykudGhlbigoKSA9PiB7XG5cdFx0XHRpZih0aGlzLnByb3BlcnRpZXM9PW51bGwpXG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMucHJvcGVydGllcyA9IG5ldyBJbWFnZU1vZGVsKHRoaXMuYWN0aXZlVGVtcGxhdGVbXCJwcm9wZXJ0eVwiXSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBtYWluS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuYWN0aXZlVGVtcGxhdGVbXCJwcm9wZXJ0eVwiXSk7XG5cdFx0XHRcdGZvcihsZXQga2V5IG9mIG1haW5LZXlzKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYodGhpcy5wcm9wZXJ0aWVzW2tleV09PW51bGwpXG5cdFx0XHRcdFx0XHR0aGlzLnByb3BlcnRpZXNba2V5XT10aGlzLmFjdGl2ZVRlbXBsYXRlW1wicHJvcGVydHlcIl1ba2V5XTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZih0aGlzLnN0eWxpbmc9PW51bGwpXG5cdFx0XHRcdHRoaXMuc3R5bGluZyA9IG5ldyBJbWFnZVN0eWxpbmdNb2RlbCAodGhpcy5hY3RpdmVUZW1wbGF0ZVtcInN0eWxlXCJdKTtcblxuXHRcdFx0aWYodGhpcy5kaXNwbGF5IT1udWxsKSB0aGlzLnByb3BlcnRpZXMuZGlzcGxheSA9IHRoaXMuZGlzcGxheTtcblx0XHRcdGlmKHRoaXMubGFiZWwhPW51bGwpIHRoaXMucHJvcGVydGllcy5sYWJlbCA9IHRoaXMubGFiZWw7XG5cdFx0XHRpZih0aGlzLmxhYmVsUG9zaXRpb24hPW51bGwpIHRoaXMucHJvcGVydGllcy5sYWJlbFBvc2l0aW9uID0gdGhpcy5sYWJlbFBvc2l0aW9uO1xuXHRcdFx0aWYodGhpcy51cmwhPW51bGwpIHRoaXMucHJvcGVydGllcy51cmwgPSB0aGlzLnVybDtcblxuXHRcdFx0dGhpcy5jZkltYWdlID0gdGhpcy5wcm9wZXJ0aWVzO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqIEBoaWRkZW5cblx0ICogPHA+IFVwZGF0ZSB0aGUgcHJvcGVydGllcyBvYmplY3Qgd2l0aCBodGUgY2hhbmdlcyBvbiB0aGUgaW5wdXRzIHRvIGtlZXAgdGhlIGltYWdlIGR5bmFtaWMuPC9wPlxuXHQgKiBAcGFyYW0gY2hhbmdlc1xuXHQgKi9cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogYW55KXtcblx0XHRpZih0aGlzLnByb3BlcnRpZXMhPW51bGwpXG5cdFx0e1xuXHRcdFx0aWYoY2hhbmdlcy5kaXNwbGF5IT1udWxsKSB0aGlzLnByb3BlcnRpZXMuZGlzcGxheSA9IGNoYW5nZXMuZGlzcGxheS5jdXJyZW50VmFsdWU7XG5cdFx0XHRpZihjaGFuZ2VzLmxhYmVsIT1udWxsKSB0aGlzLnByb3BlcnRpZXMubGFiZWwgPSBjaGFuZ2VzLmxhYmVsLmN1cnJlbnRWYWx1ZTtcblx0XHRcdGlmKGNoYW5nZXMubGFiZWxQb3NpdGlvbiE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLmxhYmVsUG9zaXRpb24gPSBjaGFuZ2VzLmxhYmVsUG9zaXRpb24uY3VycmVudFZhbHVlO1xuXHRcdFx0aWYoY2hhbmdlcy51cmwhPW51bGwpIHRoaXMucHJvcGVydGllcy51cmwgPSBjaGFuZ2VzLnVybC5jdXJyZW50VmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0Z2V0SW1hZ2VDbGFzcygpe1xuICAgIGlmKHRoaXMuc3R5bGluZyE9bnVsbCAmJiB0aGlzLnN0eWxpbmcuaW1hZ2UhPW51bGwmJiB0aGlzLmNmSW1hZ2UhPW51bGwpXG4gICAge1xuICAgICAgdHJ5XG4gICAgICB7XG4gICAgICAgIHZhciBjbGFzc2VzID0gXCJcIjtcbiAgICAgICAgdmFyIG1haW5LZXlzID0gT2JqZWN0LmtleXModGhpcy5zdHlsaW5nLmltYWdlLmR5bmFtaWNDbGFzcyk7XG4gICAgICAgIGZvcihsZXQga2V5IG9mIG1haW5LZXlzKXtcbiAgICAgICAgICBpZihldmFsKHRoaXMuc3R5bGluZy5pbWFnZS5keW5hbWljQ2xhc3Nba2V5XSk9PXRydWUpXG4gICAgICAgICAgICBjbGFzc2VzID0gY2xhc3NlcytcIiBcIitrZXk7XG4gICAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xhc3NlcztcbiAgICAgIH1cbiAgICAgIGNhdGNoKGUpXG4gICAgICB7XG4gICAgICAgIC8vRG8gbm90aGluZ1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENvbnRhaW5lckNsYXNzKCl7XG4gICAgaWYodGhpcy5zdHlsaW5nIT1udWxsICYmIHRoaXMuc3R5bGluZy5jb250YWluZXIhPW51bGwmJiB0aGlzLmNmSW1hZ2UhPW51bGwpXG4gICAge1xuICAgICAgdHJ5XG4gICAgICB7XG4gICAgICAgIHZhciBjbGFzc2VzID0gXCJcIjtcbiAgICAgICAgdmFyIG1haW5LZXlzID0gT2JqZWN0LmtleXModGhpcy5zdHlsaW5nLmNvbnRhaW5lci5keW5hbWljQ2xhc3MpO1xuICAgICAgICBmb3IobGV0IGtleSBvZiBtYWluS2V5cyl7XG4gICAgICAgICAgaWYoZXZhbCh0aGlzLnN0eWxpbmcuY29udGFpbmVyLmR5bmFtaWNDbGFzc1trZXldKT09dHJ1ZSlcbiAgICAgICAgICAgIGNsYXNzZXMgPSBjbGFzc2VzK1wiIFwiK2tleTtcbiAgICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGFzc2VzO1xuICAgICAgfVxuICAgICAgY2F0Y2goZSlcbiAgICAgIHtcbiAgICAgICAgLy9EbyBub3RoaW5nXG4gICAgICB9XG4gICAgfVxuICB9XG5cblx0Z2V0TGFiZWxDbGFzcygpe1xuICAgIGlmKHRoaXMuc3R5bGluZyE9bnVsbCAmJiB0aGlzLnN0eWxpbmcubGFiZWwhPW51bGwmJiB0aGlzLmNmSW1hZ2UhPW51bGwpXG4gICAge1xuICAgICAgdHJ5XG4gICAgICB7XG4gICAgICAgIHZhciBjbGFzc2VzID0gXCJcIjtcbiAgICAgICAgdmFyIG1haW5LZXlzID0gT2JqZWN0LmtleXModGhpcy5zdHlsaW5nLmxhYmVsLmR5bmFtaWNDbGFzcyk7XG4gICAgICAgIGZvcihsZXQga2V5IG9mIG1haW5LZXlzKXtcbiAgICAgICAgICBpZihldmFsKHRoaXMuc3R5bGluZy5sYWJlbC5keW5hbWljQ2xhc3Nba2V5XSk9PXRydWUpXG4gICAgICAgICAgICBjbGFzc2VzID0gY2xhc3NlcytcIiBcIitrZXk7XG4gICAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xhc3NlcztcbiAgICAgIH1cbiAgICAgIGNhdGNoKGUpXG4gICAgICB7XG4gICAgICAgIC8vRG8gbm90aGluZ1xuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ==