"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_model_1 = require("../core/core.model");
/**
 * <h4>Example of Image Model:</h4>
 * <pre>{
 *	label: 'Cedrus',
 *	labelPosition: 'bottom',
 *  url: 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAuRAAAAJDM2YmM1ZTE0LTNiNzUtNDA0Zi1iMmU5LTA4N2Q0OGE5NDAxZQ.png'
 * }</pre>
 */
var ImageModel = (function (_super) {
    __extends(ImageModel, _super);
    /** @hidden
     * It is the constructor for the ImageModel component. It takes the values to create the ImageModel object.
     */
    function ImageModel(values) {
        if (values === void 0) { values = {}; }
        var _this = _super.call(this, values) || this;
        /**
         * <p>Label on image</p>
         */
        _this.label = "";
        /**
         * <p>Label position</p>
         * <p>Options: 'bottom', 'left', 'right', 'top'</p>
         * <p>Default is <b>'bottom'</b></p>
         */
        _this.labelPosition = "bottom";
        /**
         * <p>Image url with default image</p>
         */
        _this.url = "https://selectree.calpoly.edu/images/0200/92/original/cedrus-deodara-leaves.jpg";
        Object.assign(_this, values);
        if (_this.labelPosition === '')
            _this.labelPosition = 'bottom';
        if (_this.url == '')
            _this.url = "https://selectree.calpoly.edu/images/0200/92/original/cedrus-deodara-leaves.jpg";
        return _this;
    }
    return ImageModel;
}(core_model_1.CoreModel));
exports.ImageModel = ImageModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWFnZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUErQztBQUUvQzs7Ozs7OztHQU9HO0FBQ0g7SUFBZ0MsOEJBQVM7SUFtQnhDOztPQUVHO0lBQ0gsb0JBQVksTUFBbUI7UUFBbkIsdUJBQUEsRUFBQSxXQUFtQjtRQUEvQixZQUNDLGtCQUFNLE1BQU0sQ0FBQyxTQUliO1FBekJEOztXQUVHO1FBQ0gsV0FBSyxHQUFZLEVBQUUsQ0FBQztRQUVwQjs7OztXQUlHO1FBQ0QsbUJBQWEsR0FBWSxRQUFRLENBQUM7UUFFbEM7O1dBRUM7UUFDSCxTQUFHLEdBQVUsaUZBQWlGLENBQUM7UUFPOUYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLGFBQWEsS0FBSyxFQUFFLENBQUM7WUFBQyxLQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztRQUM3RCxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsR0FBRyxJQUFFLEVBQUUsQ0FBQztZQUFDLEtBQUksQ0FBQyxHQUFHLEdBQUcsaUZBQWlGLENBQUM7O0lBQy9HLENBQUM7SUFDRixpQkFBQztBQUFELENBQUMsQUE1QkQsQ0FBZ0Msc0JBQVMsR0E0QnhDO0FBNUJZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZU1vZGVsIH0gZnJvbSAnLi4vY29yZS9jb3JlLm1vZGVsJztcblxuLyoqXG4gKiA8aDQ+RXhhbXBsZSBvZiBJbWFnZSBNb2RlbDo8L2g0PlxuICogPHByZT57XG4gKlx0bGFiZWw6ICdDZWRydXMnLFxuICpcdGxhYmVsUG9zaXRpb246ICdib3R0b20nLFxuICogIHVybDogJ2h0dHBzOi8vbWVkaWEubGljZG4uY29tL21wci9tcHIvc2hyaW5rXzIwMF8yMDAvQUFFQUFRQUFBQUFBQUF1UkFBQUFKRE0yWW1NMVpURTBMVE5pTnpVdE5EQTBaaTFpTW1VNUxUQTROMlEwT0dFNU5EQXhaUS5wbmcnXHRcbiAqIH08L3ByZT5cbiAqL1xuZXhwb3J0IGNsYXNzIEltYWdlTW9kZWwgZXh0ZW5kcyBDb3JlTW9kZWwge1xuXG5cdC8qKiBcblx0ICogPHA+TGFiZWwgb24gaW1hZ2U8L3A+XG5cdCAqL1xuXHRsYWJlbD86IHN0cmluZyA9IFwiXCI7XG5cblx0LyoqIFxuXHQgKiA8cD5MYWJlbCBwb3NpdGlvbjwvcD5cblx0ICogPHA+T3B0aW9uczogJ2JvdHRvbScsICdsZWZ0JywgJ3JpZ2h0JywgJ3RvcCc8L3A+XG5cdCAqIDxwPkRlZmF1bHQgaXMgPGI+J2JvdHRvbSc8L2I+PC9wPlxuXHQgKi9cbiAgXHRsYWJlbFBvc2l0aW9uPzogc3RyaW5nID0gXCJib3R0b21cIjtcblxuICBcdC8qKiBcblx0ICogPHA+SW1hZ2UgdXJsIHdpdGggZGVmYXVsdCBpbWFnZTwvcD5cblx0ICovXG5cdHVybD86IHN0cmluZz1cImh0dHBzOi8vc2VsZWN0cmVlLmNhbHBvbHkuZWR1L2ltYWdlcy8wMjAwLzkyL29yaWdpbmFsL2NlZHJ1cy1kZW9kYXJhLWxlYXZlcy5qcGdcIjtcblx0XG5cdC8qKiBAaGlkZGVuXG5cdCAqIEl0IGlzIHRoZSBjb25zdHJ1Y3RvciBmb3IgdGhlIEltYWdlTW9kZWwgY29tcG9uZW50LiBJdCB0YWtlcyB0aGUgdmFsdWVzIHRvIGNyZWF0ZSB0aGUgSW1hZ2VNb2RlbCBvYmplY3QuXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZXM6IE9iamVjdCA9IHt9KSB7XG5cdFx0c3VwZXIodmFsdWVzKTtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHZhbHVlcyk7XG5cdFx0aWYgKHRoaXMubGFiZWxQb3NpdGlvbiA9PT0gJycpIHRoaXMubGFiZWxQb3NpdGlvbiA9ICdib3R0b20nO1xuXHRcdGlmKHRoaXMudXJsPT0nJykgdGhpcy51cmwgPSBcImh0dHBzOi8vc2VsZWN0cmVlLmNhbHBvbHkuZWR1L2ltYWdlcy8wMjAwLzkyL29yaWdpbmFsL2NlZHJ1cy1kZW9kYXJhLWxlYXZlcy5qcGdcIjtcblx0fVxufSJdfQ==