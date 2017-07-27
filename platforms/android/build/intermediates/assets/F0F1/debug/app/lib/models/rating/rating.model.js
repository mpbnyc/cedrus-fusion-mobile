"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_model_1 = require("../core/core.model");
var RatingModel = (function (_super) {
    __extends(RatingModel, _super);
    /**
     * It is constructor, which take values from Rating Component and create Rating Model object.
     */
    function RatingModel(values) {
        if (values === void 0) { values = {}; }
        var _this = _super.call(this, values) || this;
        Object.assign(_this, values);
        if (_this.icon == null)
            _this.icon = "star";
        if (_this.value == null)
            _this.value = 0;
        if (_this.max == null)
            _this.max = 5;
        if (_this.countFromEnd == null)
            _this.countFromEnd = false;
        if (_this.iconsVertical == null)
            _this.iconsVertical = false;
        if (_this.disable == null)
            _this.disable = false;
        return _this;
    }
    return RatingModel;
}(core_model_1.CoreModel));
exports.RatingModel = RatingModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmF0aW5nLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQStDO0FBRS9DO0lBQWlDLCtCQUFTO0lBeUJ6Qzs7T0FFRztJQUNILHFCQUFZLE1BQW1CO1FBQW5CLHVCQUFBLEVBQUEsV0FBbUI7UUFBL0IsWUFDQyxrQkFBTSxNQUFNLENBQUMsU0FTYjtRQVJBLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTVCLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxJQUFJLElBQUUsSUFBSSxDQUFDO1lBQUMsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDdkMsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLEtBQUssSUFBRSxJQUFJLENBQUM7WUFBQyxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNwQyxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsR0FBRyxJQUFFLElBQUksQ0FBQztZQUFDLEtBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxZQUFZLElBQUUsSUFBSSxDQUFDO1lBQUMsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDdEQsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLGFBQWEsSUFBRSxJQUFJLENBQUM7WUFBQyxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUN4RCxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsT0FBTyxJQUFFLElBQUksQ0FBQztZQUFDLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDOztJQUM3QyxDQUFDO0lBQ0Ysa0JBQUM7QUFBRCxDQUFDLEFBdkNELENBQWlDLHNCQUFTLEdBdUN6QztBQXZDWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmVNb2RlbCB9IGZyb20gJy4uL2NvcmUvY29yZS5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBSYXRpbmdNb2RlbCBleHRlbmRzIENvcmVNb2RlbCB7XG5cdC8qKlxuXHQgKiBMYWJlbCBmb3IgY29tcG9uZW50XG5cdCAqL1xuXHRsYWJlbDogc3RyaW5nO1xuXHQvKipcblx0ICogTmFtZSBvZiBpY29uXG5cdCAqL1x0XG5cdGljb246IHN0cmluZztcblx0LyoqXG5cdCAqIFZhbHVlIG9mIHJhdGluZyBhbmQgbWVhbnMgbnVtYmVyIG9mIGZpbGxlZC9zZWxlY3RlZCBpY29uc1xuXHQgKi9cblx0dmFsdWU6IG51bWJlcjtcblx0LyoqXG5cdCAqIE51bWJlciBvZiByYXRpbmcgaWNvbnNcblx0ICovXG5cdG1heDogbnVtYmVyO1xuXHQvKipcblx0ICogTWVhbnMgdG8gc3RhcnQgaWNvbnMgY291bnRpbmcgb3JkZXJcblx0ICovXG5cdGNvdW50RnJvbUVuZDogYm9vbGVhbjtcblx0LyoqXG5cdCAqIE1lYW5zIHRvIHNob3cgaWNvbnMgdmVydGljYWxseVxuXHQgKi9cblx0aWNvbnNWZXJ0aWNhbDogYm9vbGVhbjtcblx0LyoqXG5cdCAqIEl0IGlzIGNvbnN0cnVjdG9yLCB3aGljaCB0YWtlIHZhbHVlcyBmcm9tIFJhdGluZyBDb21wb25lbnQgYW5kIGNyZWF0ZSBSYXRpbmcgTW9kZWwgb2JqZWN0LlxuXHQgKi9cblx0Y29uc3RydWN0b3IodmFsdWVzOiBPYmplY3QgPSB7fSkge1xuXHRcdHN1cGVyKHZhbHVlcyk7XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCB2YWx1ZXMpO1xuXG5cdFx0aWYodGhpcy5pY29uPT1udWxsKSB0aGlzLmljb24gPSBcInN0YXJcIjtcblx0XHRpZih0aGlzLnZhbHVlPT1udWxsKSB0aGlzLnZhbHVlID0gMDtcblx0XHRpZih0aGlzLm1heD09bnVsbCkgdGhpcy5tYXggPSA1O1xuXHRcdGlmKHRoaXMuY291bnRGcm9tRW5kPT1udWxsKSB0aGlzLmNvdW50RnJvbUVuZCA9IGZhbHNlO1xuXHRcdGlmKHRoaXMuaWNvbnNWZXJ0aWNhbD09bnVsbCkgdGhpcy5pY29uc1ZlcnRpY2FsID0gZmFsc2U7XG5cdFx0aWYodGhpcy5kaXNhYmxlPT1udWxsKSB0aGlzLmRpc2FibGUgPSBmYWxzZTtcblx0fVxufSJdfQ==