"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var selectable_component_1 = require("../selectable/selectable.component");
// import { SwitchStylingModel } from '../../models/selectable/switch-styling.model';
// import { SwitchTemplates } from '../../templates/switch.template';
// import { TemplateService } from '../../services/template-service/template.service';
/**
 * <p>CF Switch Component</p>
 * <pre>
 * <code>
 * import { SelectableModel } from 'cedrus-fusion'
 * import { SwitchStylingModel } from 'cedrus-fusion'
 * <code><</code>cf-switch<code>></code><code><</code><code>/</code>cf-switch<code>></code>
 * </code>
 * </pre>
 */
var CfSwitchComponent = CfSwitchComponent_1 = (function (_super) {
    __extends(CfSwitchComponent, _super);
    /**
      *<p> dynamicClass: function() -> string,	// Function that returns name of the class </p>
        *<p> class: string												// Name of the css class selector </p>
        *<p> themeColor: string										// primary/accent/warn </p>
      *<pre>
        *{
      *	// Container surrounding the Switch
      *	container:{
      *		dynamicClass,
      *		class
      *	},
      *	// md-switch styling
      *	switch:{
      *		dynamicClass,
      *		class,
      *		themeColor
      *	}
      *}
      * </pre>
      */
    // @Input() public styling: SwitchStylingModel;
    /**@hidden */
    function CfSwitchComponent(/**@hidden */ elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.elementRef = elementRef;
        /**@hidden*/
        _this.notifacationClickable = '';
        return _this;
    }
    /**@hidden
     * It will be generated <b>cfCheckbox</b> object and rendered inside component template. Also cfCheckStates function will initialize checkboxes states.
     */
    CfSwitchComponent.prototype.ngOnInit = function () {
        // this.getMyTemplate("switch",SwitchTemplates).then(() => {
        // 	if(this.properties==null)
        // 	{
        // 		this.properties = new SelectableModel(this.activeTemplate["property"]);
        // 	}
        // 	else
        // 	{
        // 		var mainKeys = Object.keys(this.activeTemplate["property"]);
        // 		for(let key of mainKeys)
        // 		{
        // 			if(this.properties[key]==null)
        // 				this.properties[key]=this.activeTemplate["property"][key];
        // 		}
        // 	}
        // 	if(this.styling==null)
        // 		this.styling = new SwitchStylingModel (this.activeTemplate["style"]);
        // 	if(this.disable!=null) this.properties.disable = this.disable;
        // 	if(this.display!=null) this.properties.display = this.display;
        // 	if(this.value!=null) this.properties.value = this.value;
        // 	if(this.item!=null) this.properties.item = this.item;
        // 	if(this.checked!=null) this.properties.checked = this.checked;
        // 	if(this.itemPosition!=null) this.properties.itemPosition = this.itemPosition;
        // 	this.checked = this.properties.checked;
        // 	this.cfSwitch = this.properties;
        // });
    };
    /**@hidden */
    CfSwitchComponent.prototype.ngOnChanges = function (changes) {
        if (this.properties != null) {
            if (changes.disable != null)
                this.properties.disable = changes.disable.currentValue;
            if (changes.display != null)
                this.properties.display = changes.display.currentValue;
            if (changes.checkedValue != null)
                this.properties.value = changes.value.currentValue;
            // if(changes.item!=null) this.properties.item = changes.item.currentValue;
            if (changes.itemPosition != null)
                this.properties.itemPosition = changes.itemPosition.currentValue;
        }
    };
    CfSwitchComponent.prototype.getSwitchClass = function () {
        // if(this.styling!=null && this.styling.switch!=null&& this.cfSwitch!=null)
        // {
        //   try
        //   {
        //     var classes = "";
        //     var mainKeys = Object.keys(this.styling.switch.dynamicClass);
        //     for(let key of mainKeys){
        //       if(eval(this.styling.switch.dynamicClass[key])==true)
        //         classes = classes+" "+key;
        //       }
        //     return classes;
        //   }
        //   catch(e)
        //   {
        //     //Do nothing
        //   }
        // }
    };
    CfSwitchComponent.prototype.getContainerClass = function () {
        //     if(this.styling!=null && this.styling.container!=null&& this.cfSwitch!=null)
        //     {
        //       try
        //       {
        //         var classes = "";
        //         var mainKeys = Object.keys(this.styling.container.dynamicClass);
        //         for(let key of mainKeys){
        //           if(eval(this.styling.container.dynamicClass[key])==true)
        //             classes = classes+" "+key;
        //           }
        //         return classes;
        //       }
        //       catch(e)
        //       {
        //         //Do nothing
        //       }
        //     }
        //   }
    };
    return CfSwitchComponent;
}(selectable_component_1.CfSelectableComponent));
__decorate([
    core_1.HostBinding('class'),
    __metadata("design:type", Object)
], CfSwitchComponent.prototype, "notifacationClickable", void 0);
__decorate([
    core_1.ContentChild(core_1.TemplateRef),
    __metadata("design:type", Object)
], CfSwitchComponent.prototype, "cfSwitchTemplate", void 0);
CfSwitchComponent = CfSwitchComponent_1 = __decorate([
    core_1.Component({
        selector: 'cf-switch',
        templateUrl: './lib/components/switch/switch.component.html',
        styleUrls: ['./switch.component.css'],
        providers: [{ provide: selectable_component_1.CfSelectableComponent, useExisting: core_1.forwardRef(function () { return CfSwitchComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], CfSwitchComponent);
exports.CfSwitchComponent = CfSwitchComponent;
var CfSwitchComponent_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN3aXRjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBOEk7QUFDOUksMkVBQTJFO0FBRzNFLHFGQUFxRjtBQUNyRixxRUFBcUU7QUFFckUsc0ZBQXNGO0FBRXRGOzs7Ozs7Ozs7R0FTRztBQU9ILElBQWEsaUJBQWlCO0lBQVMscUNBQXFCO0lBYTNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBbUJJO0lBQ0osK0NBQStDO0lBRS9DLGFBQWE7SUFDYiwyQkFBWSxhQUFhLENBQU8sVUFBc0I7UUFBdEQsWUFBd0Usa0JBQU0sVUFBVSxDQUFDLFNBQUc7UUFBNUQsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFsQ3RELFlBQVk7UUFDVSwyQkFBcUIsR0FBRyxFQUFFLENBQUM7O0lBaUMwQyxDQUFDO0lBRTVGOztPQUVNO0lBQ04sb0NBQVEsR0FBUjtRQUNHLDREQUE0RDtRQUM5RCw2QkFBNkI7UUFDN0IsS0FBSztRQUNMLDRFQUE0RTtRQUM1RSxLQUFLO1FBQ0wsUUFBUTtRQUNSLEtBQUs7UUFDTCxpRUFBaUU7UUFDakUsNkJBQTZCO1FBQzdCLE1BQU07UUFDTixvQ0FBb0M7UUFDcEMsaUVBQWlFO1FBQ2pFLE1BQU07UUFDTixLQUFLO1FBRUwsMEJBQTBCO1FBQzFCLDBFQUEwRTtRQUMxRSxrRUFBa0U7UUFDbEUsa0VBQWtFO1FBQ2xFLDREQUE0RDtRQUM1RCx5REFBeUQ7UUFDekQsa0VBQWtFO1FBQ2xFLGlGQUFpRjtRQUVqRiwyQ0FBMkM7UUFFM0Msb0NBQW9DO1FBQ3BDLE1BQU07SUFDUCxDQUFDO0lBRUQsYUFBYTtJQUNiLHVDQUFXLEdBQVgsVUFBWSxPQUFZO1FBQ3ZCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUUsSUFBSSxDQUFDLENBQ3pCLENBQUM7WUFDQSxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFFLElBQUksQ0FBQztnQkFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUNqRixFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFFLElBQUksQ0FBQztnQkFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUNqRixFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsWUFBWSxJQUFFLElBQUksQ0FBQztnQkFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUNsRiwyRUFBMkU7WUFDM0UsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBRSxJQUFJLENBQUM7Z0JBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUM7UUFDakcsQ0FBQztJQUNGLENBQUM7SUFFRCwwQ0FBYyxHQUFkO1FBQ0csNEVBQTRFO1FBQzVFLElBQUk7UUFDSixRQUFRO1FBQ1IsTUFBTTtRQUNOLHdCQUF3QjtRQUN4QixvRUFBb0U7UUFDcEUsZ0NBQWdDO1FBQ2hDLDhEQUE4RDtRQUM5RCxxQ0FBcUM7UUFDckMsVUFBVTtRQUNWLHNCQUFzQjtRQUN0QixNQUFNO1FBQ04sYUFBYTtRQUNiLE1BQU07UUFDTixtQkFBbUI7UUFDbkIsTUFBTTtRQUNOLElBQUk7SUFDTixDQUFDO0lBRUQsNkNBQWlCLEdBQWpCO1FBQ0YsbUZBQW1GO1FBQ25GLFFBQVE7UUFDUixZQUFZO1FBQ1osVUFBVTtRQUNWLDRCQUE0QjtRQUM1QiwyRUFBMkU7UUFDM0Usb0NBQW9DO1FBQ3BDLHFFQUFxRTtRQUNyRSx5Q0FBeUM7UUFDekMsY0FBYztRQUNkLDBCQUEwQjtRQUMxQixVQUFVO1FBQ1YsaUJBQWlCO1FBQ2pCLFVBQVU7UUFDVix1QkFBdUI7UUFDdkIsVUFBVTtRQUNWLFFBQVE7UUFDUixNQUFNO0lBQ0YsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQTVIRCxDQUF1Qyw0Q0FBcUIsR0E0SDNEO0FBekhzQjtJQUFyQixrQkFBVyxDQUFDLE9BQU8sQ0FBQzs7Z0VBQTRCO0FBS3RCO0lBQTFCLG1CQUFZLENBQUMsa0JBQVcsQ0FBQzs7MkRBQWtCO0FBUmhDLGlCQUFpQjtJQU43QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLCtDQUErQztRQUM1RCxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztRQUNyQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSw0Q0FBcUIsRUFBRSxXQUFXLEVBQUUsaUJBQVUsQ0FBQyxjQUFNLE9BQUEsbUJBQWlCLEVBQWpCLENBQWlCLENBQUMsRUFBQyxDQUFDO0tBQ2hHLENBQUM7cUNBcUMyQyxpQkFBVTtHQXBDMUMsaUJBQWlCLENBNEg3QjtBQTVIWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBDb250ZW50Q2hpbGQsIFRlbXBsYXRlUmVmLCBIb3N0QmluZGluZyxmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZlNlbGVjdGFibGVDb21wb25lbnQgfSBmcm9tICcuLi9zZWxlY3RhYmxlL3NlbGVjdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdGFibGVNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9zZWxlY3RhYmxlL3NlbGVjdGFibGUubW9kZWwnO1xuXG4vLyBpbXBvcnQgeyBTd2l0Y2hTdHlsaW5nTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvc2VsZWN0YWJsZS9zd2l0Y2gtc3R5bGluZy5tb2RlbCc7XG4vLyBpbXBvcnQgeyBTd2l0Y2hUZW1wbGF0ZXMgfSBmcm9tICcuLi8uLi90ZW1wbGF0ZXMvc3dpdGNoLnRlbXBsYXRlJztcblxuLy8gaW1wb3J0IHsgVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGVtcGxhdGUtc2VydmljZS90ZW1wbGF0ZS5zZXJ2aWNlJztcblxuLyoqXG4gKiA8cD5DRiBTd2l0Y2ggQ29tcG9uZW50PC9wPiBcbiAqIDxwcmU+XG4gKiA8Y29kZT5cbiAqIGltcG9ydCB7IFNlbGVjdGFibGVNb2RlbCB9IGZyb20gJ2NlZHJ1cy1mdXNpb24nXG4gKiBpbXBvcnQgeyBTd2l0Y2hTdHlsaW5nTW9kZWwgfSBmcm9tICdjZWRydXMtZnVzaW9uJ1xuICogPGNvZGU+PDwvY29kZT5jZi1zd2l0Y2g8Y29kZT4+PC9jb2RlPjxjb2RlPjw8L2NvZGU+PGNvZGU+LzwvY29kZT5jZi1zd2l0Y2g8Y29kZT4+PC9jb2RlPlxuICogPC9jb2RlPlxuICogPC9wcmU+XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NmLXN3aXRjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9saWIvY29tcG9uZW50cy9zd2l0Y2gvc3dpdGNoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3dpdGNoLmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IENmU2VsZWN0YWJsZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2ZTd2l0Y2hDb21wb25lbnQpfV1cbn0pXG5leHBvcnQgY2xhc3MgQ2ZTd2l0Y2hDb21wb25lbnQgZXh0ZW5kcyBDZlNlbGVjdGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRcblx0LyoqQGhpZGRlbiovXG5cdEBIb3N0QmluZGluZygnY2xhc3MnKSBub3RpZmFjYXRpb25DbGlja2FibGUgPSAnJztcblxuXHQvKipAaGlkZGVuXG5cdCAqIENvbXBvbmVudCBwcm9wZXJ0eSBmb3IgcmVuZGVyaW5nIHRlbXBsYXRlIGZvciBlYWNoIHN3aXRjaCBpZiB0aGF0IHRlbXBsYXRlIHdhcyBkZWZpbmVkIGluIGh0bWwuXG5cdCAqL1xuXHRAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmKSBjZlN3aXRjaFRlbXBsYXRlO1xuXG5cdC8qKkBoaWRkZW4gKi9cblx0Y2ZTd2l0Y2g6IFNlbGVjdGFibGVNb2RlbDtcblxuXHQvKipcblx0ICAqPHA+IGR5bmFtaWNDbGFzczogZnVuY3Rpb24oKSAtPiBzdHJpbmcsXHQvLyBGdW5jdGlvbiB0aGF0IHJldHVybnMgbmFtZSBvZiB0aGUgY2xhc3MgPC9wPlxuXHRcdCo8cD4gY2xhc3M6IHN0cmluZ1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIE5hbWUgb2YgdGhlIGNzcyBjbGFzcyBzZWxlY3RvciA8L3A+XG5cdFx0KjxwPiB0aGVtZUNvbG9yOiBzdHJpbmdcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHByaW1hcnkvYWNjZW50L3dhcm4gPC9wPlxuXHQgICo8cHJlPlxuXHRcdCp7XG5cdCAgKlx0Ly8gQ29udGFpbmVyIHN1cnJvdW5kaW5nIHRoZSBTd2l0Y2hcblx0ICAqXHRjb250YWluZXI6e1xuXHQgICpcdFx0ZHluYW1pY0NsYXNzLFxuXHQgICpcdFx0Y2xhc3Ncblx0ICAqXHR9LFxuXHQgICpcdC8vIG1kLXN3aXRjaCBzdHlsaW5nXG5cdCAgKlx0c3dpdGNoOntcblx0ICAqXHRcdGR5bmFtaWNDbGFzcyxcblx0ICAqXHRcdGNsYXNzLFxuXHQgICpcdFx0dGhlbWVDb2xvclxuXHQgICpcdH1cblx0ICAqfVxuXHQgICogPC9wcmU+XG5cdCAgKi9cblx0Ly8gQElucHV0KCkgcHVibGljIHN0eWxpbmc6IFN3aXRjaFN0eWxpbmdNb2RlbDtcblxuXHQvKipAaGlkZGVuICovXG5cdGNvbnN0cnVjdG9yKC8qKkBoaWRkZW4gKi9wdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwvKipAaGlkZGVuICovKSB7IHN1cGVyKGVsZW1lbnRSZWYpOyB9XG5cblx0LyoqQGhpZGRlblxuICAgICAqIEl0IHdpbGwgYmUgZ2VuZXJhdGVkIDxiPmNmQ2hlY2tib3g8L2I+IG9iamVjdCBhbmQgcmVuZGVyZWQgaW5zaWRlIGNvbXBvbmVudCB0ZW1wbGF0ZS4gQWxzbyBjZkNoZWNrU3RhdGVzIGZ1bmN0aW9uIHdpbGwgaW5pdGlhbGl6ZSBjaGVja2JveGVzIHN0YXRlcy5cbiAgICAgKi9cblx0bmdPbkluaXQoKSB7IFxuICBcdFx0Ly8gdGhpcy5nZXRNeVRlbXBsYXRlKFwic3dpdGNoXCIsU3dpdGNoVGVtcGxhdGVzKS50aGVuKCgpID0+IHtcblx0XHQvLyBcdGlmKHRoaXMucHJvcGVydGllcz09bnVsbClcblx0XHQvLyBcdHtcblx0XHQvLyBcdFx0dGhpcy5wcm9wZXJ0aWVzID0gbmV3IFNlbGVjdGFibGVNb2RlbCh0aGlzLmFjdGl2ZVRlbXBsYXRlW1wicHJvcGVydHlcIl0pO1xuXHRcdC8vIFx0fVxuXHRcdC8vIFx0ZWxzZVxuXHRcdC8vIFx0e1xuXHRcdC8vIFx0XHR2YXIgbWFpbktleXMgPSBPYmplY3Qua2V5cyh0aGlzLmFjdGl2ZVRlbXBsYXRlW1wicHJvcGVydHlcIl0pO1xuXHRcdC8vIFx0XHRmb3IobGV0IGtleSBvZiBtYWluS2V5cylcblx0XHQvLyBcdFx0e1xuXHRcdC8vIFx0XHRcdGlmKHRoaXMucHJvcGVydGllc1trZXldPT1udWxsKVxuXHRcdC8vIFx0XHRcdFx0dGhpcy5wcm9wZXJ0aWVzW2tleV09dGhpcy5hY3RpdmVUZW1wbGF0ZVtcInByb3BlcnR5XCJdW2tleV07XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdH1cblxuXHRcdC8vIFx0aWYodGhpcy5zdHlsaW5nPT1udWxsKVxuXHRcdC8vIFx0XHR0aGlzLnN0eWxpbmcgPSBuZXcgU3dpdGNoU3R5bGluZ01vZGVsICh0aGlzLmFjdGl2ZVRlbXBsYXRlW1wic3R5bGVcIl0pO1xuXHRcdC8vIFx0aWYodGhpcy5kaXNhYmxlIT1udWxsKSB0aGlzLnByb3BlcnRpZXMuZGlzYWJsZSA9IHRoaXMuZGlzYWJsZTtcblx0XHQvLyBcdGlmKHRoaXMuZGlzcGxheSE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLmRpc3BsYXkgPSB0aGlzLmRpc3BsYXk7XG5cdFx0Ly8gXHRpZih0aGlzLnZhbHVlIT1udWxsKSB0aGlzLnByb3BlcnRpZXMudmFsdWUgPSB0aGlzLnZhbHVlO1xuXHRcdC8vIFx0aWYodGhpcy5pdGVtIT1udWxsKSB0aGlzLnByb3BlcnRpZXMuaXRlbSA9IHRoaXMuaXRlbTtcblx0XHQvLyBcdGlmKHRoaXMuY2hlY2tlZCE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLmNoZWNrZWQgPSB0aGlzLmNoZWNrZWQ7XG5cdFx0Ly8gXHRpZih0aGlzLml0ZW1Qb3NpdGlvbiE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLml0ZW1Qb3NpdGlvbiA9IHRoaXMuaXRlbVBvc2l0aW9uO1xuXG5cdFx0Ly8gXHR0aGlzLmNoZWNrZWQgPSB0aGlzLnByb3BlcnRpZXMuY2hlY2tlZDtcblx0XHRcdFxuXHRcdC8vIFx0dGhpcy5jZlN3aXRjaCA9IHRoaXMucHJvcGVydGllcztcblx0XHQvLyB9KTtcblx0fVxuXG5cdC8qKkBoaWRkZW4gKi9cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogYW55KXtcblx0XHRpZih0aGlzLnByb3BlcnRpZXMhPW51bGwpXG5cdFx0e1xuXHRcdFx0aWYoY2hhbmdlcy5kaXNhYmxlIT1udWxsKSB0aGlzLnByb3BlcnRpZXMuZGlzYWJsZSA9IGNoYW5nZXMuZGlzYWJsZS5jdXJyZW50VmFsdWU7XG5cdFx0XHRpZihjaGFuZ2VzLmRpc3BsYXkhPW51bGwpIHRoaXMucHJvcGVydGllcy5kaXNwbGF5ID0gY2hhbmdlcy5kaXNwbGF5LmN1cnJlbnRWYWx1ZTtcblx0XHRcdGlmKGNoYW5nZXMuY2hlY2tlZFZhbHVlIT1udWxsKSB0aGlzLnByb3BlcnRpZXMudmFsdWUgPSBjaGFuZ2VzLnZhbHVlLmN1cnJlbnRWYWx1ZTtcblx0XHRcdC8vIGlmKGNoYW5nZXMuaXRlbSE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLml0ZW0gPSBjaGFuZ2VzLml0ZW0uY3VycmVudFZhbHVlO1xuXHRcdFx0aWYoY2hhbmdlcy5pdGVtUG9zaXRpb24hPW51bGwpIHRoaXMucHJvcGVydGllcy5pdGVtUG9zaXRpb24gPSBjaGFuZ2VzLml0ZW1Qb3NpdGlvbi5jdXJyZW50VmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0Z2V0U3dpdGNoQ2xhc3MoKXtcbiAgICAvLyBpZih0aGlzLnN0eWxpbmchPW51bGwgJiYgdGhpcy5zdHlsaW5nLnN3aXRjaCE9bnVsbCYmIHRoaXMuY2ZTd2l0Y2ghPW51bGwpXG4gICAgLy8ge1xuICAgIC8vICAgdHJ5XG4gICAgLy8gICB7XG4gICAgLy8gICAgIHZhciBjbGFzc2VzID0gXCJcIjtcbiAgICAvLyAgICAgdmFyIG1haW5LZXlzID0gT2JqZWN0LmtleXModGhpcy5zdHlsaW5nLnN3aXRjaC5keW5hbWljQ2xhc3MpO1xuICAgIC8vICAgICBmb3IobGV0IGtleSBvZiBtYWluS2V5cyl7XG4gICAgLy8gICAgICAgaWYoZXZhbCh0aGlzLnN0eWxpbmcuc3dpdGNoLmR5bmFtaWNDbGFzc1trZXldKT09dHJ1ZSlcbiAgICAvLyAgICAgICAgIGNsYXNzZXMgPSBjbGFzc2VzK1wiIFwiK2tleTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIHJldHVybiBjbGFzc2VzO1xuICAgIC8vICAgfVxuICAgIC8vICAgY2F0Y2goZSlcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgLy9EbyBub3RoaW5nXG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9XG5cbiAgZ2V0Q29udGFpbmVyQ2xhc3MoKXtcbi8vICAgICBpZih0aGlzLnN0eWxpbmchPW51bGwgJiYgdGhpcy5zdHlsaW5nLmNvbnRhaW5lciE9bnVsbCYmIHRoaXMuY2ZTd2l0Y2ghPW51bGwpXG4vLyAgICAge1xuLy8gICAgICAgdHJ5XG4vLyAgICAgICB7XG4vLyAgICAgICAgIHZhciBjbGFzc2VzID0gXCJcIjtcbi8vICAgICAgICAgdmFyIG1haW5LZXlzID0gT2JqZWN0LmtleXModGhpcy5zdHlsaW5nLmNvbnRhaW5lci5keW5hbWljQ2xhc3MpO1xuLy8gICAgICAgICBmb3IobGV0IGtleSBvZiBtYWluS2V5cyl7XG4vLyAgICAgICAgICAgaWYoZXZhbCh0aGlzLnN0eWxpbmcuY29udGFpbmVyLmR5bmFtaWNDbGFzc1trZXldKT09dHJ1ZSlcbi8vICAgICAgICAgICAgIGNsYXNzZXMgPSBjbGFzc2VzK1wiIFwiK2tleTtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgIHJldHVybiBjbGFzc2VzO1xuLy8gICAgICAgfVxuLy8gICAgICAgY2F0Y2goZSlcbi8vICAgICAgIHtcbi8vICAgICAgICAgLy9EbyBub3RoaW5nXG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4gICAgfVxufSJdfQ==