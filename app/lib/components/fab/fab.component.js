"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fab_model_1 = require("../../models/fab/fab.model");
var core_component_1 = require("../core/core.component");
var fab_template_1 = require("../../templates/fab.template");
var template_service_1 = require("../../services/template-service/template.service");
/**
 * <p>CF Fab Component</p>
 * <pre>
 * <code>
 * import { FabButtonModel } from 'cedrus-fusion'
 * <</code>cf-fab<code>></code><code><</code><code>/</code>cf-fab<code>>
 * </code>
 * </pre>
 */
var CfFabComponent = (function (_super) {
    __extends(CfFabComponent, _super);
    /**@hidden */
    function CfFabComponent(/**@hidden*/ elementRef, /**@hidden */ templateService) {
        var _this = _super.call(this, elementRef, templateService) || this;
        _this.elementRef = elementRef;
        /**@hiddden
         * It is property to attach notification class when component has notifications actions.
         */
        _this.notifacationClickable = '';
        /**
           * <pre>{
           *  direction: string, // Default: 'down', Possible: 'down', 'up', 'right', 'left'
         *  triggerButton: FabButtonModel,
           *  actionButtons: FabButtonModel[],
           *  showButtons: boolean, //Default: false
         *  stayOpened: boolean //Default: false
           * }
           * </pre>
           */
        _this.buttons = [1, 2, 3];
        /**
         * <p>Event to call when Fab trigger button was clicked</p>
         */
        _this.cfTriggerEvent = new core_1.EventEmitter();
        /**
         * <p>Event to call when Fab action button was clicked</p>
         */
        _this.cfActionButtonEvent = new core_1.EventEmitter();
        return _this;
    }
    /**@hidden
     * <p>It is function to send event with Fab trigger button object when it was clciked.</p>
     * <p>Example of event object:</p>
     * @param item      it is trigger button object
     */
    CfFabComponent.prototype.coreTriggerEvent = function (fab) { this.cfTriggerEvent.emit(fab); };
    /**@hidden
     * <p>It is function to send event with Fab action button object when it was clciked.</p>
     * <p>Example of event object:</p>
     * @param index      it is index of action button
     * @param item      it is action button object
     */
    CfFabComponent.prototype.coreActionEvent = function (fab) { this.cfActionButtonEvent.emit(fab); };
    /**@hidden
     * It will be generated <b>cfFab</b> object and rendered inside component template.
     */
    // ngOnInit(){
    //   var opt = {};
    //   Object.assign(opt, FabTemplates.defaultTemplate.property,this.properties);
    //   this.cfFab = opt;
    //   // if(this.notificationAction.observers.length>0) this.notifacationClickable = 'notification-clickable';    
    // }
    CfFabComponent.prototype.ngOnInit = function () {
        if (this.notificationAction.observers.length > 0)
            this.notifacationClickable = 'notification-clickable';
        //this.getMyTemplate("fab",FabTemplates).then(() => {
        this.activeTemplate = fab_template_1.FabTemplates["defaultTemplate"];
        if (this.compTemplate != null && this.compTemplate != "") {
            if (fab_template_1.FabTemplates[this.compTemplate] != null) {
                this.activeTemplate = fab_template_1.FabTemplates[this.compTemplate];
            }
            else
                this.activeTemplate = this.compTemplate;
        }
        if (this.properties == null) {
            this.properties = new fab_model_1.FabModel(this.activeTemplate["property"]);
        }
        else {
            var mainKeys = Object.keys(this.activeTemplate["property"]);
            for (var _i = 0, mainKeys_1 = mainKeys; _i < mainKeys_1.length; _i++) {
                var key = mainKeys_1[_i];
                if (this.properties[key] == null)
                    this.properties[key] = this.activeTemplate["property"][key];
            }
        }
        if (this.display != null)
            this.properties.display = this.display;
        if (this.disable != null)
            this.properties.disable = this.disable;
        this.cfFab = this.properties;
        //});
    };
    return CfFabComponent;
}(core_component_1.CfCoreComponent));
__decorate([
    core_1.HostBinding('class'),
    __metadata("design:type", Object)
], CfFabComponent.prototype, "notifacationClickable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", fab_model_1.FabModel)
], CfFabComponent.prototype, "properties", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CfFabComponent.prototype, "cfTriggerEvent", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CfFabComponent.prototype, "cfActionButtonEvent", void 0);
CfFabComponent = __decorate([
    core_1.Component({
        selector: 'cf-fab',
        templateUrl: './lib/components/fab/fab.component.html',
        styleUrls: ['./lib/components/fab/fab.component.css']
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, template_service_1.TemplateService])
], CfFabComponent);
exports.CfFabComponent = CfFabComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0c7QUFDeEcsd0RBQXNEO0FBRXRELHlEQUF5RDtBQUN6RCw2REFBNEQ7QUFFNUQscUZBQW1GO0FBR25GOzs7Ozs7OztHQVFHO0FBTUgsSUFBYSxjQUFjO0lBQVMsa0NBQWU7SUF5RWpELGFBQWE7SUFDYix3QkFBbUIsWUFBWSxDQUFPLFVBQXNCLEVBQUMsYUFBYSxDQUFDLGVBQStCO1FBQTFHLFlBQThHLGtCQUFNLFVBQVUsRUFBRSxlQUFlLENBQUMsU0FBRztRQUE3RyxnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQXhFNUQ7O1dBRUc7UUFDbUIsMkJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBNkJqRDs7Ozs7Ozs7O2FBU0U7UUFFRixhQUFPLEdBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBR3ZCOztXQUVHO1FBQ08sb0JBQWMsR0FBc0IsSUFBSSxtQkFBWSxFQUFPLENBQUM7UUFFdEU7O1dBRUc7UUFDTyx5QkFBbUIsR0FBc0IsSUFBSSxtQkFBWSxFQUFPLENBQUM7O0lBa0J1RSxDQUFDO0lBaEJuSjs7OztPQUlHO0lBQ0gseUNBQWdCLEdBQWhCLFVBQWlCLEdBQVcsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFaEU7Ozs7O09BS0c7SUFDSCx3Q0FBZSxHQUFmLFVBQWdCLEdBQVcsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUtwRTs7T0FFRztJQUVILGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsK0VBQStFO0lBQy9FLHNCQUFzQjtJQUN0QixpSEFBaUg7SUFDakgsSUFBSTtJQUVKLGlDQUFRLEdBQVI7UUFDQSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsd0JBQXdCLENBQUM7UUFFckcscURBQXFEO1FBQ3JELElBQUksQ0FBQyxjQUFjLEdBQUcsMkJBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUUsSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUUsRUFBRSxDQUFDLENBQ3BELENBQUM7WUFDQSxFQUFFLENBQUEsQ0FBQywyQkFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBRSxJQUFJLENBQUMsQ0FDekMsQ0FBQztnQkFDQSxJQUFJLENBQUMsY0FBYyxHQUFHLDJCQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZELENBQUM7WUFDRCxJQUFJO2dCQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMxQyxDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBRSxJQUFJLENBQUMsQ0FDdEIsQ0FBQztZQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxvQkFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUM5RCxDQUFDO1FBQ0osSUFBSSxDQUNKLENBQUM7WUFDQSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUM1RCxHQUFHLENBQUEsQ0FBWSxVQUFRLEVBQVIscUJBQVEsRUFBUixzQkFBUSxFQUFSLElBQVE7Z0JBQW5CLElBQUksR0FBRyxpQkFBQTtnQkFFVixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFFLElBQUksQ0FBQztvQkFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzNEO1FBQ0YsQ0FBQztRQUVELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUUsSUFBSSxDQUFDO1lBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1RCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFFLElBQUksQ0FBQztZQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFaEUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLEtBQUs7SUFDUixDQUFDO0lBQ0YscUJBQUM7QUFBRCxDQUFDLEFBekhELENBQW9DLGdDQUFlLEdBeUhsRDtBQXBIdUI7SUFBckIsa0JBQVcsQ0FBQyxPQUFPLENBQUM7OzZEQUE0QjtBQXlDeEM7SUFBUixZQUFLLEVBQUU7OEJBQW9CLG9CQUFRO2tEQUFDO0FBSzNCO0lBQVQsYUFBTSxFQUFFOzhCQUFpQixtQkFBWTtzREFBZ0M7QUFLNUQ7SUFBVCxhQUFNLEVBQUU7OEJBQXNCLG1CQUFZOzJEQUFnQztBQXhEaEUsY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLHlDQUF5QztRQUN0RCxTQUFTLEVBQUUsQ0FBQyx3Q0FBd0MsQ0FBQztLQUN0RCxDQUFDO3FDQTJFa0QsaUJBQVUsRUFBK0Isa0NBQWU7R0ExRS9GLGNBQWMsQ0F5SDFCO0FBekhZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhYk1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ZhYi9mYWIubW9kZWwnO1xuaW1wb3J0IHsgRmFiQnV0dG9uTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvZmFiL2ZhYi1idXR0b24ubW9kZWwnO1xuaW1wb3J0IHsgQ2ZDb3JlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9jb3JlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJUZW1wbGF0ZXMgfSBmcm9tICcuLi8uLi90ZW1wbGF0ZXMvZmFiLnRlbXBsYXRlJztcblxuaW1wb3J0IHsgVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGVtcGxhdGUtc2VydmljZS90ZW1wbGF0ZS5zZXJ2aWNlJztcblxuXG4vKipcbiAqIDxwPkNGIEZhYiBDb21wb25lbnQ8L3A+IFxuICogPHByZT5cbiAqIDxjb2RlPlxuICogaW1wb3J0IHsgRmFiQnV0dG9uTW9kZWwgfSBmcm9tICdjZWRydXMtZnVzaW9uJ1xuICogPDwvY29kZT5jZi1mYWI8Y29kZT4+PC9jb2RlPjxjb2RlPjw8L2NvZGU+PGNvZGU+LzwvY29kZT5jZi1mYWI8Y29kZT4+XG4gKiA8L2NvZGU+XG4gKiA8L3ByZT5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2YtZmFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpYi9jb21wb25lbnRzL2ZhYi9mYWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saWIvY29tcG9uZW50cy9mYWIvZmFiLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDZkZhYkNvbXBvbmVudCBleHRlbmRzIENmQ29yZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIFxuICAvKipAaGlkZGRlblxuICAgKiBJdCBpcyBwcm9wZXJ0eSB0byBhdHRhY2ggbm90aWZpY2F0aW9uIGNsYXNzIHdoZW4gY29tcG9uZW50IGhhcyBub3RpZmljYXRpb25zIGFjdGlvbnMuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgbm90aWZhY2F0aW9uQ2xpY2thYmxlID0gJyc7XG5cbiAgLyoqIEBoaWRkZW5cbiAgICogPHA+SXQgaXMgT2JqZWN0IHdoaWNoIHdpbGwgcmVjaXZlIGRhdGEgZnJvbSA8Yj5GYWJNb2RlbDwvYj4gQ2xhc3MuIEl0IGlzIHVzZWQgaW4gPGI+Y2YtZmFiPC9iPiB0ZW1wbGF0ZS48L3A+XG4gICAqIDxwPkV4YW1wbGU6PC9wPlxuICAgKiA8cHJlPntcbiAgICogIGRpcmVjdGlvbjogXCJkb3duXCIsXG4gICAqICBzaG93QnV0dG9uczogdHJ1ZSxcbiAgICogIHN0YXlPcGVuZWQ6IHRydWUsXG4gICAqICB0cmlnZ2VyQnV0dG9uOiB7IGljb246IHtuYW1lOiAnZmEtZ2Vhcid9IH0sXG4gICAqICBhY3Rpb25CdXR0b25zOiBbXG4gICAqICAgIHsgaWNvbjoge25hbWU6XCJmYS1hcHBsZVwifSwgZGlzcGxheTogdGhpcy5zaG93biB9LFxuICAgKiAgICB7IGljb246IHtuYW1lOlwiZmEtc3RhclwifSwgbGFiZWw6IFwiSXRlbVwiLCBsYWJlbFBvc2l0aW9uOiBcImxlZnRcIiB9LFxuICAgKiAgICB7IGljb246IHtuYW1lOlwiZmEtaG9tZVwifSwgZGlzYWJsZTogdGhpcy5kaXNhYmxlZCB9XG4gICAqICBdXG4gICAqIH08L3ByZT5cbiAgICogPGg0PmRpcmVjdGlvbjogc3RyaW5nPC9oND5cbiAgICogSXQgaXMgZGlyZWN0aW9uIG9mIG9wZW5pbmcgRmFiIGFjdGlvbiBidXR0b25zLiBPcHRpb25hbC4gRGVmYXVsdCBtdXN0IGJlIHNldCBpbiBmaWxlOiAvc3JjL2Fzc2V0cy9zZXR0aW5ncy9mYWIvc2V0dGluZ3MudHMuIENhbiBiZTogJ3VwJywgJ3JpZ2h0JywgJ2Rvd24nLCAnbGVmdCcuXG4gICAqIDxoND5zaG93QnV0dG9uczogYm9vbGVhbjwvaDQ+XG4gICAqIEl0IHNldCBpZiBGYWIgYWN0aW9uIGJ1dHRvbnMgbXVzdCBiZSBzaG93biBvbiBpbml0LiBPcHRpb25hbC4gRGVmYXVsdCBpcyBmYWxzZS4gXG4gICAqIDxoND5zdGF5T3BlbmVkOiBib29sZWFuPC9oND5cbiAgICogSXQgaXMgaWNvbiBjb25zdHJ1Y3Rvciwgd2hpY2ggdGFrZSBzdHJpbmcgdmFsdWVzIGZyb20gRmFiIENvbXBvbmVudCBhbmQgY3JlYXRlIEZhYiBvYmplY3QuXG4gICAqIDxoND50cmlnZ2VyQnV0dG9uOiBGYWJCdXR0b25Nb2RlbDwvaDQ+XG4gICAqIEl0IGlzIGRhdGEgZm9yIEZhYiB0cmlnZ2VyIGJ1dHRvbiBiYXNlZCBvbiBGYWJCdXR0b25Nb2RlbC4gT3B0aW9uYWwsIGJ1dCB0aGVuIG11c3QgYmUgc2V0IGluIGZpbGUgZGVzY3JpYmV0IGFib3ZlLiBcbiAgICogPGg0PmFjdGlvbkJ1dHRvbnM6IEZhYkJ1dHRvbk1vZGVsW108L2g0PlxuICAgKiBJdCBpcyBhbiBhcnJheSBvZiBidXR0b25zIHdpdGggdHlwZSBGYWJCdXR0b25Nb2RlbC4gT3B0aW9uYWwuXG4gICAqL1xuICBjZkZhYjogRmFiTW9kZWw7XG5cbiAgLyoqXG5cdCAqIDxwcmU+e1xuXHQgKiAgZGlyZWN0aW9uOiBzdHJpbmcsIC8vIERlZmF1bHQ6ICdkb3duJywgUG9zc2libGU6ICdkb3duJywgJ3VwJywgJ3JpZ2h0JywgJ2xlZnQnXG4gICAqICB0cmlnZ2VyQnV0dG9uOiBGYWJCdXR0b25Nb2RlbCxcblx0ICogIGFjdGlvbkJ1dHRvbnM6IEZhYkJ1dHRvbk1vZGVsW10sXG5cdCAqICBzaG93QnV0dG9uczogYm9vbGVhbiwgLy9EZWZhdWx0OiBmYWxzZVxuICAgKiAgc3RheU9wZW5lZDogYm9vbGVhbiAvL0RlZmF1bHQ6IGZhbHNlXG5cdCAqIH1cblx0ICogPC9wcmU+XG5cdCAqL1xuXG4gIGJ1dHRvbnM6IGFueSA9IFsxLDIsM107XG4gIEBJbnB1dCgpIHB1YmxpYyBwcm9wZXJ0aWVzOiBGYWJNb2RlbDtcblxuICAvKipcbiAgICogPHA+RXZlbnQgdG8gY2FsbCB3aGVuIEZhYiB0cmlnZ2VyIGJ1dHRvbiB3YXMgY2xpY2tlZDwvcD5cbiAgICovXG4gIEBPdXRwdXQoKSBjZlRyaWdnZXJFdmVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKipcbiAgICogPHA+RXZlbnQgdG8gY2FsbCB3aGVuIEZhYiBhY3Rpb24gYnV0dG9uIHdhcyBjbGlja2VkPC9wPlxuICAgKi9cbiAgQE91dHB1dCgpIGNmQWN0aW9uQnV0dG9uRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqQGhpZGRlblxuICAgKiA8cD5JdCBpcyBmdW5jdGlvbiB0byBzZW5kIGV2ZW50IHdpdGggRmFiIHRyaWdnZXIgYnV0dG9uIG9iamVjdCB3aGVuIGl0IHdhcyBjbGNpa2VkLjwvcD5cbiAgICogPHA+RXhhbXBsZSBvZiBldmVudCBvYmplY3Q6PC9wPlxuICAgKiBAcGFyYW0gaXRlbSAgICAgIGl0IGlzIHRyaWdnZXIgYnV0dG9uIG9iamVjdFxuICAgKi9cbiAgY29yZVRyaWdnZXJFdmVudChmYWI6IE9iamVjdCkgeyB0aGlzLmNmVHJpZ2dlckV2ZW50LmVtaXQoZmFiKTsgfVxuXG4gIC8qKkBoaWRkZW5cbiAgICogPHA+SXQgaXMgZnVuY3Rpb24gdG8gc2VuZCBldmVudCB3aXRoIEZhYiBhY3Rpb24gYnV0dG9uIG9iamVjdCB3aGVuIGl0IHdhcyBjbGNpa2VkLjwvcD5cbiAgICogPHA+RXhhbXBsZSBvZiBldmVudCBvYmplY3Q6PC9wPlxuICAgKiBAcGFyYW0gaW5kZXggICAgICBpdCBpcyBpbmRleCBvZiBhY3Rpb24gYnV0dG9uXG4gICAqIEBwYXJhbSBpdGVtICAgICAgaXQgaXMgYWN0aW9uIGJ1dHRvbiBvYmplY3RcbiAgICovXG4gIGNvcmVBY3Rpb25FdmVudChmYWI6IE9iamVjdCkgeyB0aGlzLmNmQWN0aW9uQnV0dG9uRXZlbnQuZW1pdChmYWIpOyB9XG5cbiAgLyoqQGhpZGRlbiAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoLyoqQGhpZGRlbiovcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsLyoqQGhpZGRlbiAqLyB0ZW1wbGF0ZVNlcnZpY2U6VGVtcGxhdGVTZXJ2aWNlKSB7IHN1cGVyKGVsZW1lbnRSZWYsIHRlbXBsYXRlU2VydmljZSk7IH1cblxuICAvKipAaGlkZGVuXG4gICAqIEl0IHdpbGwgYmUgZ2VuZXJhdGVkIDxiPmNmRmFiPC9iPiBvYmplY3QgYW5kIHJlbmRlcmVkIGluc2lkZSBjb21wb25lbnQgdGVtcGxhdGUuXG4gICAqL1xuICBcbiAgLy8gbmdPbkluaXQoKXtcbiAgLy8gICB2YXIgb3B0ID0ge307XG4gIC8vICAgT2JqZWN0LmFzc2lnbihvcHQsIEZhYlRlbXBsYXRlcy5kZWZhdWx0VGVtcGxhdGUucHJvcGVydHksdGhpcy5wcm9wZXJ0aWVzKTtcbiAgLy8gICB0aGlzLmNmRmFiID0gb3B0O1xuICAvLyAgIC8vIGlmKHRoaXMubm90aWZpY2F0aW9uQWN0aW9uLm9ic2VydmVycy5sZW5ndGg+MCkgdGhpcy5ub3RpZmFjYXRpb25DbGlja2FibGUgPSAnbm90aWZpY2F0aW9uLWNsaWNrYWJsZSc7ICAgIFxuICAvLyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cdFx0aWYodGhpcy5ub3RpZmljYXRpb25BY3Rpb24ub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHRoaXMubm90aWZhY2F0aW9uQ2xpY2thYmxlID0gJ25vdGlmaWNhdGlvbi1jbGlja2FibGUnO1xuXG4gICAgLy90aGlzLmdldE15VGVtcGxhdGUoXCJmYWJcIixGYWJUZW1wbGF0ZXMpLnRoZW4oKCkgPT4ge1xuICBcdFx0dGhpcy5hY3RpdmVUZW1wbGF0ZSA9IEZhYlRlbXBsYXRlc1tcImRlZmF1bHRUZW1wbGF0ZVwiXTtcblx0XHRpZih0aGlzLmNvbXBUZW1wbGF0ZSE9bnVsbCAmJiB0aGlzLmNvbXBUZW1wbGF0ZSE9XCJcIilcblx0XHR7XG5cdFx0XHRpZihGYWJUZW1wbGF0ZXNbdGhpcy5jb21wVGVtcGxhdGVdIT1udWxsKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLmFjdGl2ZVRlbXBsYXRlID0gRmFiVGVtcGxhdGVzW3RoaXMuY29tcFRlbXBsYXRlXTtcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdFx0dGhpcy5hY3RpdmVUZW1wbGF0ZSA9IHRoaXMuY29tcFRlbXBsYXRlO1xuXHRcdH1cblx0XHRpZih0aGlzLnByb3BlcnRpZXM9PW51bGwpXG4gICAgXHR7XG5cdFx0XHR0aGlzLnByb3BlcnRpZXMgPSBuZXcgRmFiTW9kZWwodGhpcy5hY3RpdmVUZW1wbGF0ZVtcInByb3BlcnR5XCJdKTtcbiAgICBcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0dmFyIG1haW5LZXlzID0gT2JqZWN0LmtleXModGhpcy5hY3RpdmVUZW1wbGF0ZVtcInByb3BlcnR5XCJdKTtcblx0XHRcdGZvcihsZXQga2V5IG9mIG1haW5LZXlzKVxuXHRcdFx0e1xuXHRcdFx0XHRpZih0aGlzLnByb3BlcnRpZXNba2V5XT09bnVsbClcblx0XHRcdFx0XHR0aGlzLnByb3BlcnRpZXNba2V5XT10aGlzLmFjdGl2ZVRlbXBsYXRlW1wicHJvcGVydHlcIl1ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZih0aGlzLmRpc3BsYXkhPW51bGwpIHRoaXMucHJvcGVydGllcy5kaXNwbGF5ID0gdGhpcy5kaXNwbGF5O1xuICAgIGlmKHRoaXMuZGlzYWJsZSE9bnVsbCkgdGhpcy5wcm9wZXJ0aWVzLmRpc2FibGUgPSB0aGlzLmRpc2FibGU7XG5cblx0XHR0aGlzLmNmRmFiID0gdGhpcy5wcm9wZXJ0aWVzO1xuICAgIC8vfSk7XG5cdH1cbn0iXX0=