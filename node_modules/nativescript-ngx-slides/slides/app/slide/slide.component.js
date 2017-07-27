"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SlideComponent = (function () {
    function SlideComponent() {
        this.cssClass = '';
        this.cssClass = this.cssClass ? this.cssClass : '';
    }
    Object.defineProperty(SlideComponent.prototype, "slideWidth", {
        set: function (width) {
            this.layout.width = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideComponent.prototype, "slideHeight", {
        set: function (height) {
            this.layout.height = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideComponent.prototype, "layout", {
        get: function () {
            return this.slideLayout.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    return SlideComponent;
}());
__decorate([
    core_1.ViewChild('slideLayout'),
    __metadata("design:type", core_1.ElementRef)
], SlideComponent.prototype, "slideLayout", void 0);
__decorate([
    core_1.Input('class'),
    __metadata("design:type", String)
], SlideComponent.prototype, "cssClass", void 0);
SlideComponent = __decorate([
    core_1.Component({
        selector: 'slide',
        template: "\n\t<StackLayout #slideLayout [class]=\"cssClass\">\n\t\t<ng-content></ng-content>\n\t</StackLayout>\n\t",
    }),
    __metadata("design:paramtypes", [])
], SlideComponent);
exports.SlideComponent = SlideComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2xpZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdGO0FBY2hGLElBQWEsY0FBYztJQWlCMUI7UUFmZ0IsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQWdCckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFmRCxzQkFBSSxzQ0FBVTthQUFkLFVBQWUsS0FBYTtZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1Q0FBVzthQUFmLFVBQWdCLE1BQXVCO1lBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFRLE1BQU0sQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUdELHNCQUFJLGtDQUFNO2FBQVY7WUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUE7UUFDdEMsQ0FBQzs7O09BQUE7SUFLRixxQkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFuQjBCO0lBQXpCLGdCQUFTLENBQUMsYUFBYSxDQUFDOzhCQUFjLGlCQUFVO21EQUFDO0FBQ2xDO0lBQWYsWUFBSyxDQUFDLE9BQU8sQ0FBQzs7Z0RBQXVCO0FBRjFCLGNBQWM7SUFUMUIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRSwwR0FJVDtLQUNELENBQUM7O0dBRVcsY0FBYyxDQW9CMUI7QUFwQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcclxuaW1wb3J0ICogYXMgZ2VzdHVyZXMgZnJvbSAndWkvZ2VzdHVyZXMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc2xpZGUnLFxyXG5cdHRlbXBsYXRlOiBgXHJcblx0PFN0YWNrTGF5b3V0ICNzbGlkZUxheW91dCBbY2xhc3NdPVwiY3NzQ2xhc3NcIj5cclxuXHRcdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuXHQ8L1N0YWNrTGF5b3V0PlxyXG5cdGAsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2xpZGVDb21wb25lbnQge1xyXG5cdEBWaWV3Q2hpbGQoJ3NsaWRlTGF5b3V0Jykgc2xpZGVMYXlvdXQ6IEVsZW1lbnRSZWY7XHJcblx0QElucHV0KCdjbGFzcycpIGNzc0NsYXNzOiBzdHJpbmcgPSAnJztcclxuXHJcblx0c2V0IHNsaWRlV2lkdGgod2lkdGg6IG51bWJlcikge1xyXG5cdFx0dGhpcy5sYXlvdXQud2lkdGggPSB3aWR0aDtcclxuXHR9XHJcblxyXG5cdHNldCBzbGlkZUhlaWdodChoZWlnaHQ6IG51bWJlciB8IHN0cmluZykge1xyXG5cdFx0dGhpcy5sYXlvdXQuaGVpZ2h0ID0gPGFueT5oZWlnaHQ7XHJcblx0fVxyXG5cclxuXHJcblx0Z2V0IGxheW91dCgpOiBTdGFja0xheW91dCB7XHJcblx0XHRyZXR1cm4gdGhpcy5zbGlkZUxheW91dC5uYXRpdmVFbGVtZW50XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuY3NzQ2xhc3MgPSB0aGlzLmNzc0NsYXNzID8gdGhpcy5jc3NDbGFzcyA6ICcnO1xyXG5cdH1cclxufSJdfQ==