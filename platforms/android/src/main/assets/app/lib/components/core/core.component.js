"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var themes_1 = require("../../models/theme/themes");
var notification_model_1 = require("../../models/notification/notification.model");
var draggable_service_1 = require("../../services/draggable-service/draggable.service");
var template_service_1 = require("../../services/template-service/template.service");
var CfCoreComponent = CfCoreComponent_1 = (function () {
    /**@hidden */
    function CfCoreComponent(elementRef, templateService) {
        this.elementRef = elementRef;
        this.templateService = templateService;
        // Inject service to drag and drop components
        /**@hidden */
        this.injector = core_1.ReflectiveInjector.resolveAndCreate([draggable_service_1.DraggableService]);
        /**
         * <p>It represents an instance ID. User can set it.
         * By default, it's unique number, converted to string.</p>
         */
        this.id = CfCoreComponent_1.generateId();
        /** @hidden
         * The name of the class that represents the component's theme
         */
        this.themeClass = themes_1.Themes.default_theme;
        /**@hidden
         * <p>Hide or Show Component</p>
         */
        this.display = true;
        /**@hidden
         * <p>Disable or Enable Component</p>
         */
        this.disable = false;
        /**
         * <p>It is core component Notifications events emmiter to be used by other components</p>
         */
        this.notificationAction = new core_1.EventEmitter();
        /** @hidden
         * <p> Saves the tags of the events that the component is subscribed for.</p>
         * <p> Example: weather1, weather2, clock1...</p>
         */
        this.subscriptionTags = [];
        this.nativeElement = this.elementRef.nativeElement;
        this.draggableService = this.injector.get(draggable_service_1.DraggableService);
    }
    /**@hidden */
    CfCoreComponent.prototype.ngOnInit = function () {
        if (this.draggable) {
            this.draggableService.makeDraggable(this.id, this.elementRef.nativeElement, true);
        }
    };
    /** @hidden
     * <p>This method passes the attribute directive that has no parameters from the parent to the repsective child element.</p>
     * <p>@param attributeName: Name of the attribute to pass</p>
     * <p>@param attributeValue: Value of the attribute to pass</p>
     * <p>@param elementName: Name of the element that needs the attribute</p>
     */
    CfCoreComponent.prototype.updateAttribute = function (elementName, attributeName, attributeValue) {
        var element = this.nativeElement.querySelector(elementName);
        var myAttr = this.nativeElement.getAttribute(attributeName);
        if (myAttr === null) {
            if (element != null)
                element.removeAttribute(attributeName);
            return false;
        }
        else {
            if (element != null)
                element.setAttribute(attributeName, attributeValue);
            this.nativeElement.removeAttribute(attributeName);
            return true;
        }
    };
    /**
     * @hidden
     * @param name
     * @param templatesObject
     * @param passedTemplate
     */
    CfCoreComponent.prototype.getMyTemplate = function (name, templatesObject) {
        var _this = this;
        var activeTemplate = templatesObject["defaultTemplate"];
        return new Promise(function (resolve) {
            _this.templateService.loadTemplateJson(name, templatesObject, _this.compTemplate)
                .subscribe(function (newTemp) {
                if (newTemp != null) {
                    activeTemplate = newTemp;
                }
                // if(passedTemplate!=null && passedTemplate!="")
                // {
                //   if(templatesObject[passedTemplate]!=null)
                //   {
                //     activeTemplate = templatesObject[passedTemplate];
                //   }
                //   else
                //     activeTemplate = passedTemplate;
                // }
                _this.activeTemplate = activeTemplate;
                resolve();
            }, function (err) {
                console.log('error retrieving template');
                _this.activeTemplate = activeTemplate;
                resolve();
            });
        });
    };
    /** @hidden
     * <p>Generate unique ID</p>
     */
    CfCoreComponent.generateId = function () {
        return '' + Math.floor(Math.random() * 100000);
    };
    return CfCoreComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CfCoreComponent.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CfCoreComponent.prototype, "themeClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CfCoreComponent.prototype, "tooltip", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CfCoreComponent.prototype, "display", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CfCoreComponent.prototype, "disable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CfCoreComponent.prototype, "enabledI18N", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CfCoreComponent.prototype, "draggable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CfCoreComponent.prototype, "cfClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", notification_model_1.NotificationModel)
], CfCoreComponent.prototype, "notification", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CfCoreComponent.prototype, "compTemplate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CfCoreComponent.prototype, "notificationAction", void 0);
CfCoreComponent = CfCoreComponent_1 = __decorate([
    core_1.Component({
        selector: 'cf-core',
        templateUrl: './lib/components/core.component.html',
        styleUrls: ['./lib/components/core.component.css']
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, template_service_1.TemplateService])
], CfCoreComponent);
exports.CfCoreComponent = CfCoreComponent;
var CfCoreComponent_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3JlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUErRztBQUMvRyxvREFBbUQ7QUFDbkQsbUZBQWlGO0FBRWpGLHdGQUFzRjtBQUV0RixxRkFBbUY7QUFPbkYsSUFBYSxlQUFlO0lBOEYxQixhQUFhO0lBQ2IseUJBQW1CLFVBQXNCLEVBQVMsZUFBZ0M7UUFBL0QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFTLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQTdGbEYsNkNBQTZDO1FBQzdDLGFBQWE7UUFDYixhQUFRLEdBQUcseUJBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxvQ0FBZ0IsQ0FBQyxDQUFDLENBQUM7UUFLbkU7OztXQUdHO1FBRUksT0FBRSxHQUFXLGlCQUFlLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFakQ7O1dBRUc7UUFFSSxlQUFVLEdBQVcsZUFBTSxDQUFDLGFBQWEsQ0FBQztRQWFqRDs7V0FFRztRQUVJLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFFL0I7O1dBRUc7UUFFSSxZQUFPLEdBQVksS0FBSyxDQUFDO1FBdUNoQzs7V0FFRztRQUVILHVCQUFrQixHQUFzQixJQUFJLG1CQUFZLEVBQU8sQ0FBQztRQUVoRTs7O1dBR0c7UUFDSCxxQkFBZ0IsR0FBYSxFQUFFLENBQUM7UUFJOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNuRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsb0NBQWdCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsYUFBYTtJQUNiLGtDQUFRLEdBQVI7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEYsQ0FBQztJQUNILENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHlDQUFlLEdBQWYsVUFBZ0IsV0FBbUIsRUFBQyxhQUFxQixFQUFFLGNBQWM7UUFFdkUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUQsRUFBRSxDQUFBLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUNuQixDQUFDO1lBQ0MsRUFBRSxDQUFBLENBQUMsT0FBTyxJQUFFLElBQUksQ0FBQztnQkFDZixPQUFPLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO1FBQ0QsSUFBSSxDQUNKLENBQUM7WUFDQyxFQUFFLENBQUEsQ0FBQyxPQUFPLElBQUUsSUFBSSxDQUFDO2dCQUNmLE9BQU8sQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsdUNBQWEsR0FBYixVQUFjLElBQVksRUFBRSxlQUFlO1FBQTNDLGlCQTJCQztRQTFCQyxJQUFJLGNBQWMsR0FBRyxlQUFlLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPO1lBQ3pCLEtBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDO2lCQUM1RSxTQUFTLENBQUMsVUFBQSxPQUFPO2dCQUNoQixFQUFFLENBQUEsQ0FBQyxPQUFPLElBQUUsSUFBSSxDQUFDLENBQ2pCLENBQUM7b0JBQ0MsY0FBYyxHQUFHLE9BQU8sQ0FBQztnQkFDM0IsQ0FBQztnQkFDRCxpREFBaUQ7Z0JBQ2pELElBQUk7Z0JBQ0osOENBQThDO2dCQUM5QyxNQUFNO2dCQUNOLHdEQUF3RDtnQkFDeEQsTUFBTTtnQkFDTixTQUFTO2dCQUNULHVDQUF1QztnQkFDdkMsSUFBSTtnQkFDSixLQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztnQkFDckMsT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDLEVBQ0QsVUFBQSxHQUFHO2dCQUNPLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztnQkFDekMsS0FBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7Z0JBQ3JDLE9BQU8sRUFBRSxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSSwwQkFBVSxHQUFqQjtRQUNJLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVILHNCQUFDO0FBQUQsQ0FBQyxBQTlLRCxJQThLQztBQWhLQztJQURDLFlBQUssRUFBRTs7MkNBQ3lDO0FBTWpEO0lBREMsWUFBSyxFQUFFOzttREFDeUM7QUFXakQ7SUFEQyxZQUFLLEVBQUU7O2dEQUNZO0FBTXBCO0lBREMsWUFBSyxFQUFFOztnREFDdUI7QUFNL0I7SUFEQyxZQUFLLEVBQUU7O2dEQUN3QjtBQU9oQztJQURDLFlBQUssRUFBRTs7b0RBQ29CO0FBTTVCO0lBREMsWUFBSyxFQUFFOztrREFDa0I7QUFNM0I7SUFEQyxZQUFLLEVBQUU7O2dEQUNlO0FBTXRCO0lBREMsWUFBSyxFQUFFOzhCQUNhLHNDQUFpQjtxREFBQztBQU12QztJQURDLFlBQUssRUFBRTs7cURBQ2lCO0FBWXpCO0lBREMsYUFBTSxFQUFFOzhCQUNXLG1CQUFZOzJEQUFnQztBQXRGckQsZUFBZTtJQUwzQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLHNDQUFzQztRQUNuRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQztLQUNuRCxDQUFDO3FDQWdHK0IsaUJBQVUsRUFBMEIsa0NBQWU7R0EvRnZFLGVBQWUsQ0E4SzNCO0FBOUtZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgUmVmbGVjdGl2ZUluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZXMgfSBmcm9tICcuLi8uLi9tb2RlbHMvdGhlbWUvdGhlbWVzJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbk1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24ubW9kZWwnO1xuXG5pbXBvcnQgeyBEcmFnZ2FibGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZHJhZ2dhYmxlLXNlcnZpY2UvZHJhZ2dhYmxlLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90ZW1wbGF0ZS1zZXJ2aWNlL3RlbXBsYXRlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZi1jb3JlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpYi9jb21wb25lbnRzL2NvcmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saWIvY29tcG9uZW50cy9jb3JlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDZkNvcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vIEluamVjdCBzZXJ2aWNlIHRvIGRyYWcgYW5kIGRyb3AgY29tcG9uZW50c1xuICAvKipAaGlkZGVuICovXG4gIGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmVBbmRDcmVhdGUoW0RyYWdnYWJsZVNlcnZpY2VdKTtcbiAgLyoqQGhpZGRlbiAqL1xuICBkcmFnZ2FibGVTZXJ2aWNlOiBEcmFnZ2FibGVTZXJ2aWNlO1xuXG5cbiAgLyoqXG4gICAqIDxwPkl0IHJlcHJlc2VudHMgYW4gaW5zdGFuY2UgSUQuIFVzZXIgY2FuIHNldCBpdC5cbiAgICogQnkgZGVmYXVsdCwgaXQncyB1bmlxdWUgbnVtYmVyLCBjb252ZXJ0ZWQgdG8gc3RyaW5nLjwvcD5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBpZDogc3RyaW5nID0gQ2ZDb3JlQ29tcG9uZW50LmdlbmVyYXRlSWQoKTtcblxuICAvKiogQGhpZGRlblxuICAgKiBUaGUgbmFtZSBvZiB0aGUgY2xhc3MgdGhhdCByZXByZXNlbnRzIHRoZSBjb21wb25lbnQncyB0aGVtZVxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHRoZW1lQ2xhc3M6IHN0cmluZyA9IFRoZW1lcy5kZWZhdWx0X3RoZW1lO1xuXG4gIC8qKiBAaGlkZGVuXG4gICAqIDxwPkl0IHJlcHJlc2VudHMgYSBwb2ludGVyIHRvIHRoZSBjb21wb25lbnQncyBpbnN0YW5jZTwvcD5cbiAgICovXG4gIHB1YmxpYyBuYXRpdmVFbGVtZW50OiBhbnk7XG5cbiAgLyoqQGhpZGRlblxuICAgKiA8cD5JdCByZXByZXNlbnRzIGNvbXBvbmVudCB0b29sdGlwPC9wPlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHRvb2x0aXA6IGFueTtcblxuICAvKipAaGlkZGVuXG4gICAqIDxwPkhpZGUgb3IgU2hvdyBDb21wb25lbnQ8L3A+XG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZGlzcGxheTogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqQGhpZGRlblxuICAgKiA8cD5EaXNhYmxlIG9yIEVuYWJsZSBDb21wb25lbnQ8L3A+XG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZGlzYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgLyoqXG4gICAqIDxwPkl0IGVuYWJsZXMgY29tcG9uZW50IGludGVybmF0aW9uYWxpemF0aW9uPC9wPlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGVuYWJsZWRJMThOOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiA8cD5JdCBlbmFibGVzIGNvbXBvbmVudCBkcmFnIGFuZCBkcm9wPC9wPlxuICAgKi9cbiAgQElucHV0KCkgXG4gIHB1YmxpYyBkcmFnZ2FibGU6IGJvb2xlYW47XG5cbiAgLyoqIEBoaWRkZW5cblx0ICogPHA+SXQgaXMgYSBkeW5hbWljIGNsYXNzIHRoZSB1c2VyIGNhbiBwYXNzIGZvciB0aGUgaW50ZXJuYWwgYnV0dG9uPC9wPlxuXHQgKi9cblx0QElucHV0KCkgXG5cdHB1YmxpYyBjZkNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIDxwPkl0IHJlcHJlc2VudHMgY29yZSBjb21wb25lbnQgbm90aWZpY2F0aW9ucyBwcm9wZXJ0eSBvYmplY3QgYmFzZWQgb24gTm90aWZpY2F0aW9uTW9kZWwgQ2xhc3M8L3A+XG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgbm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb25Nb2RlbDtcblxuICAvKipcbiAgICogPHA+IEl0IHJlcHJlc2VudHMgdGhlIHVzZXIgZGVmaW5lZCB0ZW1wbGF0ZSBwYXNzZWQgdG8gdGhlIGNvbXBvbmVudCBcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjb21wVGVtcGxhdGU6IGFueTtcblxuICAvLyBASW5wdXQoKSBcbiAgLy8gcHVibGljIGZvcm1Db250cm9sTmFtZTogYW55O1xuXG4gIC8qKkBoaWRkZW4gKi9cblx0YWN0aXZlVGVtcGxhdGU6IGFueTtcbiAgXG4gIC8qKlxuICAgKiA8cD5JdCBpcyBjb3JlIGNvbXBvbmVudCBOb3RpZmljYXRpb25zIGV2ZW50cyBlbW1pdGVyIHRvIGJlIHVzZWQgYnkgb3RoZXIgY29tcG9uZW50czwvcD5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBub3RpZmljYXRpb25BY3Rpb246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIFxuICAvKiogQGhpZGRlblxuICAgKiA8cD4gU2F2ZXMgdGhlIHRhZ3Mgb2YgdGhlIGV2ZW50cyB0aGF0IHRoZSBjb21wb25lbnQgaXMgc3Vic2NyaWJlZCBmb3IuPC9wPlxuICAgKiA8cD4gRXhhbXBsZTogd2VhdGhlcjEsIHdlYXRoZXIyLCBjbG9jazEuLi48L3A+XG4gICAqL1xuICBzdWJzY3JpcHRpb25UYWdzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIC8qKkBoaWRkZW4gKi9cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyB0ZW1wbGF0ZVNlcnZpY2U6IFRlbXBsYXRlU2VydmljZSkge1xuICAgIHRoaXMubmF0aXZlRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuZHJhZ2dhYmxlU2VydmljZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KERyYWdnYWJsZVNlcnZpY2UpO1xuICB9XG5cbiAgLyoqQGhpZGRlbiAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5kcmFnZ2FibGUpIHtcbiAgICAgIHRoaXMuZHJhZ2dhYmxlU2VydmljZS5tYWtlRHJhZ2dhYmxlKHRoaXMuaWQsIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGhpZGRlblxuICAgKiA8cD5UaGlzIG1ldGhvZCBwYXNzZXMgdGhlIGF0dHJpYnV0ZSBkaXJlY3RpdmUgdGhhdCBoYXMgbm8gcGFyYW1ldGVycyBmcm9tIHRoZSBwYXJlbnQgdG8gdGhlIHJlcHNlY3RpdmUgY2hpbGQgZWxlbWVudC48L3A+XG4gICAqIDxwPkBwYXJhbSBhdHRyaWJ1dGVOYW1lOiBOYW1lIG9mIHRoZSBhdHRyaWJ1dGUgdG8gcGFzczwvcD5cbiAgICogPHA+QHBhcmFtIGF0dHJpYnV0ZVZhbHVlOiBWYWx1ZSBvZiB0aGUgYXR0cmlidXRlIHRvIHBhc3M8L3A+XG4gICAqIDxwPkBwYXJhbSBlbGVtZW50TmFtZTogTmFtZSBvZiB0aGUgZWxlbWVudCB0aGF0IG5lZWRzIHRoZSBhdHRyaWJ1dGU8L3A+XG4gICAqL1xuICB1cGRhdGVBdHRyaWJ1dGUoZWxlbWVudE5hbWU6IHN0cmluZyxhdHRyaWJ1dGVOYW1lOiBzdHJpbmcsIGF0dHJpYnV0ZVZhbHVlKTogYm9vbGVhblxuICB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50TmFtZSk7XG4gICAgdmFyIG15QXR0ciA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgaWYobXlBdHRyID09PSBudWxsKVxuICAgIHtcbiAgICAgIGlmKGVsZW1lbnQhPW51bGwpXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgaWYoZWxlbWVudCE9bnVsbClcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICogQHBhcmFtIG5hbWUgXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZXNPYmplY3QgXG4gICAqIEBwYXJhbSBwYXNzZWRUZW1wbGF0ZSBcbiAgICovXG4gIGdldE15VGVtcGxhdGUobmFtZTogc3RyaW5nLCB0ZW1wbGF0ZXNPYmplY3QpIHtcbiAgICBsZXQgYWN0aXZlVGVtcGxhdGUgPSB0ZW1wbGF0ZXNPYmplY3RbXCJkZWZhdWx0VGVtcGxhdGVcIl07XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLnRlbXBsYXRlU2VydmljZS5sb2FkVGVtcGxhdGVKc29uKG5hbWUsIHRlbXBsYXRlc09iamVjdCwgdGhpcy5jb21wVGVtcGxhdGUpXG4gICAgICAgIC5zdWJzY3JpYmUobmV3VGVtcCA9PiB7XG4gICAgICAgICAgaWYobmV3VGVtcCE9bnVsbClcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhY3RpdmVUZW1wbGF0ZSA9IG5ld1RlbXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGlmKHBhc3NlZFRlbXBsYXRlIT1udWxsICYmIHBhc3NlZFRlbXBsYXRlIT1cIlwiKVxuICAgICAgICAgIC8vIHtcbiAgICAgICAgICAvLyAgIGlmKHRlbXBsYXRlc09iamVjdFtwYXNzZWRUZW1wbGF0ZV0hPW51bGwpXG4gICAgICAgICAgLy8gICB7XG4gICAgICAgICAgLy8gICAgIGFjdGl2ZVRlbXBsYXRlID0gdGVtcGxhdGVzT2JqZWN0W3Bhc3NlZFRlbXBsYXRlXTtcbiAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAvLyAgIGVsc2VcbiAgICAgICAgICAvLyAgICAgYWN0aXZlVGVtcGxhdGUgPSBwYXNzZWRUZW1wbGF0ZTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgdGhpcy5hY3RpdmVUZW1wbGF0ZSA9IGFjdGl2ZVRlbXBsYXRlO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyID0+IHsgXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgcmV0cmlldmluZyB0ZW1wbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVUZW1wbGF0ZSA9IGFjdGl2ZVRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBoaWRkZW5cbiAgICogPHA+R2VuZXJhdGUgdW5pcXVlIElEPC9wPlxuICAgKi9cbiAgc3RhdGljIGdlbmVyYXRlSWQoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCk7XG4gIH1cblxufSJdfQ==