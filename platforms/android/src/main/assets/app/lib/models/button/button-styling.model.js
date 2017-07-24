"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styling_model_1 = require("../style/styling.model");
var core_styling_model_1 = require("../core/core-styling.model");
var icon_styling_model_1 = require("../icon/icon-styling.model");
var ButtonStylingModel = (function (_super) {
    __extends(ButtonStylingModel, _super);
    /** @hidden*/
    function ButtonStylingModel(values) {
        if (values === void 0) { values = {}; }
        var _this = _super.call(this, values) || this;
        Object.assign(_this, values);
        if (_this.button == null) {
            _this.button = new styling_model_1.StylingModel();
            _this.button.themeColor = "crimson";
        }
        if (_this.iconStyling == null)
            _this.iconStyling = new icon_styling_model_1.IconStylingModel();
        if (_this.waitingIconStyling == null)
            _this.waitingIconStyling = new icon_styling_model_1.IconStylingModel();
        return _this;
    }
    return ButtonStylingModel;
}(core_styling_model_1.CoreStylingModel));
exports.ButtonStylingModel = ButtonStylingModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXN0eWxpbmcubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidXR0b24tc3R5bGluZy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdEQUFzRDtBQUN0RCxpRUFBOEQ7QUFDOUQsaUVBQThEO0FBRTlEO0lBQXdDLHNDQUFnQjtJQVFwRCxhQUFhO0lBQ2hCLDRCQUFZLE1BQW1CO1FBQW5CLHVCQUFBLEVBQUEsV0FBbUI7UUFBL0IsWUFDTyxrQkFBTSxNQUFNLENBQUMsU0FhbkI7UUFaQSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV0QixFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsTUFBTSxJQUFFLElBQUksQ0FBQyxDQUNyQixDQUFDO1lBQ0csS0FBSSxDQUFDLE1BQU0sR0FBRSxJQUFJLDRCQUFZLEVBQUUsQ0FBQztZQUNoQyxLQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBQyxTQUFTLENBQUM7UUFDckMsQ0FBQztRQUVELEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxXQUFXLElBQUUsSUFBSSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxxQ0FBZ0IsRUFBRSxDQUFDO1FBQzlDLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxrQkFBa0IsSUFBRSxJQUFJLENBQUM7WUFDN0IsS0FBSSxDQUFDLGtCQUFrQixHQUFHLElBQUkscUNBQWdCLEVBQUUsQ0FBQzs7SUFDNUQsQ0FBQztJQUNGLHlCQUFDO0FBQUQsQ0FBQyxBQXhCRCxDQUF3QyxxQ0FBZ0IsR0F3QnZEO0FBeEJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0eWxpbmdNb2RlbCB9IGZyb20gJy4uL3N0eWxlL3N0eWxpbmcubW9kZWwnO1xuaW1wb3J0IHsgQ29yZVN0eWxpbmdNb2RlbCB9IGZyb20gJy4uL2NvcmUvY29yZS1zdHlsaW5nLm1vZGVsJztcbmltcG9ydCB7IEljb25TdHlsaW5nTW9kZWwgfSBmcm9tICcuLi9pY29uL2ljb24tc3R5bGluZy5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBCdXR0b25TdHlsaW5nTW9kZWwgZXh0ZW5kcyBDb3JlU3R5bGluZ01vZGVsIHtcbiAgICBcbiAgICBpY29uU3R5bGluZzogSWNvblN0eWxpbmdNb2RlbDtcblxuICAgIHdhaXRpbmdJY29uU3R5bGluZzogSWNvblN0eWxpbmdNb2RlbDtcblxuICAgIGJ1dHRvbjpTdHlsaW5nTW9kZWw7XG5cbiAgICAvKiogQGhpZGRlbiovXG5cdGNvbnN0cnVjdG9yKHZhbHVlczogT2JqZWN0ID0ge30pIHtcbiAgICAgICAgc3VwZXIodmFsdWVzKTtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHZhbHVlcyk7XG5cbiAgICAgICAgaWYodGhpcy5idXR0b249PW51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uPSBuZXcgU3R5bGluZ01vZGVsKCk7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi50aGVtZUNvbG9yPVwiY3JpbXNvblwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5pY29uU3R5bGluZz09bnVsbClcbiAgICAgICAgICAgIHRoaXMuaWNvblN0eWxpbmcgPSBuZXcgSWNvblN0eWxpbmdNb2RlbCgpO1xuICAgICAgICBpZih0aGlzLndhaXRpbmdJY29uU3R5bGluZz09bnVsbClcbiAgICAgICAgICAgIHRoaXMud2FpdGluZ0ljb25TdHlsaW5nID0gbmV3IEljb25TdHlsaW5nTW9kZWwoKTtcblx0fVxufSJdfQ==