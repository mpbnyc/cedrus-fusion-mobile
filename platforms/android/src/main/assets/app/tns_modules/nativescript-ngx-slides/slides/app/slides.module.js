"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var slides_component_1 = require("./slides/slides.component");
var slide_component_1 = require("./slide/slide.component");
var SlidesModule = (function () {
    function SlidesModule() {
    }
    return SlidesModule;
}());
SlidesModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        exports: [slide_component_1.SlideComponent, slides_component_1.SlidesComponent],
        declarations: [slides_component_1.SlidesComponent, slide_component_1.SlideComponent],
        providers: [],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], SlidesModule);
exports.SlidesModule = SlidesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNsaWRlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsMENBQStDO0FBRS9DLDhEQUE0RDtBQUM1RCwyREFBeUQ7QUFXekQsSUFBYSxZQUFZO0lBQXpCO0lBQTRCLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFBN0IsSUFBNkI7QUFBaEIsWUFBWTtJQVR4QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO1FBQ3ZCLE9BQU8sRUFBRSxDQUFDLGdDQUFjLEVBQUUsa0NBQWUsQ0FBQztRQUMxQyxZQUFZLEVBQUUsQ0FBQyxrQ0FBZSxFQUFFLGdDQUFjLENBQUM7UUFDL0MsU0FBUyxFQUFFLEVBQUU7UUFDYixPQUFPLEVBQUU7WUFDTCx1QkFBZ0I7U0FDbkI7S0FDSixDQUFDO0dBQ1csWUFBWSxDQUFJO0FBQWhCLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IFNsaWRlc0NvbXBvbmVudCB9IGZyb20gJy4vc2xpZGVzL3NsaWRlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTbGlkZUNvbXBvbmVudCB9IGZyb20gJy4vc2xpZGUvc2xpZGUuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICAgIGV4cG9ydHM6IFtTbGlkZUNvbXBvbmVudCwgU2xpZGVzQ29tcG9uZW50XSxcclxuICAgIGRlY2xhcmF0aW9uczogW1NsaWRlc0NvbXBvbmVudCwgU2xpZGVDb21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOiBbXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTbGlkZXNNb2R1bGUgeyB9XHJcbiJdfQ==