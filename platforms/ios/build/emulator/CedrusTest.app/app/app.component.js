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
        template: "\n  <TabView>\n    <StackLayout *tabItem=\"{title: 'Profile', iconSource: '~/icon.png'}\">\n        <Label textWrap=\"true\" class=\"body\" text=\"3 wolf moon stumptown heirloom, pour-over intelligentsia small batch chicharrones chillwave. Viral knausgaard church-key mlkshk next level vice venmo, sustainable ennui neutra man bun. Air plant roof party forage lomo viral, artisan man braid tilde. Lomo messenger bag synth poutine offal leggings four loko four dollar toast lumbersexual organic. Tofu schlitz church-key unicorn synth fixie quinoa shaman pork belly artisan cornhole vape master cleanse kogi. Polaroid hexagon vaporware cardigan subway tile raclette. Vegan skateboard man bun knausgaard blog roof party literally truffaut shabby chic. Vexillologist cloud bread kitsch sustainable listicle pinterest raw denim tofu trust fund. Shaman kickstarter chicharrones, unicorn gochujang man bun thundercats farm-to-table poutine pickled air plant. Banjo pour-over literally unicorn flannel pinterest chia disrupt shaman 3 wolf moon next level williamsburg plaid. Occupy glossier chambray vegan, kombucha raw denim VHS subway tile helvetica kitsch. DIY whatever affogato, mumblecore post-ironic kitsch schlitz ramps direct trade asymmetrical. Adaptogen bushwick microdosing, YOLO hexagon single-origin coffee church-key. Hexagon hashtag ennui chillwave scenester freegan readymade chambray.\"></Label>\n        <FAB (tap)=\"fabTap()\" icon=\"res://ic_add_white\" rippleColor=\"#f1f1f1\" class=\"fab-button\"></FAB>\n    </StackLayout>\n    <StackLayout *tabItem=\"{title: 'Stats'}\">\n        <Label text=\"Second tab item\"></Label>\n    </StackLayout>\n    <StackLayout *tabItem=\"{title: 'Settings'}\">\n        <Label text=\"Third tab item\"></Label>\n    </StackLayout>\n  </TabView>\n  ",
        styles: ["\n  .fab-button {\n    height: 70;\n    width: 70;\n    margin: 15;\n    background-color: #ff4081; \n    horizontal-align: right; \n    vertical-align: bottom;\n    position: absolute;\n    }"
        ]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBcUQ7QUFDckQsdUVBQStEO0FBQy9ELDJEQUF5RDtBQUN6RCxpRUFBK0Q7QUFDL0QsOERBQTREO0FBZ0Q1RCxJQUFhLFlBQVk7SUFvQ3ZCLHNCQUFvQixRQUE0QjtRQUE1QixhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQW5DaEQsYUFBUSxHQUFhLEVBQUUsQ0FBQztRQUN4QixZQUFPLEdBQWEsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3pELG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBRS9CLGlCQUFZLEdBQUcsSUFBSSxzQkFBUyxDQUFFO1lBQzVCLElBQUksRUFBRSxVQUFVO1lBQ2hCLElBQUksRUFBRSxHQUFHO1lBQ1QsS0FBSyxFQUFFLFVBQVU7WUFDakIsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxXQUFXO2dCQUNqQixLQUFLLEVBQUUsVUFBVTtnQkFDakIsSUFBSSxFQUFFLEdBQUc7YUFDVjtTQUNGLENBQUMsQ0FBQztRQUNILG1CQUFjLEdBQUcsSUFBSSwwQkFBVyxDQUFFO1lBQ2hDLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsUUFBUSxFQUFFLE9BQU87YUFDbEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osUUFBUSxFQUFFLElBQUk7Z0JBQ2QsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxjQUFjO29CQUNwQixJQUFJLEVBQUUsSUFBSTtvQkFDVixRQUFRLEVBQUUsTUFBTTtpQkFDakI7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUNILGtCQUFhLEdBQUcsSUFBSSx3QkFBVSxDQUFFO1lBQzlCLFdBQVcsRUFBRSxpQkFBaUI7WUFDOUIsSUFBSSxFQUFFLG9CQUFvQjtZQUMxQixJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUMsQ0FBQztJQUdILENBQUM7SUFDRCwrQkFBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdDLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUEzQ0QsSUEyQ0M7QUEzQ1ksWUFBWTtJQTlDeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxxd0RBYVQ7UUFDRCxNQUFNLEVBQUUsQ0FBQyxrTUFTTDtTQUNIO1FBQ0QsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsNERBQTREO1FBQzVELG1DQUFtQztRQUNuQyxvRUFBb0U7UUFDcEUsMGZBQTBmO1FBQzFmLHVCQUF1QjtRQUN2QixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLDREQUE0RDtRQUM1RCxtQ0FBbUM7UUFDbkMsb0VBQW9FO1FBQ3BFLDBmQUEwZjtRQUMxZix1QkFBdUI7UUFDdkIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixJQUFJO0tBQ0wsQ0FBQztxQ0FxQzhCLDhDQUFrQjtHQXBDckMsWUFBWSxDQTJDeEI7QUEzQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmcyLWZvbnRpY29uJztcbmltcG9ydCB7IEljb25Nb2RlbCB9IGZyb20gXCIuL2xpYi9tb2RlbHMvaWNvbi9pY29uLm1vZGVsXCI7XG5pbXBvcnQgeyBCdXR0b25Nb2RlbCB9IGZyb20gXCIuL2xpYi9tb2RlbHMvYnV0dG9uL2J1dHRvbi5tb2RlbFwiO1xuaW1wb3J0IHsgSW5wdXRNb2RlbCB9IGZyb20gXCIuL2xpYi9tb2RlbHMvaW5wdXQvaW5wdXQubW9kZWxcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZTogYFxuICA8VGFiVmlldz5cbiAgICA8U3RhY2tMYXlvdXQgKnRhYkl0ZW09XCJ7dGl0bGU6ICdQcm9maWxlJywgaWNvblNvdXJjZTogJ34vaWNvbi5wbmcnfVwiPlxuICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XCJ0cnVlXCIgY2xhc3M9XCJib2R5XCIgdGV4dD1cIjMgd29sZiBtb29uIHN0dW1wdG93biBoZWlybG9vbSwgcG91ci1vdmVyIGludGVsbGlnZW50c2lhIHNtYWxsIGJhdGNoIGNoaWNoYXJyb25lcyBjaGlsbHdhdmUuIFZpcmFsIGtuYXVzZ2FhcmQgY2h1cmNoLWtleSBtbGtzaGsgbmV4dCBsZXZlbCB2aWNlIHZlbm1vLCBzdXN0YWluYWJsZSBlbm51aSBuZXV0cmEgbWFuIGJ1bi4gQWlyIHBsYW50IHJvb2YgcGFydHkgZm9yYWdlIGxvbW8gdmlyYWwsIGFydGlzYW4gbWFuIGJyYWlkIHRpbGRlLiBMb21vIG1lc3NlbmdlciBiYWcgc3ludGggcG91dGluZSBvZmZhbCBsZWdnaW5ncyBmb3VyIGxva28gZm91ciBkb2xsYXIgdG9hc3QgbHVtYmVyc2V4dWFsIG9yZ2FuaWMuIFRvZnUgc2NobGl0eiBjaHVyY2gta2V5IHVuaWNvcm4gc3ludGggZml4aWUgcXVpbm9hIHNoYW1hbiBwb3JrIGJlbGx5IGFydGlzYW4gY29ybmhvbGUgdmFwZSBtYXN0ZXIgY2xlYW5zZSBrb2dpLiBQb2xhcm9pZCBoZXhhZ29uIHZhcG9yd2FyZSBjYXJkaWdhbiBzdWJ3YXkgdGlsZSByYWNsZXR0ZS4gVmVnYW4gc2thdGVib2FyZCBtYW4gYnVuIGtuYXVzZ2FhcmQgYmxvZyByb29mIHBhcnR5IGxpdGVyYWxseSB0cnVmZmF1dCBzaGFiYnkgY2hpYy4gVmV4aWxsb2xvZ2lzdCBjbG91ZCBicmVhZCBraXRzY2ggc3VzdGFpbmFibGUgbGlzdGljbGUgcGludGVyZXN0IHJhdyBkZW5pbSB0b2Z1IHRydXN0IGZ1bmQuIFNoYW1hbiBraWNrc3RhcnRlciBjaGljaGFycm9uZXMsIHVuaWNvcm4gZ29jaHVqYW5nIG1hbiBidW4gdGh1bmRlcmNhdHMgZmFybS10by10YWJsZSBwb3V0aW5lIHBpY2tsZWQgYWlyIHBsYW50LiBCYW5qbyBwb3VyLW92ZXIgbGl0ZXJhbGx5IHVuaWNvcm4gZmxhbm5lbCBwaW50ZXJlc3QgY2hpYSBkaXNydXB0IHNoYW1hbiAzIHdvbGYgbW9vbiBuZXh0IGxldmVsIHdpbGxpYW1zYnVyZyBwbGFpZC4gT2NjdXB5IGdsb3NzaWVyIGNoYW1icmF5IHZlZ2FuLCBrb21idWNoYSByYXcgZGVuaW0gVkhTIHN1YndheSB0aWxlIGhlbHZldGljYSBraXRzY2guIERJWSB3aGF0ZXZlciBhZmZvZ2F0bywgbXVtYmxlY29yZSBwb3N0LWlyb25pYyBraXRzY2ggc2NobGl0eiByYW1wcyBkaXJlY3QgdHJhZGUgYXN5bW1ldHJpY2FsLiBBZGFwdG9nZW4gYnVzaHdpY2sgbWljcm9kb3NpbmcsIFlPTE8gaGV4YWdvbiBzaW5nbGUtb3JpZ2luIGNvZmZlZSBjaHVyY2gta2V5LiBIZXhhZ29uIGhhc2h0YWcgZW5udWkgY2hpbGx3YXZlIHNjZW5lc3RlciBmcmVlZ2FuIHJlYWR5bWFkZSBjaGFtYnJheS5cIj48L0xhYmVsPlxuICAgICAgICA8RkFCICh0YXApPVwiZmFiVGFwKClcIiBpY29uPVwicmVzOi8vaWNfYWRkX3doaXRlXCIgcmlwcGxlQ29sb3I9XCIjZjFmMWYxXCIgY2xhc3M9XCJmYWItYnV0dG9uXCI+PC9GQUI+XG4gICAgPC9TdGFja0xheW91dD5cbiAgICA8U3RhY2tMYXlvdXQgKnRhYkl0ZW09XCJ7dGl0bGU6ICdTdGF0cyd9XCI+XG4gICAgICAgIDxMYWJlbCB0ZXh0PVwiU2Vjb25kIHRhYiBpdGVtXCI+PC9MYWJlbD5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDxTdGFja0xheW91dCAqdGFiSXRlbT1cInt0aXRsZTogJ1NldHRpbmdzJ31cIj5cbiAgICAgICAgPExhYmVsIHRleHQ9XCJUaGlyZCB0YWIgaXRlbVwiPjwvTGFiZWw+XG4gICAgPC9TdGFja0xheW91dD5cbiAgPC9UYWJWaWV3PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gIC5mYWItYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDcwO1xuICAgIHdpZHRoOiA3MDtcbiAgICBtYXJnaW46IDE1O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjQwODE7IFxuICAgIGhvcml6b250YWwtYWxpZ246IHJpZ2h0OyBcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9YFxuICBdXG4gIC8vIHRlbXBsYXRlOiBgXG4gIC8vIDxTdGFja0xheW91dD5cbiAgLy8gICAgIDxjZi1pdGVtPlxuICAvLyAgICAgICA8TGFiZWwgY2xhc3M9XCJoMVwiIHRleHQ9XCJUaGlzIGlzIGEgaGVhZGluZ1wiPjwvTGFiZWw+XG4gIC8vICAgICAgIDxTdGFja0xheW91dCBpdGVtLWRldGFpbHM+XG4gIC8vICAgICAgIDxMYWJlbCBjbGFzcz1cImgyXCIgdGV4dD1cIlRoaXMgaXMgYSBzbWFsbGVyIGhlYWRpbmdcIj48L0xhYmVsPlxuICAvLyAgICAgICA8TGFiZWwgY2xhc3M9XCJib2R5XCIgdGV4dFdyYXA9XCJ0cnVlXCIgdGV4dD1cIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIj48L0xhYmVsPlxuICAvLyAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAvLyAgICAgPC9jZi1pdGVtPlxuICAvLyAgICAgPGNmLWl0ZW0+XG4gIC8vICAgICAgIDxMYWJlbCBjbGFzcz1cImgxXCIgdGV4dD1cIlRoaXMgaXMgYSBoZWFkaW5nXCI+PC9MYWJlbD5cbiAgLy8gICAgICAgPFN0YWNrTGF5b3V0IGl0ZW0tZGV0YWlscz5cbiAgLy8gICAgICAgPExhYmVsIGNsYXNzPVwiaDJcIiB0ZXh0PVwiVGhpcyBpcyBhIHNtYWxsZXIgaGVhZGluZ1wiPjwvTGFiZWw+XG4gIC8vICAgICAgIDxMYWJlbCBjbGFzcz1cImJvZHlcIiB0ZXh0V3JhcD1cInRydWVcIiB0ZXh0PVwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlwiPjwvTGFiZWw+XG4gIC8vICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gIC8vICAgICA8L2NmLWl0ZW0+XG4gIC8vIDwvU3RhY2tMYXlvdXQ+XG4gIC8vIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgcmVnaXN0cnk6IHN0cmluZ1tdID0gW107XG4gIG9wdGlvbnM6IHN0cmluZ1tdID0gWyd3aGF0ZXZlcicsICdzb21ldGhpbmcnLCAnYW5vdGhlciddO1xuICBidXR0b25EaXNhYmxlZDogYm9vbGVhbiA9IHRydWU7XG4gIGRhdGFCb3VuZFZhcmlhYmxlOiBhbnk7XG4gIG15RnVzaW9uSWNvbiA9IG5ldyBJY29uTW9kZWwgKHtcbiAgICBuYW1lOiAnbWRpLWRvbmUnLFxuICAgIHNpemU6IDEwMCxcbiAgICB2YWx1ZTogJ3doYXRldmVyJyxcbiAgICB0b2dnbGU6IHtcbiAgICAgIG5hbWU6ICdtZGktYmxvY2snLFxuICAgICAgdmFsdWU6ICdub25zZW5zZScsXG4gICAgICBzaXplOiAxMDBcbiAgICB9XG4gIH0pO1xuICBteUZ1c2lvbkJ1dHRvbiA9IG5ldyBCdXR0b25Nb2RlbCAoe1xuICAgIGljb246IHtcbiAgICAgIG5hbWU6ICdtZGktc3RhcicsXG4gICAgICBzaXplOiAnNTAnLFxuICAgICAgcG9zaXRpb246ICdyaWdodCdcbiAgICB9LFxuICAgIHdhaXRpbmc6IHtcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgaWNvbjoge1xuICAgICAgICBuYW1lOiAnbWRpLWZhdm9yaXRlJyxcbiAgICAgICAgc2l6ZTogJzUwJyxcbiAgICAgICAgcG9zaXRpb246ICdsZWZ0J1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIG15RnVzaW9uSW5wdXQgPSBuZXcgSW5wdXRNb2RlbCAoe1xuICAgIHBsYWNlaG9sZGVyOiBcImVudGVyIHRleHQgaGVyZVwiLFxuICAgIGhpbnQ6IFwibm8gY2hhcmFjdGVyIGxpbWl0XCIsXG4gICAgaWNvbjogbnVsbFxuICB9KTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlKSB7XG4gICAgXG4gIH1cbiAgb25Ub2dnbGUoKSB7XG4gICAgY29uc29sZS5sb2coXCJoZWxsbyBkZWJ1Z2dlclwiKTtcbiAgICB0aGlzLmJ1dHRvbkRpc2FibGVkID0gIXRoaXMuYnV0dG9uRGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==