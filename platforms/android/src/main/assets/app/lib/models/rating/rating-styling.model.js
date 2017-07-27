"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styling_model_1 = require("../style/styling.model");
var core_styling_model_1 = require("../core/core-styling.model");
var RatingStylingModel = (function (_super) {
    __extends(RatingStylingModel, _super);
    /**
     * Constructor for generating styling options to rating component
     */
    function RatingStylingModel(values) {
        if (values === void 0) { values = {}; }
        var _this = _super.call(this, values) || this;
        Object.assign(_this, values);
        if (_this.iconSize == null)
            _this.iconSize = '24px';
        if (_this.filledColor == null)
            _this.filledColor = 'gold';
        if (_this.emptyColor == null)
            _this.emptyColor = 'rgba(0,0,0,0.2)';
        if (_this.label == null)
            _this.label = new styling_model_1.StylingModel();
        if (_this.item == null)
            _this.item = new styling_model_1.StylingModel();
        return _this;
    }
    return RatingStylingModel;
}(core_styling_model_1.CoreStylingModel));
exports.RatingStylingModel = RatingStylingModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLXN0eWxpbmcubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyYXRpbmctc3R5bGluZy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdEQUFzRDtBQUV0RCxpRUFBOEQ7QUFFOUQ7SUFBd0Msc0NBQWdCO0lBeUJ2RDs7T0FFRztJQUNILDRCQUFZLE1BQW1CO1FBQW5CLHVCQUFBLEVBQUEsV0FBbUI7UUFBL0IsWUFDRyxrQkFBTSxNQUFNLENBQUMsU0FRZjtRQVBBLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTFCLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxRQUFRLElBQUUsSUFBSSxDQUFDO1lBQUMsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDL0MsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLFdBQVcsSUFBRSxJQUFJLENBQUM7WUFBQyxLQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUNyRCxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsVUFBVSxJQUFFLElBQUksQ0FBQztZQUFDLEtBQUksQ0FBQyxVQUFVLEdBQUcsaUJBQWlCLENBQUM7UUFDOUQsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLEtBQUssSUFBRSxJQUFJLENBQUM7WUFBQyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksNEJBQVksRUFBRSxDQUFDO1FBQ3JELEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxJQUFJLElBQUUsSUFBSSxDQUFDO1lBQUMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLDRCQUFZLEVBQUUsQ0FBQzs7SUFDdEQsQ0FBQztJQUNGLHlCQUFDO0FBQUQsQ0FBQyxBQXRDRCxDQUF3QyxxQ0FBZ0IsR0FzQ3ZEO0FBdENZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0eWxpbmdNb2RlbCB9IGZyb20gJy4uL3N0eWxlL3N0eWxpbmcubW9kZWwnO1xuaW1wb3J0IHsgSWNvblN0eWxpbmdNb2RlbCB9IGZyb20gJy4uL2ljb24vaWNvbi1zdHlsaW5nLm1vZGVsJztcbmltcG9ydCB7IENvcmVTdHlsaW5nTW9kZWwgfSBmcm9tICcuLi9jb3JlL2NvcmUtc3R5bGluZy5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBSYXRpbmdTdHlsaW5nTW9kZWwgZXh0ZW5kcyBDb3JlU3R5bGluZ01vZGVsIHtcblx0LyoqXG5cdCAqIFN0eWxpbmdNb2RlbCBvcHRpb25zIGZvciBjb21wb25lbnQgbGFiZWxcblx0ICovXG5cdGxhYmVsOiBTdHlsaW5nTW9kZWw7XG5cdC8qKlxuXHQgKiBTdHlsaW5nTW9kZWwgb3B0aW9ucyBmb3IgY29tcG9uZW50IGl0ZW1zXG5cdCAqL1xuXHRpdGVtOiBTdHlsaW5nTW9kZWw7XG5cdC8qKlxuXHQgKiBTdHlsaW5nTW9kZWwgb3B0aW9ucyBmb3IgY29tcG9uZW50IGljb25cblx0ICovXG5cdGljb246IEljb25TdHlsaW5nTW9kZWw7XG5cdC8qKlxuXHQgKiBNZWFucyBzaXplIG9mIGNvbXBvbmVudCBpdGVtc1xuXHQgKi9cblx0aWNvblNpemU6IHN0cmluZztcblx0LyoqXG5cdCAqIENzcyBjb2xvciBuYW1lIGZvciBzZWxlY3RlZCBpY29uc1xuXHQgKi9cblx0ZmlsbGVkQ29sb3I6IHN0cmluZztcblx0LyoqXG5cdCAqIENzcyBjb2xvciBuYW1lIGZvciBub3Qgc2VsZWN0ZWQgaWNvbnNcblx0ICovXG5cdGVtcHR5Q29sb3I6IHN0cmluZztcblx0LyoqXG5cdCAqIENvbnN0cnVjdG9yIGZvciBnZW5lcmF0aW5nIHN0eWxpbmcgb3B0aW9ucyB0byByYXRpbmcgY29tcG9uZW50XG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZXM6IE9iamVjdCA9IHt9KSB7XG4gICAgc3VwZXIodmFsdWVzKTtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHZhbHVlcyk7XG5cbiAgICBpZih0aGlzLmljb25TaXplPT1udWxsKSB0aGlzLmljb25TaXplID0gJzI0cHgnO1xuICAgIGlmKHRoaXMuZmlsbGVkQ29sb3I9PW51bGwpIHRoaXMuZmlsbGVkQ29sb3IgPSAnZ29sZCc7XG4gICAgaWYodGhpcy5lbXB0eUNvbG9yPT1udWxsKSB0aGlzLmVtcHR5Q29sb3IgPSAncmdiYSgwLDAsMCwwLjIpJztcbiAgICBpZih0aGlzLmxhYmVsPT1udWxsKSB0aGlzLmxhYmVsID0gbmV3IFN0eWxpbmdNb2RlbCgpO1xuICAgIGlmKHRoaXMuaXRlbT09bnVsbCkgdGhpcy5pdGVtID0gbmV3IFN0eWxpbmdNb2RlbCgpO1xuXHR9XG59Il19