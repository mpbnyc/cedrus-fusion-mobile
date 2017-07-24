"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styling_model_1 = require("../style/styling.model");
var core_styling_model_1 = require("../core/core-styling.model");
var SwitchStylingModel = (function (_super) {
    __extends(SwitchStylingModel, _super);
    /**@hidden */
    function SwitchStylingModel(values) {
        if (values === void 0) { values = {}; }
        var _this = _super.call(this, values) || this;
        Object.assign(_this, values);
        if (_this.switch == null)
            _this.switch = new styling_model_1.StylingModel();
        return _this;
    }
    return SwitchStylingModel;
}(core_styling_model_1.CoreStylingModel));
exports.SwitchStylingModel = SwitchStylingModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLXN0eWxpbmcubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzd2l0Y2gtc3R5bGluZy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdEQUFzRDtBQUN0RCxpRUFBOEQ7QUFFOUQ7SUFBd0Msc0NBQWdCO0lBSW5ELGFBQWE7SUFDakIsNEJBQVksTUFBbUI7UUFBbkIsdUJBQUEsRUFBQSxXQUFtQjtRQUEvQixZQUNPLGtCQUFNLE1BQU0sQ0FBQyxTQUtuQjtRQUpBLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXRCLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxNQUFNLElBQUUsSUFBSSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSw0QkFBWSxFQUFFLENBQUM7O0lBQzVDLENBQUM7SUFDRix5QkFBQztBQUFELENBQUMsQUFaRCxDQUF3QyxxQ0FBZ0IsR0FZdkQ7QUFaWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHlsaW5nTW9kZWwgfSBmcm9tICcuLi9zdHlsZS9zdHlsaW5nLm1vZGVsJztcbmltcG9ydCB7IENvcmVTdHlsaW5nTW9kZWwgfSBmcm9tICcuLi9jb3JlL2NvcmUtc3R5bGluZy5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBTd2l0Y2hTdHlsaW5nTW9kZWwgZXh0ZW5kcyBDb3JlU3R5bGluZ01vZGVsIHtcbiAgICBcbiAgICBzd2l0Y2g6IFN0eWxpbmdNb2RlbDtcblxuICAgICAvKipAaGlkZGVuICovXG5cdGNvbnN0cnVjdG9yKHZhbHVlczogT2JqZWN0ID0ge30pIHtcbiAgICAgICAgc3VwZXIodmFsdWVzKTtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHZhbHVlcyk7XG5cbiAgICAgICAgaWYodGhpcy5zd2l0Y2g9PW51bGwpXG4gICAgICAgICAgICB0aGlzLnN3aXRjaCA9IG5ldyBTdHlsaW5nTW9kZWwoKTtcblx0fVxufSJdfQ==