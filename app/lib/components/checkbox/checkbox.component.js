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
        styleUrls: ['./lib/components/checkbox/checkbox.component.scss'],
        providers: [{ provide: selectable_component_1.CfSelectableComponent, useExisting: core_1.forwardRef(function () { return CfCheckboxComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, template_service_1.TemplateService])
], CfCheckboxComponent);
exports.CfCheckboxComponent = CfCheckboxComponent;
var CfCheckboxComponent_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZKO0FBQzdKLDJFQUEyRTtBQUMzRSw2RUFBMkU7QUFDM0UseUZBQXNGO0FBQ3RGLHVFQUFzRTtBQUV0RSxxRkFBbUY7QUFHbkY7Ozs7Ozs7OztHQVNHO0FBUUgsSUFBYSxtQkFBbUI7SUFBUyx1Q0FBcUI7SUFnQzdELGFBQWE7SUFDYiw2QkFBWSxhQUFhLENBQU8sVUFBc0IsRUFBQyxhQUFhLENBQUMsZUFBK0I7UUFBcEcsWUFBd0csa0JBQU0sVUFBVSxFQUFFLGVBQWUsQ0FBQyxTQUFHO1FBQTdHLGdCQUFVLEdBQVYsVUFBVSxDQUFZOztJQUFzRixDQUFDO0lBRTdJOztPQUVNO0lBQ04sc0NBQVEsR0FBUjtRQUFBLGlCQTRCQztRQTNCRSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBQyxxQ0FBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN2RCxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsVUFBVSxJQUFFLElBQUksQ0FBQyxDQUN6QixDQUFDO2dCQUNBLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQ0FBZSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN4RSxDQUFDO1lBQ0QsSUFBSSxDQUNKLENBQUM7Z0JBQ0EsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVELEdBQUcsQ0FBQSxDQUFZLFVBQVEsRUFBUixxQkFBUSxFQUFSLHNCQUFRLEVBQVIsSUFBUTtvQkFBbkIsSUFBSSxHQUFHLGlCQUFBO29CQUVWLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUUsSUFBSSxDQUFDO3dCQUM3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QUFRLEVBQVIsSUFBUTtvQkFBbkIsSUFBSSxHQUFHLGlCQUFBO29CQUNULEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBRSxJQUFJLENBQUM7d0JBQ3RELE9BQU8sR0FBRyxPQUFPLEdBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQztpQkFDM0I7Z0JBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNqQixDQUFDO1lBQ0QsS0FBSyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQ1IsQ0FBQztnQkFDQyxZQUFZO1lBQ2QsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBdkhELENBQXlDLDRDQUFxQixHQXVIN0Q7QUFsSDJCO0lBQTFCLG1CQUFZLENBQUMsa0JBQVcsQ0FBQzs7K0RBQW9CO0FBeUJyQztJQUFSLFlBQUssRUFBRTs4QkFBaUIsNkNBQW9CO29EQUFDO0FBOUJsQyxtQkFBbUI7SUFQL0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFdBQVcsRUFBRSxtREFBbUQ7UUFDaEUsU0FBUyxFQUFFLENBQUMsbURBQW1ELENBQUM7UUFDaEUsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsNENBQXFCLEVBQUUsV0FBVyxFQUFFLGlCQUFVLENBQUMsY0FBTSxPQUFBLHFCQUFtQixFQUFuQixDQUFtQixDQUFDLEVBQUMsQ0FBQztLQUNsRyxDQUFDO3FDQW1DMkMsaUJBQVUsRUFBK0Isa0NBQWU7R0FqQ3hGLG1CQUFtQixDQXVIL0I7QUF2SFksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgQ29udGVudENoaWxkLCBUZW1wbGF0ZVJlZiwgSG9zdEJpbmRpbmcsIFNpbXBsZUNoYW5nZXMsIGZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2ZTZWxlY3RhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vc2VsZWN0YWJsZS9zZWxlY3RhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RhYmxlTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvc2VsZWN0YWJsZS9zZWxlY3RhYmxlLm1vZGVsJztcbmltcG9ydCB7IENoZWNrYm94U3R5bGluZ01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3NlbGVjdGFibGUvY2hlY2tib3gtc3R5bGluZy5tb2RlbCc7XG5pbXBvcnQgeyBDaGVja2JveFRlbXBsYXRlcyB9IGZyb20gJy4uLy4uL3RlbXBsYXRlcy9jaGVja2JveC50ZW1wbGF0ZSc7XG5cbmltcG9ydCB7IFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RlbXBsYXRlLXNlcnZpY2UvdGVtcGxhdGUuc2VydmljZSc7XG5cblxuLyoqXG4gKiA8cD5DRiBDaGVja2JveCBDb21wb25lbnQ8L3A+IFxuICogPHByZT5cbiAqIDxjb2RlPlxuICogaW1wb3J0IHsgU2VsZWN0YWJsZU1vZGVsIH0gZnJvbSAnY2VkcnVzLWZ1c2lvbidcbiAqIGltcG9ydCB7IENoZWNrYm94U3R5bGluZ01vZGVsIH0gZnJvbSAnY2VkcnVzLWZ1c2lvbidcbiAqIDxjb2RlPjw8L2NvZGU+Y2YtY2hlY2tib3g8Y29kZT4+PC9jb2RlPjxjb2RlPjw8L2NvZGU+PGNvZGU+LzwvY29kZT5jZi1jaGVja2JveDxjb2RlPj48L2NvZGU+XG4gKiA8L2NvZGU+XG4gKiA8L3ByZT5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2YtY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saWIvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogQ2ZTZWxlY3RhYmxlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDZkNoZWNrYm94Q29tcG9uZW50KX1dXG59KVxuXG5leHBvcnQgY2xhc3MgQ2ZDaGVja2JveENvbXBvbmVudCBleHRlbmRzIENmU2VsZWN0YWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdFxuXHQvKiogQGhpZGRlblxuXHQgKiBDb21wb25lbnQgcHJvcGVydHkgZm9yIHJlbmRlcmluZyB0ZW1wbGF0ZSBmb3IgZWFjaCBjaGVja2JveCBpZiB0aGF0IHRlbXBsYXRlIHdhcyBkZWZpbmVkIGluIGh0bWwuXG5cdCAqL1xuXHRAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmKSBjZkNoZWNrYm94VGVtcGxhdGU7XG5cblx0LyoqQGhpZGRlbiAqL1xuXHRjZkNoZWNrYm94OiBTZWxlY3RhYmxlTW9kZWw7XG5cblx0LyoqXG5cdCAgKjxwPiBkeW5hbWljQ2xhc3M6IGZ1bmN0aW9uKCkgLT4gc3RyaW5nLFx0Ly8gRnVuY3Rpb24gdGhhdCByZXR1cm5zIG5hbWUgb2YgdGhlIGNsYXNzIDwvcD5cblx0XHQqPHA+IGNsYXNzOiBzdHJpbmdcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBOYW1lIG9mIHRoZSBjc3MgY2xhc3Mgc2VsZWN0b3IgPC9wPlxuXHRcdCo8cD4gdGhlbWVDb2xvcjogc3RyaW5nXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBwcmltYXJ5L2FjY2VudC93YXJuIDwvcD5cblx0ICAqPHByZT5cblx0XHQqe1xuXHQgICpcdC8vIENvbnRhaW5lciBzdXJyb3VuZGluZyB0aGUgQ2hlY2tib3gvU3dpdGNoL1JhZGlvXG5cdCAgKlx0Y29udGFpbmVyOntcblx0ICAqXHRcdGR5bmFtaWNDbGFzcyxcblx0ICAqXHRcdGNsYXNzXG5cdCAgKlx0fSxcblx0ICAqXHQvLyBtZC1jaGVja2JveCBvciBtZC1zd2l0Y2ggb3IgbWQtcmFkaW8gc3R5bGluZ1xuXHQgICpcdGNoZWNrYm94L3N3aXRjaC9yYWRpbzp7XG5cdCAgKlx0XHRkeW5hbWljQ2xhc3MsXG5cdCAgKlx0XHRjbGFzcyxcblx0ICAqXHRcdHRoZW1lQ29sb3Jcblx0ICAqXHR9XG5cdCAgKn1cblx0ICAqIDwvcHJlPlxuXHQgICovXG5cdEBJbnB1dCgpIHB1YmxpYyBzdHlsaW5nOiBDaGVja2JveFN0eWxpbmdNb2RlbDtcblx0XG5cdC8qKkBoaWRkZW4gKi9cblx0Y29uc3RydWN0b3IoLyoqQGhpZGRlbiAqL3B1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLC8qKkBoaWRkZW4gKi8gdGVtcGxhdGVTZXJ2aWNlOlRlbXBsYXRlU2VydmljZSkgeyBzdXBlcihlbGVtZW50UmVmLCB0ZW1wbGF0ZVNlcnZpY2UpOyB9XG5cdFxuXHQvKipAaGlkZGVuXG4gICAgICogSXQgd2lsbCBiZSBnZW5lcmF0ZWQgPGI+Y2ZDaGVja2JveDwvYj4gb2JqZWN0IGFuZCByZW5kZXJlZCBpbnNpZGUgY29tcG9uZW50IHRlbXBsYXRlLiBBbHNvIGNmQ2hlY2tTdGF0ZXMgZnVuY3Rpb24gd2lsbCBpbml0aWFsaXplIGNoZWNrYm94ZXMgc3RhdGVzLlxuICAgICAqL1xuXHRuZ09uSW5pdCgpIHsgXG4gIFx0XHR0aGlzLmdldE15VGVtcGxhdGUoXCJjaGVja2JveFwiLENoZWNrYm94VGVtcGxhdGVzKS50aGVuKCgpID0+IHtcblx0XHRcdGlmKHRoaXMucHJvcGVydGllcz09bnVsbClcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5wcm9wZXJ0aWVzID0gbmV3IFNlbGVjdGFibGVNb2RlbCh0aGlzLmFjdGl2ZVRlbXBsYXRlW1wicHJvcGVydHlcIl0pO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgbWFpbktleXMgPSBPYmplY3Qua2V5cyh0aGlzLmFjdGl2ZVRlbXBsYXRlW1wicHJvcGVydHlcIl0pO1xuXHRcdFx0XHRmb3IobGV0IGtleSBvZiBtYWluS2V5cylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlmKHRoaXMucHJvcGVydGllc1trZXldPT1udWxsKVxuXHRcdFx0XHRcdFx0dGhpcy5wcm9wZXJ0aWVzW2tleV09dGhpcy5hY3RpdmVUZW1wbGF0ZVtcInByb3BlcnR5XCJdW2tleV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYodGhpcy5zdHlsaW5nPT1udWxsKVxuXHRcdFx0XHR0aGlzLnN0eWxpbmcgPSBuZXcgQ2hlY2tib3hTdHlsaW5nTW9kZWwgKHRoaXMuYWN0aXZlVGVtcGxhdGVbXCJzdHlsZVwiXSk7XG5cdFx0XHRpZih0aGlzLmRpc2FibGUhPW51bGwpIHRoaXMucHJvcGVydGllcy5kaXNhYmxlID0gdGhpcy5kaXNhYmxlO1xuXHRcdFx0aWYodGhpcy5kaXNwbGF5IT1udWxsKSB0aGlzLnByb3BlcnRpZXMuZGlzcGxheSA9IHRoaXMuZGlzcGxheTtcblx0XHRcdGlmKHRoaXMudmFsdWUhPW51bGwpIHRoaXMucHJvcGVydGllcy52YWx1ZSA9IHRoaXMudmFsdWU7XG5cdFx0XHRpZih0aGlzLml0ZW0hPW51bGwpIHRoaXMucHJvcGVydGllcy5pdGVtID0gdGhpcy5pdGVtO1xuXHRcdFx0aWYodGhpcy5jaGVja2VkIT1udWxsKSB0aGlzLnByb3BlcnRpZXMuY2hlY2tlZCA9IHRoaXMuc2VsZWN0ZWQ7XG5cdFx0XHRpZih0aGlzLml0ZW1Qb3NpdGlvbiE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLml0ZW1Qb3NpdGlvbiA9IHRoaXMuaXRlbVBvc2l0aW9uO1xuXG5cdFx0XHR0aGlzLmNoZWNrZWQgPSB0aGlzLnByb3BlcnRpZXMuY2hlY2tlZDtcblx0XHRcdHRoaXMuY2ZDaGVja2JveCA9IHRoaXMucHJvcGVydGllcztcblx0XHR9KTtcblx0fVxuXG5cdC8qKkBoaWRkZW4gKi9cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogYW55KXtcblx0XHRpZih0aGlzLnByb3BlcnRpZXMhPW51bGwpXG5cdFx0e1xuXHRcdFx0aWYoY2hhbmdlcy5kaXNhYmxlIT1udWxsKSB0aGlzLnByb3BlcnRpZXMuZGlzYWJsZSA9IGNoYW5nZXMuZGlzYWJsZS5jdXJyZW50VmFsdWU7XG5cdFx0XHRpZihjaGFuZ2VzLmRpc3BsYXkhPW51bGwpIHRoaXMucHJvcGVydGllcy5kaXNwbGF5ID0gY2hhbmdlcy5kaXNwbGF5LmN1cnJlbnRWYWx1ZTtcblx0XHRcdGlmKGNoYW5nZXMudmFsdWUhPW51bGwpIHRoaXMucHJvcGVydGllcy52YWx1ZSA9IGNoYW5nZXMudmFsdWUuY3VycmVudFZhbHVlO1xuXHRcdFx0aWYoY2hhbmdlcy5pdGVtIT1udWxsKSB0aGlzLnByb3BlcnRpZXMuaXRlbSA9IGNoYW5nZXMuaXRlbS5jdXJyZW50VmFsdWU7XG5cdFx0XHRpZihjaGFuZ2VzLml0ZW1Qb3NpdGlvbiE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLml0ZW1Qb3NpdGlvbiA9IGNoYW5nZXMuaXRlbVBvc2l0aW9uLmN1cnJlbnRWYWx1ZTtcblx0XHR9XG5cdH1cblx0LyoqQGhpZGRlbiAqL1xuXHRnZXRDaGVja2JveENsYXNzKCl7XG4gICAgaWYodGhpcy5zdHlsaW5nIT1udWxsICYmIHRoaXMuc3R5bGluZy5jaGVja2JveCE9bnVsbCYmIHRoaXMuY2ZDaGVja2JveCE9bnVsbClcbiAgICB7XG4gICAgICB0cnlcbiAgICAgIHtcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBcIlwiO1xuICAgICAgICB2YXIgbWFpbktleXMgPSBPYmplY3Qua2V5cyh0aGlzLnN0eWxpbmcuY2hlY2tib3guZHluYW1pY0NsYXNzKTtcbiAgICAgICAgZm9yKGxldCBrZXkgb2YgbWFpbktleXMpe1xuICAgICAgICAgIGlmKGV2YWwodGhpcy5zdHlsaW5nLmNoZWNrYm94LmR5bmFtaWNDbGFzc1trZXldKT09dHJ1ZSlcbiAgICAgICAgICAgIGNsYXNzZXMgPSBjbGFzc2VzK1wiIFwiK2tleTtcbiAgICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGFzc2VzO1xuICAgICAgfVxuICAgICAgY2F0Y2goZSlcbiAgICAgIHtcbiAgICAgICAgLy9EbyBub3RoaW5nXG4gICAgICB9XG4gICAgfVxuICB9XG5cdC8qKkBoaWRkZW4gKi9cbiAgZ2V0Q29udGFpbmVyQ2xhc3MoKXtcbiAgICBpZih0aGlzLnN0eWxpbmchPW51bGwgJiYgdGhpcy5zdHlsaW5nLmNvbnRhaW5lciE9bnVsbCYmIHRoaXMuY2ZDaGVja2JveCE9bnVsbClcbiAgICB7XG4gICAgICB0cnlcbiAgICAgIHtcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBcIlwiO1xuICAgICAgICB2YXIgbWFpbktleXMgPSBPYmplY3Qua2V5cyh0aGlzLnN0eWxpbmcuY29udGFpbmVyLmR5bmFtaWNDbGFzcyk7XG4gICAgICAgIGZvcihsZXQga2V5IG9mIG1haW5LZXlzKXtcbiAgICAgICAgICBpZihldmFsKHRoaXMuc3R5bGluZy5jb250YWluZXIuZHluYW1pY0NsYXNzW2tleV0pPT10cnVlKVxuICAgICAgICAgICAgY2xhc3NlcyA9IGNsYXNzZXMrXCIgXCIra2V5O1xuICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgICB9XG4gICAgICBjYXRjaChlKVxuICAgICAge1xuICAgICAgICAvL0RvIG5vdGhpbmdcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=