"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var selectable_component_1 = require("../selectable/selectable.component");
// import { CheckboxStylingModel } from '../../models/selectable/checkbox-styling.model';
// import { CheckboxTemplates } from '../../templates/checkbox.template';
// import { TemplateService } from '../../services/template-service/template.service';
/**
 * <p>CF Checkbox Component</p>
 * <pre>
 * <code>
 * import { SelectableModel } from 'cedrus-fusion'
 * import { CheckboxStylingModel } from 'cedrus-fusion'
 * <code><</code>cf-checkbox<code>></code><code><</code><code>/</code>cf-checkbox<code>></code>
 * </code>
 * </pre>
 */
var CfCheckboxComponent = CfCheckboxComponent_1 = (function (_super) {
    __extends(CfCheckboxComponent, _super);
    /**
      *<p> dynamicClass: function() -> string,	// Function that returns name of the class </p>
        *<p> class: string												// Name of the css class selector </p>
        *<p> themeColor: string										// primary/accent/warn </p>
      *<pre>
        *{
      *	// Container surrounding the Checkbox/Switch/Radio
      *	container:{
      *		dynamicClass,
      *		class
      *	},
      *	// md-checkbox or md-switch or md-radio styling
      *	checkbox/switch/radio:{
      *		dynamicClass,
      *		class,
      *		themeColor
      *	}
      *}
      * </pre>
      */
    // @Input() public styling: CheckboxStylingModel;
    /**@hidden */
    function CfCheckboxComponent(/**@hidden */ elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.elementRef = elementRef;
        /**@hidden */
        _this.cfCheckbox = {
            display: true,
            disable: true,
            checked: false,
            itemPosition: 'before'
        };
        return _this;
    }
    /**@hidden
     * It will be generated <b>cfCheckbox</b> object and rendered inside component template. Also cfCheckStates function will initialize checkboxes states.
     */
    CfCheckboxComponent.prototype.ngOnInit = function () {
        // this.getMyTemplate("checkbox",CheckboxTemplates).then(() => {
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
        // 		this.styling = new CheckboxStylingModel (this.activeTemplate["style"]);
        // 	if(this.disable!=null) this.properties.disable = this.disable;
        // 	if(this.display!=null) this.properties.display = this.display;
        // 	if(this.value!=null) this.properties.value = this.value;
        // 	if(this.item!=null) this.properties.item = this.item;
        // 	if(this.checked!=null) this.properties.checked = this.selected;
        // 	if(this.itemPosition!=null) this.properties.itemPosition = this.itemPosition;
        // 	this.checked = this.properties.checked;
        // 	this.cfCheckbox = this.properties;
        // });
    };
    /**@hidden */
    CfCheckboxComponent.prototype.ngOnChanges = function (changes) {
        if (this.properties != null) {
            if (changes.disable != null)
                this.properties.disable = changes.disable.currentValue;
            if (changes.display != null)
                this.properties.display = changes.display.currentValue;
            if (changes.value != null)
                this.properties.value = changes.value.currentValue;
            // if(changes.item!=null) this.properties.item = changes.item.currentValue;
            if (changes.itemPosition != null)
                this.properties.itemPosition = changes.itemPosition.currentValue;
        }
    };
    CfCheckboxComponent.prototype.getCheckboxClass = function () {
        // if(this.styling!=null && this.styling.checkbox!=null&& this.cfCheckbox!=null)
        // {
        //   try
        //   {
        //     var classes = "";
        //     var mainKeys = Object.keys(this.styling.checkbox.dynamicClass);
        //     for(let key of mainKeys){
        //       if(eval(this.styling.checkbox.dynamicClass[key])==true)
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
    CfCheckboxComponent.prototype.getContainerClass = function () {
        //     if(this.styling!=null && this.styling.container!=null&& this.cfCheckbox!=null)
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
    return CfCheckboxComponent;
}(selectable_component_1.CfSelectableComponent));
__decorate([
    core_1.ContentChild(core_1.TemplateRef),
    __metadata("design:type", Object)
], CfCheckboxComponent.prototype, "cfCheckboxTemplate", void 0);
CfCheckboxComponent = CfCheckboxComponent_1 = __decorate([
    core_1.Component({
        selector: 'cf-checkbox',
        templateUrl: './lib/components/checkbox/checkbox.component.html',
        styleUrls: ['./checkbox.component.css'],
        providers: [{ provide: selectable_component_1.CfSelectableComponent, useExisting: core_1.forwardRef(function () { return CfCheckboxComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], CfCheckboxComponent);
exports.CfCheckboxComponent = CfCheckboxComponent;
var CfCheckboxComponent_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZKO0FBQzdKLDJFQUEyRTtBQUUzRSx5RkFBeUY7QUFDekYseUVBQXlFO0FBRXpFLHNGQUFzRjtBQUd0Rjs7Ozs7Ozs7O0dBU0c7QUFRSCxJQUFhLG1CQUFtQjtJQUFTLHVDQUFxQjtJQWU3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQW1CSTtJQUNKLGlEQUFpRDtJQUVqRCxhQUFhO0lBQ2IsNkJBQVksYUFBYSxDQUFPLFVBQXNCO1FBQXRELFlBQXdFLGtCQUFNLFVBQVUsQ0FBQyxTQUFHO1FBQTVELGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBL0J0RCxhQUFhO1FBQ2IsZ0JBQVUsR0FBb0I7WUFDdkIsT0FBTyxFQUFFLElBQUk7WUFDYixPQUFPLEVBQUUsSUFBSTtZQUNiLE9BQU8sRUFBRSxLQUFLO1lBQ2QsWUFBWSxFQUFFLFFBQVE7U0FDekIsQ0FBQTs7SUF5QnVGLENBQUM7SUFFNUY7O09BRU07SUFDTixzQ0FBUSxHQUFSO1FBQ0csZ0VBQWdFO1FBQ2xFLDZCQUE2QjtRQUM3QixLQUFLO1FBQ0wsNEVBQTRFO1FBQzVFLEtBQUs7UUFDTCxRQUFRO1FBQ1IsS0FBSztRQUNMLGlFQUFpRTtRQUNqRSw2QkFBNkI7UUFDN0IsTUFBTTtRQUNOLG9DQUFvQztRQUNwQyxpRUFBaUU7UUFDakUsTUFBTTtRQUNOLEtBQUs7UUFFTCwwQkFBMEI7UUFDMUIsNEVBQTRFO1FBQzVFLGtFQUFrRTtRQUNsRSxrRUFBa0U7UUFDbEUsNERBQTREO1FBQzVELHlEQUF5RDtRQUN6RCxtRUFBbUU7UUFDbkUsaUZBQWlGO1FBRWpGLDJDQUEyQztRQUMzQyxzQ0FBc0M7UUFDdEMsTUFBTTtJQUNQLENBQUM7SUFFRCxhQUFhO0lBQ2IseUNBQVcsR0FBWCxVQUFZLE9BQVk7UUFDdkIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBRSxJQUFJLENBQUMsQ0FDekIsQ0FBQztZQUNBLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUUsSUFBSSxDQUFDO2dCQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ2pGLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUUsSUFBSSxDQUFDO2dCQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ2pGLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUUsSUFBSSxDQUFDO2dCQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQzNFLDJFQUEyRTtZQUMzRSxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsWUFBWSxJQUFFLElBQUksQ0FBQztnQkFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQztRQUNqRyxDQUFDO0lBQ0YsQ0FBQztJQUVELDhDQUFnQixHQUFoQjtRQUNHLGdGQUFnRjtRQUNoRixJQUFJO1FBQ0osUUFBUTtRQUNSLE1BQU07UUFDTix3QkFBd0I7UUFDeEIsc0VBQXNFO1FBQ3RFLGdDQUFnQztRQUNoQyxnRUFBZ0U7UUFDaEUscUNBQXFDO1FBQ3JDLFVBQVU7UUFDVixzQkFBc0I7UUFDdEIsTUFBTTtRQUNOLGFBQWE7UUFDYixNQUFNO1FBQ04sbUJBQW1CO1FBQ25CLE1BQU07UUFDTixJQUFJO0lBQ04sQ0FBQztJQUVELCtDQUFpQixHQUFqQjtRQUNGLHFGQUFxRjtRQUNyRixRQUFRO1FBQ1IsWUFBWTtRQUNaLFVBQVU7UUFDViw0QkFBNEI7UUFDNUIsMkVBQTJFO1FBQzNFLG9DQUFvQztRQUNwQyxxRUFBcUU7UUFDckUseUNBQXlDO1FBQ3pDLGNBQWM7UUFDZCwwQkFBMEI7UUFDMUIsVUFBVTtRQUNWLGlCQUFpQjtRQUNqQixVQUFVO1FBQ1YsdUJBQXVCO1FBQ3ZCLFVBQVU7UUFDVixRQUFRO1FBQ1IsTUFBTTtJQUNKLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUE3SEQsQ0FBeUMsNENBQXFCLEdBNkg3RDtBQXhIMkI7SUFBMUIsbUJBQVksQ0FBQyxrQkFBVyxDQUFDOzsrREFBb0I7QUFMbEMsbUJBQW1CO0lBUC9CLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2QixXQUFXLEVBQUUsbURBQW1EO1FBQ2hFLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1FBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLDRDQUFxQixFQUFFLFdBQVcsRUFBRSxpQkFBVSxDQUFDLGNBQU0sT0FBQSxxQkFBbUIsRUFBbkIsQ0FBbUIsQ0FBQyxFQUFDLENBQUM7S0FDbEcsQ0FBQztxQ0F3QzJDLGlCQUFVO0dBdEMxQyxtQkFBbUIsQ0E2SC9CO0FBN0hZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIENvbnRlbnRDaGlsZCwgVGVtcGxhdGVSZWYsIEhvc3RCaW5kaW5nLCBTaW1wbGVDaGFuZ2VzLCBmb3J3YXJkUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENmU2VsZWN0YWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL3NlbGVjdGFibGUvc2VsZWN0YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0YWJsZU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3NlbGVjdGFibGUvc2VsZWN0YWJsZS5tb2RlbCc7XG4vLyBpbXBvcnQgeyBDaGVja2JveFN0eWxpbmdNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9zZWxlY3RhYmxlL2NoZWNrYm94LXN0eWxpbmcubW9kZWwnO1xuLy8gaW1wb3J0IHsgQ2hlY2tib3hUZW1wbGF0ZXMgfSBmcm9tICcuLi8uLi90ZW1wbGF0ZXMvY2hlY2tib3gudGVtcGxhdGUnO1xuXG4vLyBpbXBvcnQgeyBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90ZW1wbGF0ZS1zZXJ2aWNlL3RlbXBsYXRlLnNlcnZpY2UnO1xuXG5cbi8qKlxuICogPHA+Q0YgQ2hlY2tib3ggQ29tcG9uZW50PC9wPiBcbiAqIDxwcmU+XG4gKiA8Y29kZT5cbiAqIGltcG9ydCB7IFNlbGVjdGFibGVNb2RlbCB9IGZyb20gJ2NlZHJ1cy1mdXNpb24nXG4gKiBpbXBvcnQgeyBDaGVja2JveFN0eWxpbmdNb2RlbCB9IGZyb20gJ2NlZHJ1cy1mdXNpb24nXG4gKiA8Y29kZT48PC9jb2RlPmNmLWNoZWNrYm94PGNvZGU+PjwvY29kZT48Y29kZT48PC9jb2RlPjxjb2RlPi88L2NvZGU+Y2YtY2hlY2tib3g8Y29kZT4+PC9jb2RlPlxuICogPC9jb2RlPlxuICogPC9wcmU+XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NmLWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpYi9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hlY2tib3guY29tcG9uZW50LmNzcyddLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogQ2ZTZWxlY3RhYmxlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDZkNoZWNrYm94Q29tcG9uZW50KX1dXG59KVxuXG5leHBvcnQgY2xhc3MgQ2ZDaGVja2JveENvbXBvbmVudCBleHRlbmRzIENmU2VsZWN0YWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdFxuXHQvKiogQGhpZGRlblxuXHQgKiBDb21wb25lbnQgcHJvcGVydHkgZm9yIHJlbmRlcmluZyB0ZW1wbGF0ZSBmb3IgZWFjaCBjaGVja2JveCBpZiB0aGF0IHRlbXBsYXRlIHdhcyBkZWZpbmVkIGluIGh0bWwuXG5cdCAqL1xuXHRAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmKSBjZkNoZWNrYm94VGVtcGxhdGU7XG5cblx0LyoqQGhpZGRlbiAqL1xuXHRjZkNoZWNrYm94OiBTZWxlY3RhYmxlTW9kZWwgPSB7XG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGRpc2FibGU6IHRydWUsXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICBpdGVtUG9zaXRpb246ICdiZWZvcmUnXG4gICAgfVxuXG5cdC8qKlxuXHQgICo8cD4gZHluYW1pY0NsYXNzOiBmdW5jdGlvbigpIC0+IHN0cmluZyxcdC8vIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBuYW1lIG9mIHRoZSBjbGFzcyA8L3A+XG5cdFx0KjxwPiBjbGFzczogc3RyaW5nXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gTmFtZSBvZiB0aGUgY3NzIGNsYXNzIHNlbGVjdG9yIDwvcD5cblx0XHQqPHA+IHRoZW1lQ29sb3I6IHN0cmluZ1x0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gcHJpbWFyeS9hY2NlbnQvd2FybiA8L3A+XG5cdCAgKjxwcmU+XG5cdFx0Kntcblx0ICAqXHQvLyBDb250YWluZXIgc3Vycm91bmRpbmcgdGhlIENoZWNrYm94L1N3aXRjaC9SYWRpb1xuXHQgICpcdGNvbnRhaW5lcjp7XG5cdCAgKlx0XHRkeW5hbWljQ2xhc3MsXG5cdCAgKlx0XHRjbGFzc1xuXHQgICpcdH0sXG5cdCAgKlx0Ly8gbWQtY2hlY2tib3ggb3IgbWQtc3dpdGNoIG9yIG1kLXJhZGlvIHN0eWxpbmdcblx0ICAqXHRjaGVja2JveC9zd2l0Y2gvcmFkaW86e1xuXHQgICpcdFx0ZHluYW1pY0NsYXNzLFxuXHQgICpcdFx0Y2xhc3MsXG5cdCAgKlx0XHR0aGVtZUNvbG9yXG5cdCAgKlx0fVxuXHQgICp9XG5cdCAgKiA8L3ByZT5cblx0ICAqL1xuXHQvLyBASW5wdXQoKSBwdWJsaWMgc3R5bGluZzogQ2hlY2tib3hTdHlsaW5nTW9kZWw7XG5cdFxuXHQvKipAaGlkZGVuICovXG5cdGNvbnN0cnVjdG9yKC8qKkBoaWRkZW4gKi9wdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwvKipAaGlkZGVuICovKSB7IHN1cGVyKGVsZW1lbnRSZWYpOyB9XG5cdFxuXHQvKipAaGlkZGVuXG4gICAgICogSXQgd2lsbCBiZSBnZW5lcmF0ZWQgPGI+Y2ZDaGVja2JveDwvYj4gb2JqZWN0IGFuZCByZW5kZXJlZCBpbnNpZGUgY29tcG9uZW50IHRlbXBsYXRlLiBBbHNvIGNmQ2hlY2tTdGF0ZXMgZnVuY3Rpb24gd2lsbCBpbml0aWFsaXplIGNoZWNrYm94ZXMgc3RhdGVzLlxuICAgICAqL1xuXHRuZ09uSW5pdCgpIHsgXG4gIFx0XHQvLyB0aGlzLmdldE15VGVtcGxhdGUoXCJjaGVja2JveFwiLENoZWNrYm94VGVtcGxhdGVzKS50aGVuKCgpID0+IHtcblx0XHQvLyBcdGlmKHRoaXMucHJvcGVydGllcz09bnVsbClcblx0XHQvLyBcdHtcblx0XHQvLyBcdFx0dGhpcy5wcm9wZXJ0aWVzID0gbmV3IFNlbGVjdGFibGVNb2RlbCh0aGlzLmFjdGl2ZVRlbXBsYXRlW1wicHJvcGVydHlcIl0pO1xuXHRcdC8vIFx0fVxuXHRcdC8vIFx0ZWxzZVxuXHRcdC8vIFx0e1xuXHRcdC8vIFx0XHR2YXIgbWFpbktleXMgPSBPYmplY3Qua2V5cyh0aGlzLmFjdGl2ZVRlbXBsYXRlW1wicHJvcGVydHlcIl0pO1xuXHRcdC8vIFx0XHRmb3IobGV0IGtleSBvZiBtYWluS2V5cylcblx0XHQvLyBcdFx0e1xuXHRcdC8vIFx0XHRcdGlmKHRoaXMucHJvcGVydGllc1trZXldPT1udWxsKVxuXHRcdC8vIFx0XHRcdFx0dGhpcy5wcm9wZXJ0aWVzW2tleV09dGhpcy5hY3RpdmVUZW1wbGF0ZVtcInByb3BlcnR5XCJdW2tleV07XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdH1cblxuXHRcdC8vIFx0aWYodGhpcy5zdHlsaW5nPT1udWxsKVxuXHRcdC8vIFx0XHR0aGlzLnN0eWxpbmcgPSBuZXcgQ2hlY2tib3hTdHlsaW5nTW9kZWwgKHRoaXMuYWN0aXZlVGVtcGxhdGVbXCJzdHlsZVwiXSk7XG5cdFx0Ly8gXHRpZih0aGlzLmRpc2FibGUhPW51bGwpIHRoaXMucHJvcGVydGllcy5kaXNhYmxlID0gdGhpcy5kaXNhYmxlO1xuXHRcdC8vIFx0aWYodGhpcy5kaXNwbGF5IT1udWxsKSB0aGlzLnByb3BlcnRpZXMuZGlzcGxheSA9IHRoaXMuZGlzcGxheTtcblx0XHQvLyBcdGlmKHRoaXMudmFsdWUhPW51bGwpIHRoaXMucHJvcGVydGllcy52YWx1ZSA9IHRoaXMudmFsdWU7XG5cdFx0Ly8gXHRpZih0aGlzLml0ZW0hPW51bGwpIHRoaXMucHJvcGVydGllcy5pdGVtID0gdGhpcy5pdGVtO1xuXHRcdC8vIFx0aWYodGhpcy5jaGVja2VkIT1udWxsKSB0aGlzLnByb3BlcnRpZXMuY2hlY2tlZCA9IHRoaXMuc2VsZWN0ZWQ7XG5cdFx0Ly8gXHRpZih0aGlzLml0ZW1Qb3NpdGlvbiE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLml0ZW1Qb3NpdGlvbiA9IHRoaXMuaXRlbVBvc2l0aW9uO1xuXG5cdFx0Ly8gXHR0aGlzLmNoZWNrZWQgPSB0aGlzLnByb3BlcnRpZXMuY2hlY2tlZDtcblx0XHQvLyBcdHRoaXMuY2ZDaGVja2JveCA9IHRoaXMucHJvcGVydGllcztcblx0XHQvLyB9KTtcblx0fVxuXG5cdC8qKkBoaWRkZW4gKi9cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogYW55KXtcblx0XHRpZih0aGlzLnByb3BlcnRpZXMhPW51bGwpXG5cdFx0e1xuXHRcdFx0aWYoY2hhbmdlcy5kaXNhYmxlIT1udWxsKSB0aGlzLnByb3BlcnRpZXMuZGlzYWJsZSA9IGNoYW5nZXMuZGlzYWJsZS5jdXJyZW50VmFsdWU7XG5cdFx0XHRpZihjaGFuZ2VzLmRpc3BsYXkhPW51bGwpIHRoaXMucHJvcGVydGllcy5kaXNwbGF5ID0gY2hhbmdlcy5kaXNwbGF5LmN1cnJlbnRWYWx1ZTtcblx0XHRcdGlmKGNoYW5nZXMudmFsdWUhPW51bGwpIHRoaXMucHJvcGVydGllcy52YWx1ZSA9IGNoYW5nZXMudmFsdWUuY3VycmVudFZhbHVlO1xuXHRcdFx0Ly8gaWYoY2hhbmdlcy5pdGVtIT1udWxsKSB0aGlzLnByb3BlcnRpZXMuaXRlbSA9IGNoYW5nZXMuaXRlbS5jdXJyZW50VmFsdWU7XG5cdFx0XHRpZihjaGFuZ2VzLml0ZW1Qb3NpdGlvbiE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLml0ZW1Qb3NpdGlvbiA9IGNoYW5nZXMuaXRlbVBvc2l0aW9uLmN1cnJlbnRWYWx1ZTtcblx0XHR9XG5cdH1cblxuXHRnZXRDaGVja2JveENsYXNzKCl7XG4gICAgLy8gaWYodGhpcy5zdHlsaW5nIT1udWxsICYmIHRoaXMuc3R5bGluZy5jaGVja2JveCE9bnVsbCYmIHRoaXMuY2ZDaGVja2JveCE9bnVsbClcbiAgICAvLyB7XG4gICAgLy8gICB0cnlcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgdmFyIGNsYXNzZXMgPSBcIlwiO1xuICAgIC8vICAgICB2YXIgbWFpbktleXMgPSBPYmplY3Qua2V5cyh0aGlzLnN0eWxpbmcuY2hlY2tib3guZHluYW1pY0NsYXNzKTtcbiAgICAvLyAgICAgZm9yKGxldCBrZXkgb2YgbWFpbktleXMpe1xuICAgIC8vICAgICAgIGlmKGV2YWwodGhpcy5zdHlsaW5nLmNoZWNrYm94LmR5bmFtaWNDbGFzc1trZXldKT09dHJ1ZSlcbiAgICAvLyAgICAgICAgIGNsYXNzZXMgPSBjbGFzc2VzK1wiIFwiK2tleTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIHJldHVybiBjbGFzc2VzO1xuICAgIC8vICAgfVxuICAgIC8vICAgY2F0Y2goZSlcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgLy9EbyBub3RoaW5nXG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9XG5cbiAgZ2V0Q29udGFpbmVyQ2xhc3MoKXtcbi8vICAgICBpZih0aGlzLnN0eWxpbmchPW51bGwgJiYgdGhpcy5zdHlsaW5nLmNvbnRhaW5lciE9bnVsbCYmIHRoaXMuY2ZDaGVja2JveCE9bnVsbClcbi8vICAgICB7XG4vLyAgICAgICB0cnlcbi8vICAgICAgIHtcbi8vICAgICAgICAgdmFyIGNsYXNzZXMgPSBcIlwiO1xuLy8gICAgICAgICB2YXIgbWFpbktleXMgPSBPYmplY3Qua2V5cyh0aGlzLnN0eWxpbmcuY29udGFpbmVyLmR5bmFtaWNDbGFzcyk7XG4vLyAgICAgICAgIGZvcihsZXQga2V5IG9mIG1haW5LZXlzKXtcbi8vICAgICAgICAgICBpZihldmFsKHRoaXMuc3R5bGluZy5jb250YWluZXIuZHluYW1pY0NsYXNzW2tleV0pPT10cnVlKVxuLy8gICAgICAgICAgICAgY2xhc3NlcyA9IGNsYXNzZXMrXCIgXCIra2V5O1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4vLyAgICAgICB9XG4vLyAgICAgICBjYXRjaChlKVxuLy8gICAgICAge1xuLy8gICAgICAgICAvL0RvIG5vdGhpbmdcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbiAgfVxufSJdfQ==