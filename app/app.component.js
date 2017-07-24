"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
var input_model_1 = require("./lib/models/input/input.model");
var AppComponent = (function () {
    function AppComponent(fonticon) {
        this.fonticon = fonticon;
        this.registry = [];
        this.options = ['whateer', 'something', 'another'];
        this.buttonDisabled = true;
        this.myFusionInput = new input_model_1.InputModel({
            placeholder: "enter text here",
            hint: "no character limit",
            icon: null
        });
    }
    AppComponent.prototype.onToggle = function () {
        this.buttonDisabled = !this.buttonDisabled;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n  <StackLayout>\n    <cf-icon></cf-icon>\n    <cf-button></cf-button>\n    <cf-switch></cf-switch>\n  </StackLayout>\n  ",
        styleUrls: ['./app.css']
    }),
    __metadata("design:paramtypes", [nativescript_ng2_fonticon_1.TNSFontIconService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBcUQ7QUFDckQsdUVBQStEO0FBRy9ELDhEQUE0RDtBQWE1RCxJQUFhLFlBQVk7SUFXdkIsc0JBQW9CLFFBQTRCO1FBQTVCLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBVmhELGFBQVEsR0FBYSxFQUFFLENBQUM7UUFDeEIsWUFBTyxHQUFhLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN4RCxtQkFBYyxHQUFZLElBQUksQ0FBQztRQUcvQixrQkFBYSxHQUFHLElBQUksd0JBQVUsQ0FBRTtZQUM5QixXQUFXLEVBQUUsaUJBQWlCO1lBQzlCLElBQUksRUFBRSxvQkFBb0I7WUFDMUIsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDLENBQUM7SUFHSCxDQUFDO0lBQ0QsK0JBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdDLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7QUFqQlksWUFBWTtJQVh4QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLDRIQU1UO1FBQ0QsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDO0tBQ3pCLENBQUM7cUNBWThCLDhDQUFrQjtHQVhyQyxZQUFZLENBaUJ4QjtBQWpCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZzItZm9udGljb24nO1xuaW1wb3J0IHsgSWNvbk1vZGVsIH0gZnJvbSBcIi4vbGliL21vZGVscy9pY29uL2ljb24ubW9kZWxcIjtcbmltcG9ydCB7IEJ1dHRvbk1vZGVsIH0gZnJvbSBcIi4vbGliL21vZGVscy9idXR0b24vYnV0dG9uLm1vZGVsXCI7XG5pbXBvcnQgeyBJbnB1dE1vZGVsIH0gZnJvbSBcIi4vbGliL21vZGVscy9pbnB1dC9pbnB1dC5tb2RlbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlOiBgXG4gIDxTdGFja0xheW91dD5cbiAgICA8Y2YtaWNvbj48L2NmLWljb24+XG4gICAgPGNmLWJ1dHRvbj48L2NmLWJ1dHRvbj5cbiAgICA8Y2Ytc3dpdGNoPjwvY2Ytc3dpdGNoPlxuICA8L1N0YWNrTGF5b3V0PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9hcHAuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgcmVnaXN0cnk6IHN0cmluZ1tdID0gW107XG4gIG9wdGlvbnM6IHN0cmluZ1tdID0gWyd3aGF0ZWVyJywgJ3NvbWV0aGluZycsICdhbm90aGVyJ107XG4gIGJ1dHRvbkRpc2FibGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgZGF0YUJvdW5kVmFyaWFibGU6IGFueTtcblxuICBteUZ1c2lvbklucHV0ID0gbmV3IElucHV0TW9kZWwgKHtcbiAgICBwbGFjZWhvbGRlcjogXCJlbnRlciB0ZXh0IGhlcmVcIixcbiAgICBoaW50OiBcIm5vIGNoYXJhY3RlciBsaW1pdFwiLFxuICAgIGljb246IG51bGxcbiAgfSk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSkge1xuICAgIFxuICB9XG4gIG9uVG9nZ2xlKCkge1xuICAgIHRoaXMuYnV0dG9uRGlzYWJsZWQgPSAhdGhpcy5idXR0b25EaXNhYmxlZDtcbiAgfVxufVxuIl19