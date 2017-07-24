"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
var icon_model_1 = require("./lib/models/icon/icon.model");
var button_model_1 = require("./lib/models/button/button.model");
var input_model_1 = require("./lib/models/input/input.model");
var AppComponent = (function () {
    function AppComponent(fonticon) {
        this.fonticon = fonticon;
        this.registry = [];
        this.options = ['whatever', 'something', 'another'];
        this.buttonDisabled = true;
        this.myFusionIcon = new icon_model_1.IconModel({
            name: 'mdi-done',
            size: 100,
            value: 'whatever',
            toggle: {
                name: 'mdi-block',
                value: 'nonsense',
                size: 100
            }
        });
        this.myFusionButton = new button_model_1.ButtonModel({
            icon: {
                name: 'mdi-star',
                size: '50',
                position: 'right'
            },
            waiting: {
                value: false,
                disabled: true,
                icon: {
                    name: 'mdi-favorite',
                    size: '50',
                    position: 'left'
                }
            }
        });
        this.myFusionInput = new input_model_1.InputModel({
            placeholder: "enter text here",
            hint: "no character limit",
            icon: null
        });
    }
    AppComponent.prototype.onToggle = function () {
        console.log("hello debugger");
        this.buttonDisabled = !this.buttonDisabled;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n  <TabView>\n    <StackLayout *tabItem=\"{title: 'Profile', iconSource: '~/icon.png'}\" >\n        <ListView [items]=\"items\">\n            <template let-item=\"item\">\n                <Label [text]=\"item.itemDesc\"></Label>\n            </template>\n        </ListView>\n    </StackLayout>\n    <StackLayout *tabItem=\"{title: 'Stats'}\">\n        <Label text=\"Second tab item\"></Label>\n    </StackLayout>\n    <StackLayout *tabItem=\"{title: 'Settings'}\">\n        <Label text=\"Third tab item\"></Label>\n    </StackLayout>\n  </TabView>\n  ",
    }),
    __metadata("design:paramtypes", [nativescript_ng2_fonticon_1.TNSFontIconService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBcUQ7QUFDckQsdUVBQStEO0FBQy9ELDJEQUF5RDtBQUN6RCxpRUFBK0Q7QUFDL0QsOERBQTREO0FBd0M1RCxJQUFhLFlBQVk7SUFvQ3ZCLHNCQUFvQixRQUE0QjtRQUE1QixhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQW5DaEQsYUFBUSxHQUFhLEVBQUUsQ0FBQztRQUN4QixZQUFPLEdBQWEsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3pELG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBRS9CLGlCQUFZLEdBQUcsSUFBSSxzQkFBUyxDQUFFO1lBQzVCLElBQUksRUFBRSxVQUFVO1lBQ2hCLElBQUksRUFBRSxHQUFHO1lBQ1QsS0FBSyxFQUFFLFVBQVU7WUFDakIsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxXQUFXO2dCQUNqQixLQUFLLEVBQUUsVUFBVTtnQkFDakIsSUFBSSxFQUFFLEdBQUc7YUFDVjtTQUNGLENBQUMsQ0FBQztRQUNILG1CQUFjLEdBQUcsSUFBSSwwQkFBVyxDQUFFO1lBQ2hDLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsUUFBUSxFQUFFLE9BQU87YUFDbEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osUUFBUSxFQUFFLElBQUk7Z0JBQ2QsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxjQUFjO29CQUNwQixJQUFJLEVBQUUsSUFBSTtvQkFDVixRQUFRLEVBQUUsTUFBTTtpQkFDakI7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUNILGtCQUFhLEdBQUcsSUFBSSx3QkFBVSxDQUFFO1lBQzlCLFdBQVcsRUFBRSxpQkFBaUI7WUFDOUIsSUFBSSxFQUFFLG9CQUFvQjtZQUMxQixJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUMsQ0FBQztJQUdILENBQUM7SUFDRCwrQkFBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdDLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUEzQ0QsSUEyQ0M7QUEzQ1ksWUFBWTtJQXRDeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSwyaUJBZ0JUO0tBbUJGLENBQUM7cUNBcUM4Qiw4Q0FBa0I7R0FwQ3JDLFlBQVksQ0EyQ3hCO0FBM0NZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5nMi1mb250aWNvbic7XG5pbXBvcnQgeyBJY29uTW9kZWwgfSBmcm9tIFwiLi9saWIvbW9kZWxzL2ljb24vaWNvbi5tb2RlbFwiO1xuaW1wb3J0IHsgQnV0dG9uTW9kZWwgfSBmcm9tIFwiLi9saWIvbW9kZWxzL2J1dHRvbi9idXR0b24ubW9kZWxcIjtcbmltcG9ydCB7IElucHV0TW9kZWwgfSBmcm9tIFwiLi9saWIvbW9kZWxzL2lucHV0L2lucHV0Lm1vZGVsXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGU6IGBcbiAgPFRhYlZpZXc+XG4gICAgPFN0YWNrTGF5b3V0ICp0YWJJdGVtPVwie3RpdGxlOiAnUHJvZmlsZScsIGljb25Tb3VyY2U6ICd+L2ljb24ucG5nJ31cIiA+XG4gICAgICAgIDxMaXN0VmlldyBbaXRlbXNdPVwiaXRlbXNcIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBsZXQtaXRlbT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVwiaXRlbS5pdGVtRGVzY1wiPjwvTGFiZWw+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L0xpc3RWaWV3PlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgPFN0YWNrTGF5b3V0ICp0YWJJdGVtPVwie3RpdGxlOiAnU3RhdHMnfVwiPlxuICAgICAgICA8TGFiZWwgdGV4dD1cIlNlY29uZCB0YWIgaXRlbVwiPjwvTGFiZWw+XG4gICAgPC9TdGFja0xheW91dD5cbiAgICA8U3RhY2tMYXlvdXQgKnRhYkl0ZW09XCJ7dGl0bGU6ICdTZXR0aW5ncyd9XCI+XG4gICAgICAgIDxMYWJlbCB0ZXh0PVwiVGhpcmQgdGFiIGl0ZW1cIj48L0xhYmVsPlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIDwvVGFiVmlldz5cbiAgYCxcbiAgLy8gdGVtcGxhdGU6IGBcbiAgLy8gPFN0YWNrTGF5b3V0PlxuICAvLyAgICAgPGNmLWl0ZW0+XG4gIC8vICAgICAgIDxMYWJlbCBjbGFzcz1cImgxXCIgdGV4dD1cIlRoaXMgaXMgYSBoZWFkaW5nXCI+PC9MYWJlbD5cbiAgLy8gICAgICAgPFN0YWNrTGF5b3V0IGl0ZW0tZGV0YWlscz5cbiAgLy8gICAgICAgPExhYmVsIGNsYXNzPVwiaDJcIiB0ZXh0PVwiVGhpcyBpcyBhIHNtYWxsZXIgaGVhZGluZ1wiPjwvTGFiZWw+XG4gIC8vICAgICAgIDxMYWJlbCBjbGFzcz1cImJvZHlcIiB0ZXh0V3JhcD1cInRydWVcIiB0ZXh0PVwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlwiPjwvTGFiZWw+XG4gIC8vICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gIC8vICAgICA8L2NmLWl0ZW0+XG4gIC8vICAgICA8Y2YtaXRlbT5cbiAgLy8gICAgICAgPExhYmVsIGNsYXNzPVwiaDFcIiB0ZXh0PVwiVGhpcyBpcyBhIGhlYWRpbmdcIj48L0xhYmVsPlxuICAvLyAgICAgICA8U3RhY2tMYXlvdXQgaXRlbS1kZXRhaWxzPlxuICAvLyAgICAgICA8TGFiZWwgY2xhc3M9XCJoMlwiIHRleHQ9XCJUaGlzIGlzIGEgc21hbGxlciBoZWFkaW5nXCI+PC9MYWJlbD5cbiAgLy8gICAgICAgPExhYmVsIGNsYXNzPVwiYm9keVwiIHRleHRXcmFwPVwidHJ1ZVwiIHRleHQ9XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCI+PC9MYWJlbD5cbiAgLy8gICAgICAgPC9TdGFja0xheW91dD5cbiAgLy8gICAgIDwvY2YtaXRlbT5cbiAgLy8gPC9TdGFja0xheW91dD5cbiAgLy8gYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICByZWdpc3RyeTogc3RyaW5nW10gPSBbXTtcbiAgb3B0aW9uczogc3RyaW5nW10gPSBbJ3doYXRldmVyJywgJ3NvbWV0aGluZycsICdhbm90aGVyJ107XG4gIGJ1dHRvbkRpc2FibGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgZGF0YUJvdW5kVmFyaWFibGU6IGFueTtcbiAgbXlGdXNpb25JY29uID0gbmV3IEljb25Nb2RlbCAoe1xuICAgIG5hbWU6ICdtZGktZG9uZScsXG4gICAgc2l6ZTogMTAwLFxuICAgIHZhbHVlOiAnd2hhdGV2ZXInLFxuICAgIHRvZ2dsZToge1xuICAgICAgbmFtZTogJ21kaS1ibG9jaycsXG4gICAgICB2YWx1ZTogJ25vbnNlbnNlJyxcbiAgICAgIHNpemU6IDEwMFxuICAgIH1cbiAgfSk7XG4gIG15RnVzaW9uQnV0dG9uID0gbmV3IEJ1dHRvbk1vZGVsICh7XG4gICAgaWNvbjoge1xuICAgICAgbmFtZTogJ21kaS1zdGFyJyxcbiAgICAgIHNpemU6ICc1MCcsXG4gICAgICBwb3NpdGlvbjogJ3JpZ2h0J1xuICAgIH0sXG4gICAgd2FpdGluZzoge1xuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICBpY29uOiB7XG4gICAgICAgIG5hbWU6ICdtZGktZmF2b3JpdGUnLFxuICAgICAgICBzaXplOiAnNTAnLFxuICAgICAgICBwb3NpdGlvbjogJ2xlZnQnXG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgbXlGdXNpb25JbnB1dCA9IG5ldyBJbnB1dE1vZGVsICh7XG4gICAgcGxhY2Vob2xkZXI6IFwiZW50ZXIgdGV4dCBoZXJlXCIsXG4gICAgaGludDogXCJubyBjaGFyYWN0ZXIgbGltaXRcIixcbiAgICBpY29uOiBudWxsXG4gIH0pO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UpIHtcbiAgICBcbiAgfVxuICBvblRvZ2dsZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvIGRlYnVnZ2VyXCIpO1xuICAgIHRoaXMuYnV0dG9uRGlzYWJsZWQgPSAhdGhpcy5idXR0b25EaXNhYmxlZDtcbiAgfVxufVxuIl19