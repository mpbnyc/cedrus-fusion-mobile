"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styling_model_1 = require("../style/styling.model");
var core_styling_model_1 = require("../core/core-styling.model");
var IconStylingModel = (function (_super) {
    __extends(IconStylingModel, _super);
    /**@hidden */
    function IconStylingModel(values) {
        if (values === void 0) { values = {}; }
        var _this = _super.call(this, values) || this;
        Object.assign(_this, values);
        if (_this.icon == null)
            _this.icon = new styling_model_1.StylingModel();
        if (_this.toggleIcon == null)
            _this.toggleIcon = {
                container: new styling_model_1.StylingModel(),
                icon: new styling_model_1.StylingModel()
            };
        return _this;
    }
    return IconStylingModel;
}(core_styling_model_1.CoreStylingModel));
exports.IconStylingModel = IconStylingModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1zdHlsaW5nLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaWNvbi1zdHlsaW5nLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0RBQXNEO0FBQ3RELGlFQUE4RDtBQUU5RDtJQUFzQyxvQ0FBZ0I7SUFTbEQsYUFBYTtJQUNoQiwwQkFBWSxNQUFtQjtRQUFuQix1QkFBQSxFQUFBLFdBQW1CO1FBQS9CLFlBQ08sa0JBQU0sTUFBTSxDQUFDLFNBU25CO1FBUkEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdEIsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLElBQUksSUFBRSxJQUFJLENBQUM7WUFDZixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksNEJBQVksRUFBRSxDQUFDO1FBQ25DLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxVQUFVLElBQUUsSUFBSSxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxVQUFVLEdBQUc7Z0JBQ2QsU0FBUyxFQUFFLElBQUksNEJBQVksRUFBRTtnQkFDN0IsSUFBSSxFQUFFLElBQUksNEJBQVksRUFBRTthQUMzQixDQUFBOztJQUNaLENBQUM7SUFDRix1QkFBQztBQUFELENBQUMsQUFyQkQsQ0FBc0MscUNBQWdCLEdBcUJyRDtBQXJCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHlsaW5nTW9kZWwgfSBmcm9tICcuLi9zdHlsZS9zdHlsaW5nLm1vZGVsJztcbmltcG9ydCB7IENvcmVTdHlsaW5nTW9kZWwgfSBmcm9tICcuLi9jb3JlL2NvcmUtc3R5bGluZy5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBJY29uU3R5bGluZ01vZGVsIGV4dGVuZHMgQ29yZVN0eWxpbmdNb2RlbCB7XG4gICAgXG4gICAgaWNvbjogU3R5bGluZ01vZGVsO1xuXG4gICAgdG9nZ2xlSWNvbjoge1xuICAgICAgICBjb250YWluZXI6U3R5bGluZ01vZGVsO1xuICAgICAgICBpY29uOiBTdHlsaW5nTW9kZWw7XG4gICAgfVxuXG4gICAgLyoqQGhpZGRlbiAqL1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZXM6IE9iamVjdCA9IHt9KSB7XG4gICAgICAgIHN1cGVyKHZhbHVlcyk7XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCB2YWx1ZXMpO1xuICAgICAgICBpZih0aGlzLmljb249PW51bGwpXG4gICAgICAgICAgICB0aGlzLmljb24gPSBuZXcgU3R5bGluZ01vZGVsKCk7XG4gICAgICAgIGlmKHRoaXMudG9nZ2xlSWNvbj09bnVsbClcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlSWNvbiA9IHtcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IG5ldyBTdHlsaW5nTW9kZWwoKSxcbiAgICAgICAgICAgICAgICBpY29uOiBuZXcgU3R5bGluZ01vZGVsKClcbiAgICAgICAgICAgIH1cblx0fVxufSJdfQ==