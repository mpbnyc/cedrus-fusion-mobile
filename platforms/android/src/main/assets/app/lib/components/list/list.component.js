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
        styleUrls: ['./lib/components/list/list.component.css']
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, template_service_1.TemplateService])
], CfListComponent);
exports.CfListComponent = CfListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1SDtBQUN2SCx5REFBeUQ7QUFDekQsMkRBQXlEO0FBQ3pELDJFQUF3RTtBQUN4RSx5REFBeUQ7QUFDekQsK0RBQThEO0FBRTlELHFGQUFtRjtBQUNuRjs7Ozs7O0dBTUc7QUFNSCxJQUFhLGVBQWU7SUFBUyxtQ0FBZTtJQThDbkQseUJBQW1CLFVBQXNCLEVBQUMsYUFBYSxDQUFDLGVBQStCO1FBQXZGLFlBQTJGLGtCQUFNLFVBQVUsRUFBRSxlQUFlLENBQUMsU0FBRztRQUE3RyxnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQXJCekM7O1dBRUc7UUFDTSxnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUNyQzs7V0FFRztRQUNNLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQ3RDOztXQUVHO1FBQ0gsbUJBQWEsR0FBYSxFQUFFLENBQUM7UUFDN0I7O1NBRUk7UUFDTSxjQUFRLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDeEM7O1dBRUc7UUFDSCxjQUFRLEdBQVcsQ0FBQyxDQUFDOztJQUUwRyxDQUFDO0lBQ2hJOztLQUVJO0lBQ0osa0NBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWEEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUMsNkJBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM5QyxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsVUFBVSxJQUFFLElBQUksQ0FBQztnQkFDeEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLHNCQUFTLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvRCxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsT0FBTyxJQUFFLElBQUksQ0FBQztnQkFDckIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHFDQUFnQixDQUFDLEtBQUksQ0FB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V0FBVyxFQUFFLDJDQUEyQztRQUN4RCxTQUFTLEVBQUUsQ0FBQywwQ0FBMEMsQ0FBQztLQUN2RCxDQUFDO3FDQStDOEIsaUJBQVUsRUFBK0Isa0NBQWU7R0E5QzNFLGVBQWUsQ0ErSDNCO0FBL0hZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENmQ29yZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvY29yZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdE1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xpc3QvbGlzdC5tb2RlbCc7XG5pbXBvcnQgeyBMaXN0U3R5bGluZ01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xpc3QvbGlzdC1zdHlsaW5nLm1vZGVsJztcbmltcG9ydCB7IENmSXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL2l0ZW0vaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFRlbXBsYXRlcyB9IGZyb20gJy4uLy4uL3RlbXBsYXRlcy9saXN0LnRlbXBsYXRlJztcblxuaW1wb3J0IHsgVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGVtcGxhdGUtc2VydmljZS90ZW1wbGF0ZS5zZXJ2aWNlJztcbi8qKlxuICogPHA+TGlzdCBjb21wb25lbnQgYmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCBMaXN0PC9wPlxuICogPHA+RXhhbXBsZSBvZiB1c2luZzo8L3A+XG4gKiA8cHJlPlxuICogPGNvZGU+PDwvY29kZT5jZi13aXphcmQgW3Byb3BlcnRpZXNdPVwibXlMaXN0XCIgW3N0eWxpbmddPVwibXlMaXN0U3R5bGVzXCI8Y29kZT4+PC9jb2RlPjxjb2RlPjw8L2NvZGU+PGNvZGU+LzwvY29kZT5jZi1saXN0PGNvZGU+PjwvY29kZT5cbiAqIDwvcHJlPlxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjZi1saXN0Jyxcblx0dGVtcGxhdGVVcmw6ICcuL2xpYi9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2xpYi9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2ZMaXN0Q29tcG9uZW50IGV4dGVuZHMgQ2ZDb3JlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0LyoqXG4gICAqIEl0IGlzIGFuIExpc3RNb2RlbCBvYmplY3Qgd2l0aCBvcHRpb25zIHRvIGJlIHJlbmRlcmVkIGludG8gY29tcG9uZW50IHRlbXBsYXRlXG4gICAqL1xuXHRjZkxpc3Q6IExpc3RNb2RlbDtcblx0LyoqXG4gICAqIEl0IGlzIGFuIGF0dHJpYnV0ZSA8Yj5bcHJvcGVydGllc108L2I+IG9mIGRpcmVjdGl2ZSA8Yj5jZi1saXN0PC9iPiB3aGljaCB0YWtlIExpc3RNb2RlbCBvYmplY3QuXG4gICAqIDxwPkV4YW1wbGUgb2YgbW9kZWw6PC9wPlxuICAgKiA8cHJlPntcbiAgICogIHRpdGxlOiAnVGhpcyBpcyBsaXN0IHRpdGxlJ1xuICAgKiB9PC9wcmU+XG4gICAqIDxoND50aXRsZTogc3RyaW5nPC9oND5cbiAgICogSXQgaXMgdGl0bGUgZm9yIExpc3QgY29tcG9uZW50XG4gICAqL1xuXHRASW5wdXQoKSBwdWJsaWMgcHJvcGVydGllczogTGlzdE1vZGVsO1xuXHQvKipcbiAgICogSXQgaXMgYW4gYXR0cmlidXRlIDxiPltzdHlsaW5nXTwvYj4gb2YgZGlyZWN0aXZlIDxiPmNmLWxpc3Q8L2I+IHdoaWNoIHRha2UgTGlzdFN0eWxpbmdNb2RlbCBvYmplY3Qgd2l0aCBuZXh0IHByb3BlcnRpZXM6XG4gICAqIDxoND5jb250YWluZXI6IFN0eWxpbmdNb2RlbDwvaDQ+XG4gICAqIFN0eWxpbmcgcHJvcGVydGllcyBmb3IgbWFpbiB3aXphcmQgY29udGFpbmVyXG4gICAqL1xuXHRASW5wdXQoKSBwdWJsaWMgc3R5bGluZzogTGlzdFN0eWxpbmdNb2RlbDtcblx0LyoqXG5cdCAqIElucHV0IHByb3BlcnR5IGZvciB0aGUgdGl0bGVcblx0ICovXG5cdEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG5cdC8qKlxuXHQgKiBJbnB1dCBwcm9wZXJ0eSBmb3Igc2VsZWN0YWJsZVxuXHQgKi9cblx0QElucHV0KCkgc2VsZWN0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXHQvKipcblx0ICogSW5wdXQgcHJvcGVydHkgdG8gc2hvdyBjaGVja2JveCBvbiBsaXN0IGl0ZW1zXG5cdCAqL1xuXHRASW5wdXQoKSB3aXRoQ2hlY2tib3g6IGJvb2xlYW4gPSB0cnVlO1xuXHQvKipcblx0ICogQXJyYXkgZm9yIHNlbGVjdGVkIGl0ZW1zIElEc1xuXHQgKi9cblx0c2VsZWN0ZWRJdGVtczogbnVtYmVyW10gPSBbXTtcblx0LyoqXG4gICAqIEl0IGlzIDxiPihvblNlbGVjdCk8L2I+IGF0dHJpYnV0ZSBvZiA8Yj5jZi1saXN0PC9iPiBjb21wb25lbnQuIElzIGVtbWl0aW5nIGV2ZW50IHdpdGggYXJyYXkgb2Ygc2VsZWN0ZWQgaXRlbXMgSURzXG4gICAqL1xuXHRAT3V0cHV0KCkgb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdC8qKlxuXHQgKiBQcml2YXRlIHByb3BlcnR5IGZvciBnZW5lcmF0aW5nIElEcyBmb3IgbGlzdCBpdGVtcyB3aGVuIGxpc3QgaXMgc2VsZWN0YWJsZVxuXHQgKi9cblx0cmFuZG9tSWQ6IG51bWJlciA9IDA7XG5cblx0Y29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsLyoqQGhpZGRlbiAqLyB0ZW1wbGF0ZVNlcnZpY2U6VGVtcGxhdGVTZXJ2aWNlKSB7IHN1cGVyKGVsZW1lbnRSZWYsIHRlbXBsYXRlU2VydmljZSk7IH1cblx0LyoqXG4gICAqIEl0IHdpbGwgYmUgZ2VuZXJhdGVkIDxiPmNmTGlzdDwvYj4gb2JqZWN0IGFuZCByZW5kZXJlZCBpbnNpZGUgY29tcG9uZW50IHRlbXBsYXRlLiBBbHNvIGNmTGlzdFRvZ2dsZUNsYXNzZXMgYXJyYXkgd2lsbCBiZSBpbml0aWFsaXplZCB0byBidWlsZCBlYWNoIGl0ZW0gZGV0YWlscyB0b2dnbGUgaWNvbi5cbiAgICovXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXG5cdFx0dGhpcy5nZXRNeVRlbXBsYXRlKFwibGlzdFwiLExpc3RUZW1wbGF0ZXMpLnRoZW4oKCkgPT4ge1xuXHRcdGlmKHRoaXMucHJvcGVydGllcz09bnVsbClcblx0XHRcdHRoaXMucHJvcGVydGllcyA9IG5ldyBMaXN0TW9kZWwodGhpcy5hY3RpdmVUZW1wbGF0ZS5wcm9wZXJ0eSk7XG5cdFx0aWYodGhpcy5zdHlsaW5nPT1udWxsKVxuXHRcdFx0dGhpcy5zdHlsaW5nID0gbmV3IExpc3RTdHlsaW5nTW9kZWwodGhpcy5hY3RpdmVUZW1wbGF0ZS5zdHlsZSk7XG5cdFx0XG5cdFx0aWYodGhpcy5kaXNhYmxlIT1udWxsKSB0aGlzLnByb3BlcnRpZXMuZGlzYWJsZSA9IHRoaXMuZGlzYWJsZTtcblx0XHRpZih0aGlzLmRpc3BsYXkhPW51bGwpIHRoaXMucHJvcGVydGllcy5kaXNwbGF5ID0gdGhpcy5kaXNwbGF5O1xuXHRcdGlmKHRoaXMudGl0bGUhPW51bGwpIHRoaXMucHJvcGVydGllcy50aXRsZSA9IHRoaXMudGl0bGU7XG5cdFx0dGhpcy5jZkxpc3QgPSB0aGlzLnByb3BlcnRpZXM7XG5cdFx0fSk7XG5cdH1cblx0LyoqXG5cdCAqIEFuZ3VsYXIgY29yZSBmdW5jdGlvbiB0byBsaXN0ZW4gZm9yIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGNoYW5nZXNcbiAgICogQHBhcmFtIGNoYW5nZXMgIGl0IGlzIG9iamVjdCB3aXRoIGNoYW5nZWQgcHJvcGVydGllc1xuXHQgKi9cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogYW55KSB7XG5cdFx0aWYodGhpcy5wcm9wZXJ0aWVzIT1udWxsICYmIHRoaXMuc3R5bGluZyE9bnVsbClcblx0XHR7XG5cdFx0XHRpZihjaGFuZ2VzLmRpc2FibGUhPW51bGwpIHRoaXMucHJvcGVydGllcy5kaXNhYmxlID0gY2hhbmdlcy5kaXNhYmxlLmN1cnJlbnRWYWx1ZTtcblx0XHRcdGlmKGNoYW5nZXMuZGlzcGxheSE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLmRpc3BsYXkgPSBjaGFuZ2VzLmRpc3BsYXkuY3VycmVudFZhbHVlO1xuXHRcdFx0aWYoY2hhbmdlcy50aXRsZSE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLnRpdGxlID0gY2hhbmdlcy50aXRsZS5jdXJyZW50VmFsdWU7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBBcnJheSB3aXRoIGxpc3QgaXRlbXNcblx0ICovXG5cdEBDb250ZW50Q2hpbGRyZW4oQ2ZJdGVtQ29tcG9uZW50KSBpdGVtczogUXVlcnlMaXN0PENmSXRlbUNvbXBvbmVudD47XG5cdC8qKlxuXHQgKiBBZnRlciBMaXN0IGNvbnRlbnQgd2FzIGluaXRpYWxpemVkIGFuZCBjb21wb25lbnQgaXMgc2VsZWN0YWJsZSwgd2lsbCBiZSBnZW5lcmF0ZWQgSURzIGZvciBhbGwgbGlzdCBpdGVtcyBhbmQgZWFjaCBzZWxlY3RlZCBpdGVtIElEIHdpbGwgYmUgcHVzaGVkIHRvIHNlbGVjdGVkSXRlbXMgYXJyYXkuXG5cdCAqL1xuXHRuZ0FmdGVyQ29udGVudEluaXQoKSB7XG5cdFx0aWYodGhpcy5pdGVtcyE9bnVsbCAmJiB0aGlzLml0ZW1zLmxlbmd0aD4wKVxuXHRcdHtcblx0XHRcdGlmKHRoaXMuc2VsZWN0YWJsZSE9ZmFsc2UpXG5cdFx0XHR7XG5cdFx0XHRcdGZvcihsZXQgaXRlbSBvZiB0aGlzLml0ZW1zLnRvQXJyYXkoKSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGl0ZW0uaW50ZXJuYWxJZCA9IHRoaXMucmFuZG9tSWQ7XG5cdFx0XHRcdFx0dGhpcy5yYW5kb21JZCsrO1xuXHRcdFx0XHRcdGlmKGl0ZW0uc2VsZWN0ZWQ9PXRydWUpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbS5pbnRlcm5hbElkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy53aXRoQ2hlY2tib3gpO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoXyA9PiBcblx0XHRcdFx0XHRcdFx0XHRcdGl0ZW0uc2VsZWN0YWJsZSA9IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVtLml0ZW1DbGlja2VkLnN1YnNjcmliZShkYXRhPT4gdGhpcy51cGRhdGVWYWx1ZXMoZGF0YSkpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRpZih0aGlzLndpdGhDaGVja2JveCE9dHJ1ZSlcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRpdGVtLndpdGhDaGVja2JveCA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvKipcblx0ICogRnVuY3Rpb24gdG8gdXBkYXRlIHNlbGVjdGVkSXRlbXMgYXJyYXkgdmFsdWVzIGFuZCBlbWl0IHRoZW0gXG4gICAqIEBwYXJhbSBkYXRhICBpdGVtIGRhdGEgb2JqZWN0XG5cdCAqL1xuXHR1cGRhdGVWYWx1ZXMoZGF0YSlcblx0e1xuXHRcdGlmKGRhdGFbXCJ2YWx1ZVwiXT09dHJ1ZSlcblx0XHR7XG5cdFx0XHR0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChkYXRhW1wiaWRcIl0pO1xuXHRcdFx0dGhpcy5zZWxlY3RlZEl0ZW1zLnNvcnQoKTtcblx0XHRcdHRoaXMub25TZWxlY3QuZW1pdCh0aGlzLnNlbGVjdGVkSXRlbXMpO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0dGhpcy5zZWxlY3RlZEl0ZW1zLnNwbGljZSh0aGlzLnNlbGVjdGVkSXRlbXMuaW5kZXhPZihkYXRhW1wiaWRcIl0pLDEpO1xuXHRcdFx0dGhpcy5vblNlbGVjdC5lbWl0KHRoaXMuc2VsZWN0ZWRJdGVtcyk7XG5cdFx0fVxuXHR9XG59Il19