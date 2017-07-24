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
        template: "\n  <TabView>\n    <StackLayout *tabItem=\"{title: 'Profile', iconSource: '~/icon.png'}\">\n        <Label class=\"h1 blue\" text=\"Some Things\"></Label>\n        <Label textWrap=\"true\" class=\"body\" text=\"3 wolf moon stumptown heirloom, pour-over intelligentsia small batch chicharrones chillwave. Viral knausgaard church-key mlkshk next level vice venmo, sustainable ennui neutra man bun. Air plant roof party forage lomo viral, artisan man braid tilde. Lomo messenger bag synth poutine offal leggings four loko four dollar toast lumbersexual organic. Tofu schlitz church-key unicorn synth fixie quinoa shaman pork belly artisan cornhole vape master cleanse kogi. Polaroid hexagon vaporware cardigan subway tile raclette. Vegan skateboard man bun knausgaard blog roof party literally truffaut shabby chic. Vexillologist cloud bread kitsch sustainable listicle pinterest raw denim tofu trust fund. Shaman kickstarter chicharrones, unicorn gochujang man bun thundercats farm-to-table poutine pickled air plant.\"></Label>\n        <FAB (tap)=\"fabTap()\" icon=\"res://ic_add_white\" rippleColor=\"#f1f1f1\" class=\"fab-button\"></FAB>\n    </StackLayout>\n    <StackLayout *tabItem=\"{title: 'Stats'}\">\n        <Label text=\"Second tab item\"></Label>\n    </StackLayout>\n    <StackLayout *tabItem=\"{title: 'Settings'}\">\n        <Label text=\"Third tab item\"></Label>\n    </StackLayout>\n  </TabView>\n  ",
        styleUrls: ['./app.css']
        // template: `
        // <StackLayout>
        //     <cf-item>
        //       <Label class="h1" text="This is a heading"></Label>
        //       <StackLayout item-details>
        //       <Label class="h2" text="This is a smaller heading"></Label>
        //       <Label class="body" textWrap="true" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></Label>
        //       </StackLayout>
        //     </cf-item>
        //     <cf-item>
        //       <Label class="h1" text="This is a heading"></Label>
        //       <StackLayout item-details>
        //       <Label class="h2" text="This is a smaller heading"></Label>
        //       <Label class="body" textWrap="true" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></Label>
        //       </StackLayout>
        //     </cf-item>
        // </StackLayout>
        // `
    }),
    __metadata("design:paramtypes", [nativescript_ng2_fonticon_1.TNSFontIconService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBcUQ7QUFDckQsdUVBQStEO0FBQy9ELDJEQUF5RDtBQUN6RCxpRUFBK0Q7QUFDL0QsOERBQTREO0FBdUM1RCxJQUFhLFlBQVk7SUFvQ3ZCLHNCQUFvQixRQUE0QjtRQUE1QixhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQW5DaEQsYUFBUSxHQUFhLEVBQUUsQ0FBQztRQUN4QixZQUFPLEdBQWEsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3pELG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBRS9CLGlCQUFZLEdBQUcsSUFBSSxzQkFBUyxDQUFFO1lBQzVCLElBQUksRUFBRSxVQUFVO1lBQ2hCLElBQUksRUFBRSxHQUFHO1lBQ1QsS0FBSyxFQUFFLFVBQVU7WUFDakIsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxXQUFXO2dCQUNqQixLQUFLLEVBQUUsVUFBVTtnQkFDakIsSUFBSSxFQUFFLEdBQUc7YUFDVjtTQUNGLENBQUMsQ0FBQztRQUNILG1CQUFjLEdBQUcsSUFBSSwwQkFBVyxDQUFFO1lBQ2hDLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsUUFBUSxFQUFFLE9BQU87YUFDbEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osUUFBUSxFQUFFLElBQUk7Z0JBQ2QsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxjQUFjO29CQUNwQixJQUFJLEVBQUUsSUFBSTtvQkFDVixRQUFRLEVBQUUsTUFBTTtpQkFDakI7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUNILGtCQUFhLEdBQUcsSUFBSSx3QkFBVSxDQUFFO1lBQzlCLFdBQVcsRUFBRSxpQkFBaUI7WUFDOUIsSUFBSSxFQUFFLG9CQUFvQjtZQUMxQixJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUMsQ0FBQztJQUdILENBQUM7SUFDRCwrQkFBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdDLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUEzQ0QsSUEyQ0M7QUEzQ1ksWUFBWTtJQXJDeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSwyNENBY1Q7UUFDRCxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7UUFDeEIsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsNERBQTREO1FBQzVELG1DQUFtQztRQUNuQyxvRUFBb0U7UUFDcEUsMGZBQTBmO1FBQzFmLHVCQUF1QjtRQUN2QixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLDREQUE0RDtRQUM1RCxtQ0FBbUM7UUFDbkMsb0VBQW9FO1FBQ3BFLDBmQUEwZjtRQUMxZix1QkFBdUI7UUFDdkIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixJQUFJO0tBQ0wsQ0FBQztxQ0FxQzhCLDhDQUFrQjtHQXBDckMsWUFBWSxDQTJDeEI7QUEzQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmcyLWZvbnRpY29uJztcbmltcG9ydCB7IEljb25Nb2RlbCB9IGZyb20gXCIuL2xpYi9tb2RlbHMvaWNvbi9pY29uLm1vZGVsXCI7XG5pbXBvcnQgeyBCdXR0b25Nb2RlbCB9IGZyb20gXCIuL2xpYi9tb2RlbHMvYnV0dG9uL2J1dHRvbi5tb2RlbFwiO1xuaW1wb3J0IHsgSW5wdXRNb2RlbCB9IGZyb20gXCIuL2xpYi9tb2RlbHMvaW5wdXQvaW5wdXQubW9kZWxcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZTogYFxuICA8VGFiVmlldz5cbiAgICA8U3RhY2tMYXlvdXQgKnRhYkl0ZW09XCJ7dGl0bGU6ICdQcm9maWxlJywgaWNvblNvdXJjZTogJ34vaWNvbi5wbmcnfVwiPlxuICAgICAgICA8TGFiZWwgY2xhc3M9XCJoMSBibHVlXCIgdGV4dD1cIlNvbWUgVGhpbmdzXCI+PC9MYWJlbD5cbiAgICAgICAgPExhYmVsIHRleHRXcmFwPVwidHJ1ZVwiIGNsYXNzPVwiYm9keVwiIHRleHQ9XCIzIHdvbGYgbW9vbiBzdHVtcHRvd24gaGVpcmxvb20sIHBvdXItb3ZlciBpbnRlbGxpZ2VudHNpYSBzbWFsbCBiYXRjaCBjaGljaGFycm9uZXMgY2hpbGx3YXZlLiBWaXJhbCBrbmF1c2dhYXJkIGNodXJjaC1rZXkgbWxrc2hrIG5leHQgbGV2ZWwgdmljZSB2ZW5tbywgc3VzdGFpbmFibGUgZW5udWkgbmV1dHJhIG1hbiBidW4uIEFpciBwbGFudCByb29mIHBhcnR5IGZvcmFnZSBsb21vIHZpcmFsLCBhcnRpc2FuIG1hbiBicmFpZCB0aWxkZS4gTG9tbyBtZXNzZW5nZXIgYmFnIHN5bnRoIHBvdXRpbmUgb2ZmYWwgbGVnZ2luZ3MgZm91ciBsb2tvIGZvdXIgZG9sbGFyIHRvYXN0IGx1bWJlcnNleHVhbCBvcmdhbmljLiBUb2Z1IHNjaGxpdHogY2h1cmNoLWtleSB1bmljb3JuIHN5bnRoIGZpeGllIHF1aW5vYSBzaGFtYW4gcG9yayBiZWxseSBhcnRpc2FuIGNvcm5ob2xlIHZhcGUgbWFzdGVyIGNsZWFuc2Uga29naS4gUG9sYXJvaWQgaGV4YWdvbiB2YXBvcndhcmUgY2FyZGlnYW4gc3Vid2F5IHRpbGUgcmFjbGV0dGUuIFZlZ2FuIHNrYXRlYm9hcmQgbWFuIGJ1biBrbmF1c2dhYXJkIGJsb2cgcm9vZiBwYXJ0eSBsaXRlcmFsbHkgdHJ1ZmZhdXQgc2hhYmJ5IGNoaWMuIFZleGlsbG9sb2dpc3QgY2xvdWQgYnJlYWQga2l0c2NoIHN1c3RhaW5hYmxlIGxpc3RpY2xlIHBpbnRlcmVzdCByYXcgZGVuaW0gdG9mdSB0cnVzdCBmdW5kLiBTaGFtYW4ga2lja3N0YXJ0ZXIgY2hpY2hhcnJvbmVzLCB1bmljb3JuIGdvY2h1amFuZyBtYW4gYnVuIHRodW5kZXJjYXRzIGZhcm0tdG8tdGFibGUgcG91dGluZSBwaWNrbGVkIGFpciBwbGFudC5cIj48L0xhYmVsPlxuICAgICAgICA8RkFCICh0YXApPVwiZmFiVGFwKClcIiBpY29uPVwicmVzOi8vaWNfYWRkX3doaXRlXCIgcmlwcGxlQ29sb3I9XCIjZjFmMWYxXCIgY2xhc3M9XCJmYWItYnV0dG9uXCI+PC9GQUI+XG4gICAgPC9TdGFja0xheW91dD5cbiAgICA8U3RhY2tMYXlvdXQgKnRhYkl0ZW09XCJ7dGl0bGU6ICdTdGF0cyd9XCI+XG4gICAgICAgIDxMYWJlbCB0ZXh0PVwiU2Vjb25kIHRhYiBpdGVtXCI+PC9MYWJlbD5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDxTdGFja0xheW91dCAqdGFiSXRlbT1cInt0aXRsZTogJ1NldHRpbmdzJ31cIj5cbiAgICAgICAgPExhYmVsIHRleHQ9XCJUaGlyZCB0YWIgaXRlbVwiPjwvTGFiZWw+XG4gICAgPC9TdGFja0xheW91dD5cbiAgPC9UYWJWaWV3PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9hcHAuY3NzJ11cbiAgLy8gdGVtcGxhdGU6IGBcbiAgLy8gPFN0YWNrTGF5b3V0PlxuICAvLyAgICAgPGNmLWl0ZW0+XG4gIC8vICAgICAgIDxMYWJlbCBjbGFzcz1cImgxXCIgdGV4dD1cIlRoaXMgaXMgYSBoZWFkaW5nXCI+PC9MYWJlbD5cbiAgLy8gICAgICAgPFN0YWNrTGF5b3V0IGl0ZW0tZGV0YWlscz5cbiAgLy8gICAgICAgPExhYmVsIGNsYXNzPVwiaDJcIiB0ZXh0PVwiVGhpcyBpcyBhIHNtYWxsZXIgaGVhZGluZ1wiPjwvTGFiZWw+XG4gIC8vICAgICAgIDxMYWJlbCBjbGFzcz1cImJvZHlcIiB0ZXh0V3JhcD1cInRydWVcIiB0ZXh0PVwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlwiPjwvTGFiZWw+XG4gIC8vICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gIC8vICAgICA8L2NmLWl0ZW0+XG4gIC8vICAgICA8Y2YtaXRlbT5cbiAgLy8gICAgICAgPExhYmVsIGNsYXNzPVwiaDFcIiB0ZXh0PVwiVGhpcyBpcyBhIGhlYWRpbmdcIj48L0xhYmVsPlxuICAvLyAgICAgICA8U3RhY2tMYXlvdXQgaXRlbS1kZXRhaWxzPlxuICAvLyAgICAgICA8TGFiZWwgY2xhc3M9XCJoMlwiIHRleHQ9XCJUaGlzIGlzIGEgc21hbGxlciBoZWFkaW5nXCI+PC9MYWJlbD5cbiAgLy8gICAgICAgPExhYmVsIGNsYXNzPVwiYm9keVwiIHRleHRXcmFwPVwidHJ1ZVwiIHRleHQ9XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCI+PC9MYWJlbD5cbiAgLy8gICAgICAgPC9TdGFja0xheW91dD5cbiAgLy8gICAgIDwvY2YtaXRlbT5cbiAgLy8gPC9TdGFja0xheW91dD5cbiAgLy8gYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICByZWdpc3RyeTogc3RyaW5nW10gPSBbXTtcbiAgb3B0aW9uczogc3RyaW5nW10gPSBbJ3doYXRldmVyJywgJ3NvbWV0aGluZycsICdhbm90aGVyJ107XG4gIGJ1dHRvbkRpc2FibGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgZGF0YUJvdW5kVmFyaWFibGU6IGFueTtcbiAgbXlGdXNpb25JY29uID0gbmV3IEljb25Nb2RlbCAoe1xuICAgIG5hbWU6ICdtZGktZG9uZScsXG4gICAgc2l6ZTogMTAwLFxuICAgIHZhbHVlOiAnd2hhdGV2ZXInLFxuICAgIHRvZ2dsZToge1xuICAgICAgbmFtZTogJ21kaS1ibG9jaycsXG4gICAgICB2YWx1ZTogJ25vbnNlbnNlJyxcbiAgICAgIHNpemU6IDEwMFxuICAgIH1cbiAgfSk7XG4gIG15RnVzaW9uQnV0dG9uID0gbmV3IEJ1dHRvbk1vZGVsICh7XG4gICAgaWNvbjoge1xuICAgICAgbmFtZTogJ21kaS1zdGFyJyxcbiAgICAgIHNpemU6ICc1MCcsXG4gICAgICBwb3NpdGlvbjogJ3JpZ2h0J1xuICAgIH0sXG4gICAgd2FpdGluZzoge1xuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICBpY29uOiB7XG4gICAgICAgIG5hbWU6ICdtZGktZmF2b3JpdGUnLFxuICAgICAgICBzaXplOiAnNTAnLFxuICAgICAgICBwb3NpdGlvbjogJ2xlZnQnXG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgbXlGdXNpb25JbnB1dCA9IG5ldyBJbnB1dE1vZGVsICh7XG4gICAgcGxhY2Vob2xkZXI6IFwiZW50ZXIgdGV4dCBoZXJlXCIsXG4gICAgaGludDogXCJubyBjaGFyYWN0ZXIgbGltaXRcIixcbiAgICBpY29uOiBudWxsXG4gIH0pO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UpIHtcbiAgICBcbiAgfVxuICBvblRvZ2dsZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvIGRlYnVnZ2VyXCIpO1xuICAgIHRoaXMuYnV0dG9uRGlzYWJsZWQgPSAhdGhpcy5idXR0b25EaXNhYmxlZDtcbiAgfVxufVxuIl19