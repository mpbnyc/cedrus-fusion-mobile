"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_component_1 = require("../core/core.component");
var list_model_1 = require("../../models/list/list.model");
var list_styling_model_1 = require("../../models/list/list-styling.model");
var item_component_1 = require("../item/item.component");
var list_template_1 = require("../../templates/list.template");
var template_service_1 = require("../../services/template-service/template.service");
/**
 * <p>List component based on Angular Material List</p>
 * <p>Example of using:</p>
 * <pre>
 * <code><</code>cf-wizard [properties]="myList" [styling]="myListStyles"<code>></code><code><</code><code>/</code>cf-list<code>></code>
 * </pre>
 */
var CfListComponent = (function (_super) {
    __extends(CfListComponent, _super);
    function CfListComponent(elementRef, /**@hidden */ templateService) {
        var _this = _super.call(this, elementRef, templateService) || this;
        _this.elementRef = elementRef;
        /**
         * Input property for selectable
         */
        _this.selectable = false;
        /**
         * Input property to show checkbox on list items
         */
        _this.withCheckbox = true;
        /**
         * Array for selected items IDs
         */
        _this.selectedItems = [];
        /**
       * It is <b>(onSelect)</b> attribute of <b>cf-list</b> component. Is emmiting event with array of selected items IDs
       */
        _this.onSelect = new core_1.EventEmitter();
        /**
         * Private property for generating IDs for list items when list is selectable
         */
        _this.randomId = 0;
        return _this;
    }
    /**
   * It will be generated <b>cfList</b> object and rendered inside component template. Also cfListToggleClasses array will be initialized to build each item details toggle icon.
   */
    CfListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getMyTemplate("list", list_template_1.ListTemplates).then(function () {
            if (_this.properties == null)
                _this.properties = new list_model_1.ListModel(_this.activeTemplate.property);
            if (_this.styling == null)
                _this.styling = new list_styling_model_1.ListStylingModel(_this.activeTemplate.style);
            if (_this.disable != null)
                _this.properties.disable = _this.disable;
            if (_this.display != null)
                _this.properties.display = _this.display;
            if (_this.title != null)
                _this.properties.title = _this.title;
            _this.cfList = _this.properties;
        });
    };
    /**
     * Angular core function to listen for component properties changes
   * @param changes  it is object with changed properties
     */
    CfListComponent.prototype.ngOnChanges = function (changes) {
        if (this.properties != null && this.styling != null) {
            if (changes.disable != null)
                this.properties.disable = changes.disable.currentValue;
            if (changes.display != null)
                this.properties.display = changes.display.currentValue;
            if (changes.title != null)
                this.properties.title = changes.title.currentValue;
        }
    };
    /**
     * After List content was initialized and component is selectable, will be generated IDs for all list items and each selected item ID will be pushed to selectedItems array.
     */
    CfListComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.items != null && this.items.length > 0) {
            if (this.selectable != false) {
                var _loop_1 = function (item) {
                    item.internalId = this_1.randomId;
                    this_1.randomId++;
                    if (item.selected == true) {
                        this_1.selectedItems.push(item.internalId);
                    }
                    console.log(this_1.withCheckbox);
                    setTimeout(function (_) {
                        return item.selectable = true;
                    }, item.itemClicked.subscribe(function (data) { return _this.updateValues(data); }));
                    if (this_1.withCheckbox != true) {
                        item.withCheckbox = false;
                    }
                };
                var this_1 = this;
                for (var _i = 0, _a = this.items.toArray(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    _loop_1(item);
                }
            }
        }
    };
    /**
     * Function to update selectedItems array values and emit them
   * @param data  item data object
     */
    CfListComponent.prototype.updateValues = function (data) {
        if (data["value"] == true) {
            this.selectedItems.push(data["id"]);
            this.selectedItems.sort();
            this.onSelect.emit(this.selectedItems);
        }
        else {
            this.selectedItems.splice(this.selectedItems.indexOf(data["id"]), 1);
            this.onSelect.emit(this.selectedItems);
        }
    };
    return CfListComponent;
}(core_component_1.CfCoreComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", list_model_1.ListModel)
], CfListComponent.prototype, "properties", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", list_styling_model_1.ListStylingModel)
], CfListComponent.prototype, "styling", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CfListComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CfListComponent.prototype, "selectable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CfListComponent.prototype, "withCheckbox", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CfListComponent.prototype, "onSelect", void 0);
__decorate([
    core_1.ContentChildren(item_component_1.CfItemComponent),
    __metadata("design:type", core_1.QueryList)
], CfListComponent.prototype, "items", void 0);
CfListComponent = __decorate([
    core_1.Component({
        selector: 'cf-list',
        templateUrl: './lib/components/list/list.component.html',
        styleUrls: ['./lib/components/list/list.component.scss']
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, template_service_1.TemplateService])
], CfListComponent);
exports.CfListComponent = CfListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1SDtBQUN2SCx5REFBeUQ7QUFDekQsMkRBQXlEO0FBQ3pELDJFQUF3RTtBQUN4RSx5REFBeUQ7QUFDekQsK0RBQThEO0FBRTlELHFGQUFtRjtBQUNuRjs7Ozs7O0dBTUc7QUFNSCxJQUFhLGVBQWU7SUFBUyxtQ0FBZTtJQThDbkQseUJBQW1CLFVBQXNCLEVBQUMsYUFBYSxDQUFDLGVBQStCO1FBQXZGLFlBQTJGLGtCQUFNLFVBQVUsRUFBRSxlQUFlLENBQUMsU0FBRztRQUE3RyxnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQXJCekM7O1dBRUc7UUFDTSxnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUNyQzs7V0FFRztRQUNNLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQ3RDOztXQUVHO1FBQ0gsbUJBQWEsR0FBYSxFQUFFLENBQUM7UUFDN0I7O1NBRUk7UUFDTSxjQUFRLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDeEM7O1dBRUc7UUFDSCxjQUFRLEdBQVcsQ0FBQyxDQUFDOztJQUUwRyxDQUFDO0lBQ2hJOztLQUVJO0lBQ0osa0NBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWEEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUMsNkJBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM5QyxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsVUFBVSxJQUFFLElBQUksQ0FBQztnQkFDeEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLHNCQUFTLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvRCxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsT0FBTyxJQUFFLElBQUksQ0FBQztnQkFDckIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHFDQUFnQixDQUFDLEtBQUksQ0FB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V0FBVyxFQUFFLDJDQUEyQztRQUN4RCxTQUFTLEVBQUUsQ0FBQywyQ0FBMkMsQ0FBQztLQUN4RCxDQUFDO3FDQStDOEIsaUJBQVUsRUFBK0Isa0NBQWU7R0E5QzNFLGVBQWUsQ0ErSDNCO0FBL0hZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENmQ29yZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvY29yZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdE1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xpc3QvbGlzdC5tb2RlbCc7XG5pbXBvcnQgeyBMaXN0U3R5bGluZ01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xpc3QvbGlzdC1zdHlsaW5nLm1vZGVsJztcbmltcG9ydCB7IENmSXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL2l0ZW0vaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFRlbXBsYXRlcyB9IGZyb20gJy4uLy4uL3RlbXBsYXRlcy9saXN0LnRlbXBsYXRlJztcblxuaW1wb3J0IHsgVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGVtcGxhdGUtc2VydmljZS90ZW1wbGF0ZS5zZXJ2aWNlJztcbi8qKlxuICogPHA+TGlzdCBjb21wb25lbnQgYmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCBMaXN0PC9wPlxuICogPHA+RXhhbXBsZSBvZiB1c2luZzo8L3A+XG4gKiA8cHJlPlxuICogPGNvZGU+PDwvY29kZT5jZi13aXphcmQgW3Byb3BlcnRpZXNdPVwibXlMaXN0XCIgW3N0eWxpbmddPVwibXlMaXN0U3R5bGVzXCI8Y29kZT4+PC9jb2RlPjxjb2RlPjw8L2NvZGU+PGNvZGU+LzwvY29kZT5jZi1saXN0PGNvZGU+PjwvY29kZT5cbiAqIDwvcHJlPlxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjZi1saXN0Jyxcblx0dGVtcGxhdGVVcmw6ICcuL2xpYi9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2xpYi9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENmTGlzdENvbXBvbmVudCBleHRlbmRzIENmQ29yZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdC8qKlxuICAgKiBJdCBpcyBhbiBMaXN0TW9kZWwgb2JqZWN0IHdpdGggb3B0aW9ucyB0byBiZSByZW5kZXJlZCBpbnRvIGNvbXBvbmVudCB0ZW1wbGF0ZVxuICAgKi9cblx0Y2ZMaXN0OiBMaXN0TW9kZWw7XG5cdC8qKlxuICAgKiBJdCBpcyBhbiBhdHRyaWJ1dGUgPGI+W3Byb3BlcnRpZXNdPC9iPiBvZiBkaXJlY3RpdmUgPGI+Y2YtbGlzdDwvYj4gd2hpY2ggdGFrZSBMaXN0TW9kZWwgb2JqZWN0LlxuICAgKiA8cD5FeGFtcGxlIG9mIG1vZGVsOjwvcD5cbiAgICogPHByZT57XG4gICAqICB0aXRsZTogJ1RoaXMgaXMgbGlzdCB0aXRsZSdcbiAgICogfTwvcHJlPlxuICAgKiA8aDQ+dGl0bGU6IHN0cmluZzwvaDQ+XG4gICAqIEl0IGlzIHRpdGxlIGZvciBMaXN0IGNvbXBvbmVudFxuICAgKi9cblx0QElucHV0KCkgcHVibGljIHByb3BlcnRpZXM6IExpc3RNb2RlbDtcblx0LyoqXG4gICAqIEl0IGlzIGFuIGF0dHJpYnV0ZSA8Yj5bc3R5bGluZ108L2I+IG9mIGRpcmVjdGl2ZSA8Yj5jZi1saXN0PC9iPiB3aGljaCB0YWtlIExpc3RTdHlsaW5nTW9kZWwgb2JqZWN0IHdpdGggbmV4dCBwcm9wZXJ0aWVzOlxuICAgKiA8aDQ+Y29udGFpbmVyOiBTdHlsaW5nTW9kZWw8L2g0PlxuICAgKiBTdHlsaW5nIHByb3BlcnRpZXMgZm9yIG1haW4gd2l6YXJkIGNvbnRhaW5lclxuICAgKi9cblx0QElucHV0KCkgcHVibGljIHN0eWxpbmc6IExpc3RTdHlsaW5nTW9kZWw7XG5cdC8qKlxuXHQgKiBJbnB1dCBwcm9wZXJ0eSBmb3IgdGhlIHRpdGxlXG5cdCAqL1xuXHRASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXHQvKipcblx0ICogSW5wdXQgcHJvcGVydHkgZm9yIHNlbGVjdGFibGVcblx0ICovXG5cdEBJbnB1dCgpIHNlbGVjdGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcblx0LyoqXG5cdCAqIElucHV0IHByb3BlcnR5IHRvIHNob3cgY2hlY2tib3ggb24gbGlzdCBpdGVtc1xuXHQgKi9cblx0QElucHV0KCkgd2l0aENoZWNrYm94OiBib29sZWFuID0gdHJ1ZTtcblx0LyoqXG5cdCAqIEFycmF5IGZvciBzZWxlY3RlZCBpdGVtcyBJRHNcblx0ICovXG5cdHNlbGVjdGVkSXRlbXM6IG51bWJlcltdID0gW107XG5cdC8qKlxuICAgKiBJdCBpcyA8Yj4ob25TZWxlY3QpPC9iPiBhdHRyaWJ1dGUgb2YgPGI+Y2YtbGlzdDwvYj4gY29tcG9uZW50LiBJcyBlbW1pdGluZyBldmVudCB3aXRoIGFycmF5IG9mIHNlbGVjdGVkIGl0ZW1zIElEc1xuICAgKi9cblx0QE91dHB1dCgpIG9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHQvKipcblx0ICogUHJpdmF0ZSBwcm9wZXJ0eSBmb3IgZ2VuZXJhdGluZyBJRHMgZm9yIGxpc3QgaXRlbXMgd2hlbiBsaXN0IGlzIHNlbGVjdGFibGVcblx0ICovXG5cdHJhbmRvbUlkOiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLC8qKkBoaWRkZW4gKi8gdGVtcGxhdGVTZXJ2aWNlOlRlbXBsYXRlU2VydmljZSkgeyBzdXBlcihlbGVtZW50UmVmLCB0ZW1wbGF0ZVNlcnZpY2UpOyB9XG5cdC8qKlxuICAgKiBJdCB3aWxsIGJlIGdlbmVyYXRlZCA8Yj5jZkxpc3Q8L2I+IG9iamVjdCBhbmQgcmVuZGVyZWQgaW5zaWRlIGNvbXBvbmVudCB0ZW1wbGF0ZS4gQWxzbyBjZkxpc3RUb2dnbGVDbGFzc2VzIGFycmF5IHdpbGwgYmUgaW5pdGlhbGl6ZWQgdG8gYnVpbGQgZWFjaCBpdGVtIGRldGFpbHMgdG9nZ2xlIGljb24uXG4gICAqL1xuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblxuXHRcdHRoaXMuZ2V0TXlUZW1wbGF0ZShcImxpc3RcIixMaXN0VGVtcGxhdGVzKS50aGVuKCgpID0+IHtcblx0XHRpZih0aGlzLnByb3BlcnRpZXM9PW51bGwpXG5cdFx0XHR0aGlzLnByb3BlcnRpZXMgPSBuZXcgTGlzdE1vZGVsKHRoaXMuYWN0aXZlVGVtcGxhdGUucHJvcGVydHkpO1xuXHRcdGlmKHRoaXMuc3R5bGluZz09bnVsbClcblx0XHRcdHRoaXMuc3R5bGluZyA9IG5ldyBMaXN0U3R5bGluZ01vZGVsKHRoaXMuYWN0aXZlVGVtcGxhdGUuc3R5bGUpO1xuXHRcdFxuXHRcdGlmKHRoaXMuZGlzYWJsZSE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLmRpc2FibGUgPSB0aGlzLmRpc2FibGU7XG5cdFx0aWYodGhpcy5kaXNwbGF5IT1udWxsKSB0aGlzLnByb3BlcnRpZXMuZGlzcGxheSA9IHRoaXMuZGlzcGxheTtcblx0XHRpZih0aGlzLnRpdGxlIT1udWxsKSB0aGlzLnByb3BlcnRpZXMudGl0bGUgPSB0aGlzLnRpdGxlO1xuXHRcdHRoaXMuY2ZMaXN0ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXHRcdH0pO1xuXHR9XG5cdC8qKlxuXHQgKiBBbmd1bGFyIGNvcmUgZnVuY3Rpb24gdG8gbGlzdGVuIGZvciBjb21wb25lbnQgcHJvcGVydGllcyBjaGFuZ2VzXG4gICAqIEBwYXJhbSBjaGFuZ2VzICBpdCBpcyBvYmplY3Qgd2l0aCBjaGFuZ2VkIHByb3BlcnRpZXNcblx0ICovXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSkge1xuXHRcdGlmKHRoaXMucHJvcGVydGllcyE9bnVsbCAmJiB0aGlzLnN0eWxpbmchPW51bGwpXG5cdFx0e1xuXHRcdFx0aWYoY2hhbmdlcy5kaXNhYmxlIT1udWxsKSB0aGlzLnByb3BlcnRpZXMuZGlzYWJsZSA9IGNoYW5nZXMuZGlzYWJsZS5jdXJyZW50VmFsdWU7XG5cdFx0XHRpZihjaGFuZ2VzLmRpc3BsYXkhPW51bGwpIHRoaXMucHJvcGVydGllcy5kaXNwbGF5ID0gY2hhbmdlcy5kaXNwbGF5LmN1cnJlbnRWYWx1ZTtcblx0XHRcdGlmKGNoYW5nZXMudGl0bGUhPW51bGwpIHRoaXMucHJvcGVydGllcy50aXRsZSA9IGNoYW5nZXMudGl0bGUuY3VycmVudFZhbHVlO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogQXJyYXkgd2l0aCBsaXN0IGl0ZW1zXG5cdCAqL1xuXHRAQ29udGVudENoaWxkcmVuKENmSXRlbUNvbXBvbmVudCkgaXRlbXM6IFF1ZXJ5TGlzdDxDZkl0ZW1Db21wb25lbnQ+O1xuXHQvKipcblx0ICogQWZ0ZXIgTGlzdCBjb250ZW50IHdhcyBpbml0aWFsaXplZCBhbmQgY29tcG9uZW50IGlzIHNlbGVjdGFibGUsIHdpbGwgYmUgZ2VuZXJhdGVkIElEcyBmb3IgYWxsIGxpc3QgaXRlbXMgYW5kIGVhY2ggc2VsZWN0ZWQgaXRlbSBJRCB3aWxsIGJlIHB1c2hlZCB0byBzZWxlY3RlZEl0ZW1zIGFycmF5LlxuXHQgKi9cblx0bmdBZnRlckNvbnRlbnRJbml0KCkge1xuXHRcdGlmKHRoaXMuaXRlbXMhPW51bGwgJiYgdGhpcy5pdGVtcy5sZW5ndGg+MClcblx0XHR7XG5cdFx0XHRpZih0aGlzLnNlbGVjdGFibGUhPWZhbHNlKVxuXHRcdFx0e1xuXHRcdFx0XHRmb3IobGV0IGl0ZW0gb2YgdGhpcy5pdGVtcy50b0FycmF5KCkpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpdGVtLmludGVybmFsSWQgPSB0aGlzLnJhbmRvbUlkO1xuXHRcdFx0XHRcdHRoaXMucmFuZG9tSWQrKztcblx0XHRcdFx0XHRpZihpdGVtLnNlbGVjdGVkPT10cnVlKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKGl0ZW0uaW50ZXJuYWxJZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMud2l0aENoZWNrYm94KTtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KF8gPT4gXG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVtLnNlbGVjdGFibGUgPSB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0aXRlbS5pdGVtQ2xpY2tlZC5zdWJzY3JpYmUoZGF0YT0+IHRoaXMudXBkYXRlVmFsdWVzKGRhdGEpKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0aWYodGhpcy53aXRoQ2hlY2tib3ghPXRydWUpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aXRlbS53aXRoQ2hlY2tib3ggPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIEZ1bmN0aW9uIHRvIHVwZGF0ZSBzZWxlY3RlZEl0ZW1zIGFycmF5IHZhbHVlcyBhbmQgZW1pdCB0aGVtIFxuICAgKiBAcGFyYW0gZGF0YSAgaXRlbSBkYXRhIG9iamVjdFxuXHQgKi9cblx0dXBkYXRlVmFsdWVzKGRhdGEpXG5cdHtcblx0XHRpZihkYXRhW1widmFsdWVcIl09PXRydWUpXG5cdFx0e1xuXHRcdFx0dGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goZGF0YVtcImlkXCJdKTtcblx0XHRcdHRoaXMuc2VsZWN0ZWRJdGVtcy5zb3J0KCk7XG5cdFx0XHR0aGlzLm9uU2VsZWN0LmVtaXQodGhpcy5zZWxlY3RlZEl0ZW1zKTtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdHRoaXMuc2VsZWN0ZWRJdGVtcy5zcGxpY2UodGhpcy5zZWxlY3RlZEl0ZW1zLmluZGV4T2YoZGF0YVtcImlkXCJdKSwxKTtcblx0XHRcdHRoaXMub25TZWxlY3QuZW1pdCh0aGlzLnNlbGVjdGVkSXRlbXMpO1xuXHRcdH1cblx0fVxufSJdfQ==