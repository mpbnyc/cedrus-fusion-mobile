"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_component_1 = require("../core/core.component");
var icon_model_1 = require("../../models/icon/icon.model");
var CfIconComponent = (function (_super) {
    __extends(CfIconComponent, _super);
    function CfIconComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cfOnToggle = new core_1.EventEmitter();
        _this.checked = false;
        _this.currentIcon = {};
        return _this;
    }
    CfIconComponent.prototype.cfIconToggled = function () {
        this.checked = !this.checked;
        if (this.currentIcon == this.cfIcon)
            this.currentIcon = this.cfIcon.toggle;
        else
            this.currentIcon = this.cfIcon;
        this.cfOnToggle.emit(this.currentIcon.value);
    };
    CfIconComponent.prototype.ngOnInit = function () {
        if (this.cfIcon) {
            this.currentIcon = this.cfIcon;
        }
        //     var mainKeys = Object.keys(this.activeTemplate["property"]);
        // 			if(this.properties.toggle!=null && this.activeTemplate["property"].toggle!=null)
        // 			{
        // 				var toggleKeys = Object.keys(this.activeTemplate["property"].toggle);
        // 				for(let key of toggleKeys)
        // 				{
        // 					if(this.properties["toggle"][key]==null)
        // 						this.properties["toggle"][key]=this.activeTemplate["property"]["toggle"][key];
        // 				}
        // 			} 
        // 			for(let key of mainKeys)
        // 			{
        // 				if(this.properties[key]==null)
        // 					this.properties[key]=this.activeTemplate["property"][key];
        // 			}
        // 		// if(this.styling==null)
        // 		// 	this.styling = new IconStylingModel(this.activeTemplate["style"]);
        // 		if(this.display!=null) this.properties.display = this.display;
        // 		if(this.name!=null) this.properties.name = this.name;
        // 		if(this.properties.name.startsWith("fa-"))
        // 			this.properties.type = "fa";
        // 		else
        // 			this.properties.type = "mi";
        // 		if(this.size!=null) this.properties.size = this.size;
        // 		this.cfIcon = this.properties;
        // 		this.currentIcon = this.cfIcon;
        // }
    };
    return CfIconComponent;
}(core_component_1.CfCoreComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", icon_model_1.IconModel)
], CfIconComponent.prototype, "properties", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", icon_model_1.IconModel)
], CfIconComponent.prototype, "cfIcon", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CfIconComponent.prototype, "cfOnToggle", void 0);
CfIconComponent = __decorate([
    core_1.Component({
        selector: "cf-icon",
        templateUrl: './lib/components/icon/icon.component.html'
    })
], CfIconComponent);
exports.CfIconComponent = CfIconComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUErRTtBQUMvRSx5REFBeUQ7QUFDekQsMkRBQXlEO0FBTXpELElBQWEsZUFBZTtJQUFTLG1DQUFlO0lBSnBEO1FBQUEscUVBNERDO1FBckRhLGdCQUFVLEdBQXNCLElBQUksbUJBQVksRUFBTyxDQUFDO1FBQ2xFLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsaUJBQVcsR0FBUSxFQUFFLENBQUM7O0lBa0QxQixDQUFDO0lBN0NHLHVDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUMxQyxJQUFJO1lBQ0EsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNuQyxDQUFDO1FBQ0wsbUVBQW1FO1FBQ3RFLHNGQUFzRjtRQUN0RixPQUFPO1FBQ1AsNEVBQTRFO1FBQzVFLGlDQUFpQztRQUNqQyxRQUFRO1FBQ1IsZ0RBQWdEO1FBQ2hELHVGQUF1RjtRQUN2RixRQUFRO1FBQ1IsUUFBUTtRQUNSLDhCQUE4QjtRQUM5QixPQUFPO1FBQ1AscUNBQXFDO1FBQ3JDLGtFQUFrRTtRQUNsRSxPQUFPO1FBRVAsOEJBQThCO1FBQzlCLDJFQUEyRTtRQUMzRSxtRUFBbUU7UUFDbkUsMERBQTBEO1FBRTFELCtDQUErQztRQUMvQyxrQ0FBa0M7UUFDbEMsU0FBUztRQUNULGtDQUFrQztRQUVsQywwREFBMEQ7UUFFMUQsbUNBQW1DO1FBQ25DLG9DQUFvQztRQUNqQyxJQUFJO0lBQ0osQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQXhERCxDQUFxQyxnQ0FBZSxHQXdEbkQ7QUF2RFk7SUFBUixZQUFLLEVBQUU7OEJBQWEsc0JBQVM7bURBQUM7QUFDdEI7SUFBUixZQUFLLEVBQUU7OEJBQVMsc0JBQVM7K0NBQUM7QUFDakI7SUFBVCxhQUFNLEVBQUU7OEJBQWEsbUJBQVk7bURBQWdDO0FBSHpELGVBQWU7SUFKM0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSwyQ0FBMkM7S0FDekQsQ0FBQztHQUNXLGVBQWUsQ0F3RDNCO0FBeERZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDZkNvcmVDb21wb25lbnQgfSBmcm9tICcuLi9jb3JlL2NvcmUuY29tcG9uZW50JztcbmltcG9ydCB7IEljb25Nb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9pY29uL2ljb24ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiY2YtaWNvblwiLFxuICB0ZW1wbGF0ZVVybDogJy4vbGliL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDZkljb25Db21wb25lbnQgZXh0ZW5kcyBDZkNvcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIHByb3BlcnRpZXM6IEljb25Nb2RlbDtcbiAgICBASW5wdXQoKSBjZkljb246IEljb25Nb2RlbDtcbiAgICBAT3V0cHV0KCkgY2ZPblRvZ2dsZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBjaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG4gICAgdmFsdWU6IGFueTtcbiAgICBjdXJyZW50SWNvbjogYW55ID0ge307XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBzaXplOiBzdHJpbmc7XG5cbiAgICBjZkljb25Ub2dnbGVkKCkge1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICAgICAgICBpZih0aGlzLmN1cnJlbnRJY29uID09IHRoaXMuY2ZJY29uKVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SWNvbiA9IHRoaXMuY2ZJY29uLnRvZ2dsZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SWNvbiA9IHRoaXMuY2ZJY29uO1xuICAgICAgICB0aGlzLmNmT25Ub2dnbGUuZW1pdCh0aGlzLmN1cnJlbnRJY29uLnZhbHVlKTsgXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmKHRoaXMuY2ZJY29uKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJY29uID0gdGhpcy5jZkljb247XG4gICAgICAgIH1cbiAgICAvLyAgICAgdmFyIG1haW5LZXlzID0gT2JqZWN0LmtleXModGhpcy5hY3RpdmVUZW1wbGF0ZVtcInByb3BlcnR5XCJdKTtcblx0Ly8gXHRcdFx0aWYodGhpcy5wcm9wZXJ0aWVzLnRvZ2dsZSE9bnVsbCAmJiB0aGlzLmFjdGl2ZVRlbXBsYXRlW1wicHJvcGVydHlcIl0udG9nZ2xlIT1udWxsKVxuXHQvLyBcdFx0XHR7XG5cdC8vIFx0XHRcdFx0dmFyIHRvZ2dsZUtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmFjdGl2ZVRlbXBsYXRlW1wicHJvcGVydHlcIl0udG9nZ2xlKTtcblx0Ly8gXHRcdFx0XHRmb3IobGV0IGtleSBvZiB0b2dnbGVLZXlzKVxuXHQvLyBcdFx0XHRcdHtcblx0Ly8gXHRcdFx0XHRcdGlmKHRoaXMucHJvcGVydGllc1tcInRvZ2dsZVwiXVtrZXldPT1udWxsKVxuXHQvLyBcdFx0XHRcdFx0XHR0aGlzLnByb3BlcnRpZXNbXCJ0b2dnbGVcIl1ba2V5XT10aGlzLmFjdGl2ZVRlbXBsYXRlW1wicHJvcGVydHlcIl1bXCJ0b2dnbGVcIl1ba2V5XTtcblx0Ly8gXHRcdFx0XHR9XG5cdC8vIFx0XHRcdH0gXG5cdC8vIFx0XHRcdGZvcihsZXQga2V5IG9mIG1haW5LZXlzKVxuXHQvLyBcdFx0XHR7XG5cdC8vIFx0XHRcdFx0aWYodGhpcy5wcm9wZXJ0aWVzW2tleV09PW51bGwpXG5cdC8vIFx0XHRcdFx0XHR0aGlzLnByb3BlcnRpZXNba2V5XT10aGlzLmFjdGl2ZVRlbXBsYXRlW1wicHJvcGVydHlcIl1ba2V5XTtcblx0Ly8gXHRcdFx0fVxuXG5cdC8vIFx0XHQvLyBpZih0aGlzLnN0eWxpbmc9PW51bGwpXG5cdC8vIFx0XHQvLyBcdHRoaXMuc3R5bGluZyA9IG5ldyBJY29uU3R5bGluZ01vZGVsKHRoaXMuYWN0aXZlVGVtcGxhdGVbXCJzdHlsZVwiXSk7XG5cdC8vIFx0XHRpZih0aGlzLmRpc3BsYXkhPW51bGwpIHRoaXMucHJvcGVydGllcy5kaXNwbGF5ID0gdGhpcy5kaXNwbGF5O1xuXHQvLyBcdFx0aWYodGhpcy5uYW1lIT1udWxsKSB0aGlzLnByb3BlcnRpZXMubmFtZSA9IHRoaXMubmFtZTtcblxuXHQvLyBcdFx0aWYodGhpcy5wcm9wZXJ0aWVzLm5hbWUuc3RhcnRzV2l0aChcImZhLVwiKSlcblx0Ly8gXHRcdFx0dGhpcy5wcm9wZXJ0aWVzLnR5cGUgPSBcImZhXCI7XG5cdC8vIFx0XHRlbHNlXG5cdC8vIFx0XHRcdHRoaXMucHJvcGVydGllcy50eXBlID0gXCJtaVwiO1xuXHRcdFx0XHRcblx0Ly8gXHRcdGlmKHRoaXMuc2l6ZSE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLnNpemUgPSB0aGlzLnNpemU7XG5cblx0Ly8gXHRcdHRoaXMuY2ZJY29uID0gdGhpcy5wcm9wZXJ0aWVzO1xuXHQvLyBcdFx0dGhpcy5jdXJyZW50SWNvbiA9IHRoaXMuY2ZJY29uO1xuICAgIC8vIH1cbiAgICB9XG59Il19