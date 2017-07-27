"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
var AppComponent = (function () {
    function AppComponent(fonticon) {
        this.fonticon = fonticon;
        this.registry = [];
        this.options = ['whatever', 'something', 'another'];
        this.buttonDisabled = true;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n    <StackLayout>\n      <cf-image url=\"http://coolwildlife.com/wp-content/uploads/galleries/post-3004/Fox%20Picture%20003.jpg\" label=\"a fox\"></cf-image>\n      <cf-rating></cf-rating>\n    </StackLayout>\n  ",
        styleUrls: []
    }),
    __metadata("design:paramtypes", [nativescript_ng2_fonticon_1.TNSFontIconService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBcUQ7QUFDckQsdUVBQStEO0FBZS9ELElBQWEsWUFBWTtJQU12QixzQkFBb0IsUUFBNEI7UUFBNUIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFMaEQsYUFBUSxHQUFhLEVBQUUsQ0FBQztRQUN4QixZQUFPLEdBQWEsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3pELG1CQUFjLEdBQVksSUFBSSxDQUFDO0lBSS9CLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksWUFBWTtJQVZ4QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLHdOQUtUO1FBQ0QsU0FBUyxFQUFFLEVBQUU7S0FDZCxDQUFDO3FDQU84Qiw4Q0FBa0I7R0FOckMsWUFBWSxDQVF4QjtBQVJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5nMi1mb250aWNvbic7XG5pbXBvcnQgeyBJY29uTW9kZWwgfSBmcm9tIFwiLi9saWIvbW9kZWxzL2ljb24vaWNvbi5tb2RlbFwiO1xuaW1wb3J0IHsgQnV0dG9uTW9kZWwgfSBmcm9tIFwiLi9saWIvbW9kZWxzL2J1dHRvbi9idXR0b24ubW9kZWxcIjtcbmltcG9ydCB7IElucHV0TW9kZWwgfSBmcm9tIFwiLi9saWIvbW9kZWxzL2lucHV0L2lucHV0Lm1vZGVsXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICA8Y2YtaW1hZ2UgdXJsPVwiaHR0cDovL2Nvb2x3aWxkbGlmZS5jb20vd3AtY29udGVudC91cGxvYWRzL2dhbGxlcmllcy9wb3N0LTMwMDQvRm94JTIwUGljdHVyZSUyMDAwMy5qcGdcIiBsYWJlbD1cImEgZm94XCI+PC9jZi1pbWFnZT5cbiAgICAgIDxjZi1yYXRpbmc+PC9jZi1yYXRpbmc+XG4gICAgPC9TdGFja0xheW91dD5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICByZWdpc3RyeTogc3RyaW5nW10gPSBbXTtcbiAgb3B0aW9uczogc3RyaW5nW10gPSBbJ3doYXRldmVyJywgJ3NvbWV0aGluZycsICdhbm90aGVyJ107XG4gIGJ1dHRvbkRpc2FibGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgZGF0YUJvdW5kVmFyaWFibGU6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UpIHtcbiAgfVxufVxuIl19