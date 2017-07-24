"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styling_model_1 = require("../style/styling.model");
var core_styling_model_1 = require("../core/core-styling.model");
var button_styling_model_1 = require("../button/button-styling.model");
var TabsCardStylingModel = (function (_super) {
    __extends(TabsCardStylingModel, _super);
    /**
     * It is the constructor for the TabsCardStylingModel. It takes the values to create the TabsCardStylingModel object.
     */
    function TabsCardStylingModel(values) {
        if (values === void 0) { values = {}; }
        var _this = _super.call(this, values) || this;
        Object.assign(_this, values);
        if (_this.header == null)
            _this.header = new button_styling_model_1.ButtonStylingModel();
        if (_this.iconIndex == null)
            _this.iconIndex = new styling_model_1.StylingModel();
        if (_this.prefixIndex == null)
            _this.prefixIndex = new styling_model_1.StylingModel();
        return _this;
    }
    return TabsCardStylingModel;
}(core_styling_model_1.CoreStylingModel));
exports.TabsCardStylingModel = TabsCardStylingModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy1jYXJkLXN0eWxpbmcubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLWNhcmQtc3R5bGluZy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdEQUFzRDtBQUN0RCxpRUFBOEQ7QUFDOUQsdUVBQW9FO0FBRXBFO0lBQTBDLHdDQUFnQjtJQWF6RDs7T0FFRztJQUNILDhCQUFZLE1BQW1CO1FBQW5CLHVCQUFBLEVBQUEsV0FBbUI7UUFBL0IsWUFDRyxrQkFBTSxNQUFNLENBQUMsU0FNZjtRQUxBLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTFCLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxNQUFNLElBQUUsSUFBSSxDQUFDO1lBQUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLHlDQUFrQixFQUFFLENBQUM7UUFDN0QsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLFNBQVMsSUFBRSxJQUFJLENBQUM7WUFBQyxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksNEJBQVksRUFBRSxDQUFDO1FBQzdELEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxXQUFXLElBQUUsSUFBSSxDQUFDO1lBQUMsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLDRCQUFZLEVBQUUsQ0FBQzs7SUFDcEUsQ0FBQztJQUNGLDJCQUFDO0FBQUQsQ0FBQyxBQXhCRCxDQUEwQyxxQ0FBZ0IsR0F3QnpEO0FBeEJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0eWxpbmdNb2RlbCB9IGZyb20gJy4uL3N0eWxlL3N0eWxpbmcubW9kZWwnO1xuaW1wb3J0IHsgQ29yZVN0eWxpbmdNb2RlbCB9IGZyb20gJy4uL2NvcmUvY29yZS1zdHlsaW5nLm1vZGVsJztcbmltcG9ydCB7IEJ1dHRvblN0eWxpbmdNb2RlbCB9IGZyb20gJy4uL2J1dHRvbi9idXR0b24tc3R5bGluZy5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBUYWJzQ2FyZFN0eWxpbmdNb2RlbCBleHRlbmRzIENvcmVTdHlsaW5nTW9kZWwge1xuXHQvKipcblx0ICogU3R5bGluZyBieSB0eXBlIEJ1dHRvblN0eWxpbmdNb2RlbFxuXHQgKi9cblx0aGVhZGVyOiBCdXR0b25TdHlsaW5nTW9kZWw7XG5cdC8qKlxuXHQgKiBTdHlsaW5nIGJ5IHR5cGUgU3R5bGluZ01vZGVsXG5cdCAqL1xuXHRpY29uSW5kZXg6IFN0eWxpbmdNb2RlbDtcblx0LyoqXG5cdCAqIFN0eWxpbmcgYnkgdHlwZSBTdHlsaW5nTW9kZWxcblx0ICovXG5cdHByZWZpeEluZGV4OiBTdHlsaW5nTW9kZWw7XG5cdC8qKlxuXHQgKiBJdCBpcyB0aGUgY29uc3RydWN0b3IgZm9yIHRoZSBUYWJzQ2FyZFN0eWxpbmdNb2RlbC4gSXQgdGFrZXMgdGhlIHZhbHVlcyB0byBjcmVhdGUgdGhlIFRhYnNDYXJkU3R5bGluZ01vZGVsIG9iamVjdC5cblx0ICovXG5cdGNvbnN0cnVjdG9yKHZhbHVlczogT2JqZWN0ID0ge30pIHtcbiAgICBzdXBlcih2YWx1ZXMpO1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgdmFsdWVzKTtcblxuICAgIGlmKHRoaXMuaGVhZGVyPT1udWxsKSB0aGlzLmhlYWRlciA9IG5ldyBCdXR0b25TdHlsaW5nTW9kZWwoKTtcbiAgICBpZih0aGlzLmljb25JbmRleD09bnVsbCkgdGhpcy5pY29uSW5kZXggPSBuZXcgU3R5bGluZ01vZGVsKCk7XG4gICAgaWYodGhpcy5wcmVmaXhJbmRleD09bnVsbCkgdGhpcy5wcmVmaXhJbmRleCA9IG5ldyBTdHlsaW5nTW9kZWwoKTtcblx0fVxufSJdfQ==