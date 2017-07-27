"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styling_model_1 = require("../style/styling.model");
var CoreStylingModel = (function () {
    function CoreStylingModel(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
        if (this.container == null)
            this.container = new styling_model_1.StylingModel();
    }
    return CoreStylingModel;
}());
exports.CoreStylingModel = CoreStylingModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS1zdHlsaW5nLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29yZS1zdHlsaW5nLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0RBQXNEO0FBRXREO0lBR0MsMEJBQVksTUFBbUI7UUFBbkIsdUJBQUEsRUFBQSxXQUFtQjtRQUM5QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN0QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFFLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksNEJBQVksRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFDRix1QkFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3R5bGluZ01vZGVsIH0gZnJvbSAnLi4vc3R5bGUvc3R5bGluZy5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBDb3JlU3R5bGluZ01vZGVsIHsgICAgXG4gICAgY29udGFpbmVyOlN0eWxpbmdNb2RlbDtcblxuXHRjb25zdHJ1Y3Rvcih2YWx1ZXM6IE9iamVjdCA9IHt9KSB7XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCB2YWx1ZXMpO1xuICAgICAgICBpZih0aGlzLmNvbnRhaW5lcj09bnVsbClcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IFN0eWxpbmdNb2RlbCgpO1xuXHR9XG59Il19