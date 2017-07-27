"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var button_model_1 = require("../button/button.model");
var TabsCardModel = (function () {
    /**
     * It is the constructor for the TabsCardModel component. It takes the values to create the TabsCardModel object.
     */
    function TabsCardModel(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
        if (this.header == null)
            this.header = new button_model_1.ButtonModel({ label: "Step", iconPosition: "left" });
        if (this.header.iconPosition == null)
            this.header.iconPosition = "left";
    }
    return TabsCardModel;
}());
exports.TabsCardModel = TabsCardModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy1jYXJkLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFicy1jYXJkLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdURBQXFEO0FBRXJEO0lBS0M7O09BRUc7SUFDSCx1QkFBWSxNQUFtQjtRQUFuQix1QkFBQSxFQUFBLFdBQW1CO1FBQzlCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTNCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUUsSUFBSSxDQUFDO1lBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLDBCQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzVGLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxJQUFFLElBQUksQ0FBQztZQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztJQUN4RSxDQUFDO0lBQ0Ysb0JBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQWRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uTW9kZWwgfSBmcm9tICcuLi9idXR0b24vYnV0dG9uLm1vZGVsJztcblxuZXhwb3J0IGNsYXNzIFRhYnNDYXJkTW9kZWwge1xuXHQvKipcblx0ICogVGhlIEJ1dHRvbk1vZGVsIG9iamVjdCBmb3Igd2l6YXJkIHN0ZXAgaGVhZGVyIGJ1dHRvblxuXHQgKi9cblx0aGVhZGVyOiBCdXR0b25Nb2RlbDtcblx0LyoqXG5cdCAqIEl0IGlzIHRoZSBjb25zdHJ1Y3RvciBmb3IgdGhlIFRhYnNDYXJkTW9kZWwgY29tcG9uZW50LiBJdCB0YWtlcyB0aGUgdmFsdWVzIHRvIGNyZWF0ZSB0aGUgVGFic0NhcmRNb2RlbCBvYmplY3QuXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZXM6IE9iamVjdCA9IHt9KSB7XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCB2YWx1ZXMpO1xuICAgIFxuICBcdGlmKHRoaXMuaGVhZGVyPT1udWxsKSB0aGlzLmhlYWRlciA9IG5ldyBCdXR0b25Nb2RlbCh7IGxhYmVsOiBcIlN0ZXBcIiwgaWNvblBvc2l0aW9uOiBcImxlZnRcIiB9KTtcbiAgICBpZih0aGlzLmhlYWRlci5pY29uUG9zaXRpb249PW51bGwpIHRoaXMuaGVhZGVyLmljb25Qb3NpdGlvbiA9IFwibGVmdFwiO1xuXHR9XG59Il19