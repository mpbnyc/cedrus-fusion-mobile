"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var selectable_component_1 = require("../selectable/selectable.component");
var selectable_model_1 = require("../../models/selectable/selectable.model");
var checkbox_styling_model_1 = require("../../models/selectable/checkbox-styling.model");
var checkbox_template_1 = require("../../templates/checkbox.template");
var template_service_1 = require("../../services/template-service/template.service");
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
    /**@hidden */
    function CfCheckboxComponent(/**@hidden */ elementRef, /**@hidden */ templateService) {
        var _this = _super.call(this, elementRef, templateService) || this;
        _this.elementRef = elementRef;
        return _this;
    }
    /**@hidden
     * It will be generated <b>cfCheckbox</b> object and rendered inside component template. Also cfCheckStates function will initialize checkboxes states.
     */
    CfCheckboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getMyTemplate("checkbox", checkbox_template_1.CheckboxTemplates).then(function () {
            if (_this.properties == null) {
                _this.properties = new selectable_model_1.SelectableModel(_this.activeTemplate["property"]);
            }
            else {
                var mainKeys = Object.keys(_this.activeTemplate["property"]);
                for (var _i = 0, mainKeys_1 = mainKeys; _i < mainKeys_1.length; _i++) {
                    var key = mainKeys_1[_i];
                    if (_this.properties[key] == null)
                        _this.properties[key] = _this.activeTemplate["property"][key];
                }
            }
            if (_this.styling == null)
                _this.styling = new checkbox_styling_model_1.CheckboxStylingModel(_this.activeTemplate["style"]);
            if (_this.disable != null)
                _this.properties.disable = _this.disable;
            if (_this.display != null)
                _this.properties.display = _this.display;
            if (_this.value != null)
                _this.properties.value = _this.value;
            if (_this.item != null)
                _this.properties.item = _this.item;
            if (_this.checked != null)
                _this.properties.checked = _this.selected;
            if (_this.itemPosition != null)
                _this.properties.itemPosition = _this.itemPosition;
            _this.checked = _this.properties.checked;
            _this.cfCheckbox = _this.properties;
        });
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
            if (changes.item != null)
                this.properties.item = changes.item.currentValue;
            if (changes.itemPosition != null)
                this.properties.itemPosition = changes.itemPosition.currentValue;
        }
    };
    /**@hidden */
    CfCheckboxComponent.prototype.getCheckboxClass = function () {
        if (this.styling != null && this.styling.checkbox != null && this.cfCheckbox != null) {
            try {
                var classes = "";
                var mainKeys = Object.keys(this.styling.checkbox.dynamicClass);
                for (var _i = 0, mainKeys_2 = mainKeys; _i < mainKeys_2.length; _i++) {
                    var key = mainKeys_2[_i];
                    if (eval(this.styling.checkbox.dynamicClass[key]) == true)
                        classes = classes + " " + key;
                }
                return classes;
            }
            catch (e) {
                //Do nothing
            }
        }
    };
    /**@hidden */
    CfCheckboxComponent.prototype.getContainerClass = function () {
        if (this.styling != null && this.styling.container != null && this.cfCheckbox != null) {
            try {
                var classes = "";
                var mainKeys = Object.keys(this.styling.container.dynamicClass);
                for (var _i = 0, mainKeys_3 = mainKeys; _i < mainKeys_3.length; _i++) {
                    var key = mainKeys_3[_i];
                    if (eval(this.styling.container.dynamicClass[key]) == true)
                        classes = classes + " " + key;
                }
                return classes;
            }
            catch (e) {
                //Do nothing
            }
        }
    };
    return CfCheckboxComponent;
}(selectable_component_1.CfSelectableComponent));
__decorate([
    core_1.ContentChild(core_1.TemplateRef),
    __metadata("design:type", Object)
], CfCheckboxComponent.prototype, "cfCheckboxTemplate", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", checkbox_styling_model_1.CheckboxStylingModel)
], CfCheckboxComponent.prototype, "styling", void 0);
CfCheckboxComponent = CfCheckboxComponent_1 = __decorate([
    core_1.Component({
        selector: 'cf-checkbox',
        templateUrl: './lib/components/checkbox/checkbox.component.html',
        styleUrls: ['./lib/components/checkbox/checkbox.component.css'],
        providers: [{ provide: selectable_component_1.CfSelectableComponent, useExisting: core_1.forwardRef(function () { return CfCheckboxComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, template_service_1.TemplateService])
], CfCheckboxComponent);
exports.CfCheckboxComponent = CfCheckboxComponent;
var CfCheckboxComponent_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZKO0FBQzdKLDJFQUEyRTtBQUMzRSw2RUFBMkU7QUFDM0UseUZBQXNGO0FBQ3RGLHVFQUFzRTtBQUV0RSxxRkFBbUY7QUFHbkY7Ozs7Ozs7OztHQVNHO0FBUUgsSUFBYSxtQkFBbUI7SUFBUyx1Q0FBcUI7SUFnQzdELGFBQWE7SUFDYiw2QkFBWSxhQUFhLENBQU8sVUFBc0IsRUFBQyxhQUFhLENBQUMsZUFBK0I7UUFBcEcsWUFBd0csa0JBQU0sVUFBVSxFQUFFLGVBQWUsQ0FBQyxTQUFHO1FBQTdHLGdCQUFVLEdBQVYsVUFBVSxDQUFZOztJQUFzRixDQUFDO0lBRTdJOztPQUVNO0lBQ04sc0NBQVEsR0FBUjtRQUFBLGlCQTRCQztRQTNCRSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBQyxxQ0FBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN2RCxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsVUFBVSxJQUFFLElBQUksQ0FBQyxDQUN6QixDQUFDO2dCQUNBLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQ0FBZSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN4RSxDQUFDO1lBQ0QsSUFBSSxDQUNKLENBQUM7Z0JBQ0EsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVELEdBQUcsQ0FBQSxDQUFZLFVBQVEsRUFBUixxQkFBUSxFQUFSLHNCQUFRLEVBQVIsSUFBUTtvQkFBbkIsSUFBSSxHQUFHLGlCQUFBO29CQUVWLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUUsSUFBSSxDQUFDO3dCQUM3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QUFRLEVBQVIsSUFBUTtvQkFBbkIsSUFBSSxHQUFHLGlCQUFBO29CQUNULEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBRSxJQUFJLENBQUM7d0JBQ3RELE9BQU8sR0FBRyxPQUFPLEdBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQztpQkFDM0I7Z0JBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNqQixDQUFDO1lBQ0QsS0FBSyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQ1IsQ0FBQztnQkFDQyxZQUFZO1lBQ2QsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBdkhELENBQXlDLDRDQUFxQixHQXVIN0Q7QUFsSDJCO0lBQTFCLG1CQUFZLENBQUMsa0JBQVcsQ0FBQzs7K0RBQW9CO0FBeUJyQztJQUFSLFlBQUssRUFBRTs4QkFBaUIsNkNBQW9CO29EQUFDO0FBOUJsQyxtQkFBbUI7SUFQL0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFdBQVcsRUFBRSxtREFBbUQ7UUFDaEUsU0FBUyxFQUFFLENBQUMsa0RBQWtELENBQUM7UUFDL0QsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsNENBQXFCLEVBQUUsV0FBVyxFQUFFLGlCQUFVLENBQUMsY0FBTSxPQUFBLHFCQUFtQixFQUFuQixDQUFtQixDQUFDLEVBQUMsQ0FBQztLQUNsRyxDQUFDO3FDQW1DMkMsaUJBQVUsRUFBK0Isa0NBQWU7R0FqQ3hGLG1CQUFtQixDQXVIL0I7QUF2SFksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgQ29udGVudENoaWxkLCBUZW1wbGF0ZVJlZiwgSG9zdEJpbmRpbmcsIFNpbXBsZUNoYW5nZXMsIGZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2ZTZWxlY3RhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vc2VsZWN0YWJsZS9zZWxlY3RhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RhYmxlTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvc2VsZWN0YWJsZS9zZWxlY3RhYmxlLm1vZGVsJztcbmltcG9ydCB7IENoZWNrYm94U3R5bGluZ01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3NlbGVjdGFibGUvY2hlY2tib3gtc3R5bGluZy5tb2RlbCc7XG5pbXBvcnQgeyBDaGVja2JveFRlbXBsYXRlcyB9IGZyb20gJy4uLy4uL3RlbXBsYXRlcy9jaGVja2JveC50ZW1wbGF0ZSc7XG5cbmltcG9ydCB7IFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RlbXBsYXRlLXNlcnZpY2UvdGVtcGxhdGUuc2VydmljZSc7XG5cblxuLyoqXG4gKiA8cD5DRiBDaGVja2JveCBDb21wb25lbnQ8L3A+IFxuICogPHByZT5cbiAqIDxjb2RlPlxuICogaW1wb3J0IHsgU2VsZWN0YWJsZU1vZGVsIH0gZnJvbSAnY2VkcnVzLWZ1c2lvbidcbiAqIGltcG9ydCB7IENoZWNrYm94U3R5bGluZ01vZGVsIH0gZnJvbSAnY2VkcnVzLWZ1c2lvbidcbiAqIDxjb2RlPjw8L2NvZGU+Y2YtY2hlY2tib3g8Y29kZT4+PC9jb2RlPjxjb2RlPjw8L2NvZGU+PGNvZGU+LzwvY29kZT5jZi1jaGVja2JveDxjb2RlPj48L2NvZGU+XG4gKiA8L2NvZGU+XG4gKiA8L3ByZT5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2YtY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saWIvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBDZlNlbGVjdGFibGVDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENmQ2hlY2tib3hDb21wb25lbnQpfV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDZkNoZWNrYm94Q29tcG9uZW50IGV4dGVuZHMgQ2ZTZWxlY3RhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0XG5cdC8qKiBAaGlkZGVuXG5cdCAqIENvbXBvbmVudCBwcm9wZXJ0eSBmb3IgcmVuZGVyaW5nIHRlbXBsYXRlIGZvciBlYWNoIGNoZWNrYm94IGlmIHRoYXQgdGVtcGxhdGUgd2FzIGRlZmluZWQgaW4gaHRtbC5cblx0ICovXG5cdEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYpIGNmQ2hlY2tib3hUZW1wbGF0ZTtcblxuXHQvKipAaGlkZGVuICovXG5cdGNmQ2hlY2tib3g6IFNlbGVjdGFibGVNb2RlbDtcblxuXHQvKipcblx0ICAqPHA+IGR5bmFtaWNDbGFzczogZnVuY3Rpb24oKSAtPiBzdHJpbmcsXHQvLyBGdW5jdGlvbiB0aGF0IHJldHVybnMgbmFtZSBvZiB0aGUgY2xhc3MgPC9wPlxuXHRcdCo8cD4gY2xhc3M6IHN0cmluZ1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIE5hbWUgb2YgdGhlIGNzcyBjbGFzcyBzZWxlY3RvciA8L3A+XG5cdFx0KjxwPiB0aGVtZUNvbG9yOiBzdHJpbmdcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHByaW1hcnkvYWNjZW50L3dhcm4gPC9wPlxuXHQgICo8cHJlPlxuXHRcdCp7XG5cdCAgKlx0Ly8gQ29udGFpbmVyIHN1cnJvdW5kaW5nIHRoZSBDaGVja2JveC9Td2l0Y2gvUmFkaW9cblx0ICAqXHRjb250YWluZXI6e1xuXHQgICpcdFx0ZHluYW1pY0NsYXNzLFxuXHQgICpcdFx0Y2xhc3Ncblx0ICAqXHR9LFxuXHQgICpcdC8vIG1kLWNoZWNrYm94IG9yIG1kLXN3aXRjaCBvciBtZC1yYWRpbyBzdHlsaW5nXG5cdCAgKlx0Y2hlY2tib3gvc3dpdGNoL3JhZGlvOntcblx0ICAqXHRcdGR5bmFtaWNDbGFzcyxcblx0ICAqXHRcdGNsYXNzLFxuXHQgICpcdFx0dGhlbWVDb2xvclxuXHQgICpcdH1cblx0ICAqfVxuXHQgICogPC9wcmU+XG5cdCAgKi9cblx0QElucHV0KCkgcHVibGljIHN0eWxpbmc6IENoZWNrYm94U3R5bGluZ01vZGVsO1xuXHRcblx0LyoqQGhpZGRlbiAqL1xuXHRjb25zdHJ1Y3RvcigvKipAaGlkZGVuICovcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsLyoqQGhpZGRlbiAqLyB0ZW1wbGF0ZVNlcnZpY2U6VGVtcGxhdGVTZXJ2aWNlKSB7IHN1cGVyKGVsZW1lbnRSZWYsIHRlbXBsYXRlU2VydmljZSk7IH1cblx0XG5cdC8qKkBoaWRkZW5cbiAgICAgKiBJdCB3aWxsIGJlIGdlbmVyYXRlZCA8Yj5jZkNoZWNrYm94PC9iPiBvYmplY3QgYW5kIHJlbmRlcmVkIGluc2lkZSBjb21wb25lbnQgdGVtcGxhdGUuIEFsc28gY2ZDaGVja1N0YXRlcyBmdW5jdGlvbiB3aWxsIGluaXRpYWxpemUgY2hlY2tib3hlcyBzdGF0ZXMuXG4gICAgICovXG5cdG5nT25Jbml0KCkgeyBcbiAgXHRcdHRoaXMuZ2V0TXlUZW1wbGF0ZShcImNoZWNrYm94XCIsQ2hlY2tib3hUZW1wbGF0ZXMpLnRoZW4oKCkgPT4ge1xuXHRcdFx0aWYodGhpcy5wcm9wZXJ0aWVzPT1udWxsKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLnByb3BlcnRpZXMgPSBuZXcgU2VsZWN0YWJsZU1vZGVsKHRoaXMuYWN0aXZlVGVtcGxhdGVbXCJwcm9wZXJ0eVwiXSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBtYWluS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuYWN0aXZlVGVtcGxhdGVbXCJwcm9wZXJ0eVwiXSk7XG5cdFx0XHRcdGZvcihsZXQga2V5IG9mIG1haW5LZXlzKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYodGhpcy5wcm9wZXJ0aWVzW2tleV09PW51bGwpXG5cdFx0XHRcdFx0XHR0aGlzLnByb3BlcnRpZXNba2V5XT10aGlzLmFjdGl2ZVRlbXBsYXRlW1wicHJvcGVydHlcIl1ba2V5XTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZih0aGlzLnN0eWxpbmc9PW51bGwpXG5cdFx0XHRcdHRoaXMuc3R5bGluZyA9IG5ldyBDaGVja2JveFN0eWxpbmdNb2RlbCAodGhpcy5hY3RpdmVUZW1wbGF0ZVtcInN0eWxlXCJdKTtcblx0XHRcdGlmKHRoaXMuZGlzYWJsZSE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLmRpc2FibGUgPSB0aGlzLmRpc2FibGU7XG5cdFx0XHRpZih0aGlzLmRpc3BsYXkhPW51bGwpIHRoaXMucHJvcGVydGllcy5kaXNwbGF5ID0gdGhpcy5kaXNwbGF5O1xuXHRcdFx0aWYodGhpcy52YWx1ZSE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLnZhbHVlID0gdGhpcy52YWx1ZTtcblx0XHRcdGlmKHRoaXMuaXRlbSE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLml0ZW0gPSB0aGlzLml0ZW07XG5cdFx0XHRpZih0aGlzLmNoZWNrZWQhPW51bGwpIHRoaXMucHJvcGVydGllcy5jaGVja2VkID0gdGhpcy5zZWxlY3RlZDtcblx0XHRcdGlmKHRoaXMuaXRlbVBvc2l0aW9uIT1udWxsKSB0aGlzLnByb3BlcnRpZXMuaXRlbVBvc2l0aW9uID0gdGhpcy5pdGVtUG9zaXRpb247XG5cblx0XHRcdHRoaXMuY2hlY2tlZCA9IHRoaXMucHJvcGVydGllcy5jaGVja2VkO1xuXHRcdFx0dGhpcy5jZkNoZWNrYm94ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqQGhpZGRlbiAqL1xuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpe1xuXHRcdGlmKHRoaXMucHJvcGVydGllcyE9bnVsbClcblx0XHR7XG5cdFx0XHRpZihjaGFuZ2VzLmRpc2FibGUhPW51bGwpIHRoaXMucHJvcGVydGllcy5kaXNhYmxlID0gY2hhbmdlcy5kaXNhYmxlLmN1cnJlbnRWYWx1ZTtcblx0XHRcdGlmKGNoYW5nZXMuZGlzcGxheSE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLmRpc3BsYXkgPSBjaGFuZ2VzLmRpc3BsYXkuY3VycmVudFZhbHVlO1xuXHRcdFx0aWYoY2hhbmdlcy52YWx1ZSE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLnZhbHVlID0gY2hhbmdlcy52YWx1ZS5jdXJyZW50VmFsdWU7XG5cdFx0XHRpZihjaGFuZ2VzLml0ZW0hPW51bGwpIHRoaXMucHJvcGVydGllcy5pdGVtID0gY2hhbmdlcy5pdGVtLmN1cnJlbnRWYWx1ZTtcblx0XHRcdGlmKGNoYW5nZXMuaXRlbVBvc2l0aW9uIT1udWxsKSB0aGlzLnByb3BlcnRpZXMuaXRlbVBvc2l0aW9uID0gY2hhbmdlcy5pdGVtUG9zaXRpb24uY3VycmVudFZhbHVlO1xuXHRcdH1cblx0fVxuXHQvKipAaGlkZGVuICovXG5cdGdldENoZWNrYm94Q2xhc3MoKXtcbiAgICBpZih0aGlzLnN0eWxpbmchPW51bGwgJiYgdGhpcy5zdHlsaW5nLmNoZWNrYm94IT1udWxsJiYgdGhpcy5jZkNoZWNrYm94IT1udWxsKVxuICAgIHtcbiAgICAgIHRyeVxuICAgICAge1xuICAgICAgICB2YXIgY2xhc3NlcyA9IFwiXCI7XG4gICAgICAgIHZhciBtYWluS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc3R5bGluZy5jaGVja2JveC5keW5hbWljQ2xhc3MpO1xuICAgICAgICBmb3IobGV0IGtleSBvZiBtYWluS2V5cyl7XG4gICAgICAgICAgaWYoZXZhbCh0aGlzLnN0eWxpbmcuY2hlY2tib3guZHluYW1pY0NsYXNzW2tleV0pPT10cnVlKVxuICAgICAgICAgICAgY2xhc3NlcyA9IGNsYXNzZXMrXCIgXCIra2V5O1xuICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgICB9XG4gICAgICBjYXRjaChlKVxuICAgICAge1xuICAgICAgICAvL0RvIG5vdGhpbmdcbiAgICAgIH1cbiAgICB9XG4gIH1cblx0LyoqQGhpZGRlbiAqL1xuICBnZXRDb250YWluZXJDbGFzcygpe1xuICAgIGlmKHRoaXMuc3R5bGluZyE9bnVsbCAmJiB0aGlzLnN0eWxpbmcuY29udGFpbmVyIT1udWxsJiYgdGhpcy5jZkNoZWNrYm94IT1udWxsKVxuICAgIHtcbiAgICAgIHRyeVxuICAgICAge1xuICAgICAgICB2YXIgY2xhc3NlcyA9IFwiXCI7XG4gICAgICAgIHZhciBtYWluS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc3R5bGluZy5jb250YWluZXIuZHluYW1pY0NsYXNzKTtcbiAgICAgICAgZm9yKGxldCBrZXkgb2YgbWFpbktleXMpe1xuICAgICAgICAgIGlmKGV2YWwodGhpcy5zdHlsaW5nLmNvbnRhaW5lci5keW5hbWljQ2xhc3Nba2V5XSk9PXRydWUpXG4gICAgICAgICAgICBjbGFzc2VzID0gY2xhc3NlcytcIiBcIitrZXk7XG4gICAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xhc3NlcztcbiAgICAgIH1cbiAgICAgIGNhdGNoKGUpXG4gICAgICB7XG4gICAgICAgIC8vRG8gbm90aGluZ1xuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ==