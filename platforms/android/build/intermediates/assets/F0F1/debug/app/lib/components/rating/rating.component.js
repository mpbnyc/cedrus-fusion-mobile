"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_component_1 = require("../core/core.component");
var icon_styling_model_1 = require("../../models/icon/icon-styling.model");
var rating_model_1 = require("../../models/rating/rating.model");
var rating_styling_model_1 = require("../../models/rating/rating-styling.model");
var rating_template_1 = require("../../templates/rating.template");
var template_service_1 = require("../../services/template-service/template.service");
/**
 * <p>Rating component which has vertical/horizontal icons, icon order changing and other basic functionality.</p>
 * <p>Example of using Menu:</p>
 * <pre>
 * <code><</code>cf-rating [properties]="myRating" [styling]="myRatingStyles"<code>></code><code><</code><code>/</code>cf-rating<code>></code>
 * </pre>
 */
var CfRatingComponent = (function (_super) {
    __extends(CfRatingComponent, _super);
    /**@hidden
     *
     */
    function CfRatingComponent(elementRef, /**@hidden */ templateService) {
        var _this = _super.call(this, elementRef, templateService) || this;
        _this.elementRef = elementRef;
        /**
         * It is an array to be filled with items according to MAX property
         */
        _this.cfItems = [];
        _this.iconStyling = new icon_styling_model_1.IconStylingModel({
            icon: {
                class: "",
                dynamicClass: "",
                themeColor: ""
            }
        });
        return _this;
    }
    /**
     * Initialize all data
     */
    CfRatingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getMyTemplate("rating", rating_template_1.RatingTemplates).then(function () {
            if (_this.compTemplate != null && _this.compTemplate != "") {
                if (rating_template_1.RatingTemplates[_this.compTemplate] != null) {
                    _this.activeTemplate = rating_template_1.RatingTemplates[_this.compTemplate];
                }
                else
                    _this.activeTemplate = _this.compTemplate;
            }
            if (_this.properties == null) {
                _this.properties = new rating_model_1.RatingModel(_this.activeTemplate["property"]);
            }
            else {
                var mainKeys = Object.keys(_this.activeTemplate["property"]);
                for (var _i = 0, mainKeys_1 = mainKeys; _i < mainKeys_1.length; _i++) {
                    var key = mainKeys_1[_i];
                    if (_this.properties[key] == null)
                        _this.properties[key] = _this.activeTemplate["property"][key];
                }
            }
            _this.cfRating = _this.properties;
            if (_this.styling == null) {
                _this.styling = new rating_styling_model_1.RatingStylingModel(_this.activeTemplate["style"]);
                _this.styling.icon = _this.iconStyling;
            }
            else if (_this.styling.icon == null) {
                _this.styling.icon = _this.iconStyling;
            }
            for (var i = 0; i < _this.cfRating.max; ++i) {
                console.log('adding an item');
                _this.cfItems.push(i);
            }
        });
    };
    // ngOnChanges(changes: any) {
    // 	console.log('changes', changes);
    // }
    /**
     * Function to set component value
     * @param index  it is used to calculate component value
     */
    CfRatingComponent.prototype.setRating = function (index) {
        console.log('tryna set that rating!!!');
        if (!this.cfRating.disable)
            this.cfRating.value = index + 1;
    };
    /**
     * Function to unselect current item by user double-click and change component value
     * @param index  it is used to calculate component value
     */
    CfRatingComponent.prototype.resetCurrentItem = function (index) {
        if (!this.cfRating.disable)
            this.cfRating.value = index;
    };
    /**
     * Function to set filled color for icons
     */
    CfRatingComponent.prototype.getHighlitedColor = function () {
        return !this.cfRating.disable ? this.styling.filledColor : 'rgba(0,0,0,0.5)';
    };
    /**
     * Function to set empty color for icons
     */
    CfRatingComponent.prototype.getEmptyColor = function () {
        return !this.cfRating.disable ? this.styling.emptyColor : 'rgba(0,0,0,0.2)';
    };
    return CfRatingComponent;
}(core_component_1.CfCoreComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", rating_model_1.RatingModel)
], CfRatingComponent.prototype, "properties", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", rating_styling_model_1.RatingStylingModel)
], CfRatingComponent.prototype, "styling", void 0);
CfRatingComponent = __decorate([
    core_1.Component({
        selector: 'cf-rating',
        templateUrl: './lib/components/rating/rating.component.html',
        styleUrls: ['./lib/components/rating/rating.component.css']
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, template_service_1.TemplateService])
], CfRatingComponent);
exports.CfRatingComponent = CfRatingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJhdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0k7QUFDbEkseURBQXlEO0FBQ3pELDJFQUF3RTtBQUN4RSxpRUFBK0Q7QUFDL0QsaUZBQThFO0FBQzlFLG1FQUFrRTtBQUVsRSxxRkFBbUY7QUFDbkY7Ozs7OztHQU1HO0FBTUgsSUFBYSxpQkFBaUI7SUFBUyxxQ0FBZTtJQWtEcEQ7O09BRUc7SUFDSCwyQkFBbUIsVUFBc0IsRUFBQyxhQUFhLENBQUMsZUFBK0I7UUFBdkYsWUFBMkYsa0JBQU0sVUFBVSxFQUFFLGVBQWUsQ0FBQyxTQUFHO1FBQTdHLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBaER6Qzs7V0FFRztRQUNKLGFBQU8sR0FBYSxFQUFFLENBQUM7UUFFdEIsaUJBQVcsR0FBRyxJQUFJLHFDQUFnQixDQUFDO1lBQ2pDLElBQUksRUFBQztnQkFDSCxLQUFLLEVBQUMsRUFBRTtnQkFDUixZQUFZLEVBQUMsRUFBRTtnQkFDZixVQUFVLEVBQUMsRUFBRTthQUNkO1NBQ0YsQ0FBQyxDQUFDOztJQXFDNEgsQ0FBQztJQUNoSTs7T0FFRztJQUNILG9DQUFRLEdBQVI7UUFBQSxpQkF3Q0M7UUF2Q0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUMsaUNBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNoRCxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsWUFBWSxJQUFFLElBQUksSUFBSSxLQUFJLENBQUMsWUFBWSxJQUFFLEVBQUUsQ0FBQyxDQUNwRCxDQUFDO2dCQUNDLEVBQUUsQ0FBQSxDQUFDLGlDQUFlLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFFLElBQUksQ0FBQyxDQUM1QyxDQUFDO29CQUNDLEtBQUksQ0FBQyxjQUFjLEdBQUcsaUNBQWUsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzNELENB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Q0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQztJQUM3RSxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBaElELENBQXVDLGdDQUFlLEdBZ0lyRDtBQW5GUztJQUFSLFlBQUssRUFBRTs4QkFBYSwwQkFBVztxREFBQztBQUl4QjtJQUFSLFlBQUssRUFBRTs4QkFBVSx5Q0FBa0I7a0RBQUM7QUFqRHpCLGlCQUFpQjtJQUw3QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLCtDQUErQztRQUM1RCxTQUFTLEVBQUUsQ0FBQyw4Q0FBOEMsQ0FBQztLQUM1RCxDQUFDO3FDQXNEK0IsaUJBQVUsRUFBK0Isa0NBQWU7R0FyRDVFLGlCQUFpQixDQWdJN0I7QUFoSVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIE9uQ2hhbmdlcywgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2ZDb3JlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9jb3JlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJY29uU3R5bGluZ01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ljb24vaWNvbi1zdHlsaW5nLm1vZGVsJztcbmltcG9ydCB7IFJhdGluZ01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3JhdGluZy9yYXRpbmcubW9kZWwnO1xuaW1wb3J0IHsgUmF0aW5nU3R5bGluZ01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3JhdGluZy9yYXRpbmctc3R5bGluZy5tb2RlbCc7XG5pbXBvcnQgeyBSYXRpbmdUZW1wbGF0ZXMgfSBmcm9tICcuLi8uLi90ZW1wbGF0ZXMvcmF0aW5nLnRlbXBsYXRlJztcblxuaW1wb3J0IHsgVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGVtcGxhdGUtc2VydmljZS90ZW1wbGF0ZS5zZXJ2aWNlJztcbi8qKlxuICogPHA+UmF0aW5nIGNvbXBvbmVudCB3aGljaCBoYXMgdmVydGljYWwvaG9yaXpvbnRhbCBpY29ucywgaWNvbiBvcmRlciBjaGFuZ2luZyBhbmQgb3RoZXIgYmFzaWMgZnVuY3Rpb25hbGl0eS48L3A+XG4gKiA8cD5FeGFtcGxlIG9mIHVzaW5nIE1lbnU6PC9wPlxuICogPHByZT5cbiAqIDxjb2RlPjw8L2NvZGU+Y2YtcmF0aW5nIFtwcm9wZXJ0aWVzXT1cIm15UmF0aW5nXCIgW3N0eWxpbmddPVwibXlSYXRpbmdTdHlsZXNcIjxjb2RlPj48L2NvZGU+PGNvZGU+PDwvY29kZT48Y29kZT4vPC9jb2RlPmNmLXJhdGluZzxjb2RlPj48L2NvZGU+XG4gKiA8L3ByZT5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2YtcmF0aW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpYi9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saWIvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDZlJhdGluZ0NvbXBvbmVudCBleHRlbmRzIENmQ29yZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBJdCBpcyBhbiBSYXRpbmdNb2RlbCBvYmplY3Qgd2l0aCBvcHRpb25zIHRvIGJlIHJlbmRlcmVkIGludG8gY29tcG9uZW50IHRlbXBsYXRlXG4gICAqL1xuXHRjZlJhdGluZzogUmF0aW5nTW9kZWw7XG4gIC8qKlxuICAgKiBJdCBpcyBhbiBhcnJheSB0byBiZSBmaWxsZWQgd2l0aCBpdGVtcyBhY2NvcmRpbmcgdG8gTUFYIHByb3BlcnR5XG4gICAqL1xuXHRjZkl0ZW1zOiBudW1iZXJbXSA9IFtdOyBcblxuICBpY29uU3R5bGluZyA9IG5ldyBJY29uU3R5bGluZ01vZGVsKHtcbiAgICBpY29uOntcbiAgICAgIGNsYXNzOlwiXCIsXG4gICAgICBkeW5hbWljQ2xhc3M6XCJcIixcbiAgICAgIHRoZW1lQ29sb3I6XCJcIlxuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIEl0IGlzIGFuIGF0dHJpYnV0ZSA8Yj5bcHJvcGVydGllc108L2I+IG9mIGRpcmVjdGl2ZSA8Yj5jZi1yYXRpbmc8L2I+IHdoaWNoIHRha2UgUmF0aW5nTW9kZWwgb2JqZWN0LlxuICAgKiA8cD5FeGFtcGxlIG9mIFJhdGluZyBqc29uIG9iamVjdDo8L3A+XG4gICAqIDxwcmU+e1xuICAgKiAgbGFiZWw6ICdSYXRpbmcgbGFiZWwnLFxuICAgKiAgaWNvbjogJ3N0YXJzJyxcbiAgICogIHZhbHVlOiAxLFxuICAgKiAgbWF4OiA1LFxuICAgKiAgY291bnRGcm9tRW5kOiBmYWxzZSxcbiAgICogIGljb25zVmVydGljYWw6IGZhbHNlXG4gICAqICBkaXNhYmxlOiBmYWxzZVxuICAgKiB9PC9wcmU+XG4gICAqIDxoND5sYWJlbDogc3RyaW5nPC9oND5cbiAgICogTGFiZWwgZm9yIGNvbXBvbmVudFxuICAgKiA8aDQ+aWNvbjogc3RyaW5nPC9oND5cbiAgICogTmFtZSBvZiBpY29uXG4gICAqIDxoND52YWx1ZTogbnVtYmVyPC9oND5cbiAgICogVmFsdWUgb2YgcmF0aW5nIGFuZCBtZWFucyBudW1iZXIgb2YgZmlsbGVkL3NlbGVjdGVkIGljb25zXG4gICAqIDxoND5tYXg6IG51bWJlcjwvaDQ+XG4gICAqIE51bWJlciBvZiByYXRpbmcgaWNvbnNcbiAgICogPGg0PmNvdW50RnJvbUVuZDogYm9vbGVhbjwvaDQ+XG4gICAqIE1lYW5zIHRvIHN0YXJ0IGljb25zIGNvdW50aW5nIG9yZGVyXG4gICAqIDxoND5pY29uc1ZlcnRpY2FsOiBib29sZWFuPC9oND5cbiAgICogTWVhbnMgdG8gc2hvdyBpY29ucyB2ZXJ0aWNhbGx5XG4gICAqIDxoND5kaXNhYmxlOiBib29sZWFuPC9oND5cbiAgICogTWVhbnMgY29tcG9uZW50IHRvIGJlIGRpc2FibGVkXG4gICAqL1xuXHRASW5wdXQoKSBwcm9wZXJ0aWVzOiBSYXRpbmdNb2RlbDtcbiAgLyoqXG4gICAqIEl0IGlzIGFuIG9iamVjdCB3aXRoIHN0eWxpbmcgY29tcG9uZW50IGVsZW1lbnRzIFJhdGluZ1N0eWxpbmdNb2RlbCBvYmplY3RcbiAgICovXG5cdEBJbnB1dCgpIHN0eWxpbmc6IFJhdGluZ1N0eWxpbmdNb2RlbDtcbiAgLyoqQGhpZGRlblxuICAgKiBcbiAgICovXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLC8qKkBoaWRkZW4gKi8gdGVtcGxhdGVTZXJ2aWNlOlRlbXBsYXRlU2VydmljZSkgeyBzdXBlcihlbGVtZW50UmVmLCB0ZW1wbGF0ZVNlcnZpY2UpOyB9XG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGFsbCBkYXRhIFxuICAgKi9cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5nZXRNeVRlbXBsYXRlKFwicmF0aW5nXCIsUmF0aW5nVGVtcGxhdGVzKS50aGVuKCgpID0+IHtcbiAgICAgIGlmKHRoaXMuY29tcFRlbXBsYXRlIT1udWxsICYmIHRoaXMuY29tcFRlbXBsYXRlIT1cIlwiKVxuICAgICAge1xuICAgICAgICBpZihSYXRpbmdUZW1wbGF0ZXNbdGhpcy5jb21wVGVtcGxhdGVdIT1udWxsKVxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVUZW1wbGF0ZSA9IFJhdGluZ1RlbXBsYXRlc1t0aGlzLmNvbXBUZW1wbGF0ZV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgIHRoaXMuYWN0aXZlVGVtcGxhdGUgPSB0aGlzLmNvbXBUZW1wbGF0ZTtcbiAgICAgIH1cbiAgICAgIGlmKHRoaXMucHJvcGVydGllcz09bnVsbClcbiAgICAgIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gbmV3IFJhdGluZ01vZGVsKHRoaXMuYWN0aXZlVGVtcGxhdGVbXCJwcm9wZXJ0eVwiXSk7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIHZhciBtYWluS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuYWN0aXZlVGVtcGxhdGVbXCJwcm9wZXJ0eVwiXSk7XG4gICAgICAgIGZvcihsZXQga2V5IG9mIG1haW5LZXlzKVxuICAgICAgICB7XG4gICAgICAgICAgaWYodGhpcy5wcm9wZXJ0aWVzW2tleV09PW51bGwpXG4gICAgICAgICAgICB0aGlzLnByb3BlcnRpZXNba2V5XT10aGlzLmFjdGl2ZVRlbXBsYXRlW1wicHJvcGVydHlcIl1ba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5jZlJhdGluZyA9IHRoaXMucHJvcGVydGllcztcbiAgICAgIGlmKHRoaXMuc3R5bGluZz09bnVsbCkgXG4gICAgICB7XG4gICAgICAgIHRoaXMuc3R5bGluZyA9IG5ldyBSYXRpbmdTdHlsaW5nTW9kZWwodGhpcy5hY3RpdmVUZW1wbGF0ZVtcInN0eWxlXCJdKTtcbiAgICAgICAgdGhpcy5zdHlsaW5nLmljb24gPSB0aGlzLmljb25TdHlsaW5nO1xuICAgICAgfVxuICAgICAgZWxzZSBpZih0aGlzLnN0eWxpbmcuaWNvbj09bnVsbClcbiAgICAgIHtcbiAgICAgICAgdGhpcy5zdHlsaW5nLmljb24gPSB0aGlzLmljb25TdHlsaW5nO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2ZSYXRpbmcubWF4OyArK2kpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnYWRkaW5nIGFuIGl0ZW0nKTtcbiAgICAgICAgdGhpcy5jZkl0ZW1zLnB1c2goaSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLy8gbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KSB7XG4gIC8vIFx0Y29uc29sZS5sb2coJ2NoYW5nZXMnLCBjaGFuZ2VzKTtcbiAgLy8gfVxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gc2V0IGNvbXBvbmVudCB2YWx1ZVxuICAgKiBAcGFyYW0gaW5kZXggIGl0IGlzIHVzZWQgdG8gY2FsY3VsYXRlIGNvbXBvbmVudCB2YWx1ZVxuICAgKi9cbiAgcHJpdmF0ZSBzZXRSYXRpbmcoaW5kZXgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0cnluYSBzZXQgdGhhdCByYXRpbmchISEnKTtcbiAgXHRpZighdGhpcy5jZlJhdGluZy5kaXNhYmxlKSB0aGlzLmNmUmF0aW5nLnZhbHVlID0gaW5kZXggKyAxO1xuICB9XG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0byB1bnNlbGVjdCBjdXJyZW50IGl0ZW0gYnkgdXNlciBkb3VibGUtY2xpY2sgYW5kIGNoYW5nZSBjb21wb25lbnQgdmFsdWVcbiAgICogQHBhcmFtIGluZGV4ICBpdCBpcyB1c2VkIHRvIGNhbGN1bGF0ZSBjb21wb25lbnQgdmFsdWVcbiAgICovXG4gIHByaXZhdGUgcmVzZXRDdXJyZW50SXRlbShpbmRleCkge1xuICBcdGlmKCF0aGlzLmNmUmF0aW5nLmRpc2FibGUpIHRoaXMuY2ZSYXRpbmcudmFsdWUgPSBpbmRleDtcbiAgfVxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gc2V0IGZpbGxlZCBjb2xvciBmb3IgaWNvbnNcbiAgICovXG4gIHByaXZhdGUgZ2V0SGlnaGxpdGVkQ29sb3IoKSB7XG4gIFx0cmV0dXJuICF0aGlzLmNmUmF0aW5nLmRpc2FibGUgPyB0aGlzLnN0eWxpbmcuZmlsbGVkQ29sb3IgOiAncmdiYSgwLDAsMCwwLjUpJztcbiAgfVxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gc2V0IGVtcHR5IGNvbG9yIGZvciBpY29uc1xuICAgKi9cbiAgcHJpdmF0ZSBnZXRFbXB0eUNvbG9yKCkge1xuICBcdHJldHVybiAhdGhpcy5jZlJhdGluZy5kaXNhYmxlID8gdGhpcy5zdHlsaW5nLmVtcHR5Q29sb3IgOiAncmdiYSgwLDAsMCwwLjIpJztcbiAgfVxufSJdfQ==