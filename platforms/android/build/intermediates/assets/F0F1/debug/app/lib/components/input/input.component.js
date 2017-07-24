"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var icon_model_1 = require("../../models/icon/icon.model");
var input_model_1 = require("../../models/input/input.model");
var core_component_1 = require("../core/core.component");
var CfInputComponent = (function (_super) {
    __extends(CfInputComponent, _super);
    function CfInputComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClick = new core_1.EventEmitter();
        _this.iconPosition = 'left';
        _this.hint = "whatever";
        _this.placeholder = "here is stuff";
        _this.maxlength = 10;
        _this.myFusionIcon = new icon_model_1.IconModel({
            name: 'mdi-done',
            size: 40,
            value: 'whatever'
        });
        return _this;
    }
    return CfInputComponent;
}(core_component_1.CfCoreComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", input_model_1.InputModel)
], CfInputComponent.prototype, "cfInput", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CfInputComponent.prototype, "onClick", void 0);
CfInputComponent = __decorate([
    core_1.Component({
        selector: "cf-input",
        templateUrl: "./lib/components/input/input.component.html"
    })
], CfInputComponent);
exports.CfInputComponent = CfInputComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStFO0FBRS9FLDJEQUF3RDtBQUN4RCw4REFBMkQ7QUFDM0QseURBQXlEO0FBTXpELElBQWEsZ0JBQWdCO0lBQVMsb0NBQWU7SUFKckQ7UUFBQSxxRUFpQkM7UUFYVyxhQUFPLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFFdkMsa0JBQVksR0FBVyxNQUFNLENBQUM7UUFDOUIsVUFBSSxHQUFXLFVBQVUsQ0FBQztRQUMxQixpQkFBVyxHQUFXLGVBQWUsQ0FBQztRQUN0QyxlQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLGtCQUFZLEdBQUcsSUFBSSxzQkFBUyxDQUFFO1lBQzVCLElBQUksRUFBRSxVQUFVO1lBQ2hCLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLFVBQVU7U0FDbEIsQ0FBQyxDQUFDOztJQUNMLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFiRCxDQUFzQyxnQ0FBZSxHQWFwRDtBQVpVO0lBQVIsWUFBSyxFQUFFOzhCQUFVLHdCQUFVO2lEQUFDO0FBQ25CO0lBQVQsYUFBTSxFQUFFOztpREFBOEI7QUFGNUIsZ0JBQWdCO0lBSjVCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsNkNBQTZDO0tBQzNELENBQUM7R0FDVyxnQkFBZ0IsQ0FhNUI7QUFiWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnR7IEljb25Nb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9pY29uL2ljb24ubW9kZWwnO1xuaW1wb3J0eyBJbnB1dE1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2lucHV0L2lucHV0Lm1vZGVsJztcbmltcG9ydCB7IENmQ29yZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvY29yZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiY2YtaW5wdXRcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9saWIvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIENmSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBDZkNvcmVDb21wb25lbnQge1xuICBASW5wdXQoKSBjZklucHV0OiBJbnB1dE1vZGVsO1xuICBAT3V0cHV0KCkgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgdmFsdWVNb2RlbDogc3RyaW5nO1xuICBpY29uUG9zaXRpb246IHN0cmluZyA9ICdsZWZ0JztcbiAgaGludDogc3RyaW5nID0gXCJ3aGF0ZXZlclwiO1xuICBwbGFjZWhvbGRlcjogc3RyaW5nID0gXCJoZXJlIGlzIHN0dWZmXCI7XG4gIG1heGxlbmd0aDogbnVtYmVyID0gMTA7XG4gIG15RnVzaW9uSWNvbiA9IG5ldyBJY29uTW9kZWwgKHtcbiAgICBuYW1lOiAnbWRpLWRvbmUnLFxuICAgIHNpemU6IDQwLFxuICAgIHZhbHVlOiAnd2hhdGV2ZXInXG4gIH0pO1xufSJdfQ==