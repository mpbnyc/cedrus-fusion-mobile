"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styling_model_1 = require("../style/styling.model");
var core_styling_model_1 = require("../core/core-styling.model");
var ListStylingModel = (function (_super) {
    __extends(ListStylingModel, _super);
    function ListStylingModel(values) {
        if (values === void 0) { values = {}; }
        var _this = _super.call(this, values) || this;
        Object.assign(_this, values);
        if (_this.title == null)
            _this.title = new styling_model_1.StylingModel();
        return _this;
    }
    return ListStylingModel;
}(core_styling_model_1.CoreStylingModel));
exports.ListStylingModel = ListStylingModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zdHlsaW5nLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdC1zdHlsaW5nLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0RBQXNEO0FBQ3RELGlFQUE4RDtBQUU5RDtJQUFzQyxvQ0FBZ0I7SUFJckQsMEJBQVksTUFBbUI7UUFBbkIsdUJBQUEsRUFBQSxXQUFtQjtRQUEvQixZQUNPLGtCQUFNLE1BQU0sQ0FBQyxTQUtuQjtRQUpBLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTVCLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxLQUFLLElBQUUsSUFBSSxDQUFDO1lBQ25CLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSw0QkFBWSxFQUFFLENBQUM7O0lBQ2xDLENBQUM7SUFDRix1QkFBQztBQUFELENBQUMsQUFYRCxDQUFzQyxxQ0FBZ0IsR0FXckQ7QUFYWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHlsaW5nTW9kZWwgfSBmcm9tICcuLi9zdHlsZS9zdHlsaW5nLm1vZGVsJztcbmltcG9ydCB7IENvcmVTdHlsaW5nTW9kZWwgfSBmcm9tICcuLi9jb3JlL2NvcmUtc3R5bGluZy5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBMaXN0U3R5bGluZ01vZGVsIGV4dGVuZHMgQ29yZVN0eWxpbmdNb2RlbCB7XG5cblx0dGl0bGU6IFN0eWxpbmdNb2RlbDtcblxuXHRjb25zdHJ1Y3Rvcih2YWx1ZXM6IE9iamVjdCA9IHt9KSB7XG4gICAgICAgIHN1cGVyKHZhbHVlcyk7XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCB2YWx1ZXMpO1xuXG5cdFx0aWYodGhpcy50aXRsZT09bnVsbClcblx0XHRcdHRoaXMudGl0bGUgPSBuZXcgU3R5bGluZ01vZGVsKCk7XG5cdH1cbn0iXX0=