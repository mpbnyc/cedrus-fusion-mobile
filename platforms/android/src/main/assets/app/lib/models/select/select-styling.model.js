"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styling_model_1 = require("../style/styling.model");
var core_styling_model_1 = require("../core/core-styling.model");
var SelectStylingModel = (function (_super) {
    __extends(SelectStylingModel, _super);
    /**@hidden */
    function SelectStylingModel(values) {
        if (values === void 0) { values = {}; }
        var _this = _super.call(this, values) || this;
        Object.assign(_this, values);
        if (_this.select == null)
            _this.select = new styling_model_1.StylingModel();
        if (_this.filter == null)
            _this.filter = new styling_model_1.StylingModel();
        if (_this.options == null)
            _this.options = new styling_model_1.StylingModel();
        return _this;
    }
    return SelectStylingModel;
}(core_styling_model_1.CoreStylingModel));
exports.SelectStylingModel = SelectStylingModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXN0eWxpbmcubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWxlY3Qtc3R5bGluZy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdEQUFzRDtBQUN0RCxpRUFBOEQ7QUFFOUQ7SUFBd0Msc0NBQWdCO0lBUXZELGFBQWE7SUFDYiw0QkFBWSxNQUFtQjtRQUFuQix1QkFBQSxFQUFBLFdBQW1CO1FBQS9CLFlBQ08sa0JBQU0sTUFBTSxDQUFDLFNBU25CO1FBUkEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFNUIsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLE1BQU0sSUFBRSxJQUFJLENBQUM7WUFDcEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLDRCQUFZLEVBQUUsQ0FBQztRQUNsQyxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsTUFBTSxJQUFFLElBQUksQ0FBQztZQUNwQixLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksNEJBQVksRUFBRSxDQUFDO1FBQ2xDLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxPQUFPLElBQUUsSUFBSSxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSw0QkFBWSxFQUFFLENBQUM7O0lBQ3BDLENBQUM7SUFDRix5QkFBQztBQUFELENBQUMsQUFwQkQsQ0FBd0MscUNBQWdCLEdBb0J2RDtBQXBCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHlsaW5nTW9kZWwgfSBmcm9tICcuLi9zdHlsZS9zdHlsaW5nLm1vZGVsJztcbmltcG9ydCB7IENvcmVTdHlsaW5nTW9kZWwgfSBmcm9tICcuLi9jb3JlL2NvcmUtc3R5bGluZy5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RTdHlsaW5nTW9kZWwgZXh0ZW5kcyBDb3JlU3R5bGluZ01vZGVsIHtcblxuXHRzZWxlY3Q6IFN0eWxpbmdNb2RlbDtcblxuXHRmaWx0ZXI6IFN0eWxpbmdNb2RlbDtcblxuXHRvcHRpb25zOiBTdHlsaW5nTW9kZWw7XG5cblx0LyoqQGhpZGRlbiAqL1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZXM6IE9iamVjdCA9IHt9KSB7XG4gICAgICAgIHN1cGVyKHZhbHVlcyk7XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCB2YWx1ZXMpO1xuXG5cdFx0aWYodGhpcy5zZWxlY3Q9PW51bGwpXG5cdFx0XHR0aGlzLnNlbGVjdCA9IG5ldyBTdHlsaW5nTW9kZWwoKTtcblx0XHRpZih0aGlzLmZpbHRlcj09bnVsbClcblx0XHRcdHRoaXMuZmlsdGVyID0gbmV3IFN0eWxpbmdNb2RlbCgpO1xuXHRcdGlmKHRoaXMub3B0aW9ucz09bnVsbClcblx0XHRcdHRoaXMub3B0aW9ucyA9IG5ldyBTdHlsaW5nTW9kZWwoKTtcblx0fVxufSJdfQ==