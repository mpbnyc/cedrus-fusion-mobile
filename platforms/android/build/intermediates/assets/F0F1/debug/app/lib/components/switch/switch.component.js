"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var selectable_component_1 = require("../selectable/selectable.component");
var selectable_model_1 = require("../../models/selectable/selectable.model");
var switch_styling_model_1 = require("../../models/selectable/switch-styling.model");
var switch_template_1 = require("../../templates/switch.template");
var template_service_1 = require("../../services/template-service/template.service");
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
    /**@hidden */
    function CfSwitchComponent(/**@hidden */ elementRef, /**@hidden */ templateService) {
        var _this = _super.call(this, elementRef, templateService) || this;
        _this.elementRef = elementRef;
        /**@hidden*/
        _this.notifacationClickable = '';
        _this.item = "<Label text='go blow yourself'></Label>";
        return _this;
    }
    /**@hidden
     * It will be generated <b>cfCheckbox</b> object and rendered inside component template. Also cfCheckStates function will initialize checkboxes states.
     */
    CfSwitchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getMyTemplate("switch", switch_template_1.SwitchTemplates).then(function () {
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
                _this.styling = new switch_styling_model_1.SwitchStylingModel(_this.activeTemplate["style"]);
            if (_this.disable != null)
                _this.properties.disable = _this.disable;
            if (_this.display != null)
                _this.properties.display = _this.display;
            if (_this.value != null)
                _this.properties.value = _this.value;
            if (_this.item != null)
                _this.properties.item = _this.item;
            if (_this.checked != null)
                _this.properties.checked = _this.checked;
            if (_this.itemPosition != null)
                _this.properties.itemPosition = _this.itemPosition;
            _this.checked = _this.properties.checked;
            _this.cfSwitch = _this.properties;
        });
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
            if (changes.item != null)
                this.properties.item = changes.item.currentValue;
            if (changes.itemPosition != null)
                this.properties.itemPosition = changes.itemPosition.currentValue;
        }
    };
    /**@hidden */
    CfSwitchComponent.prototype.getSwitchClass = function () {
        if (this.styling != null && this.styling.switch != null && this.cfSwitch != null) {
            try {
                var classes = "";
                var mainKeys = Object.keys(this.styling.switch.dynamicClass);
                for (var _i = 0, mainKeys_2 = mainKeys; _i < mainKeys_2.length; _i++) {
                    var key = mainKeys_2[_i];
                    if (eval(this.styling.switch.dynamicClass[key]) == true)
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
    CfSwitchComponent.prototype.getContainerClass = function () {
        if (this.styling != null && this.styling.container != null && this.cfSwitch != null) {
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
__decorate([
    core_1.Input(),
    __metadata("design:type", switch_styling_model_1.SwitchStylingModel)
], CfSwitchComponent.prototype, "styling", void 0);
CfSwitchComponent = CfSwitchComponent_1 = __decorate([
    core_1.Component({
        selector: 'cf-switch',
        templateUrl: './lib/components/switch/switch.component.html',
        styleUrls: ['./lib/components/switch/switch.component.css'],
        providers: [{ provide: selectable_component_1.CfSelectableComponent, useExisting: core_1.forwardRef(function () { return CfSwitchComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, template_service_1.TemplateService])
], CfSwitchComponent);
exports.CfSwitchComponent = CfSwitchComponent;
var CfSwitchComponent_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN3aXRjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBOEk7QUFDOUksMkVBQTJFO0FBQzNFLDZFQUEyRTtBQUMzRSxxRkFBa0Y7QUFDbEYsbUVBQWtFO0FBRWxFLHFGQUFtRjtBQUVuRjs7Ozs7Ozs7O0dBU0c7QUFPSCxJQUFhLGlCQUFpQjtJQUFTLHFDQUFxQjtJQW1DM0QsYUFBYTtJQUNiLDJCQUFZLGFBQWEsQ0FBTyxVQUFzQixFQUFDLGFBQWEsQ0FBQyxlQUErQjtRQUFwRyxZQUF3RyxrQkFBTSxVQUFVLEVBQUUsZUFBZSxDQUFDLFNBQUc7UUFBN0csZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFsQ3RELFlBQVk7UUFDVSwyQkFBcUIsR0FBRyxFQUFFLENBQUM7UUErQi9DLFVBQUksR0FBVyx5Q0FBeUMsQ0FBQTs7SUFFa0YsQ0FBQztJQUU3STs7T0FFTTtJQUNOLG9DQUFRLEdBQVI7UUFBQSxpQkE2QkM7UUE1QkUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUMsaUNBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNuRCxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsVUFBVSxJQUFFLElBQUksQ0FBQyxDQUN6QixDQUFDO2dCQUNBLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQ0FBZSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN4RSxDQUFDO1lBQ0QsSUFBSSxDQUNKLENBQUM7Z0JBQ0EsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVELEdBQUcsQ0FBQSxDQUFZLFVBQVEsRUFBUixxQkFBUSxFQUFSLHNCQUFRLEVBQVIsSUFBUTtvQkFBbkIsSUFBSSxHQUFHLGlCQUFBO29CQUVWLEVB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ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgQ29udGVudENoaWxkLCBUZW1wbGF0ZVJlZiwgSG9zdEJpbmRpbmcsZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2ZTZWxlY3RhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vc2VsZWN0YWJsZS9zZWxlY3RhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RhYmxlTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvc2VsZWN0YWJsZS9zZWxlY3RhYmxlLm1vZGVsJztcbmltcG9ydCB7IFN3aXRjaFN0eWxpbmdNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9zZWxlY3RhYmxlL3N3aXRjaC1zdHlsaW5nLm1vZGVsJztcbmltcG9ydCB7IFN3aXRjaFRlbXBsYXRlcyB9IGZyb20gJy4uLy4uL3RlbXBsYXRlcy9zd2l0Y2gudGVtcGxhdGUnO1xuXG5pbXBvcnQgeyBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90ZW1wbGF0ZS1zZXJ2aWNlL3RlbXBsYXRlLnNlcnZpY2UnO1xuXG4vKipcbiAqIDxwPkNGIFN3aXRjaCBDb21wb25lbnQ8L3A+IFxuICogPHByZT5cbiAqIDxjb2RlPlxuICogaW1wb3J0IHsgU2VsZWN0YWJsZU1vZGVsIH0gZnJvbSAnY2VkcnVzLWZ1c2lvbidcbiAqIGltcG9ydCB7IFN3aXRjaFN0eWxpbmdNb2RlbCB9IGZyb20gJ2NlZHJ1cy1mdXNpb24nXG4gKiA8Y29kZT48PC9jb2RlPmNmLXN3aXRjaDxjb2RlPj48L2NvZGU+PGNvZGU+PDwvY29kZT48Y29kZT4vPC9jb2RlPmNmLXN3aXRjaDxjb2RlPj48L2NvZGU+XG4gKiA8L2NvZGU+XG4gKiA8L3ByZT5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2Ytc3dpdGNoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpYi9jb21wb25lbnRzL3N3aXRjaC9zd2l0Y2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saWIvY29tcG9uZW50cy9zd2l0Y2gvc3dpdGNoLmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IENmU2VsZWN0YWJsZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2ZTd2l0Y2hDb21wb25lbnQpfV1cbn0pXG5leHBvcnQgY2xhc3MgQ2ZTd2l0Y2hDb21wb25lbnQgZXh0ZW5kcyBDZlNlbGVjdGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRcblx0LyoqQGhpZGRlbiovXG5cdEBIb3N0QmluZGluZygnY2xhc3MnKSBub3RpZmFjYXRpb25DbGlja2FibGUgPSAnJztcblxuXHQvKipAaGlkZGVuXG5cdCAqIENvbXBvbmVudCBwcm9wZXJ0eSBmb3IgcmVuZGVyaW5nIHRlbXBsYXRlIGZvciBlYWNoIHN3aXRjaCBpZiB0aGF0IHRlbXBsYXRlIHdhcyBkZWZpbmVkIGluIGh0bWwuXG5cdCAqL1xuXHRAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmKSBjZlN3aXRjaFRlbXBsYXRlO1xuXG5cdC8qKkBoaWRkZW4gKi9cblx0Y2ZTd2l0Y2g6IFNlbGVjdGFibGVNb2RlbDtcblxuXHQvKipcblx0ICAqPHA+IGR5bmFtaWNDbGFzczogZnVuY3Rpb24oKSAtPiBzdHJpbmcsXHQvLyBGdW5jdGlvbiB0aGF0IHJldHVybnMgbmFtZSBvZiB0aGUgY2xhc3MgPC9wPlxuXHRcdCo8cD4gY2xhc3M6IHN0cmluZ1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIE5hbWUgb2YgdGhlIGNzcyBjbGFzcyBzZWxlY3RvciA8L3A+XG5cdFx0KjxwPiB0aGVtZUNvbG9yOiBzdHJpbmdcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHByaW1hcnkvYWNjZW50L3dhcm4gPC9wPlxuXHQgICo8cHJlPlxuXHRcdCp7XG5cdCAgKlx0Ly8gQ29udGFpbmVyIHN1cnJvdW5kaW5nIHRoZSBTd2l0Y2hcblx0ICAqXHRjb250YWluZXI6e1xuXHQgICpcdFx0ZHluYW1pY0NsYXNzLFxuXHQgICpcdFx0Y2xhc3Ncblx0ICAqXHR9LFxuXHQgICpcdC8vIG1kLXN3aXRjaCBzdHlsaW5nXG5cdCAgKlx0c3dpdGNoOntcblx0ICAqXHRcdGR5bmFtaWNDbGFzcyxcblx0ICAqXHRcdGNsYXNzLFxuXHQgICpcdFx0dGhlbWVDb2xvclxuXHQgICpcdH1cblx0ICAqfVxuXHQgICogPC9wcmU+XG5cdCAgKi9cblx0QElucHV0KCkgcHVibGljIHN0eWxpbmc6IFN3aXRjaFN0eWxpbmdNb2RlbDtcblx0XHRcdGl0ZW06IHN0cmluZyA9IFwiPExhYmVsIHRleHQ9J2dvIGJsb3cgeW91cnNlbGYnPjwvTGFiZWw+XCJcblx0LyoqQGhpZGRlbiAqL1xuXHRjb25zdHJ1Y3RvcigvKipAaGlkZGVuICovcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsLyoqQGhpZGRlbiAqLyB0ZW1wbGF0ZVNlcnZpY2U6VGVtcGxhdGVTZXJ2aWNlKSB7IHN1cGVyKGVsZW1lbnRSZWYsIHRlbXBsYXRlU2VydmljZSk7IH1cblxuXHQvKipAaGlkZGVuXG4gICAgICogSXQgd2lsbCBiZSBnZW5lcmF0ZWQgPGI+Y2ZDaGVja2JveDwvYj4gb2JqZWN0IGFuZCByZW5kZXJlZCBpbnNpZGUgY29tcG9uZW50IHRlbXBsYXRlLiBBbHNvIGNmQ2hlY2tTdGF0ZXMgZnVuY3Rpb24gd2lsbCBpbml0aWFsaXplIGNoZWNrYm94ZXMgc3RhdGVzLlxuICAgICAqL1xuXHRuZ09uSW5pdCgpIHsgXG4gIFx0XHR0aGlzLmdldE15VGVtcGxhdGUoXCJzd2l0Y2hcIixTd2l0Y2hUZW1wbGF0ZXMpLnRoZW4oKCkgPT4ge1xuXHRcdFx0aWYodGhpcy5wcm9wZXJ0aWVzPT1udWxsKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLnByb3BlcnRpZXMgPSBuZXcgU2VsZWN0YWJsZU1vZGVsKHRoaXMuYWN0aXZlVGVtcGxhdGVbXCJwcm9wZXJ0eVwiXSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBtYWluS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuYWN0aXZlVGVtcGxhdGVbXCJwcm9wZXJ0eVwiXSk7XG5cdFx0XHRcdGZvcihsZXQga2V5IG9mIG1haW5LZXlzKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYodGhpcy5wcm9wZXJ0aWVzW2tleV09PW51bGwpXG5cdFx0XHRcdFx0XHR0aGlzLnByb3BlcnRpZXNba2V5XT10aGlzLmFjdGl2ZVRlbXBsYXRlW1wicHJvcGVydHlcIl1ba2V5XTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZih0aGlzLnN0eWxpbmc9PW51bGwpXG5cdFx0XHRcdHRoaXMuc3R5bGluZyA9IG5ldyBTd2l0Y2hTdHlsaW5nTW9kZWwgKHRoaXMuYWN0aXZlVGVtcGxhdGVbXCJzdHlsZVwiXSk7XG5cdFx0XHRpZih0aGlzLmRpc2FibGUhPW51bGwpIHRoaXMucHJvcGVydGllcy5kaXNhYmxlID0gdGhpcy5kaXNhYmxlO1xuXHRcdFx0aWYodGhpcy5kaXNwbGF5IT1udWxsKSB0aGlzLnByb3BlcnRpZXMuZGlzcGxheSA9IHRoaXMuZGlzcGxheTtcblx0XHRcdGlmKHRoaXMudmFsdWUhPW51bGwpIHRoaXMucHJvcGVydGllcy52YWx1ZSA9IHRoaXMudmFsdWU7XG5cdFx0XHRpZih0aGlzLml0ZW0hPW51bGwpIHRoaXMucHJvcGVydGllcy5pdGVtID0gdGhpcy5pdGVtO1xuXHRcdFx0aWYodGhpcy5jaGVja2VkIT1udWxsKSB0aGlzLnByb3BlcnRpZXMuY2hlY2tlZCA9IHRoaXMuY2hlY2tlZDtcblx0XHRcdGlmKHRoaXMuaXRlbVBvc2l0aW9uIT1udWxsKSB0aGlzLnByb3BlcnRpZXMuaXRlbVBvc2l0aW9uID0gdGhpcy5pdGVtUG9zaXRpb247XG5cblx0XHRcdHRoaXMuY2hlY2tlZCA9IHRoaXMucHJvcGVydGllcy5jaGVja2VkO1xuXHRcdFx0XG5cdFx0XHR0aGlzLmNmU3dpdGNoID0gdGhpcy5wcm9wZXJ0aWVzO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqQGhpZGRlbiAqL1xuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpe1xuXHRcdGlmKHRoaXMucHJvcGVydGllcyE9bnVsbClcblx0XHR7XG5cdFx0XHRpZihjaGFuZ2VzLmRpc2FibGUhPW51bGwpIHRoaXMucHJvcGVydGllcy5kaXNhYmxlID0gY2hhbmdlcy5kaXNhYmxlLmN1cnJlbnRWYWx1ZTtcblx0XHRcdGlmKGNoYW5nZXMuZGlzcGxheSE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLmRpc3BsYXkgPSBjaGFuZ2VzLmRpc3BsYXkuY3VycmVudFZhbHVlO1xuXHRcdFx0aWYoY2hhbmdlcy5jaGVja2VkVmFsdWUhPW51bGwpIHRoaXMucHJvcGVydGllcy52YWx1ZSA9IGNoYW5nZXMudmFsdWUuY3VycmVudFZhbHVlO1xuXHRcdFx0aWYoY2hhbmdlcy5pdGVtIT1udWxsKSB0aGlzLnByb3BlcnRpZXMuaXRlbSA9IGNoYW5nZXMuaXRlbS5jdXJyZW50VmFsdWU7XG5cdFx0XHRpZihjaGFuZ2VzLml0ZW1Qb3NpdGlvbiE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLml0ZW1Qb3NpdGlvbiA9IGNoYW5nZXMuaXRlbVBvc2l0aW9uLmN1cnJlbnRWYWx1ZTtcblx0XHR9XG5cdH1cblx0LyoqQGhpZGRlbiAqL1xuXHRnZXRTd2l0Y2hDbGFzcygpe1xuICAgIGlmKHRoaXMuc3R5bGluZyE9bnVsbCAmJiB0aGlzLnN0eWxpbmcuc3dpdGNoIT1udWxsJiYgdGhpcy5jZlN3aXRjaCE9bnVsbClcbiAgICB7XG4gICAgICB0cnlcbiAgICAgIHtcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBcIlwiO1xuICAgICAgICB2YXIgbWFpbktleXMgPSBPYmplY3Qua2V5cyh0aGlzLnN0eWxpbmcuc3dpdGNoLmR5bmFtaWNDbGFzcyk7XG4gICAgICAgIGZvcihsZXQga2V5IG9mIG1haW5LZXlzKXtcbiAgICAgICAgICBpZihldmFsKHRoaXMuc3R5bGluZy5zd2l0Y2guZHluYW1pY0NsYXNzW2tleV0pPT10cnVlKVxuICAgICAgICAgICAgY2xhc3NlcyA9IGNsYXNzZXMrXCIgXCIra2V5O1xuICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgICB9XG4gICAgICBjYXRjaChlKVxuICAgICAge1xuICAgICAgICAvL0RvIG5vdGhpbmdcbiAgICAgIH1cbiAgICB9XG4gIH1cblx0LyoqQGhpZGRlbiAqL1xuICBnZXRDb250YWluZXJDbGFzcygpe1xuICAgIGlmKHRoaXMuc3R5bGluZyE9bnVsbCAmJiB0aGlzLnN0eWxpbmcuY29udGFpbmVyIT1udWxsJiYgdGhpcy5jZlN3aXRjaCE9bnVsbClcbiAgICB7XG4gICAgICB0cnlcbiAgICAgIHtcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBcIlwiO1xuICAgICAgICB2YXIgbWFpbktleXMgPSBPYmplY3Qua2V5cyh0aGlzLnN0eWxpbmcuY29udGFpbmVyLmR5bmFtaWNDbGFzcyk7XG4gICAgICAgIGZvcihsZXQga2V5IG9mIG1haW5LZXlzKXtcbiAgICAgICAgICBpZihldmFsKHRoaXMuc3R5bGluZy5jb250YWluZXIuZHluYW1pY0NsYXNzW2tleV0pPT10cnVlKVxuICAgICAgICAgICAgY2xhc3NlcyA9IGNsYXNzZXMrXCIgXCIra2V5O1xuICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgICB9XG4gICAgICBjYXRjaChlKVxuICAgICAge1xuICAgICAgICAvL0RvIG5vdGhpbmdcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=