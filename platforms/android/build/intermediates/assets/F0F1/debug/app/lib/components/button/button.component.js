"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var button_model_1 = require("../../models/button/button.model");
var core_component_1 = require("../core/core.component");
var CfButtonComponent = (function (_super) {
    __extends(CfButtonComponent, _super);
    function CfButtonComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabled = false;
        _this.cfOnTap = new core_1.EventEmitter();
        return _this;
    }
    CfButtonComponent.prototype.onTap = function () {
        this.cfOnTap.emit();
    };
    return CfButtonComponent;
}(core_component_1.CfCoreComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", button_model_1.ButtonModel)
], CfButtonComponent.prototype, "cfButton", void 0);
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
    __metadata("design:type", Boolean)
], CfButtonComponent.prototype, "wait", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CfButtonComponent.prototype, "disabled", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CfButtonComponent.prototype, "cfOnTap", void 0);
CfButtonComponent = __decorate([
    core_1.Component({
        selector: "cf-button",
        templateUrl: './lib/components/button/button.component.html'
    })
], CfButtonComponent);
exports.CfButtonComponent = CfButtonComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0U7QUFFL0UsaUVBQStEO0FBQy9ELHlEQUF5RDtBQU16RCxJQUFhLGlCQUFpQjtJQUFTLHFDQUFlO0lBSnREO1FBQUEscUVBZ0JDO1FBUFUsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUV6QixhQUFPLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7O0lBS3pDLENBQUM7SUFIQyxpQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBWkQsQ0FBdUMsZ0NBQWUsR0FZckQ7QUFYVTtJQUFSLFlBQUssRUFBRTs4QkFBVywwQkFBVzttREFBQztBQUN0QjtJQUFSLFlBQUssRUFBRTs7Z0RBQWU7QUFDZDtJQUFSLFlBQUssRUFBRTs7bURBQWtCO0FBQ2pCO0lBQVIsWUFBSyxFQUFFOzsrQ0FBZTtBQUNkO0lBQVIsWUFBSyxFQUFFOzttREFBMkI7QUFFekI7SUFBVCxhQUFNLEVBQUU7O2tEQUE4QjtBQVA1QixpQkFBaUI7SUFKN0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSwrQ0FBK0M7S0FDN0QsQ0FBQztHQUNXLGlCQUFpQixDQVk3QjtBQVpZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSWNvbk1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ljb24vaWNvbi5tb2RlbCc7XG5pbXBvcnQgeyBCdXR0b25Nb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9idXR0b24vYnV0dG9uLm1vZGVsJztcbmltcG9ydCB7IENmQ29yZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvY29yZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiY2YtYnV0dG9uXCIsXG4gIHRlbXBsYXRlVXJsOiAnLi9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDZkJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIENmQ29yZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNmQnV0dG9uOiBCdXR0b25Nb2RlbDtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgaWNvbk5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgd2FpdDogYm9vbGVhbjtcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgY2ZPblRhcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBvblRhcCgpIHtcbiAgICB0aGlzLmNmT25UYXAuZW1pdCgpO1xuICB9XG59Il19