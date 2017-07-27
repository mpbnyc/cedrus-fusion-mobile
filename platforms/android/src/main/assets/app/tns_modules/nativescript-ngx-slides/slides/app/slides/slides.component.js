"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var slide_component_1 = require("../slide/slide.component");
var gestures = require("ui/gestures");
var platform = require("platform");
var AnimationModule = require("ui/animation");
var enums_1 = require("ui/enums");
var app = require("application");
var absolute_layout_1 = require("ui/layouts/absolute-layout");
var stack_layout_1 = require("ui/layouts/stack-layout");
var direction;
(function (direction) {
    direction[direction["none"] = 0] = "none";
    direction[direction["left"] = 1] = "left";
    direction[direction["right"] = 2] = "right";
})(direction || (direction = {}));
var cancellationReason;
(function (cancellationReason) {
    cancellationReason[cancellationReason["user"] = 0] = "user";
    cancellationReason[cancellationReason["noPrevSlides"] = 1] = "noPrevSlides";
    cancellationReason[cancellationReason["noMoreSlides"] = 2] = "noMoreSlides";
})(cancellationReason || (cancellationReason = {}));
var SlidesComponent = (function () {
    function SlidesComponent(ref) {
        this.ref = ref;
        this.cssClass = '';
        this.changed = new core_1.EventEmitter();
        this.finished = new core_1.EventEmitter();
        this.direction = direction.none;
        this.FOOTER_HEIGHT = 50;
        this.indicators = [];
    }
    Object.defineProperty(SlidesComponent.prototype, "hasNext", {
        get: function () {
            return !!this.currentSlide && !!this.currentSlide.right;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlidesComponent.prototype, "hasPrevious", {
        get: function () {
            return !!this.currentSlide && !!this.currentSlide.left;
        },
        enumerable: true,
        configurable: true
    });
    SlidesComponent.prototype.ngOnInit = function () {
        this.loop = this.loop ? this.loop : false;
        this.pageIndicators = this.pageIndicators ? this.pageIndicators : false;
        this.pageWidth = this.pageWidth ? this.pageWidth : platform.screen.mainScreen.widthDIPs;
        this.pageHeight = this.pageHeight ? this.pageHeight : platform.screen.mainScreen.heightDIPs;
        this.footerMarginTop = this.footerMarginTop ? this.footerMarginTop : this.calculateFoorterMarginTop(this.pageHeight);
        // handle orientation change
        app.on(app.orientationChangedEvent, this.onOrientationChanged, this);
    };
    SlidesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // loop through slides and setup height and widith
        this.slides.forEach(function (slide) {
            absolute_layout_1.AbsoluteLayout.setLeft(slide.layout, _this.pageWidth);
            slide.slideWidth = _this.pageWidth;
            slide.slideHeight = _this.pageHeight;
        });
        this.currentSlide = this.buildSlideMap(this.slides.toArray());
        if (this.currentSlide) {
            this.positionSlides(this.currentSlide);
            this.applySwipe(this.pageWidth);
        }
        if (this.pageIndicators) {
            this.buildFooter(this.slides.length);
            this.setActivePageIndicator(0);
        }
    };
    SlidesComponent.prototype.ngOnDestroy = function () {
        app.off(app.orientationChangedEvent, this.onOrientationChanged, this);
    };
    SlidesComponent.prototype.onOrientationChanged = function (args) {
        var _this = this;
        // event and page orientation didn't seem to always be on the same page so
        // setting it in the time out addresses this.
        setTimeout(function () {
            // the values are either 'landscape' or 'portrait'
            // platform.screen.mainScreen.heightDIPs/widthDIPs holds original screen size
            if (args.newValue === 'landscape') {
                _this.pageWidth = (app.android) ?
                    platform.screen.mainScreen.heightDIPs : platform.screen.mainScreen.widthDIPs;
                _this.pageHeight = (app.android) ?
                    platform.screen.mainScreen.widthDIPs : platform.screen.mainScreen.heightDIPs;
            }
            else {
                _this.pageWidth = platform.screen.mainScreen.widthDIPs;
                _this.pageHeight = platform.screen.mainScreen.heightDIPs;
            }
            _this.footerMarginTop = _this.calculateFoorterMarginTop(_this.pageHeight);
            // loop through slides and setup height and widith
            _this.slides.forEach(function (slide) {
                absolute_layout_1.AbsoluteLayout.setLeft(slide.layout, _this.pageWidth);
                slide.slideWidth = _this.pageWidth;
                slide.slideHeight = _this.pageHeight;
                slide.layout.eachLayoutChild(function (view) {
                    if (view instanceof stack_layout_1.StackLayout) {
                        absolute_layout_1.AbsoluteLayout.setLeft(view, _this.pageWidth);
                        view.width = _this.pageWidth;
                        view.height = _this.pageHeight;
                    }
                });
            });
            if (_this.currentSlide) {
                _this.positionSlides(_this.currentSlide);
            }
            if (_this.pageIndicators) {
                _this.buildFooter(_this.slides.length);
            }
        }, 17); // one frame @ 60 frames/s, no flicker
    };
    SlidesComponent.prototype.setActivePageIndicator = function (activeIndex) {
        this.indicators.map(function (indicator, index) {
            if (index === activeIndex) {
                indicator.active = true;
            }
            else {
                indicator.active = false;
            }
        });
        this.indicators = this.indicators.slice();
        this.ref.detectChanges();
    };
    //
    // private  functions
    //
    // position footer
    SlidesComponent.prototype.calculateFoorterMarginTop = function (pageHeight) {
        return pageHeight - (pageHeight / 6);
    };
    // footer stuff
    SlidesComponent.prototype.buildFooter = function (pageCount) {
        if (pageCount === void 0) { pageCount = 5; }
        var footerSection = this.footer.nativeElement;
        footerSection.horizontalAlignment = 'center';
        footerSection.orientation = 'horizontal';
        footerSection.marginTop = this.footerMarginTop;
        footerSection.height = this.FOOTER_HEIGHT;
        footerSection.width = this.pageWidth;
        if (app.ios) {
            footerSection.clipToBounds = false;
        }
        var index = 0;
        this.indicators = [];
        while (index < pageCount) {
            this.indicators.push({ active: false });
            index++;
        }
    };
    SlidesComponent.prototype.setupPanel = function (slide) {
        this.direction = direction.none;
        this.transitioning = false;
        this.currentSlide.slide.layout.off('pan');
        this.currentSlide = slide;
        // sets up each slide so that they are positioned to transition either way.
        this.positionSlides(this.currentSlide);
        //if (this.disablePan === false) {
        this.applySwipe(this.pageWidth);
        //}
        if (this.pageIndicators) {
            this.setActivePageIndicator(this.currentSlide.index);
        }
        this.changed.next(this.currentSlide.index);
        if (this.currentSlide.index === this.slides.length - 1) {
            this.finished.next(null);
        }
    };
    SlidesComponent.prototype.positionSlides = function (slide) {
        // sets up each slide so that they are positioned to transition either way.
        if (slide.left != null && slide.left.slide != null) {
            slide.left.slide.layout.translateX = -this.pageWidth * 2;
        }
        slide.slide.layout.translateX = -this.pageWidth;
        if (slide.right != null && slide.right.slide != null) {
            slide.right.slide.layout.translateX = 0;
        }
    };
    SlidesComponent.prototype.showRightSlide = function (slideMap, offset, endingVelocity, duration) {
        if (offset === void 0) { offset = this.pageWidth; }
        if (endingVelocity === void 0) { endingVelocity = 32; }
        if (duration === void 0) { duration = 300; }
        var animationDuration;
        animationDuration = duration; // default value
        var transition = new Array();
        transition.push({
            target: slideMap.right.slide.layout,
            translate: { x: -this.pageWidth, y: 0 },
            duration: animationDuration,
            curve: enums_1.AnimationCurve.easeOut
        });
        transition.push({
            target: slideMap.slide.layout,
            translate: { x: -this.pageWidth * 2, y: 0 },
            duration: animationDuration,
            curve: enums_1.AnimationCurve.easeOut
        });
        var animationSet = new AnimationModule.Animation(transition, false);
        return animationSet.play();
    };
    SlidesComponent.prototype.showLeftSlide = function (slideMap, offset, endingVelocity, duration) {
        if (offset === void 0) { offset = this.pageWidth; }
        if (endingVelocity === void 0) { endingVelocity = 32; }
        if (duration === void 0) { duration = 300; }
        var animationDuration;
        animationDuration = duration; // default value
        var transition = new Array();
        transition.push({
            target: slideMap.left.slide.layout,
            translate: { x: -this.pageWidth, y: 0 },
            duration: animationDuration,
            curve: enums_1.AnimationCurve.easeOut
        });
        transition.push({
            target: slideMap.slide.layout,
            translate: { x: 0, y: 0 },
            duration: animationDuration,
            curve: enums_1.AnimationCurve.easeOut
        });
        var animationSet = new AnimationModule.Animation(transition, false);
        return animationSet.play();
    };
    SlidesComponent.prototype.applySwipe = function (pageWidth) {
        var _this = this;
        var previousDelta = -1; //hack to get around ios firing pan event after release
        var endingVelocity = 0;
        var startTime, deltaTime;
        this.transitioning = false;
        this.currentSlide.slide.layout.on('pan', function (args) {
            if (args.state === gestures.GestureStateTypes.began) {
                startTime = Date.now();
                previousDelta = 0;
                endingVelocity = 250;
                //this.triggerStartEvent();
            }
            else if (args.state === gestures.GestureStateTypes.ended) {
                deltaTime = Date.now() - startTime;
                // if velocityScrolling is enabled then calculate the velocitty
                // swiping left to right.
                if (args.deltaX > (pageWidth / 3)) {
                    if (_this.hasPrevious) {
                        _this.transitioning = true;
                        _this.showLeftSlide(_this.currentSlide, args.deltaX, endingVelocity).then(function () {
                            _this.setupPanel(_this.currentSlide.left);
                            //this.triggerChangeEventLeftToRight();
                        });
                    }
                    else {
                        //We're at the start
                        //Notify no more slides
                        //this.triggerCancelEvent(cancellationReason.noPrevSlides);
                    }
                    return;
                }
                else if (args.deltaX < (-pageWidth / 3)) {
                    if (_this.hasNext) {
                        _this.transitioning = true;
                        _this.showRightSlide(_this.currentSlide, args.deltaX, endingVelocity).then(function () {
                            _this.setupPanel(_this.currentSlide.right);
                            // Notify changed
                            //this.triggerChangeEventRightToLeft();
                            if (!_this.hasNext) {
                                // Notify finsihed
                                // this.notify({
                                // 	eventName: SlideContainer.FINISHED_EVENT,
                                // 	object: this
                                // });
                            }
                        });
                    }
                    else {
                        // We're at the end
                        // Notify no more slides
                        //this.triggerCancelEvent(cancellationReason.noMoreSlides);
                    }
                    return;
                }
                if (_this.transitioning === false) {
                    //Notify cancelled
                    //this.triggerCancelEvent(cancellationReason.user);
                    _this.transitioning = true;
                    _this.currentSlide.slide.layout.animate({
                        translate: { x: -_this.pageWidth, y: 0 },
                        duration: 200,
                        curve: enums_1.AnimationCurve.easeOut
                    });
                    if (_this.hasNext) {
                        _this.currentSlide.right.slide.layout.animate({
                            translate: { x: 0, y: 0 },
                            duration: 200,
                            curve: enums_1.AnimationCurve.easeOut
                        });
                        if (app.ios)
                            _this.currentSlide.right.slide.layout.translateX = 0;
                    }
                    if (_this.hasPrevious) {
                        _this.currentSlide.left.slide.layout.animate({
                            translate: { x: -_this.pageWidth * 2, y: 0 },
                            duration: 200,
                            curve: enums_1.AnimationCurve.easeOut
                        });
                        if (app.ios)
                            _this.currentSlide.left.slide.layout.translateX = -_this.pageWidth;
                    }
                    if (app.ios)
                        _this.currentSlide.slide.layout.translateX = -_this.pageWidth;
                    _this.transitioning = false;
                }
            }
            else {
                if (!_this.transitioning
                    && previousDelta !== args.deltaX
                    && args.deltaX != null
                    && args.deltaX < 0) {
                    if (_this.hasNext) {
                        _this.direction = direction.left;
                        _this.currentSlide.slide.layout.translateX = args.deltaX - _this.pageWidth;
                        _this.currentSlide.right.slide.layout.translateX = args.deltaX;
                    }
                }
                else if (!_this.transitioning
                    && previousDelta !== args.deltaX
                    && args.deltaX != null
                    && args.deltaX > 0) {
                    if (_this.hasPrevious) {
                        _this.direction = direction.right;
                        _this.currentSlide.slide.layout.translateX = args.deltaX - _this.pageWidth;
                        _this.currentSlide.left.slide.layout.translateX = -(_this.pageWidth * 2) + args.deltaX;
                    }
                }
                if (args.deltaX !== 0) {
                    previousDelta = args.deltaX;
                }
            }
        });
    };
    SlidesComponent.prototype.buildSlideMap = function (slides) {
        var _this = this;
        this._slideMap = [];
        slides.forEach(function (slide, index) {
            _this._slideMap.push({
                slide: slide,
                index: index,
            });
        });
        this._slideMap.forEach(function (mapping, index) {
            if (_this._slideMap[index - 1] != null)
                mapping.left = _this._slideMap[index - 1];
            if (_this._slideMap[index + 1] != null)
                mapping.right = _this._slideMap[index + 1];
        });
        if (this.loop) {
            this._slideMap[0].left = this._slideMap[this._slideMap.length - 1];
            this._slideMap[this._slideMap.length - 1].right = this._slideMap[0];
        }
        return this._slideMap[0];
    };
    SlidesComponent.prototype.GoToSlide = function (num, traverseDuration, landingDuration) {
        var _this = this;
        if (traverseDuration === void 0) { traverseDuration = 50; }
        if (landingDuration === void 0) { landingDuration = 200; }
        if (this.currentSlide.index == num)
            return;
        var duration = landingDuration;
        if (Math.abs(num - this.currentSlide.index) != 1)
            duration = traverseDuration;
        if (this.currentSlide.index < num)
            this.nextSlide(duration).then(function () { return _this.GoToSlide(num); });
        else
            this.previousSlide(duration).then(function () { return _this.GoToSlide(num); });
    };
    SlidesComponent.prototype.nextSlide = function (duration) {
        var _this = this;
        if (!this.hasNext) {
            //this.triggerCancelEvent(cancellationReason.noMoreSlides);
            return;
        }
        this.direction = direction.left;
        this.transitioning = true;
        //	this.triggerStartEvent();
        return this.showRightSlide(this.currentSlide, null, null, duration).then(function () {
            _this.setupPanel(_this.currentSlide.right);
            //this.triggerChangeEventRightToLeft();
        });
    };
    SlidesComponent.prototype.previousSlide = function (duration) {
        var _this = this;
        if (!this.hasPrevious) {
            //this.triggerCancelEvent(cancellationReason.noPrevSlides);
            return;
        }
        this.direction = direction.right;
        this.transitioning = true;
        //this.triggerStartEvent();
        return this.showLeftSlide(this.currentSlide, null, null, duration).then(function () {
            _this.setupPanel(_this.currentSlide.left);
            //this.triggerChangeEventLeftToRight();
        });
    };
    return SlidesComponent;
}());
__decorate([
    core_1.ContentChildren(core_1.forwardRef(function () { return slide_component_1.SlideComponent; })),
    __metadata("design:type", core_1.QueryList)
], SlidesComponent.prototype, "slides", void 0);
__decorate([
    core_1.ViewChild('footer'),
    __metadata("design:type", core_1.ElementRef)
], SlidesComponent.prototype, "footer", void 0);
__decorate([
    core_1.Input('pageWidth'),
    __metadata("design:type", Number)
], SlidesComponent.prototype, "pageWidth", void 0);
__decorate([
    core_1.Input('pageHeight'),
    __metadata("design:type", Number)
], SlidesComponent.prototype, "pageHeight", void 0);
__decorate([
    core_1.Input('footerMarginTop'),
    __metadata("design:type", Number)
], SlidesComponent.prototype, "footerMarginTop", void 0);
__decorate([
    core_1.Input('loop'),
    __metadata("design:type", Boolean)
], SlidesComponent.prototype, "loop", void 0);
__decorate([
    core_1.Input('pageIndicators'),
    __metadata("design:type", Boolean)
], SlidesComponent.prototype, "pageIndicators", void 0);
__decorate([
    core_1.Input('class'),
    __metadata("design:type", String)
], SlidesComponent.prototype, "cssClass", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SlidesComponent.prototype, "changed", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SlidesComponent.prototype, "finished", void 0);
SlidesComponent = __decorate([
    core_1.Component({
        selector: 'slides',
        template: "\n\t<AbsoluteLayout width=\"100%\">\n\t\t<ng-content></ng-content>\n\t\t<StackLayout *ngIf=\"pageIndicators\" #footer style=\"width:100%; height:20%;\">\n\t\t\t<Label *ngFor=\"let indicator of indicators\"\n\t\t\t\t[class.slide-indicator-active]=\"indicator.active == true\"\n\t\t\t\t[class.slide-indicator-inactive]=\"indicator.active == false\t\"\n\t\t\t></Label>\n\t\t</StackLayout>\n\t</AbsoluteLayout>\n\t",
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
], SlidesComponent);
exports.SlidesComponent = SlidesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNsaWRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBOE07QUFFOU0sNERBQTBEO0FBQzFELHNDQUF3QztBQUN4QyxtQ0FBcUM7QUFDckMsOENBQWdEO0FBQ2hELGtDQUF1RDtBQUN2RCxpQ0FBbUM7QUFDbkMsOERBQTREO0FBQzVELHdEQUFzRDtBQWN0RCxJQUFLLFNBSUo7QUFKRCxXQUFLLFNBQVM7SUFDYix5Q0FBSSxDQUFBO0lBQ0oseUNBQUksQ0FBQTtJQUNKLDJDQUFLLENBQUE7QUFDTixDQUFDLEVBSkksU0FBUyxLQUFULFNBQVMsUUFJYjtBQUVELElBQUssa0JBSUo7QUFKRCxXQUFLLGtCQUFrQjtJQUN0QiwyREFBSSxDQUFBO0lBQ0osMkVBQVksQ0FBQTtJQUNaLDJFQUFZLENBQUE7QUFDYixDQUFDLEVBSkksa0JBQWtCLEtBQWxCLGtCQUFrQixRQUl0QjtBQWtCRCxJQUFhLGVBQWU7SUE0QjNCLHlCQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQW5CMUIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUM1QixZQUFPLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ2hELGFBQVEsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFHbkQsY0FBUyxHQUFjLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDdEMsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFjbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQVRELHNCQUFJLG9DQUFPO2FBQVg7WUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ3pELENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksd0NBQVc7YUFBZjtZQUNDLE1B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IEFmdGVyVmlld0luaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95LCBmb3J3YXJkUmVmLCBWaWV3Q2hpbGQsIENvbnRlbnRDaGlsZHJlbiwgRWxlbWVudFJlZiwgUXVlcnlMaXN0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFNsaWRlQ29tcG9uZW50IH0gZnJvbSAnLi4vc2xpZGUvc2xpZGUuY29tcG9uZW50JztcclxuaW1wb3J0ICogYXMgZ2VzdHVyZXMgZnJvbSAndWkvZ2VzdHVyZXMnO1xyXG5pbXBvcnQgKiBhcyBwbGF0Zm9ybSBmcm9tICdwbGF0Zm9ybSc7XHJcbmltcG9ydCAqIGFzIEFuaW1hdGlvbk1vZHVsZSBmcm9tICd1aS9hbmltYXRpb24nO1xyXG5pbXBvcnQgeyBBbmltYXRpb25DdXJ2ZSwgT3JpZW50YXRpb24gfSBmcm9tICd1aS9lbnVtcyc7XHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tICdhcHBsaWNhdGlvbic7XHJcbmltcG9ydCB7IEFic29sdXRlTGF5b3V0IH0gZnJvbSAndWkvbGF5b3V0cy9hYnNvbHV0ZS1sYXlvdXQnO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICd1aS9sYWJlbCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElJbmRpY2F0b3JzIHtcclxuXHRhY3RpdmU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNsaWRlTWFwIHtcclxuXHRzbGlkZTogU2xpZGVDb21wb25lbnQ7XHJcblx0aW5kZXg6IG51bWJlcjtcclxuXHRsZWZ0PzogSVNsaWRlTWFwO1xyXG5cdHJpZ2h0PzogSVNsaWRlTWFwO1xyXG59XHJcblxyXG5lbnVtIGRpcmVjdGlvbiB7XHJcblx0bm9uZSxcclxuXHRsZWZ0LFxyXG5cdHJpZ2h0XHJcbn1cclxuXHJcbmVudW0gY2FuY2VsbGF0aW9uUmVhc29uIHtcclxuXHR1c2VyLFxyXG5cdG5vUHJldlNsaWRlcyxcclxuXHRub01vcmVTbGlkZXNcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzbGlkZXMnLFxyXG5cdHRlbXBsYXRlOiBgXHJcblx0PEFic29sdXRlTGF5b3V0IHdpZHRoPVwiMTAwJVwiPlxyXG5cdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG5cdFx0PFN0YWNrTGF5b3V0ICpuZ0lmPVwicGFnZUluZGljYXRvcnNcIiAjZm9vdGVyIHN0eWxlPVwid2lkdGg6MTAwJTsgaGVpZ2h0OjIwJTtcIj5cclxuXHRcdFx0PExhYmVsICpuZ0Zvcj1cImxldCBpbmRpY2F0b3Igb2YgaW5kaWNhdG9yc1wiXHJcblx0XHRcdFx0W2NsYXNzLnNsaWRlLWluZGljYXRvci1hY3RpdmVdPVwiaW5kaWNhdG9yLmFjdGl2ZSA9PSB0cnVlXCJcclxuXHRcdFx0XHRbY2xhc3Muc2xpZGUtaW5kaWNhdG9yLWluYWN0aXZlXT1cImluZGljYXRvci5hY3RpdmUgPT0gZmFsc2VcdFwiXHJcblx0XHRcdD48L0xhYmVsPlxyXG5cdFx0PC9TdGFja0xheW91dD5cclxuXHQ8L0Fic29sdXRlTGF5b3V0PlxyXG5cdGAsXHJcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNsaWRlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBTbGlkZUNvbXBvbmVudCkpIHNsaWRlczogUXVlcnlMaXN0PFNsaWRlQ29tcG9uZW50PjtcclxuXHRAVmlld0NoaWxkKCdmb290ZXInKSBmb290ZXI6IEVsZW1lbnRSZWY7XHJcblx0QElucHV0KCdwYWdlV2lkdGgnKSBwYWdlV2lkdGg6IG51bWJlcjtcclxuXHRASW5wdXQoJ3BhZ2VIZWlnaHQnKSBwYWdlSGVpZ2h0OiBudW1iZXI7XHJcblx0QElucHV0KCdmb290ZXJNYXJnaW5Ub3AnKSBmb290ZXJNYXJnaW5Ub3A6IG51bWJlcjtcclxuXHRASW5wdXQoJ2xvb3AnKSBsb29wOiBib29sZWFuO1xyXG5cdEBJbnB1dCgncGFnZUluZGljYXRvcnMnKSBwYWdlSW5kaWNhdG9yczogYm9vbGVhbjtcclxuXHRASW5wdXQoJ2NsYXNzJykgY3NzQ2xhc3M6IHN0cmluZyA9ICcnO1xyXG5cdEBPdXRwdXQoKSBjaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgZmluaXNoZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRwcml2YXRlIHRyYW5zaXRpb25pbmc6IGJvb2xlYW47XHJcblx0cHJpdmF0ZSBkaXJlY3Rpb246IGRpcmVjdGlvbiA9IGRpcmVjdGlvbi5ub25lO1xyXG5cdHByaXZhdGUgRk9PVEVSX0hFSUdIVDogbnVtYmVyID0gNTA7XHJcblxyXG5cdGluZGljYXRvcnM6IElJbmRpY2F0b3JzW107XHJcblx0Y3VycmVudFNsaWRlOiBJU2xpZGVNYXA7XHJcblx0X3NsaWRlTWFwOiBJU2xpZGVNYXBbXTtcclxuXHJcblx0Z2V0IGhhc05leHQoKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gISF0aGlzLmN1cnJlbnRTbGlkZSAmJiAhIXRoaXMuY3VycmVudFNsaWRlLnJpZ2h0O1xyXG5cdH1cclxuXHRnZXQgaGFzUHJldmlvdXMoKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gISF0aGlzLmN1cnJlbnRTbGlkZSAmJiAhIXRoaXMuY3VycmVudFNsaWRlLmxlZnQ7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuXHRcdHRoaXMuaW5kaWNhdG9ycyA9IFtdO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblxyXG5cdFx0dGhpcy5sb29wID0gdGhpcy5sb29wID8gdGhpcy5sb29wIDogZmFsc2U7XHJcblx0XHR0aGlzLnBhZ2VJbmRpY2F0b3JzID0gdGhpcy5wYWdlSW5kaWNhdG9ycyA/IHRoaXMucGFnZUluZGljYXRvcnMgOiBmYWxzZTtcclxuXHRcdHRoaXMucGFnZVdpZHRoID0gdGhpcy5wYWdlV2lkdGggPyB0aGlzLnBhZ2VXaWR0aCA6IHBsYXRmb3JtLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcztcclxuXHRcdHRoaXMucGFnZUhlaWdodCA9IHRoaXMucGFnZUhlaWdodCA/IHRoaXMucGFnZUhlaWdodCA6IHBsYXRmb3JtLnNjcmVlbi5tYWluU2NyZWVuLmhlaWdodERJUHM7XHJcblx0XHR0aGlzLmZvb3Rlck1hcmdpblRvcCA9IHRoaXMuZm9vdGVyTWFyZ2luVG9wID8gdGhpcy5mb290ZXJNYXJnaW5Ub3AgOiB0aGlzLmNhbGN1bGF0ZUZvb3J0ZXJNYXJnaW5Ub3AodGhpcy5wYWdlSGVpZ2h0KTtcclxuXHRcdC8vIGhhbmRsZSBvcmllbnRhdGlvbiBjaGFuZ2VcclxuXHRcdGFwcC5vbihhcHAub3JpZW50YXRpb25DaGFuZ2VkRXZlbnQsIHRoaXMub25PcmllbnRhdGlvbkNoYW5nZWQsIHRoaXMpO1xyXG5cdH1cclxuXHJcblx0bmdBZnRlclZpZXdJbml0KCkge1xyXG5cdFx0Ly8gbG9vcCB0aHJvdWdoIHNsaWRlcyBhbmQgc2V0dXAgaGVpZ2h0IGFuZCB3aWRpdGhcclxuXHRcdHRoaXMuc2xpZGVzLmZvckVhY2goKHNsaWRlOiBTbGlkZUNvbXBvbmVudCkgPT4ge1xyXG5cdFx0XHRBYnNvbHV0ZUxheW91dC5zZXRMZWZ0KHNsaWRlLmxheW91dCwgdGhpcy5wYWdlV2lkdGgpO1xyXG5cdFx0XHRzbGlkZS5zbGlkZVdpZHRoID0gdGhpcy5wYWdlV2lkdGg7XHJcblx0XHRcdHNsaWRlLnNsaWRlSGVpZ2h0ID0gdGhpcy5wYWdlSGVpZ2h0O1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuY3VycmVudFNsaWRlID0gdGhpcy5idWlsZFNsaWRlTWFwKHRoaXMuc2xpZGVzLnRvQXJyYXkoKSk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY3VycmVudFNsaWRlKSB7XHJcblx0XHRcdHRoaXMucG9zaXRpb25TbGlkZXModGhpcy5jdXJyZW50U2xpZGUpO1xyXG5cdFx0XHR0aGlzLmFwcGx5U3dpcGUodGhpcy5wYWdlV2lkdGgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLnBhZ2VJbmRpY2F0b3JzKSB7XHJcblx0XHRcdHRoaXMuYnVpbGRGb290ZXIodGhpcy5zbGlkZXMubGVuZ3RoKTtcclxuXHRcdFx0dGhpcy5zZXRBY3RpdmVQYWdlSW5kaWNhdG9yKDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHRhcHAub2ZmKGFwcC5vcmllbnRhdGlvbkNoYW5nZWRFdmVudCwgdGhpcy5vbk9yaWVudGF0aW9uQ2hhbmdlZCwgdGhpcyk7XHJcblx0fVxyXG5cclxuXHRvbk9yaWVudGF0aW9uQ2hhbmdlZChhcmdzOiBhcHAuT3JpZW50YXRpb25DaGFuZ2VkRXZlbnREYXRhKSB7XHJcblxyXG5cdFx0Ly8gZXZlbnQgYW5kIHBhZ2Ugb3JpZW50YXRpb24gZGlkbid0IHNlZW0gdG8gYWx3YXlzIGJlIG9uIHRoZSBzYW1lIHBhZ2Ugc29cclxuXHRcdC8vIHNldHRpbmcgaXQgaW4gdGhlIHRpbWUgb3V0IGFkZHJlc3NlcyB0aGlzLlxyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG5cdFx0XHQvLyB0aGUgdmFsdWVzIGFyZSBlaXRoZXIgJ2xhbmRzY2FwZScgb3IgJ3BvcnRyYWl0J1xyXG5cdFx0XHQvLyBwbGF0Zm9ybS5zY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzL3dpZHRoRElQcyBob2xkcyBvcmlnaW5hbCBzY3JlZW4gc2l6ZVxyXG5cdFx0XHRpZiAoYXJncy5uZXdWYWx1ZSA9PT0gJ2xhbmRzY2FwZScpIHtcclxuXHRcdFx0XHR0aGlzLnBhZ2VXaWR0aCA9IChhcHAuYW5kcm9pZCkgP1xyXG5cdFx0XHRcdFx0cGxhdGZvcm0uc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0RElQcyA6IHBsYXRmb3JtLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcztcclxuXHRcdFx0XHR0aGlzLnBhZ2VIZWlnaHQgPSAoYXBwLmFuZHJvaWQpID9cclxuXHRcdFx0XHRcdHBsYXRmb3JtLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyA6IHBsYXRmb3JtLnNjcmVlbi5tYWluU2NyZWVuLmhlaWdodERJUHM7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5wYWdlV2lkdGggPSBwbGF0Zm9ybS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHM7XHJcblx0XHRcdFx0dGhpcy5wYWdlSGVpZ2h0ID0gcGxhdGZvcm0uc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0RElQcztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5mb290ZXJNYXJnaW5Ub3AgPSB0aGlzLmNhbGN1bGF0ZUZvb3J0ZXJNYXJnaW5Ub3AodGhpcy5wYWdlSGVpZ2h0KTtcclxuXHJcblx0XHRcdC8vIGxvb3AgdGhyb3VnaCBzbGlkZXMgYW5kIHNldHVwIGhlaWdodCBhbmQgd2lkaXRoXHJcblx0XHRcdHRoaXMuc2xpZGVzLmZvckVhY2goKHNsaWRlOiBTbGlkZUNvbXBvbmVudCkgPT4ge1xyXG5cdFx0XHRcdEFic29sdXRlTGF5b3V0LnNldExlZnQoc2xpZGUubGF5b3V0LCB0aGlzLnBhZ2VXaWR0aCk7XHJcblx0XHRcdFx0c2xpZGUuc2xpZGVXaWR0aCA9IHRoaXMucGFnZVdpZHRoO1xyXG5cdFx0XHRcdHNsaWRlLnNsaWRlSGVpZ2h0ID0gdGhpcy5wYWdlSGVpZ2h0O1xyXG5cdFx0XHRcdHNsaWRlLmxheW91dC5lYWNoTGF5b3V0Q2hpbGQoKHZpZXc6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHZpZXcgaW5zdGFuY2VvZiBTdGFja0xheW91dCkge1xyXG5cdFx0XHRcdFx0XHRBYnNvbHV0ZUxheW91dC5zZXRMZWZ0KHZpZXcsIHRoaXMucGFnZVdpZHRoKTtcclxuXHRcdFx0XHRcdFx0dmlldy53aWR0aCA9IHRoaXMucGFnZVdpZHRoO1xyXG5cdFx0XHRcdFx0XHR2aWV3LmhlaWdodCA9IHRoaXMucGFnZUhlaWdodDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5jdXJyZW50U2xpZGUpIHtcclxuXHRcdFx0XHR0aGlzLnBvc2l0aW9uU2xpZGVzKHRoaXMuY3VycmVudFNsaWRlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRoaXMucGFnZUluZGljYXRvcnMpIHtcclxuXHRcdFx0XHR0aGlzLmJ1aWxkRm9vdGVyKHRoaXMuc2xpZGVzLmxlbmd0aCk7XHJcblx0XHRcdH1cclxuXHJcblxyXG5cdFx0fSwgMTcpOyAvLyBvbmUgZnJhbWUgQCA2MCBmcmFtZXMvcywgbm8gZmxpY2tlclxyXG5cdH1cclxuXHJcblx0c2V0QWN0aXZlUGFnZUluZGljYXRvcihhY3RpdmVJbmRleDogbnVtYmVyKSB7XHJcblx0XHR0aGlzLmluZGljYXRvcnMubWFwKChpbmRpY2F0b3I6IElJbmRpY2F0b3JzLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRcdGlmIChpbmRleCA9PT0gYWN0aXZlSW5kZXgpIHtcclxuXHRcdFx0XHRpbmRpY2F0b3IuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpbmRpY2F0b3IuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuaW5kaWNhdG9ycyA9IFsuLi50aGlzLmluZGljYXRvcnNdO1xyXG5cdFx0dGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG5cdH1cclxuXHJcblx0Ly9cclxuXHQvLyBwcml2YXRlICBmdW5jdGlvbnNcclxuXHQvL1xyXG5cclxuXHQvLyBwb3NpdGlvbiBmb290ZXJcclxuXHRwcml2YXRlIGNhbGN1bGF0ZUZvb3J0ZXJNYXJnaW5Ub3AocGFnZUhlaWdodDogbnVtYmVyKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiBwYWdlSGVpZ2h0IC0gKHBhZ2VIZWlnaHQgLyA2KTtcclxuXHR9XHJcblxyXG5cdC8vIGZvb3RlciBzdHVmZlxyXG5cdHByaXZhdGUgYnVpbGRGb290ZXIocGFnZUNvdW50OiBudW1iZXIgPSA1KTogdm9pZCB7XHJcblxyXG5cdFx0Y29uc3QgZm9vdGVyU2VjdGlvbiA9ICg8U3RhY2tMYXlvdXQ+dGhpcy5mb290ZXIubmF0aXZlRWxlbWVudCk7XHJcblx0XHRmb290ZXJTZWN0aW9uLmhvcml6b250YWxBbGlnbm1lbnQgPSAnY2VudGVyJztcclxuXHRcdGZvb3RlclNlY3Rpb24ub3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XHJcblx0XHRmb290ZXJTZWN0aW9uLm1hcmdpblRvcCA9IHRoaXMuZm9vdGVyTWFyZ2luVG9wO1xyXG5cdFx0Zm9vdGVyU2VjdGlvbi5oZWlnaHQgPSB0aGlzLkZPT1RFUl9IRUlHSFQ7XHJcblx0XHRmb290ZXJTZWN0aW9uLndpZHRoID0gdGhpcy5wYWdlV2lkdGg7XHJcblxyXG5cdFx0aWYgKGFwcC5pb3MpIHtcclxuXHRcdFx0Zm9vdGVyU2VjdGlvbi5jbGlwVG9Cb3VuZHMgPSBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgaW5kZXggPSAwO1xyXG5cdFx0dGhpcy5pbmRpY2F0b3JzID0gW107XHJcblx0XHR3aGlsZSAoaW5kZXggPCBwYWdlQ291bnQpIHtcclxuXHRcdFx0dGhpcy5pbmRpY2F0b3JzLnB1c2goeyBhY3RpdmU6IGZhbHNlIH0pO1xyXG5cdFx0XHRpbmRleCsrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzZXR1cFBhbmVsKHNsaWRlOiBJU2xpZGVNYXApIHtcclxuXHRcdHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uLm5vbmU7XHJcblx0XHR0aGlzLnRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuXHRcdHRoaXMuY3VycmVudFNsaWRlLnNsaWRlLmxheW91dC5vZmYoJ3BhbicpO1xyXG5cdFx0dGhpcy5jdXJyZW50U2xpZGUgPSBzbGlkZTtcclxuXHJcblx0XHQvLyBzZXRzIHVwIGVhY2ggc2xpZGUgc28gdGhhdCB0aGV5IGFyZSBwb3NpdGlvbmVkIHRvIHRyYW5zaXRpb24gZWl0aGVyIHdheS5cclxuXHRcdHRoaXMucG9zaXRpb25TbGlkZXModGhpcy5jdXJyZW50U2xpZGUpO1xyXG5cclxuXHRcdC8vaWYgKHRoaXMuZGlzYWJsZVBhbiA9PT0gZmFsc2UpIHtcclxuXHRcdHRoaXMuYXBwbHlTd2lwZSh0aGlzLnBhZ2VXaWR0aCk7XHJcblx0XHQvL31cclxuXHJcblx0XHRpZiAodGhpcy5wYWdlSW5kaWNhdG9ycykge1xyXG5cdFx0XHR0aGlzLnNldEFjdGl2ZVBhZ2VJbmRpY2F0b3IodGhpcy5jdXJyZW50U2xpZGUuaW5kZXgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY2hhbmdlZC5uZXh0KHRoaXMuY3VycmVudFNsaWRlLmluZGV4KTtcclxuXHJcblx0XHRpZiAodGhpcy5jdXJyZW50U2xpZGUuaW5kZXggPT09IHRoaXMuc2xpZGVzLmxlbmd0aCAtIDEpIHtcclxuXHRcdFx0dGhpcy5maW5pc2hlZC5uZXh0KG51bGwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwb3NpdGlvblNsaWRlcyhzbGlkZTogSVNsaWRlTWFwKSB7XHJcblx0XHQvLyBzZXRzIHVwIGVhY2ggc2xpZGUgc28gdGhhdCB0aGV5IGFyZSBwb3NpdGlvbmVkIHRvIHRyYW5zaXRpb24gZWl0aGVyIHdheS5cclxuXHRcdGlmIChzbGlkZS5sZWZ0ICE9IG51bGwgJiYgc2xpZGUubGVmdC5zbGlkZSAhPSBudWxsKSB7XHJcblx0XHRcdHNsaWRlLmxlZnQuc2xpZGUubGF5b3V0LnRyYW5zbGF0ZVggPSAtdGhpcy5wYWdlV2lkdGggKiAyO1xyXG5cdFx0fVxyXG5cdFx0c2xpZGUuc2xpZGUubGF5b3V0LnRyYW5zbGF0ZVggPSAtdGhpcy5wYWdlV2lkdGg7XHJcblx0XHRpZiAoc2xpZGUucmlnaHQgIT0gbnVsbCAmJiBzbGlkZS5yaWdodC5zbGlkZSAhPSBudWxsKSB7XHJcblx0XHRcdHNsaWRlLnJpZ2h0LnNsaWRlLmxheW91dC50cmFuc2xhdGVYID0gMDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2hvd1JpZ2h0U2xpZGUoc2xpZGVNYXA6IElTbGlkZU1hcCwgb2Zmc2V0OiBudW1iZXIgPSB0aGlzLnBhZ2VXaWR0aCwgZW5kaW5nVmVsb2NpdHk6IG51bWJlciA9IDMyLCBkdXJhdGlvbjogbnVtYmVyID0gMzAwKTogQW5pbWF0aW9uTW9kdWxlLkFuaW1hdGlvblByb21pc2Uge1xyXG5cdFx0bGV0IGFuaW1hdGlvbkR1cmF0aW9uOiBudW1iZXI7XHJcblx0XHRhbmltYXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uOyAvLyBkZWZhdWx0IHZhbHVlXHJcblxyXG5cdFx0bGV0IHRyYW5zaXRpb24gPSBuZXcgQXJyYXkoKTtcclxuXHJcblx0XHR0cmFuc2l0aW9uLnB1c2goe1xyXG5cdFx0XHR0YXJnZXQ6IHNsaWRlTWFwLnJpZ2h0LnNsaWRlLmxheW91dCxcclxuXHRcdFx0dHJhbnNsYXRlOiB7IHg6IC10aGlzLnBhZ2VXaWR0aCwgeTogMCB9LFxyXG5cdFx0XHRkdXJhdGlvbjogYW5pbWF0aW9uRHVyYXRpb24sXHJcblx0XHRcdGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlT3V0XHJcblx0XHR9KTtcclxuXHRcdHRyYW5zaXRpb24ucHVzaCh7XHJcblx0XHRcdHRhcmdldDogc2xpZGVNYXAuc2xpZGUubGF5b3V0LFxyXG5cdFx0XHR0cmFuc2xhdGU6IHsgeDogLXRoaXMucGFnZVdpZHRoICogMiwgeTogMCB9LFxyXG5cdFx0XHRkdXJhdGlvbjogYW5pbWF0aW9uRHVyYXRpb24sXHJcblx0XHRcdGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlT3V0XHJcblx0XHR9KTtcclxuXHRcdGxldCBhbmltYXRpb25TZXQgPSBuZXcgQW5pbWF0aW9uTW9kdWxlLkFuaW1hdGlvbih0cmFuc2l0aW9uLCBmYWxzZSk7XHJcblxyXG5cdFx0cmV0dXJuIGFuaW1hdGlvblNldC5wbGF5KCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHNob3dMZWZ0U2xpZGUoc2xpZGVNYXA6IElTbGlkZU1hcCwgb2Zmc2V0OiBudW1iZXIgPSB0aGlzLnBhZ2VXaWR0aCwgZW5kaW5nVmVsb2NpdHk6IG51bWJlciA9IDMyLCBkdXJhdGlvbjogbnVtYmVyID0gMzAwKTogQW5pbWF0aW9uTW9kdWxlLkFuaW1hdGlvblByb21pc2Uge1xyXG5cclxuXHRcdGxldCBhbmltYXRpb25EdXJhdGlvbjogbnVtYmVyO1xyXG5cdFx0YW5pbWF0aW9uRHVyYXRpb24gPSBkdXJhdGlvbjsgLy8gZGVmYXVsdCB2YWx1ZVxyXG5cdFx0bGV0IHRyYW5zaXRpb24gPSBuZXcgQXJyYXkoKTtcclxuXHJcblx0XHR0cmFuc2l0aW9uLnB1c2goe1xyXG5cdFx0XHR0YXJnZXQ6IHNsaWRlTWFwLmxlZnQuc2xpZGUubGF5b3V0LFxyXG5cdFx0XHR0cmFuc2xhdGU6IHsgeDogLXRoaXMucGFnZVdpZHRoLCB5OiAwIH0sXHJcblx0XHRcdGR1cmF0aW9uOiBhbmltYXRpb25EdXJhdGlvbixcclxuXHRcdFx0Y3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VPdXRcclxuXHRcdH0pO1xyXG5cdFx0dHJhbnNpdGlvbi5wdXNoKHtcclxuXHRcdFx0dGFyZ2V0OiBzbGlkZU1hcC5zbGlkZS5sYXlvdXQsXHJcblx0XHRcdHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sXHJcblx0XHRcdGR1cmF0aW9uOiBhbmltYXRpb25EdXJhdGlvbixcclxuXHRcdFx0Y3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VPdXRcclxuXHRcdH0pO1xyXG5cdFx0bGV0IGFuaW1hdGlvblNldCA9IG5ldyBBbmltYXRpb25Nb2R1bGUuQW5pbWF0aW9uKHRyYW5zaXRpb24sIGZhbHNlKTtcclxuXHJcblx0XHRyZXR1cm4gYW5pbWF0aW9uU2V0LnBsYXkoKTtcclxuXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYXBwbHlTd2lwZShwYWdlV2lkdGg6IG51bWJlcik6IHZvaWQge1xyXG5cdFx0bGV0IHByZXZpb3VzRGVsdGEgPSAtMTsgLy9oYWNrIHRvIGdldCBhcm91bmQgaW9zIGZpcmluZyBwYW4gZXZlbnQgYWZ0ZXIgcmVsZWFzZVxyXG5cdFx0bGV0IGVuZGluZ1ZlbG9jaXR5ID0gMDtcclxuXHRcdGxldCBzdGFydFRpbWUsIGRlbHRhVGltZTtcclxuXHRcdHRoaXMudHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5jdXJyZW50U2xpZGUuc2xpZGUubGF5b3V0Lm9uKCdwYW4nLCAoYXJnczogZ2VzdHVyZXMuUGFuR2VzdHVyZUV2ZW50RGF0YSk6IHZvaWQgPT4ge1xyXG5cdFx0XHRpZiAoYXJncy5zdGF0ZSA9PT0gZ2VzdHVyZXMuR2VzdHVyZVN0YXRlVHlwZXMuYmVnYW4pIHtcclxuXHRcdFx0XHRzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG5cdFx0XHRcdHByZXZpb3VzRGVsdGEgPSAwO1xyXG5cdFx0XHRcdGVuZGluZ1ZlbG9jaXR5ID0gMjUwO1xyXG5cclxuXHRcdFx0XHQvL3RoaXMudHJpZ2dlclN0YXJ0RXZlbnQoKTtcclxuXHRcdFx0fSBlbHNlIGlmIChhcmdzLnN0YXRlID09PSBnZXN0dXJlcy5HZXN0dXJlU3RhdGVUeXBlcy5lbmRlZCkge1xyXG5cdFx0XHRcdGRlbHRhVGltZSA9IERhdGUubm93KCkgLSBzdGFydFRpbWU7XHJcblx0XHRcdFx0Ly8gaWYgdmVsb2NpdHlTY3JvbGxpbmcgaXMgZW5hYmxlZCB0aGVuIGNhbGN1bGF0ZSB0aGUgdmVsb2NpdHR5XHJcblxyXG5cdFx0XHRcdC8vIHN3aXBpbmcgbGVmdCB0byByaWdodC5cclxuXHRcdFx0XHRpZiAoYXJncy5kZWx0YVggPiAocGFnZVdpZHRoIC8gMykpIHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmhhc1ByZXZpb3VzKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMudHJhbnNpdGlvbmluZyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2hvd0xlZnRTbGlkZSh0aGlzLmN1cnJlbnRTbGlkZSwgYXJncy5kZWx0YVgsIGVuZGluZ1ZlbG9jaXR5KS50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNldHVwUGFuZWwodGhpcy5jdXJyZW50U2xpZGUubGVmdCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vdGhpcy50cmlnZ2VyQ2hhbmdlRXZlbnRMZWZ0VG9SaWdodCgpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdC8vV2UncmUgYXQgdGhlIHN0YXJ0XHJcblx0XHRcdFx0XHRcdC8vTm90aWZ5IG5vIG1vcmUgc2xpZGVzXHJcblx0XHRcdFx0XHRcdC8vdGhpcy50cmlnZ2VyQ2FuY2VsRXZlbnQoY2FuY2VsbGF0aW9uUmVhc29uLm5vUHJldlNsaWRlcyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIHN3aXBpbmcgcmlnaHQgdG8gbGVmdFxyXG5cdFx0XHRcdGVsc2UgaWYgKGFyZ3MuZGVsdGFYIDwgKC1wYWdlV2lkdGggLyAzKSkge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuaGFzTmV4dCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRyYW5zaXRpb25pbmcgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNob3dSaWdodFNsaWRlKHRoaXMuY3VycmVudFNsaWRlLCBhcmdzLmRlbHRhWCwgZW5kaW5nVmVsb2NpdHkpLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2V0dXBQYW5lbCh0aGlzLmN1cnJlbnRTbGlkZS5yaWdodCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vIE5vdGlmeSBjaGFuZ2VkXHJcblx0XHRcdFx0XHRcdFx0Ly90aGlzLnRyaWdnZXJDaGFuZ2VFdmVudFJpZ2h0VG9MZWZ0KCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmICghdGhpcy5oYXNOZXh0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBOb3RpZnkgZmluc2loZWRcclxuXHRcdFx0XHRcdFx0XHRcdC8vIHRoaXMubm90aWZ5KHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0ZXZlbnROYW1lOiBTbGlkZUNvbnRhaW5lci5GSU5JU0hFRF9FVkVOVCxcclxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0b2JqZWN0OiB0aGlzXHJcblx0XHRcdFx0XHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Ly8gV2UncmUgYXQgdGhlIGVuZFxyXG5cdFx0XHRcdFx0XHQvLyBOb3RpZnkgbm8gbW9yZSBzbGlkZXNcclxuXHRcdFx0XHRcdFx0Ly90aGlzLnRyaWdnZXJDYW5jZWxFdmVudChjYW5jZWxsYXRpb25SZWFzb24ubm9Nb3JlU2xpZGVzKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLnRyYW5zaXRpb25pbmcgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHQvL05vdGlmeSBjYW5jZWxsZWRcclxuXHRcdFx0XHRcdC8vdGhpcy50cmlnZ2VyQ2FuY2VsRXZlbnQoY2FuY2VsbGF0aW9uUmVhc29uLnVzZXIpO1xyXG5cdFx0XHRcdFx0dGhpcy50cmFuc2l0aW9uaW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHRoaXMuY3VycmVudFNsaWRlLnNsaWRlLmxheW91dC5hbmltYXRlKHtcclxuXHRcdFx0XHRcdFx0dHJhbnNsYXRlOiB7IHg6IC10aGlzLnBhZ2VXaWR0aCwgeTogMCB9LFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwLFxyXG5cdFx0XHRcdFx0XHRjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZU91dFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5oYXNOZXh0KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY3VycmVudFNsaWRlLnJpZ2h0LnNsaWRlLmxheW91dC5hbmltYXRlKHtcclxuXHRcdFx0XHRcdFx0XHR0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAsXHJcblx0XHRcdFx0XHRcdFx0Y3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VPdXRcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGlmIChhcHAuaW9zKSAvL2ZvciBzb21lIHJlYXNvbiBpIGhhdmUgdG8gc2V0IHRoZXNlIGluIGlvcyBvciB0aGVyZSBpcyBzb21lIHNvcnQgb2YgYm91bmNlIGJhY2suXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50U2xpZGUucmlnaHQuc2xpZGUubGF5b3V0LnRyYW5zbGF0ZVggPSAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuaGFzUHJldmlvdXMpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50U2xpZGUubGVmdC5zbGlkZS5sYXlvdXQuYW5pbWF0ZSh7XHJcblx0XHRcdFx0XHRcdFx0dHJhbnNsYXRlOiB7IHg6IC10aGlzLnBhZ2VXaWR0aCAqIDIsIHk6IDAgfSxcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwLFxyXG5cdFx0XHRcdFx0XHRcdGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlT3V0XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRpZiAoYXBwLmlvcylcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRTbGlkZS5sZWZ0LnNsaWRlLmxheW91dC50cmFuc2xhdGVYID0gLXRoaXMucGFnZVdpZHRoO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChhcHAuaW9zKVxyXG5cdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRTbGlkZS5zbGlkZS5sYXlvdXQudHJhbnNsYXRlWCA9IC10aGlzLnBhZ2VXaWR0aDtcclxuXHJcblx0XHRcdFx0XHR0aGlzLnRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLnRyYW5zaXRpb25pbmdcclxuXHRcdFx0XHRcdCYmIHByZXZpb3VzRGVsdGEgIT09IGFyZ3MuZGVsdGFYXHJcblx0XHRcdFx0XHQmJiBhcmdzLmRlbHRhWCAhPSBudWxsXHJcblx0XHRcdFx0XHQmJiBhcmdzLmRlbHRhWCA8IDApIHtcclxuXHJcblx0XHRcdFx0XHRpZiAodGhpcy5oYXNOZXh0KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uLmxlZnQ7XHJcblx0XHRcdFx0XHRcdHRoaXMuY3VycmVudFNsaWRlLnNsaWRlLmxheW91dC50cmFuc2xhdGVYID0gYXJncy5kZWx0YVggLSB0aGlzLnBhZ2VXaWR0aDtcclxuXHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50U2xpZGUucmlnaHQuc2xpZGUubGF5b3V0LnRyYW5zbGF0ZVggPSBhcmdzLmRlbHRhWDtcclxuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIGlmICghdGhpcy50cmFuc2l0aW9uaW5nXHJcblx0XHRcdFx0XHQmJiBwcmV2aW91c0RlbHRhICE9PSBhcmdzLmRlbHRhWFxyXG5cdFx0XHRcdFx0JiYgYXJncy5kZWx0YVggIT0gbnVsbFxyXG5cdFx0XHRcdFx0JiYgYXJncy5kZWx0YVggPiAwKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuaGFzUHJldmlvdXMpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb24ucmlnaHQ7XHJcblx0XHRcdFx0XHRcdHRoaXMuY3VycmVudFNsaWRlLnNsaWRlLmxheW91dC50cmFuc2xhdGVYID0gYXJncy5kZWx0YVggLSB0aGlzLnBhZ2VXaWR0aDtcclxuXHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50U2xpZGUubGVmdC5zbGlkZS5sYXlvdXQudHJhbnNsYXRlWCA9IC0odGhpcy5wYWdlV2lkdGggKiAyKSArIGFyZ3MuZGVsdGFYO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKGFyZ3MuZGVsdGFYICE9PSAwKSB7XHJcblx0XHRcdFx0XHRwcmV2aW91c0RlbHRhID0gYXJncy5kZWx0YVg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGJ1aWxkU2xpZGVNYXAoc2xpZGVzOiBTbGlkZUNvbXBvbmVudFtdKSB7XHJcblx0XHR0aGlzLl9zbGlkZU1hcCA9IFtdO1xyXG5cdFx0c2xpZGVzLmZvckVhY2goKHNsaWRlOiBTbGlkZUNvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cdFx0XHR0aGlzLl9zbGlkZU1hcC5wdXNoKHtcclxuXHRcdFx0XHRzbGlkZTogc2xpZGUsXHJcblx0XHRcdFx0aW5kZXg6IGluZGV4LFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5fc2xpZGVNYXAuZm9yRWFjaCgobWFwcGluZzogSVNsaWRlTWFwLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRcdGlmICh0aGlzLl9zbGlkZU1hcFtpbmRleCAtIDFdICE9IG51bGwpXHJcblx0XHRcdFx0bWFwcGluZy5sZWZ0ID0gdGhpcy5fc2xpZGVNYXBbaW5kZXggLSAxXTtcclxuXHRcdFx0aWYgKHRoaXMuX3NsaWRlTWFwW2luZGV4ICsgMV0gIT0gbnVsbClcclxuXHRcdFx0XHRtYXBwaW5nLnJpZ2h0ID0gdGhpcy5fc2xpZGVNYXBbaW5kZXggKyAxXTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmICh0aGlzLmxvb3ApIHtcclxuXHRcdFx0dGhpcy5fc2xpZGVNYXBbMF0ubGVmdCA9IHRoaXMuX3NsaWRlTWFwW3RoaXMuX3NsaWRlTWFwLmxlbmd0aCAtIDFdO1xyXG5cdFx0XHR0aGlzLl9zbGlkZU1hcFt0aGlzLl9zbGlkZU1hcC5sZW5ndGggLSAxXS5yaWdodCA9IHRoaXMuX3NsaWRlTWFwWzBdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuX3NsaWRlTWFwWzBdO1xyXG5cdH1cclxuXHJcblx0cHVibGljIEdvVG9TbGlkZShudW06IG51bWJlciwgdHJhdmVyc2VEdXJhdGlvbjogbnVtYmVyID0gNTAsIGxhbmRpbmdEdXJhdGlvbjogbnVtYmVyID0gMjAwKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5jdXJyZW50U2xpZGUuaW5kZXggPT0gbnVtKSByZXR1cm47XHJcblxyXG5cdFx0dmFyIGR1cmF0aW9uOiBudW1iZXIgPSBsYW5kaW5nRHVyYXRpb247XHJcblx0XHRpZiAoTWF0aC5hYnMobnVtIC0gdGhpcy5jdXJyZW50U2xpZGUuaW5kZXgpICE9IDEpIGR1cmF0aW9uID0gdHJhdmVyc2VEdXJhdGlvbjtcclxuXHJcblx0XHRpZiAodGhpcy5jdXJyZW50U2xpZGUuaW5kZXggPCBudW0pXHJcblx0XHRcdHRoaXMubmV4dFNsaWRlKGR1cmF0aW9uKS50aGVuKCgpID0+IHRoaXMuR29Ub1NsaWRlKG51bSkpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnByZXZpb3VzU2xpZGUoZHVyYXRpb24pLnRoZW4oKCkgPT4gdGhpcy5Hb1RvU2xpZGUobnVtKSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbmV4dFNsaWRlKGR1cmF0aW9uPzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcclxuXHRcdGlmICghdGhpcy5oYXNOZXh0KSB7XHJcblx0XHRcdC8vdGhpcy50cmlnZ2VyQ2FuY2VsRXZlbnQoY2FuY2VsbGF0aW9uUmVhc29uLm5vTW9yZVNsaWRlcyk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbi5sZWZ0O1xyXG5cdFx0dGhpcy50cmFuc2l0aW9uaW5nID0gdHJ1ZTtcclxuXHRcdC8vXHR0aGlzLnRyaWdnZXJTdGFydEV2ZW50KCk7XHJcblx0XHRyZXR1cm4gdGhpcy5zaG93UmlnaHRTbGlkZSh0aGlzLmN1cnJlbnRTbGlkZSwgbnVsbCwgbnVsbCwgZHVyYXRpb24pLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnNldHVwUGFuZWwodGhpcy5jdXJyZW50U2xpZGUucmlnaHQpO1xyXG5cdFx0XHQvL3RoaXMudHJpZ2dlckNoYW5nZUV2ZW50UmlnaHRUb0xlZnQoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblxyXG5cdHB1YmxpYyBwcmV2aW91c1NsaWRlKGR1cmF0aW9uPzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcclxuXHRcdGlmICghdGhpcy5oYXNQcmV2aW91cykge1xyXG5cdFx0XHQvL3RoaXMudHJpZ2dlckNhbmNlbEV2ZW50KGNhbmNlbGxhdGlvblJlYXNvbi5ub1ByZXZTbGlkZXMpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb24ucmlnaHQ7XHJcblx0XHR0aGlzLnRyYW5zaXRpb25pbmcgPSB0cnVlO1xyXG5cdFx0Ly90aGlzLnRyaWdnZXJTdGFydEV2ZW50KCk7XHJcblx0XHRyZXR1cm4gdGhpcy5zaG93TGVmdFNsaWRlKHRoaXMuY3VycmVudFNsaWRlLCBudWxsLCBudWxsLCBkdXJhdGlvbikudGhlbigoKSA9PiB7XHJcblx0XHRcdHRoaXMuc2V0dXBQYW5lbCh0aGlzLmN1cnJlbnRTbGlkZS5sZWZ0KTtcclxuXHJcblx0XHRcdC8vdGhpcy50cmlnZ2VyQ2hhbmdlRXZlbnRMZWZ0VG9SaWdodCgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiJdfQ==