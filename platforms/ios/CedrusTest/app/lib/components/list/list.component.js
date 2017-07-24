"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_component_1 = require("../core/core.component");
var item_component_1 = require("../item/item.component");
var list_model_1 = require("../../models/list/list.model");
var CfListComponent = (function (_super) {
    __extends(CfListComponent, _super);
    function CfListComponent(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.elementRef = elementRef;
        _this.selectable = false;
        _this.withCheckbox = true;
        _this.selectedItems = [];
        _this.onSelect = new core_1.EventEmitter();
        _this.randomId = 0;
        return _this;
    }
    CfListComponent.prototype.ngOnInit = function () {
        // this.getMyTemplate("list",ListTemplates).then(() => {
        // if(this.properties==null)
        // 	this.properties = new ListModel(this.activeTemplate.property);
        // if(this.styling==null)
        // 	this.styling = new ListStylingModel(this.activeTemplate.style);
        // if(this.disable!=null) this.properties.disable = this.disable;
        // if(this.display!=null) this.properties.display = this.display;
        // if(this.title!=null) this.properties.title = this.title;
        // this.cfList = this.properties;
        // });
    };
    CfListComponent.prototype.ngOnChanges = function (changes) {
        if (this.properties) {
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
    __metadata("design:paramtypes", [core_1.ElementRef])
], CfListComponent);
exports.CfListComponent = CfListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1SDtBQUN2SCx5REFBeUQ7QUFDekQseURBQXlEO0FBQ3pELDJEQUF5RDtBQU96RCxJQUFhLGVBQWU7SUFBUyxtQ0FBZTtJQW9CbkQseUJBQW1CLFVBQXNCO1FBQXpDLFlBQTRELGtCQUFNLFVBQVUsQ0FBQyxTQUFHO1FBQTdELGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBVmhDLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBRTVCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRXRDLG1CQUFhLEdBQWEsRUFBRSxDQUFDO1FBRW5CLGNBQVEsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUV4QyxjQUFRLEdBQVcsQ0FBQyxDQUFDOztJQUUwRCxDQUFDO0lBRWhGLGtDQUFRLEdBQVI7UUFFQyx3REFBd0Q7UUFDeEQsNEJBQTRCO1FBQzVCLGtFQUFrRTtRQUNsRSx5QkFBeUI7UUFDekIsbUVBQW1FO1FBRW5FLGlFQUFpRTtRQUNqRSxpRUFBaUU7UUFDakUsMkRBQTJEO1FBQzNELGlDQUFpQztRQUNqQyxNQUFNO0lBQ1AsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxPQUFZO1FBQ3ZCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDbkIsQ0FBQztZQUNBLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUUsSUFBSSxDQUFDO2dCQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ2pGLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUUsSUFBSSxDQUFDO2dCQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ2pGLEVB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OzhDQUFrQjtBQWhEeEQsZUFBZTtJQUwzQixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLFNBQVM7UUFDaEIsV0FBVyxFQUFFLDJDQUEyQztRQUMzRCxTQUFTLEVBQUUsQ0FBQywwQ0FBMEMsQ0FBQztLQUN2RCxDQUFDO3FDQXFCOEIsaUJBQVU7R0FwQjdCLGVBQWUsQ0FnRzNCO0FBaEdZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENmQ29yZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvY29yZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2ZJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vaXRlbS9pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0TW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvbGlzdC9saXN0Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY2YtbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xpYi9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2xpYi9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2ZMaXN0Q29tcG9uZW50IGV4dGVuZHMgQ2ZDb3JlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNmTGlzdDogTGlzdE1vZGVsO1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBwcm9wZXJ0aWVzOiBMaXN0TW9kZWw7XG5cblx0Ly8gQElucHV0KCkgcHVibGljIHN0eWxpbmc6IExpc3RTdHlsaW5nTW9kZWw7XG5cblx0QElucHV0KCkgdGl0bGU6IHN0cmluZztcblxuXHRASW5wdXQoKSBzZWxlY3RhYmxlOiBib29sZWFuID0gZmFsc2U7XG5cblx0QElucHV0KCkgd2l0aENoZWNrYm94OiBib29sZWFuID0gdHJ1ZTtcblxuXHRzZWxlY3RlZEl0ZW1zOiBudW1iZXJbXSA9IFtdO1xuXG5cdEBPdXRwdXQoKSBvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRyYW5kb21JZDogbnVtYmVyID0gMDtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwvKipAaGlkZGVuICovICkgeyBzdXBlcihlbGVtZW50UmVmKTsgfVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXG5cdFx0Ly8gdGhpcy5nZXRNeVRlbXBsYXRlKFwibGlzdFwiLExpc3RUZW1wbGF0ZXMpLnRoZW4oKCkgPT4ge1xuXHRcdC8vIGlmKHRoaXMucHJvcGVydGllcz09bnVsbClcblx0XHQvLyBcdHRoaXMucHJvcGVydGllcyA9IG5ldyBMaXN0TW9kZWwodGhpcy5hY3RpdmVUZW1wbGF0ZS5wcm9wZXJ0eSk7XG5cdFx0Ly8gaWYodGhpcy5zdHlsaW5nPT1udWxsKVxuXHRcdC8vIFx0dGhpcy5zdHlsaW5nID0gbmV3IExpc3RTdHlsaW5nTW9kZWwodGhpcy5hY3RpdmVUZW1wbGF0ZS5zdHlsZSk7XG5cdFx0XG5cdFx0Ly8gaWYodGhpcy5kaXNhYmxlIT1udWxsKSB0aGlzLnByb3BlcnRpZXMuZGlzYWJsZSA9IHRoaXMuZGlzYWJsZTtcblx0XHQvLyBpZih0aGlzLmRpc3BsYXkhPW51bGwpIHRoaXMucHJvcGVydGllcy5kaXNwbGF5ID0gdGhpcy5kaXNwbGF5O1xuXHRcdC8vIGlmKHRoaXMudGl0bGUhPW51bGwpIHRoaXMucHJvcGVydGllcy50aXRsZSA9IHRoaXMudGl0bGU7XG5cdFx0Ly8gdGhpcy5jZkxpc3QgPSB0aGlzLnByb3BlcnRpZXM7XG5cdFx0Ly8gfSk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpIHtcblx0XHRpZih0aGlzLnByb3BlcnRpZXMpXG5cdFx0e1xuXHRcdFx0aWYoY2hhbmdlcy5kaXNhYmxlIT1udWxsKSB0aGlzLnByb3BlcnRpZXMuZGlzYWJsZSA9IGNoYW5nZXMuZGlzYWJsZS5jdXJyZW50VmFsdWU7XG5cdFx0XHRpZihjaGFuZ2VzLmRpc3BsYXkhPW51bGwpIHRoaXMucHJvcGVydGllcy5kaXNwbGF5ID0gY2hhbmdlcy5kaXNwbGF5LmN1cnJlbnRWYWx1ZTtcblx0XHRcdGlmKGNoYW5nZXMudGl0bGUhPW51bGwpIHRoaXMucHJvcGVydGllcy50aXRsZSA9IGNoYW5nZXMudGl0bGUuY3VycmVudFZhbHVlO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogQXJyYXkgd2l0aCBsaXN0IGl0ZW1zXG5cdCAqL1xuXHRAQ29udGVudENoaWxkcmVuKENmSXRlbUNvbXBvbmVudCkgaXRlbXM6IFF1ZXJ5TGlzdDxDZkl0ZW1Db21wb25lbnQ+O1xuXHQvKipcblx0ICogQWZ0ZXIgTGlzdCBjb250ZW50IHdhcyBpbml0aWFsaXplZCBhbmQgY29tcG9uZW50IGlzIHNlbGVjdGFibGUsIHdpbGwgYmUgZ2VuZXJhdGVkIElEcyBmb3IgYWxsIGxpc3QgaXRlbXMgYW5kIGVhY2ggc2VsZWN0ZWQgaXRlbSBJRCB3aWxsIGJlIHB1c2hlZCB0byBzZWxlY3RlZEl0ZW1zIGFycmF5LlxuXHQgKi9cblx0bmdBZnRlckNvbnRlbnRJbml0KCkge1xuXHRcdGlmKHRoaXMuaXRlbXMhPW51bGwgJiYgdGhpcy5pdGVtcy5sZW5ndGg+MClcblx0XHR7XG5cdFx0XHRpZih0aGlzLnNlbGVjdGFibGUhPWZhbHNlKVxuXHRcdFx0e1xuXHRcdFx0XHRmb3IobGV0IGl0ZW0gb2YgdGhpcy5pdGVtcy50b0FycmF5KCkpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpdGVtLmludGVybmFsSWQgPSB0aGlzLnJhbmRvbUlkO1xuXHRcdFx0XHRcdHRoaXMucmFuZG9tSWQrKztcblx0XHRcdFx0XHRpZihpdGVtLnNlbGVjdGVkPT10cnVlKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKGl0ZW0uaW50ZXJuYWxJZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMud2l0aENoZWNrYm94KTtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KF8gPT4gXG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVtLnNlbGVjdGFibGUgPSB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0aXRlbS5pdGVtQ2xpY2tlZC5zdWJzY3JpYmUoZGF0YT0+IHRoaXMudXBkYXRlVmFsdWVzKGRhdGEpKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0aWYodGhpcy53aXRoQ2hlY2tib3ghPXRydWUpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aXRlbS53aXRoQ2hlY2tib3ggPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIEZ1bmN0aW9uIHRvIHVwZGF0ZSBzZWxlY3RlZEl0ZW1zIGFycmF5IHZhbHVlcyBhbmQgZW1pdCB0aGVtIFxuICAgKiBAcGFyYW0gZGF0YSAgaXRlbSBkYXRhIG9iamVjdFxuXHQgKi9cblx0dXBkYXRlVmFsdWVzKGRhdGEpXG5cdHtcblx0XHRpZihkYXRhW1widmFsdWVcIl09PXRydWUpXG5cdFx0e1xuXHRcdFx0dGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goZGF0YVtcImlkXCJdKTtcblx0XHRcdHRoaXMuc2VsZWN0ZWRJdGVtcy5zb3J0KCk7XG5cdFx0XHR0aGlzLm9uU2VsZWN0LmVtaXQodGhpcy5zZWxlY3RlZEl0ZW1zKTtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdHRoaXMuc2VsZWN0ZWRJdGVtcy5zcGxpY2UodGhpcy5zZWxlY3RlZEl0ZW1zLmluZGV4T2YoZGF0YVtcImlkXCJdKSwxKTtcblx0XHRcdHRoaXMub25TZWxlY3QuZW1pdCh0aGlzLnNlbGVjdGVkSXRlbXMpO1xuXHRcdH1cbiAgICB9XG59Il19