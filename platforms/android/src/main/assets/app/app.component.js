"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
var dialogs = require("tns-core-modules/ui/dialogs");
var AppComponent = (function () {
    function AppComponent(fonticon) {
        this.fonticon = fonticon;
        this.myPictures = [{
                url: "http://coolwildlife.com/wp-content/uploads/galleries/post-3004/Fox%20Picture%20003.jpg",
                caption: "a fox"
            },
            {
                url: "http://www.pestworld.org/media/561871/istock_000001190722_large.jpg",
                caption: "a raccoon"
            }
        ];
        this.registry = [];
        this.options = ['whatever', 'something', 'another'];
        this.buttonDisabled = true;
    }
    AppComponent.prototype.onButtonTap = function () {
        dialogs.alert('hello friend');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n    <StackLayout>\n      <cf-button (onTap)=\"onButtonTap()\"></cf-button>\n      <cf-rating></cf-rating>\n      <cf-input></cf-input>\n    </StackLayout>\n  ",
        styleUrls: []
    }),
    __metadata("design:paramtypes", [nativescript_ng2_fonticon_1.TNSFontIconService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBcUQ7QUFDckQsdUVBQStEO0FBTS9ELHFEQUF1RDtBQWF2RCxJQUFhLFlBQVk7SUFtQnZCLHNCQUFvQixRQUE0QjtRQUE1QixhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQWxCaEQsZUFBVSxHQUFVLENBQUM7Z0JBQ25CLEdBQUcsRUFBRSx3RkFBd0Y7Z0JBQzdGLE9BQU8sRUFBRSxPQUFPO2FBQ2pCO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLHFFQUFxRTtnQkFDMUUsT0FBTyxFQUFFLFdBQVc7YUFDckI7U0FDRixDQUFBO1FBQ0MsYUFBUSxHQUFhLEVBQUUsQ0FBQztRQUN4QixZQUFPLEdBQWEsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3pELG1CQUFjLEdBQVksSUFBSSxDQUFDO0lBUS9CLENBQUM7SUFMRCxrQ0FBVyxHQUFYO1FBQ0UsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBSUgsbUJBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDO0FBckJZLFlBQVk7SUFYeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxrS0FNVDtRQUNELFNBQVMsRUFBRSxFQUFFO0tBQ2QsQ0FBQztxQ0FvQjhCLDhDQUFrQjtHQW5CckMsWUFBWSxDQXFCeEI7QUFyQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmcyLWZvbnRpY29uJztcbmltcG9ydCB7IEljb25Nb2RlbCB9IGZyb20gXCIuL2xpYi9tb2RlbHMvaWNvbi9pY29uLm1vZGVsXCI7XG5pbXBvcnQgeyBCdXR0b25Nb2RlbCB9IGZyb20gXCIuL2xpYi9tb2RlbHMvYnV0dG9uL2J1dHRvbi5tb2RlbFwiO1xuaW1wb3J0IHsgSW5wdXRNb2RlbCB9IGZyb20gXCIuL2xpYi9tb2RlbHMvaW5wdXQvaW5wdXQubW9kZWxcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxTdGFja0xheW91dD5cbiAgICAgIDxjZi1idXR0b24gKG9uVGFwKT1cIm9uQnV0dG9uVGFwKClcIj48L2NmLWJ1dHRvbj5cbiAgICAgIDxjZi1yYXRpbmc+PC9jZi1yYXRpbmc+XG4gICAgICA8Y2YtaW5wdXQ+PC9jZi1pbnB1dD5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICBgLFxuICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIG15UGljdHVyZXM6IGFueVtdID0gW3tcbiAgICB1cmw6IFwiaHR0cDovL2Nvb2x3aWxkbGlmZS5jb20vd3AtY29udGVudC91cGxvYWRzL2dhbGxlcmllcy9wb3N0LTMwMDQvRm94JTIwUGljdHVyZSUyMDAwMy5qcGdcIixcbiAgICBjYXB0aW9uOiBcImEgZm94XCJcbiAgfSxcbiAge1xuICAgIHVybDogXCJodHRwOi8vd3d3LnBlc3R3b3JsZC5vcmcvbWVkaWEvNTYxODcxL2lzdG9ja18wMDAwMDExOTA3MjJfbGFyZ2UuanBnXCIsXG4gICAgY2FwdGlvbjogXCJhIHJhY2Nvb25cIlxuICB9XG5dXG4gIHJlZ2lzdHJ5OiBzdHJpbmdbXSA9IFtdO1xuICBvcHRpb25zOiBzdHJpbmdbXSA9IFsnd2hhdGV2ZXInLCAnc29tZXRoaW5nJywgJ2Fub3RoZXInXTtcbiAgYnV0dG9uRGlzYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICBkYXRhQm91bmRWYXJpYWJsZTogYW55O1xuXG4gIG9uQnV0dG9uVGFwKCkge1xuICAgIGRpYWxvZ3MuYWxlcnQoJ2hlbGxvIGZyaWVuZCcpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlKSB7XG4gIH1cbn1cbiJdfQ==