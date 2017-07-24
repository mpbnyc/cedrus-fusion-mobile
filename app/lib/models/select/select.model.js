"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_model_1 = require("../core/core.model");
var SelectModel = (function (_super) {
    __extends(SelectModel, _super);
    /**@hidden
     * It is icon constructor, which take values from Select Component and create Select Model object.
     */
    function SelectModel(values) {
        if (values === void 0) { values = {}; }
        var _this = _super.call(this, values) || this;
        /**
         * <p>Array with option items</p>
         */
        _this.items = [];
        /**
         * <p>Select component must have some selected item and it is value of item property described in <b>itemValue</b></p>
         */
        _this.selected = '';
        /**
         * <p>Placeholder text</p>
         */
        _this.placeholder = '';
        /**
         * <p>Show/Hide filter</p>
         */
        _this.showFilter = false;
        Object.assign(_this, values);
        return _this;
    }
    return SelectModel;
}(core_model_1.CoreModel));
exports.SelectModel = SelectModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VsZWN0Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQStDO0FBRy9DO0lBQWlDLCtCQUFTO0lBc0J6Qzs7T0FFRztJQUNILHFCQUFZLE1BQW1CO1FBQW5CLHVCQUFBLEVBQUEsV0FBbUI7UUFBL0IsWUFDQyxrQkFBTSxNQUFNLENBQUMsU0FFYjtRQTFCRDs7V0FFRztRQUNILFdBQUssR0FBc0IsRUFBRSxDQUFDO1FBRTlCOztXQUVHO1FBQ0gsY0FBUSxHQUFRLEVBQUUsQ0FBQztRQUVuQjs7V0FFRztRQUNILGlCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRXpCOztXQUVHO1FBQ0gsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFPM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7O0lBQzdCLENBQUM7SUFDRixrQkFBQztBQUFELENBQUMsQUE3QkQsQ0FBaUMsc0JBQVMsR0E2QnpDO0FBN0JZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZU1vZGVsIH0gZnJvbSAnLi4vY29yZS9jb3JlLm1vZGVsJztcbmltcG9ydCB7IFNlbGVjdEl0ZW1Nb2RlbCB9IGZyb20gJy4vc2VsZWN0LWl0ZW0ubW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0TW9kZWwgZXh0ZW5kcyBDb3JlTW9kZWwge1xuXG5cdC8qKlxuXHQgKiA8cD5BcnJheSB3aXRoIG9wdGlvbiBpdGVtczwvcD5cblx0ICovXG5cdGl0ZW1zOiBTZWxlY3RJdGVtTW9kZWxbXSA9IFtdO1xuXG5cdC8qKlxuXHQgKiA8cD5TZWxlY3QgY29tcG9uZW50IG11c3QgaGF2ZSBzb21lIHNlbGVjdGVkIGl0ZW0gYW5kIGl0IGlzIHZhbHVlIG9mIGl0ZW0gcHJvcGVydHkgZGVzY3JpYmVkIGluIDxiPml0ZW1WYWx1ZTwvYj48L3A+XG5cdCAqL1xuXHRzZWxlY3RlZDogYW55ID0gJyc7XG5cblx0LyoqXG5cdCAqIDxwPlBsYWNlaG9sZGVyIHRleHQ8L3A+XG5cdCAqL1xuXHRwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG5cblx0LyoqXG5cdCAqIDxwPlNob3cvSGlkZSBmaWx0ZXI8L3A+XG5cdCAqL1xuXHRzaG93RmlsdGVyOiBCb29sZWFuID0gZmFsc2U7XG5cblx0LyoqQGhpZGRlblxuXHQgKiBJdCBpcyBpY29uIGNvbnN0cnVjdG9yLCB3aGljaCB0YWtlIHZhbHVlcyBmcm9tIFNlbGVjdCBDb21wb25lbnQgYW5kIGNyZWF0ZSBTZWxlY3QgTW9kZWwgb2JqZWN0LlxuXHQgKi9cblx0Y29uc3RydWN0b3IodmFsdWVzOiBPYmplY3QgPSB7fSkge1xuXHRcdHN1cGVyKHZhbHVlcyk7XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCB2YWx1ZXMpO1xuXHR9XG59Il19