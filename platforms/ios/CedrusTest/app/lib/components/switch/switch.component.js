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
        styleUrls: ['./lib/components/switch/switch.component.css'],
        providers: [{ provide: selectable_component_1.CfSelectableComponent, useExisting: core_1.forwardRef(function () { return CfSwitchComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], CfSwitchComponent);
exports.CfSwitchComponent = CfSwitchComponent;
var CfSwitchComponent_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN3aXRjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBOEk7QUFDOUksMkVBQTJFO0FBRzNFLHFGQUFxRjtBQUNyRixxRUFBcUU7QUFFckUsc0ZBQXNGO0FBRXRGOzs7Ozs7Ozs7R0FTRztBQU9ILElBQWEsaUJBQWlCO0lBQVMscUNBQXFCO0lBYTNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBbUJJO0lBQ0osK0NBQStDO0lBRS9DLGFBQWE7SUFDYiwyQkFBWSxhQUFhLENBQU8sVUFBc0I7UUFBdEQsWUFBd0Usa0JBQU0sVUFBVSxDQUFDLFNBQUc7UUFBNUQsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFsQ3RELFlBQVk7UUFDVSwyQkFBcUIsR0FBRyxFQUFFLENBQUM7O0lBaUMwQyxDQUFDO0lBRTVGOztPQUVNO0lBQ04sb0NBQVEsR0FBUjtRQUNHLDREQUE0RDtRQUM5RCw2QkFBNkI7UUFDN0IsS0FBSztRQUNMLDRFQUE0RTtRQUM1RSxLQUFLO1FBQ0wsUUFBUTtRQUNSLEtBQUs7UUFDTCxpRUFBaUU7UUFDakUsNkJBQTZCO1FBQzdCLE1BQU07UUFDTixvQ0FBb0M7UUFDcEMsaUVBQWlFO1FBQ2pFLE1BQU07UUFDTixLQUFLO1FBRUwsMEJBQTBCO1FBQzFCLDBFQUEwRTtRQUMxRSxrRUFBa0U7UUFDbEUsa0VBQWtFO1FBQ2xFLDREQUE0RDtRQUM1RCx5REFBeUQ7UUFDekQsa0VBQWtFO1FBQ2xFLGlGQUFpRjtRQUVqRiwyQ0FBMkM7UUFFM0Msb0NBQW9DO1FBQ3BDLE1BQU07SUFDUCxDQUFDO0lBRUQsYUFBYTtJQUNiLHVDQUFXLEdBQVgsVUFBWSxPQUFZO1FBQ3ZCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUUsSUFBSSxDQUFDLENBQ3pCLENBQUM7WUFDQSxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFFLElBQUksQ0FBQztnQkFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUNqRixFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFFLElBQUksQ0FBQztnQkFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUNqRixFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsWUFBWSxJQUFFLElBQUksQ0FBQztnQkFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUNsRiwyRUFBMkU7WUFDM0UsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBRSxJQUFJLENBQUM7Z0JBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUM7UUFDakcsQ0FBQztJQUNGLENBQUM7SUFFRCwwQ0FBYyxHQUFkO1FBQ0csNEVBQTRFO1FBQzVFLElBQUk7UUFDSixRQUFRO1FBQ1IsTUFBTTtRQUNOLHdCQUF3QjtRQUN4QixvRUFBb0U7UUFDcEUsZ0NBQWdDO1FBQ2hDLDhEQUE4RDtRQUM5RCxxQ0FBcUM7UUFDckMsVUFBVTtRQUNWLHNCQUFzQjtRQUN0QixNQUFNO1FBQ04sYUFBYTtRQUNiLE1BQU07UUFDTixtQkFBbUI7UUFDbkIsTUFBTTtRQUNOLElBQUk7SUFDTixDQUFDO0lBRUQsNkNBQWlCLEdBQWpCO1FBQ0YsbUZBQW1GO1FBQ25GLFFBQVE7UUFDUixZQUFZO1FBQ1osVUFBVTtRQUNWLDRCQUE0QjtRQUM1QiwyRUFBMkU7UUFDM0Usb0NBQW9DO1FBQ3BDLHFFQUFxRTtRQUNyRSx5Q0FBeUM7UUFDekMsY0FBYztRQUNkLDBCQUEwQjtRQUMxQixVQUFVO1FBQ1YsaUJBQWlCO1FBQ2pCLFVBQVU7UUFDVix1QkFBdUI7UUFDdkIsVUFBVTtRQUNWLFFBQVE7UUFDUixNQUFNO0lBQ0YsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQTVIRCxDQUF1Qyw0Q0FBcUIsR0E0SDNEO0FBekhzQjtJQUFyQixrQkFBVyxDQUFDLE9BQU8sQ0FBQzs7Z0VBQTRCO0FBS3RCO0lBQTFCLG1CQUFZLENBQUMsa0JBQVcsQ0FBQzs7MkRBQWtCO0FBUmhDLGlCQUFpQjtJQU43QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLCtDQUErQztRQUM1RCxTQUFTLEVBQUUsQ0FBQyw4Q0FBOEMsQ0FBQztRQUMzRCxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSw0Q0FBcUIsRUFBRSxXQUFXLEVBQUUsaUJBQVUsQ0FBQyxjQUFNLE9BQUEsbUJBQWlCLEVBQWpCLENBQWlCLENBQUMsRUFBQyxDQUFDO0tBQ2hHLENBQUM7cUNBcUMyQyxpQkFBVTtHQXBDMUMsaUJBQWlCLENBNEg3QjtBQTVIWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBDb250ZW50Q2hpbGQsIFRlbXBsYXRlUmVmLCBIb3N0QmluZGluZyxmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZlNlbGVjdGFibGVDb21wb25lbnQgfSBmcm9tICcuLi9zZWxlY3RhYmxlL3NlbGVjdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdGFibGVNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9zZWxlY3RhYmxlL3NlbGVjdGFibGUubW9kZWwnO1xuXG4vLyBpbXBvcnQgeyBTd2l0Y2hTdHlsaW5nTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvc2VsZWN0YWJsZS9zd2l0Y2gtc3R5bGluZy5tb2RlbCc7XG4vLyBpbXBvcnQgeyBTd2l0Y2hUZW1wbGF0ZXMgfSBmcm9tICcuLi8uLi90ZW1wbGF0ZXMvc3dpdGNoLnRlbXBsYXRlJztcblxuLy8gaW1wb3J0IHsgVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGVtcGxhdGUtc2VydmljZS90ZW1wbGF0ZS5zZXJ2aWNlJztcblxuLyoqXG4gKiA8cD5DRiBTd2l0Y2ggQ29tcG9uZW50PC9wPiBcbiAqIDxwcmU+XG4gKiA8Y29kZT5cbiAqIGltcG9ydCB7IFNlbGVjdGFibGVNb2RlbCB9IGZyb20gJ2NlZHJ1cy1mdXNpb24nXG4gKiBpbXBvcnQgeyBTd2l0Y2hTdHlsaW5nTW9kZWwgfSBmcm9tICdjZWRydXMtZnVzaW9uJ1xuICogPGNvZGU+PDwvY29kZT5jZi1zd2l0Y2g8Y29kZT4+PC9jb2RlPjxjb2RlPjw8L2NvZGU+PGNvZGU+LzwvY29kZT5jZi1zd2l0Y2g8Y29kZT4+PC9jb2RlPlxuICogPC9jb2RlPlxuICogPC9wcmU+XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NmLXN3aXRjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9saWIvY29tcG9uZW50cy9zd2l0Y2gvc3dpdGNoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGliL2NvbXBvbmVudHMvc3dpdGNoL3N3aXRjaC5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBDZlNlbGVjdGFibGVDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENmU3dpdGNoQ29tcG9uZW50KX1dXG59KVxuZXhwb3J0IGNsYXNzIENmU3dpdGNoQ29tcG9uZW50IGV4dGVuZHMgQ2ZTZWxlY3RhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0XG5cdC8qKkBoaWRkZW4qL1xuXHRASG9zdEJpbmRpbmcoJ2NsYXNzJykgbm90aWZhY2F0aW9uQ2xpY2thYmxlID0gJyc7XG5cblx0LyoqQGhpZGRlblxuXHQgKiBDb21wb25lbnQgcHJvcGVydHkgZm9yIHJlbmRlcmluZyB0ZW1wbGF0ZSBmb3IgZWFjaCBzd2l0Y2ggaWYgdGhhdCB0ZW1wbGF0ZSB3YXMgZGVmaW5lZCBpbiBodG1sLlxuXHQgKi9cblx0QENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZikgY2ZTd2l0Y2hUZW1wbGF0ZTtcblxuXHQvKipAaGlkZGVuICovXG5cdGNmU3dpdGNoOiBTZWxlY3RhYmxlTW9kZWw7XG5cblx0LyoqXG5cdCAgKjxwPiBkeW5hbWljQ2xhc3M6IGZ1bmN0aW9uKCkgLT4gc3RyaW5nLFx0Ly8gRnVuY3Rpb24gdGhhdCByZXR1cm5zIG5hbWUgb2YgdGhlIGNsYXNzIDwvcD5cblx0XHQqPHA+IGNsYXNzOiBzdHJpbmdcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBOYW1lIG9mIHRoZSBjc3MgY2xhc3Mgc2VsZWN0b3IgPC9wPlxuXHRcdCo8cD4gdGhlbWVDb2xvcjogc3RyaW5nXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBwcmltYXJ5L2FjY2VudC93YXJuIDwvcD5cblx0ICAqPHByZT5cblx0XHQqe1xuXHQgICpcdC8vIENvbnRhaW5lciBzdXJyb3VuZGluZyB0aGUgU3dpdGNoXG5cdCAgKlx0Y29udGFpbmVyOntcblx0ICAqXHRcdGR5bmFtaWNDbGFzcyxcblx0ICAqXHRcdGNsYXNzXG5cdCAgKlx0fSxcblx0ICAqXHQvLyBtZC1zd2l0Y2ggc3R5bGluZ1xuXHQgICpcdHN3aXRjaDp7XG5cdCAgKlx0XHRkeW5hbWljQ2xhc3MsXG5cdCAgKlx0XHRjbGFzcyxcblx0ICAqXHRcdHRoZW1lQ29sb3Jcblx0ICAqXHR9XG5cdCAgKn1cblx0ICAqIDwvcHJlPlxuXHQgICovXG5cdC8vIEBJbnB1dCgpIHB1YmxpYyBzdHlsaW5nOiBTd2l0Y2hTdHlsaW5nTW9kZWw7XG5cblx0LyoqQGhpZGRlbiAqL1xuXHRjb25zdHJ1Y3RvcigvKipAaGlkZGVuICovcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsLyoqQGhpZGRlbiAqLykgeyBzdXBlcihlbGVtZW50UmVmKTsgfVxuXG5cdC8qKkBoaWRkZW5cbiAgICAgKiBJdCB3aWxsIGJlIGdlbmVyYXRlZCA8Yj5jZkNoZWNrYm94PC9iPiBvYmplY3QgYW5kIHJlbmRlcmVkIGluc2lkZSBjb21wb25lbnQgdGVtcGxhdGUuIEFsc28gY2ZDaGVja1N0YXRlcyBmdW5jdGlvbiB3aWxsIGluaXRpYWxpemUgY2hlY2tib3hlcyBzdGF0ZXMuXG4gICAgICovXG5cdG5nT25Jbml0KCkgeyBcbiAgXHRcdC8vIHRoaXMuZ2V0TXlUZW1wbGF0ZShcInN3aXRjaFwiLFN3aXRjaFRlbXBsYXRlcykudGhlbigoKSA9PiB7XG5cdFx0Ly8gXHRpZih0aGlzLnByb3BlcnRpZXM9PW51bGwpXG5cdFx0Ly8gXHR7XG5cdFx0Ly8gXHRcdHRoaXMucHJvcGVydGllcyA9IG5ldyBTZWxlY3RhYmxlTW9kZWwodGhpcy5hY3RpdmVUZW1wbGF0ZVtcInByb3BlcnR5XCJdKTtcblx0XHQvLyBcdH1cblx0XHQvLyBcdGVsc2Vcblx0XHQvLyBcdHtcblx0XHQvLyBcdFx0dmFyIG1haW5LZXlzID0gT2JqZWN0LmtleXModGhpcy5hY3RpdmVUZW1wbGF0ZVtcInByb3BlcnR5XCJdKTtcblx0XHQvLyBcdFx0Zm9yKGxldCBrZXkgb2YgbWFpbktleXMpXG5cdFx0Ly8gXHRcdHtcblx0XHQvLyBcdFx0XHRpZih0aGlzLnByb3BlcnRpZXNba2V5XT09bnVsbClcblx0XHQvLyBcdFx0XHRcdHRoaXMucHJvcGVydGllc1trZXldPXRoaXMuYWN0aXZlVGVtcGxhdGVbXCJwcm9wZXJ0eVwiXVtrZXldO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHR9XG5cblx0XHQvLyBcdGlmKHRoaXMuc3R5bGluZz09bnVsbClcblx0XHQvLyBcdFx0dGhpcy5zdHlsaW5nID0gbmV3IFN3aXRjaFN0eWxpbmdNb2RlbCAodGhpcy5hY3RpdmVUZW1wbGF0ZVtcInN0eWxlXCJdKTtcblx0XHQvLyBcdGlmKHRoaXMuZGlzYWJsZSE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLmRpc2FibGUgPSB0aGlzLmRpc2FibGU7XG5cdFx0Ly8gXHRpZih0aGlzLmRpc3BsYXkhPW51bGwpIHRoaXMucHJvcGVydGllcy5kaXNwbGF5ID0gdGhpcy5kaXNwbGF5O1xuXHRcdC8vIFx0aWYodGhpcy52YWx1ZSE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLnZhbHVlID0gdGhpcy52YWx1ZTtcblx0XHQvLyBcdGlmKHRoaXMuaXRlbSE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLml0ZW0gPSB0aGlzLml0ZW07XG5cdFx0Ly8gXHRpZih0aGlzLmNoZWNrZWQhPW51bGwpIHRoaXMucHJvcGVydGllcy5jaGVja2VkID0gdGhpcy5jaGVja2VkO1xuXHRcdC8vIFx0aWYodGhpcy5pdGVtUG9zaXRpb24hPW51bGwpIHRoaXMucHJvcGVydGllcy5pdGVtUG9zaXRpb24gPSB0aGlzLml0ZW1Qb3NpdGlvbjtcblxuXHRcdC8vIFx0dGhpcy5jaGVja2VkID0gdGhpcy5wcm9wZXJ0aWVzLmNoZWNrZWQ7XG5cdFx0XHRcblx0XHQvLyBcdHRoaXMuY2ZTd2l0Y2ggPSB0aGlzLnByb3BlcnRpZXM7XG5cdFx0Ly8gfSk7XG5cdH1cblxuXHQvKipAaGlkZGVuICovXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSl7XG5cdFx0aWYodGhpcy5wcm9wZXJ0aWVzIT1udWxsKVxuXHRcdHtcblx0XHRcdGlmKGNoYW5nZXMuZGlzYWJsZSE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLmRpc2FibGUgPSBjaGFuZ2VzLmRpc2FibGUuY3VycmVudFZhbHVlO1xuXHRcdFx0aWYoY2hhbmdlcy5kaXNwbGF5IT1udWxsKSB0aGlzLnByb3BlcnRpZXMuZGlzcGxheSA9IGNoYW5nZXMuZGlzcGxheS5jdXJyZW50VmFsdWU7XG5cdFx0XHRpZihjaGFuZ2VzLmNoZWNrZWRWYWx1ZSE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLnZhbHVlID0gY2hhbmdlcy52YWx1ZS5jdXJyZW50VmFsdWU7XG5cdFx0XHQvLyBpZihjaGFuZ2VzLml0ZW0hPW51bGwpIHRoaXMucHJvcGVydGllcy5pdGVtID0gY2hhbmdlcy5pdGVtLmN1cnJlbnRWYWx1ZTtcblx0XHRcdGlmKGNoYW5nZXMuaXRlbVBvc2l0aW9uIT1udWxsKSB0aGlzLnByb3BlcnRpZXMuaXRlbVBvc2l0aW9uID0gY2hhbmdlcy5pdGVtUG9zaXRpb24uY3VycmVudFZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdGdldFN3aXRjaENsYXNzKCl7XG4gICAgLy8gaWYodGhpcy5zdHlsaW5nIT1udWxsICYmIHRoaXMuc3R5bGluZy5zd2l0Y2ghPW51bGwmJiB0aGlzLmNmU3dpdGNoIT1udWxsKVxuICAgIC8vIHtcbiAgICAvLyAgIHRyeVxuICAgIC8vICAge1xuICAgIC8vICAgICB2YXIgY2xhc3NlcyA9IFwiXCI7XG4gICAgLy8gICAgIHZhciBtYWluS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc3R5bGluZy5zd2l0Y2guZHluYW1pY0NsYXNzKTtcbiAgICAvLyAgICAgZm9yKGxldCBrZXkgb2YgbWFpbktleXMpe1xuICAgIC8vICAgICAgIGlmKGV2YWwodGhpcy5zdHlsaW5nLnN3aXRjaC5keW5hbWljQ2xhc3Nba2V5XSk9PXRydWUpXG4gICAgLy8gICAgICAgICBjbGFzc2VzID0gY2xhc3NlcytcIiBcIitrZXk7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICByZXR1cm4gY2xhc3NlcztcbiAgICAvLyAgIH1cbiAgICAvLyAgIGNhdGNoKGUpXG4gICAgLy8gICB7XG4gICAgLy8gICAgIC8vRG8gbm90aGluZ1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgfVxuXG4gIGdldENvbnRhaW5lckNsYXNzKCl7XG4vLyAgICAgaWYodGhpcy5zdHlsaW5nIT1udWxsICYmIHRoaXMuc3R5bGluZy5jb250YWluZXIhPW51bGwmJiB0aGlzLmNmU3dpdGNoIT1udWxsKVxuLy8gICAgIHtcbi8vICAgICAgIHRyeVxuLy8gICAgICAge1xuLy8gICAgICAgICB2YXIgY2xhc3NlcyA9IFwiXCI7XG4vLyAgICAgICAgIHZhciBtYWluS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc3R5bGluZy5jb250YWluZXIuZHluYW1pY0NsYXNzKTtcbi8vICAgICAgICAgZm9yKGxldCBrZXkgb2YgbWFpbktleXMpe1xuLy8gICAgICAgICAgIGlmKGV2YWwodGhpcy5zdHlsaW5nLmNvbnRhaW5lci5keW5hbWljQ2xhc3Nba2V5XSk9PXRydWUpXG4vLyAgICAgICAgICAgICBjbGFzc2VzID0gY2xhc3NlcytcIiBcIitrZXk7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4gY2xhc3Nlcztcbi8vICAgICAgIH1cbi8vICAgICAgIGNhdGNoKGUpXG4vLyAgICAgICB7XG4vLyAgICAgICAgIC8vRG8gbm90aGluZ1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuICAgIH1cbn0iXX0=