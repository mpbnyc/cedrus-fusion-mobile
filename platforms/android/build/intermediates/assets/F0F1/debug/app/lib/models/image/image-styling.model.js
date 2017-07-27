"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styling_model_1 = require("../style/styling.model");
var core_styling_model_1 = require("../core/core-styling.model");
var ImageStylingModel = (function (_super) {
    __extends(ImageStylingModel, _super);
    /** @hidden */
    function ImageStylingModel(values) {
        if (values === void 0) { values = {}; }
        var _this = _super.call(this, values) || this;
        Object.assign(_this, values);
        if (_this.label == null)
            _this.label = new styling_model_1.StylingModel();
        if (_this.image == null)
            _this.image = new styling_model_1.StylingModel();
        return _this;
    }
    return ImageStylingModel;
}(core_styling_model_1.CoreStylingModel));
exports.ImageStylingModel = ImageStylingModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utc3R5bGluZy5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlLXN0eWxpbmcubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3REFBc0Q7QUFDdEQsaUVBQThEO0FBRTlEO0lBQXVDLHFDQUFnQjtJQU1uRCxjQUFjO0lBQ2pCLDJCQUFZLE1BQW1CO1FBQW5CLHVCQUFBLEVBQUEsV0FBbUI7UUFBL0IsWUFDTyxrQkFBTSxNQUFNLENBQUMsU0FPbkI7UUFOQSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV0QixFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsS0FBSyxJQUFFLElBQUksQ0FBQztZQUNoQixLQUFJLENBQUMsS0FBSyxHQUFFLElBQUksNEJBQVksRUFBRSxDQUFDO1FBQ25DLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxLQUFLLElBQUUsSUFBSSxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxLQUFLLEdBQUUsSUFBSSw0QkFBWSxFQUFFLENBQUM7O0lBQzFDLENBQUM7SUFDRix3QkFBQztBQUFELENBQUMsQUFoQkQsQ0FBdUMscUNBQWdCLEdBZ0J0RDtBQWhCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHlsaW5nTW9kZWwgfSBmcm9tICcuLi9zdHlsZS9zdHlsaW5nLm1vZGVsJztcbmltcG9ydCB7IENvcmVTdHlsaW5nTW9kZWwgfSBmcm9tICcuLi9jb3JlL2NvcmUtc3R5bGluZy5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVN0eWxpbmdNb2RlbCBleHRlbmRzIENvcmVTdHlsaW5nTW9kZWwge1xuICAgIFxuICAgIGxhYmVsOiBTdHlsaW5nTW9kZWw7XG5cbiAgICBpbWFnZTogU3R5bGluZ01vZGVsO1xuXG4gICAgLyoqIEBoaWRkZW4gKi9cblx0Y29uc3RydWN0b3IodmFsdWVzOiBPYmplY3QgPSB7fSkge1xuICAgICAgICBzdXBlcih2YWx1ZXMpO1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgdmFsdWVzKTtcblxuICAgICAgICBpZih0aGlzLmxhYmVsPT1udWxsKVxuICAgICAgICAgICAgdGhpcy5sYWJlbD0gbmV3IFN0eWxpbmdNb2RlbCgpO1xuICAgICAgICBpZih0aGlzLmltYWdlPT1udWxsKVxuICAgICAgICAgICAgdGhpcy5pbWFnZT0gbmV3IFN0eWxpbmdNb2RlbCgpO1xuXHR9XG59Il19