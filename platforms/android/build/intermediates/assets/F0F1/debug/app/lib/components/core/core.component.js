"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { Themes } from '../../models/theme/themes';
// import { NotificationModel } from '../../models/notification';
// import { DraggableService } from '../../services/draggable-service/draggable.service';
// import { TemplateService } from '../../services/template-service/template.service';
var CfCoreComponent = CfCoreComponent_1 = (function () {
    function CfCoreComponent(elementRef) {
        this.elementRef = elementRef;
        //   injector = ReflectiveInjector.resolveAndCreate([DraggableService]);
        //   draggableService: DraggableService;
        this.id = CfCoreComponent_1.generateId();
        this.display = true;
        this.disable = false;
        this.notificationAction = new core_1.EventEmitter();
        this.subscriptionTags = [];
        this.nativeElement = this.elementRef.nativeElement;
        // this.draggableService = this.injector.get(DraggableService);
    }
    CfCoreComponent.prototype.ngOnInit = function () {
        if (this.draggable) {
            //   this.draggableService.makeDraggable(this.id, this.elementRef.nativeElement, true);
        }
    };
    CfCoreComponent.prototype.updateAttribute = function (elementName, attributeName, attributeValue) {
        var element = this.nativeElement.querySelector(elementName);
        var myAttr = this.nativeElement.getAttribute(attributeName);
        if (myAttr === null) {
            element.removeAttribute(attributeName);
            return false;
        }
        else {
            element.setAttribute(attributeName, attributeValue);
            this.nativeElement.removeAttribute(attributeName);
            return true;
        }
    };
    CfCoreComponent.prototype.getMyTemplate = function (name, templatesObject) {
        var activeTemplate = templatesObject["defaultTemplate"];
        // return new Promise((resolve) => {
        //   this.templateService.loadTemplateJson(name, templatesObject, this.compTemplate)
        //     .subscribe(newTemp => {
        //       if(newTemp!=null)
        //       {
        //         activeTemplate = newTemp;
        //       }
        //       this.activeTemplate = activeTemplate;
        //       resolve();
        //     },
        //     err => { 
        //               this.activeTemplate = activeTemplate;
        //               resolve();
        //     })
        // });
    };
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
    core_1.Input()
    //   public themeClass: string = Themes.default_theme;
    ,
    __metadata("design:type", Object)
], CfCoreComponent.prototype, "nativeElement", void 0);
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
    __metadata("design:type", Object)
], CfCoreComponent.prototype, "compTemplate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CfCoreComponent.prototype, "notificationAction", void 0);
CfCoreComponent = CfCoreComponent_1 = __decorate([
    core_1.Component({
        selector: 'cf-core',
        templateUrl: './core.component.html'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], CfCoreComponent);
exports.CfCoreComponent = CfCoreComponent;
var CfCoreComponent_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3JlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUErRztBQUMvRyxzREFBc0Q7QUFDdEQsaUVBQWlFO0FBRWpFLHlGQUF5RjtBQUV6RixzRkFBc0Y7QUFNdEYsSUFBYSxlQUFlO0lBNEMxQix5QkFBbUIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQTFDM0Msd0VBQXdFO1FBRXhFLHdDQUF3QztRQUcvQixPQUFFLEdBQVcsaUJBQWUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQVcxQyxZQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFtQmhDLHVCQUFrQixHQUFzQixJQUFJLG1CQUFZLEVBQU8sQ0FBQztRQUVoRSxxQkFBZ0IsR0FBYSxFQUFFLENBQUM7UUFHOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNuRCwrREFBK0Q7SUFDakUsQ0FBQztJQUNELGtDQUFRLEdBQVI7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNyQix1RkFBdUY7UUFDdkYsQ0FBQztJQUNILENBQUM7SUFDRCx5Q0FBZSxHQUFmLFVBQWdCLFdBQW1CLEVBQUMsYUFBcUIsRUFBRSxjQUFjO1FBRXZFLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVELEVBQUUsQ0FBQSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FDbkIsQ0FBQztZQUNDLE9BQU8sQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7UUFDRCxJQUFJLENBQ0osQ0FBQztZQUNDLE9BQU8sQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUVELHVDQUFhLEdBQWIsVUFBYyxJQUFZLEVBQUUsZUFBZTtRQUN6QyxJQUFJLGNBQWMsR0FBRyxlQUFlLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUV4RCxvQ0FBb0M7UUFDcEMsb0ZBQW9GO1FBQ3BGLDhCQUE4QjtRQUU5QiwwQkFBMEI7UUFDMUIsVUFBVTtRQUNWLG9DQUFvQztRQUNwQyxVQUFVO1FBQ1YsOENBQThDO1FBQzlDLG1CQUFtQjtRQUNuQixTQUFTO1FBQ1QsZ0JBQWdCO1FBQ2hCLHNEQUFzRDtRQUN0RCwyQkFBMkI7UUFDM0IsU0FBUztRQUNULE1BQU07SUFDUixDQUFDO0lBQ00sMEJBQVUsR0FBakI7UUFDSSxNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUE3RkQsSUE2RkM7QUF0RkM7SUFEQyxZQUFLLEVBQUU7OzJDQUN5QztBQUtqRDtJQUhDLFlBQUssRUFBRTtJQUNWLHNEQUFzRDs7O3NEQUUxQjtBQUcxQjtJQURDLFlBQUssRUFBRTs7Z0RBQ1k7QUFHcEI7SUFEQyxZQUFLLEVBQUU7O2dEQUN1QjtBQUcvQjtJQURDLFlBQUssRUFBRTs7Z0RBQ3dCO0FBR2hDO0lBREMsWUFBSyxFQUFFOztvREFDb0I7QUFHNUI7SUFEQyxZQUFLLEVBQUU7O2tEQUNrQjtBQUcxQjtJQURDLFlBQUssRUFBRTs7Z0RBQ2U7QUFNdkI7SUFEQyxZQUFLLEVBQUU7O3FEQUNpQjtBQUl6QjtJQURDLGFBQU0sRUFBRTs4QkFDVyxtQkFBWTsyREFBZ0M7QUF4Q3JELGVBQWU7SUFKM0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSx1QkFBdUI7S0FDckMsQ0FBQztxQ0E2QytCLGlCQUFVO0dBNUM5QixlQUFlLENBNkYzQjtBQTdGWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFJlZmxlY3RpdmVJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHsgVGhlbWVzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RoZW1lL3RoZW1lcyc7XG4vLyBpbXBvcnQgeyBOb3RpZmljYXRpb25Nb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9ub3RpZmljYXRpb24nO1xuXG4vLyBpbXBvcnQgeyBEcmFnZ2FibGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZHJhZ2dhYmxlLXNlcnZpY2UvZHJhZ2dhYmxlLnNlcnZpY2UnO1xuXG4vLyBpbXBvcnQgeyBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90ZW1wbGF0ZS1zZXJ2aWNlL3RlbXBsYXRlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZi1jb3JlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvcmUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENmQ29yZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbi8vICAgaW5qZWN0b3IgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZUFuZENyZWF0ZShbRHJhZ2dhYmxlU2VydmljZV0pO1xuXG4vLyAgIGRyYWdnYWJsZVNlcnZpY2U6IERyYWdnYWJsZVNlcnZpY2U7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGlkOiBzdHJpbmcgPSBDZkNvcmVDb21wb25lbnQuZ2VuZXJhdGVJZCgpO1xuXG4gIEBJbnB1dCgpXG4vLyAgIHB1YmxpYyB0aGVtZUNsYXNzOiBzdHJpbmcgPSBUaGVtZXMuZGVmYXVsdF90aGVtZTtcblxuICBwdWJsaWMgbmF0aXZlRWxlbWVudDogYW55O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0b29sdGlwOiBhbnk7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGRpc3BsYXk6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkaXNhYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGVuYWJsZWRJMThOOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIFxuICBwdWJsaWMgZHJhZ2dhYmxlOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIFxuICBwdWJsaWMgY2ZDbGFzczogc3RyaW5nO1xuXG4vLyAgIEBJbnB1dCgpXG4vLyAgIHB1YmxpYyBub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbk1vZGVsO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjb21wVGVtcGxhdGU6IGFueTtcbiAgYWN0aXZlVGVtcGxhdGU6IGFueTtcblxuICBAT3V0cHV0KClcbiAgbm90aWZpY2F0aW9uQWN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHN1YnNjcmlwdGlvblRhZ3M6IHN0cmluZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLm5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAvLyB0aGlzLmRyYWdnYWJsZVNlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChEcmFnZ2FibGVTZXJ2aWNlKTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5kcmFnZ2FibGUpIHtcbiAgICAvLyAgIHRoaXMuZHJhZ2dhYmxlU2VydmljZS5tYWtlRHJhZ2dhYmxlKHRoaXMuaWQsIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0cnVlKTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlQXR0cmlidXRlKGVsZW1lbnROYW1lOiBzdHJpbmcsYXR0cmlidXRlTmFtZTogc3RyaW5nLCBhdHRyaWJ1dGVWYWx1ZSk6IGJvb2xlYW5cbiAge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudE5hbWUpO1xuICAgIHZhciBteUF0dHIgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgIGlmKG15QXR0ciA9PT0gbnVsbClcbiAgICB7XG4gICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBnZXRNeVRlbXBsYXRlKG5hbWU6IHN0cmluZywgdGVtcGxhdGVzT2JqZWN0KSB7XG4gICAgbGV0IGFjdGl2ZVRlbXBsYXRlID0gdGVtcGxhdGVzT2JqZWN0W1wiZGVmYXVsdFRlbXBsYXRlXCJdO1xuICAgIFxuICAgIC8vIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIC8vICAgdGhpcy50ZW1wbGF0ZVNlcnZpY2UubG9hZFRlbXBsYXRlSnNvbihuYW1lLCB0ZW1wbGF0ZXNPYmplY3QsIHRoaXMuY29tcFRlbXBsYXRlKVxuICAgIC8vICAgICAuc3Vic2NyaWJlKG5ld1RlbXAgPT4ge1xuICAgICAgICAgIFxuICAgIC8vICAgICAgIGlmKG5ld1RlbXAhPW51bGwpXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgYWN0aXZlVGVtcGxhdGUgPSBuZXdUZW1wO1xuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgICB0aGlzLmFjdGl2ZVRlbXBsYXRlID0gYWN0aXZlVGVtcGxhdGU7XG4gICAgLy8gICAgICAgcmVzb2x2ZSgpO1xuICAgIC8vICAgICB9LFxuICAgIC8vICAgICBlcnIgPT4geyBcbiAgICAvLyAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlVGVtcGxhdGUgPSBhY3RpdmVUZW1wbGF0ZTtcbiAgICAvLyAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyB9KTtcbiAgfVxuICBzdGF0aWMgZ2VuZXJhdGVJZCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICcnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwKTtcbiAgfVxufSJdfQ==