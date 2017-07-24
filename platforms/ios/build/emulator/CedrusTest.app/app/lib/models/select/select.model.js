"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SelectModel = (function () {
    /**@hidden
     * It is icon constructor, which take values from Select Component and create Select Model object.
     */
    function SelectModel(values) {
        if (values === void 0) { values = {}; }
        /**
         * <p>Array with option items</p>
         */
        this.items = [];
        /**
         * <p>Select component must have some selected item and it is value of item property described in <b>itemValue</b></p>
         */
        this.selected = '';
        /**
         * <p>Placeholder text</p>
         */
        this.placeholder = '';
        /**
         * <p>Show/Hide filter</p>
         */
        this.showFilter = false;
        Object.assign(this, values);
    }
    return SelectModel;
}());
exports.SelectModel = SelectModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VsZWN0Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0E7SUFzQkM7O09BRUc7SUFDSCxxQkFBWSxNQUFtQjtRQUFuQix1QkFBQSxFQUFBLFdBQW1CO1FBdkIvQjs7V0FFRztRQUNILFVBQUssR0FBc0IsRUFBRSxDQUFDO1FBRTlCOztXQUVHO1FBQ0gsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUVuQjs7V0FFRztRQUNILGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRXpCOztXQUVHO1FBQ0gsZUFBVSxHQUFZLEtBQUssQ0FBQztRQU0zQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDO0FBNUJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VsZWN0SXRlbU1vZGVsIH0gZnJvbSAnLi9zZWxlY3QtaXRlbS5tb2RlbCc7XG5leHBvcnQgY2xhc3MgU2VsZWN0TW9kZWwge1xuXG5cdC8qKlxuXHQgKiA8cD5BcnJheSB3aXRoIG9wdGlvbiBpdGVtczwvcD5cblx0ICovXG5cdGl0ZW1zOiBTZWxlY3RJdGVtTW9kZWxbXSA9IFtdO1xuXG5cdC8qKlxuXHQgKiA8cD5TZWxlY3QgY29tcG9uZW50IG11c3QgaGF2ZSBzb21lIHNlbGVjdGVkIGl0ZW0gYW5kIGl0IGlzIHZhbHVlIG9mIGl0ZW0gcHJvcGVydHkgZGVzY3JpYmVkIGluIDxiPml0ZW1WYWx1ZTwvYj48L3A+XG5cdCAqL1xuXHRzZWxlY3RlZDogYW55ID0gJyc7XG5cblx0LyoqXG5cdCAqIDxwPlBsYWNlaG9sZGVyIHRleHQ8L3A+XG5cdCAqL1xuXHRwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG5cblx0LyoqXG5cdCAqIDxwPlNob3cvSGlkZSBmaWx0ZXI8L3A+XG5cdCAqL1xuXHRzaG93RmlsdGVyOiBCb29sZWFuID0gZmFsc2U7XG5cblx0LyoqQGhpZGRlblxuXHQgKiBJdCBpcyBpY29uIGNvbnN0cnVjdG9yLCB3aGljaCB0YWtlIHZhbHVlcyBmcm9tIFNlbGVjdCBDb21wb25lbnQgYW5kIGNyZWF0ZSBTZWxlY3QgTW9kZWwgb2JqZWN0LlxuXHQgKi9cblx0Y29uc3RydWN0b3IodmFsdWVzOiBPYmplY3QgPSB7fSkge1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgdmFsdWVzKTtcbiAgICB9XG59Il19