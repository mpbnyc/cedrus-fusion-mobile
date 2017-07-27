"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styling_model_1 = require("../style/styling.model");
var core_styling_model_1 = require("../core/core-styling.model");
var SelectableStylingModel = (function (_super) {
    __extends(SelectableStylingModel, _super);
    /**@hidden */
    function SelectableStylingModel(values) {
        if (values === void 0) { values = {}; }
        var _this = _super.call(this, values) || this;
        Object.assign(_this, values);
        if (_this.selectable == null)
            _this.selectable = new styling_model_1.StylingModel();
        return _this;
    }
    return SelectableStylingModel;
}(core_styling_model_1.CoreStylingModel));
exports.SelectableStylingModel = SelectableStylingModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0YWJsZS1zdHlsaW5nLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VsZWN0YWJsZS1zdHlsaW5nLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0RBQXNEO0FBQ3RELGlFQUE4RDtBQUU5RDtJQUE0QywwQ0FBZ0I7SUFLeEQsYUFBYTtJQUNoQixnQ0FBWSxNQUFtQjtRQUFuQix1QkFBQSxFQUFBLFdBQW1CO1FBQS9CLFlBQ08sa0JBQU0sTUFBTSxDQUFDLFNBS25CO1FBSkEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFdEIsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLFVBQVUsSUFBRSxJQUFJLENBQUM7WUFDckIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLDRCQUFZLEVBQUUsQ0FBQzs7SUFDaEQsQ0FBQztJQUNGLDZCQUFDO0FBQUQsQ0FBQyxBQWJELENBQTRDLHFDQUFnQixHQWEzRDtBQWJZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0eWxpbmdNb2RlbCB9IGZyb20gJy4uL3N0eWxlL3N0eWxpbmcubW9kZWwnO1xuaW1wb3J0IHsgQ29yZVN0eWxpbmdNb2RlbCB9IGZyb20gJy4uL2NvcmUvY29yZS1zdHlsaW5nLm1vZGVsJztcblxuZXhwb3J0IGNsYXNzIFNlbGVjdGFibGVTdHlsaW5nTW9kZWwgZXh0ZW5kcyBDb3JlU3R5bGluZ01vZGVsIHtcbiAgICBcbiAgICAvKipAaGlkZGVuICovXG4gICAgc2VsZWN0YWJsZTogU3R5bGluZ01vZGVsO1xuXG4gICAgLyoqQGhpZGRlbiAqL1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZXM6IE9iamVjdCA9IHt9KSB7XG4gICAgICAgIHN1cGVyKHZhbHVlcyk7XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCB2YWx1ZXMpO1xuXG4gICAgICAgIGlmKHRoaXMuc2VsZWN0YWJsZT09bnVsbClcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0YWJsZSA9IG5ldyBTdHlsaW5nTW9kZWwoKTtcblx0fVxufSJdfQ==