"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styling_model_1 = require("../style/styling.model");
var core_styling_model_1 = require("../core/core-styling.model");
var CheckboxStylingModel = (function (_super) {
    __extends(CheckboxStylingModel, _super);
    /**@hidden */
    function CheckboxStylingModel(values) {
        if (values === void 0) { values = {}; }
        var _this = _super.call(this, values) || this;
        Object.assign(_this, values);
        if (_this.checkbox == null)
            _this.checkbox = new styling_model_1.StylingModel();
        return _this;
    }
    return CheckboxStylingModel;
}(core_styling_model_1.CoreStylingModel));
exports.CheckboxStylingModel = CheckboxStylingModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtc3R5bGluZy5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoZWNrYm94LXN0eWxpbmcubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3REFBc0Q7QUFDdEQsaUVBQThEO0FBRTlEO0lBQTBDLHdDQUFnQjtJQUlyRCxhQUFhO0lBQ2pCLDhCQUFZLE1BQW1CO1FBQW5CLHVCQUFBLEVBQUEsV0FBbUI7UUFBL0IsWUFDTyxrQkFBTSxNQUFNLENBQUMsU0FLbkI7UUFKQSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV0QixFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsUUFBUSxJQUFFLElBQUksQ0FBQztZQUNuQixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksNEJBQVksRUFBRSxDQUFDOztJQUM5QyxDQUFDO0lBQ0YsMkJBQUM7QUFBRCxDQUFDLEFBWkQsQ0FBMEMscUNBQWdCLEdBWXpEO0FBWlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3R5bGluZ01vZGVsIH0gZnJvbSAnLi4vc3R5bGUvc3R5bGluZy5tb2RlbCc7XG5pbXBvcnQgeyBDb3JlU3R5bGluZ01vZGVsIH0gZnJvbSAnLi4vY29yZS9jb3JlLXN0eWxpbmcubW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hTdHlsaW5nTW9kZWwgZXh0ZW5kcyBDb3JlU3R5bGluZ01vZGVsIHtcbiAgICBcbiAgICBjaGVja2JveDogU3R5bGluZ01vZGVsO1xuXG4gICAgIC8qKkBoaWRkZW4gKi9cblx0Y29uc3RydWN0b3IodmFsdWVzOiBPYmplY3QgPSB7fSkge1xuICAgICAgICBzdXBlcih2YWx1ZXMpO1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgdmFsdWVzKTtcblxuICAgICAgICBpZih0aGlzLmNoZWNrYm94PT1udWxsKVxuICAgICAgICAgICAgdGhpcy5jaGVja2JveCA9IG5ldyBTdHlsaW5nTW9kZWwoKTtcblx0fVxufSJdfQ==