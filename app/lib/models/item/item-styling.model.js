"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styling_model_1 = require("../style/styling.model");
var core_styling_model_1 = require("../core/core-styling.model");
var ItemStylingModel = (function (_super) {
    __extends(ItemStylingModel, _super);
    function ItemStylingModel(values) {
        if (values === void 0) { values = {}; }
        var _this = _super.call(this, values) || this;
        Object.assign(_this, values);
        if (_this.item == null)
            _this.item = new styling_model_1.StylingModel();
        if (_this.selectedItem == null)
            _this.selectedItem = new styling_model_1.StylingModel();
        return _this;
    }
    return ItemStylingModel;
}(core_styling_model_1.CoreStylingModel));
exports.ItemStylingModel = ItemStylingModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1zdHlsaW5nLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS1zdHlsaW5nLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0RBQXNEO0FBQ3RELGlFQUE4RDtBQUU5RDtJQUFzQyxvQ0FBZ0I7SUFLckQsMEJBQVksTUFBbUI7UUFBbkIsdUJBQUEsRUFBQSxXQUFtQjtRQUEvQixZQUNPLGtCQUFNLE1BQU0sQ0FBQyxTQU9uQjtRQU5BLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXRCLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxJQUFJLElBQUUsSUFBSSxDQUFDO1lBQ2YsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLDRCQUFZLEVBQUUsQ0FBQztRQUNuQyxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsWUFBWSxJQUFFLElBQUksQ0FBQztZQUN2QixLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksNEJBQVksRUFBRSxDQUFDOztJQUNsRCxDQUFDO0lBQ0YsdUJBQUM7QUFBRCxDQUFDLEFBZEQsQ0FBc0MscUNBQWdCLEdBY3JEO0FBZFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3R5bGluZ01vZGVsIH0gZnJvbSAnLi4vc3R5bGUvc3R5bGluZy5tb2RlbCc7XG5pbXBvcnQgeyBDb3JlU3R5bGluZ01vZGVsIH0gZnJvbSAnLi4vY29yZS9jb3JlLXN0eWxpbmcubW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgSXRlbVN0eWxpbmdNb2RlbCBleHRlbmRzIENvcmVTdHlsaW5nTW9kZWwge1xuICAgIGl0ZW06IFN0eWxpbmdNb2RlbDtcblxuICAgIHNlbGVjdGVkSXRlbTogU3R5bGluZ01vZGVsO1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlczogT2JqZWN0ID0ge30pIHtcbiAgICAgICAgc3VwZXIodmFsdWVzKTtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHZhbHVlcyk7XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLml0ZW09PW51bGwpXG4gICAgICAgICAgICB0aGlzLml0ZW0gPSBuZXcgU3R5bGluZ01vZGVsKCk7XG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRJdGVtPT1udWxsKVxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBuZXcgU3R5bGluZ01vZGVsKCk7XG5cdH1cbn0iXX0=