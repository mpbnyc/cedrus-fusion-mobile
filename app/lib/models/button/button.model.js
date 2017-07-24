"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_model_1 = require("../core/core.model");
var icon_model_1 = require("../icon/icon.model");
/**
 * <h4>Example of Button Model:</h4>
 * <pre>{
 *	label: 'Buy',
 *	iconProperty: {
 *		name: 'fa-money'
 *  }
 *  iconPosition: 'right'
 * }</pre>
 */
var ButtonModel = (function (_super) {
    __extends(ButtonModel, _super);
    /**@hidden
     * It is the constructor for the button component. It takes the required string values to create the button object
     */
    function ButtonModel(values) {
        if (values === void 0) { values = {}; }
        var _this = _super.call(this, values) || this;
        /**
         * <p>Label on the button</p>
         * <p>Default is <b>BTN</b></p>
         */
        _this.label = 'BTN';
        /**
         * <p>Position of the icon (Left of Right)</p>
         * <p>Default is <b>'left'</b></p>
         */
        _this.iconPosition = "left";
        Object.assign(_this, values);
        if (_this.iconProperty != null)
            _this.iconProperty = new icon_model_1.IconModel(_this.iconProperty);
        if (_this.iconPosition == null)
            _this.iconPosition = "left";
        return _this;
    }
    return ButtonModel;
}(core_model_1.CoreModel));
exports.ButtonModel = ButtonModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnV0dG9uLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQStDO0FBQy9DLGlEQUErQztBQUUvQzs7Ozs7Ozs7O0dBU0c7QUFFSDtJQUFpQywrQkFBUztJQXVDekM7O09BRUc7SUFDSCxxQkFBWSxNQUFtQjtRQUFuQix1QkFBQSxFQUFBLFdBQW1CO1FBQS9CLFlBQ0Msa0JBQU0sTUFBTSxDQUFDLFNBS2I7UUE5Q0Q7OztXQUdHO1FBQ0gsV0FBSyxHQUFVLEtBQUssQ0FBQztRQVFyQjs7O1dBR0c7UUFDSCxrQkFBWSxHQUFVLE1BQU0sQ0FBQztRQTBCNUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUIsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLFlBQVksSUFBRSxJQUFJLENBQUM7WUFBQyxLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksc0JBQVMsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakYsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLFlBQVksSUFBRSxJQUFJLENBQUM7WUFDMUIsS0FBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7O0lBQzdCLENBQUM7SUFDRixrQkFBQztBQUFELENBQUMsQUFqREQsQ0FBaUMsc0JBQVMsR0FpRHpDO0FBakRZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZU1vZGVsIH0gZnJvbSAnLi4vY29yZS9jb3JlLm1vZGVsJztcbmltcG9ydCB7IEljb25Nb2RlbCB9IGZyb20gJy4uL2ljb24vaWNvbi5tb2RlbCc7XG5cbi8qKlxuICogPGg0PkV4YW1wbGUgb2YgQnV0dG9uIE1vZGVsOjwvaDQ+XG4gKiA8cHJlPntcbiAqXHRsYWJlbDogJ0J1eScsXG4gKlx0aWNvblByb3BlcnR5OiB7XG4gKlx0XHRuYW1lOiAnZmEtbW9uZXknXG4gKiAgfVxuICogIGljb25Qb3NpdGlvbjogJ3JpZ2h0J1x0XG4gKiB9PC9wcmU+XG4gKi9cblxuZXhwb3J0IGNsYXNzIEJ1dHRvbk1vZGVsIGV4dGVuZHMgQ29yZU1vZGVsIHtcblx0XG5cdC8qKlxuXHQgKiA8cD5MYWJlbCBvbiB0aGUgYnV0dG9uPC9wPlxuXHQgKiA8cD5EZWZhdWx0IGlzIDxiPkJUTjwvYj48L3A+XG5cdCAqL1xuXHRsYWJlbD86IHN0cmluZz0nQlROJztcblxuXHQvKipcblx0ICogPHA+IEljb24gb2JqZWN0IG9uIHRoZSBidXR0b248L3A+XG5cdCAqIDxwPiBSZWZlciB0byBJY29uIENvbXBvbmVudDwvcD5cblx0ICovXG5cdGljb25Qcm9wZXJ0eT86IEljb25Nb2RlbDtcblxuXHQvKipcblx0ICogPHA+UG9zaXRpb24gb2YgdGhlIGljb24gKExlZnQgb2YgUmlnaHQpPC9wPlxuXHQgKiA8cD5EZWZhdWx0IGlzIDxiPidsZWZ0JzwvYj48L3A+XG5cdCAqL1xuXHRpY29uUG9zaXRpb24/OiBzdHJpbmc9XCJsZWZ0XCI7XG5cdFxuXHQvKipcblx0ICogPHA+V2FpdGluZyBzdGF0ZSBvZiB0aGUgYnV0dG9uXG5cdCAqIDxwPkJ1dHRvbiBjYW4gYmUgaW4gdGhhdCBzdGF0ZSAgd2hldGhlciBlbmFibGVkIG9yIGRpc2FibGVkPC9wPlxuXHQgKi9cblx0d2FpdGluZz86IHsgXG5cdFx0LyoqXG5cdFx0ICogPHA+UHJvcGVydHkgdG8gdG9nZ2xlIGJ1dHRvbiBpbi9vdXQgb2YgJ3dhaXRpbmcnIHN0YXRlPC9wPlxuXHRcdCAqL1xuXHRcdHZhbHVlOiBib29sZWFuO1xuXHRcdC8qKlxuXHRcdCAqIDxwPkRpc2FibGUgYnV0dG9uIHdoZW4gaXQgaXMgaW4gJ3dhaXRpbmcnIHN0YXRlPC9wPlxuXHRcdCAqL1xuXHRcdGRpc2FibGVkOiBib29sZWFuO1xuXHRcdC8qKlxuXHRcdCAqIDxwPkljb24gcmVwcmVzZW50aW5nIGJ1dHRvbiBpbiAnd2FpdGluZycgc3RhdGU8L3A+XG5cdFx0ICovXG5cdFx0aWNvblByb3BlcnR5OiBJY29uTW9kZWw7XG5cdH07XG5cblx0LyoqQGhpZGRlblxuXHQgKiBJdCBpcyB0aGUgY29uc3RydWN0b3IgZm9yIHRoZSBidXR0b24gY29tcG9uZW50LiBJdCB0YWtlcyB0aGUgcmVxdWlyZWQgc3RyaW5nIHZhbHVlcyB0byBjcmVhdGUgdGhlIGJ1dHRvbiBvYmplY3Rcblx0ICovXG5cdGNvbnN0cnVjdG9yKHZhbHVlczogT2JqZWN0ID0ge30pIHtcblx0XHRzdXBlcih2YWx1ZXMpO1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgdmFsdWVzKTtcblx0XHRpZih0aGlzLmljb25Qcm9wZXJ0eSE9bnVsbCkgdGhpcy5pY29uUHJvcGVydHkgPSBuZXcgSWNvbk1vZGVsKHRoaXMuaWNvblByb3BlcnR5KTtcblx0XHRpZih0aGlzLmljb25Qb3NpdGlvbj09bnVsbClcblx0XHRcdHRoaXMuaWNvblBvc2l0aW9uID0gXCJsZWZ0XCI7XG5cdH1cbn0iXX0=