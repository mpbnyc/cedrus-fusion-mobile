"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_model_1 = require("../core/core.model");
/**
 * <h4>Example of Selectable Model:</h4>
 * <pre>{
 *	value: 'value',
 *	item: any,
 *	checked: false,
 *	itemPosition: 'after'
 *}
 * </pre>
 */
var SelectableModel = (function (_super) {
    __extends(SelectableModel, _super);
    /** @hidden
     * It is icon constructor, which take values from selectable Component and create selectable Model object.
     */
    function SelectableModel(values) {
        if (values === void 0) { values = {}; }
        var _this = _super.call(this, values) || this;
        /**
         * <p> The internal value of the selectable emitted when selected.</p>
         * <p> Default is <b>value</b></p>
         */
        _this.value = 'value';
        /**
         * <p> Checked or not checked</p>
         * <p> Default is <b>false</b></p>
         */
        _this.checked = false;
        /**
         * <p>Item Position relative to the control</p>
         * <p>Options : 'before' , 'after'</p>
         * <p>Default <b>after</b>
         */
        _this.itemPosition = 'after';
        Object.assign(_this, values);
        if (_this.item == null)
            _this.item = "";
        return _this;
    }
    return SelectableModel;
}(core_model_1.CoreModel));
exports.SelectableModel = SelectableModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0YWJsZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlbGVjdGFibGUubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBK0M7QUFDL0M7Ozs7Ozs7OztHQVNHO0FBRUg7SUFBcUMsbUNBQVM7SUEwQjdDOztPQUVHO0lBQ0gseUJBQVksTUFBbUI7UUFBbkIsdUJBQUEsRUFBQSxXQUFtQjtRQUEvQixZQUNDLGtCQUFNLE1BQU0sQ0FBQyxTQUliO1FBaENEOzs7V0FHRztRQUNILFdBQUssR0FBWSxPQUFPLENBQUM7UUFPekI7OztXQUdHO1FBQ0gsYUFBTyxHQUFhLEtBQUssQ0FBQztRQUUxQjs7OztXQUlHO1FBQ0gsa0JBQVksR0FBWSxPQUFPLENBQUM7UUFPL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUIsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLElBQUksSUFBRSxJQUFJLENBQUM7WUFDbEIsS0FBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7O0lBQ2pCLENBQUM7SUFDRixzQkFBQztBQUFELENBQUMsQUFuQ0QsQ0FBcUMsc0JBQVMsR0FtQzdDO0FBbkNZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZU1vZGVsIH0gZnJvbSAnLi4vY29yZS9jb3JlLm1vZGVsJztcbi8qKlxuICogPGg0PkV4YW1wbGUgb2YgU2VsZWN0YWJsZSBNb2RlbDo8L2g0PlxuICogPHByZT57XG4gKlx0dmFsdWU6ICd2YWx1ZScsXG4gKlx0aXRlbTogYW55LFxuICpcdGNoZWNrZWQ6IGZhbHNlLFxuICpcdGl0ZW1Qb3NpdGlvbjogJ2FmdGVyJ1xuICp9XG4gKiA8L3ByZT5cbiAqL1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0YWJsZU1vZGVsIGV4dGVuZHMgQ29yZU1vZGVsIHtcblx0XG5cdC8qKiBcblx0ICogPHA+IFRoZSBpbnRlcm5hbCB2YWx1ZSBvZiB0aGUgc2VsZWN0YWJsZSBlbWl0dGVkIHdoZW4gc2VsZWN0ZWQuPC9wPlxuXHQgKiA8cD4gRGVmYXVsdCBpcyA8Yj52YWx1ZTwvYj48L3A+XG5cdCAqL1xuXHR2YWx1ZT86IHN0cmluZyA9ICd2YWx1ZSc7XG5cblx0LyoqXG5cdCAqIDxwPkl0ZW0gY2FuIGJlIGEgbGFiZWwgb3IgYW55IG90aGVyIG9iamVjdCBiYXNlZCBvbiB0aGUgaHRtbCB0ZW1wbGF0ZSBwYXNzZWQgdG8gdGhlIHNlbGVjdGFibGU8L3A+XG5cdCAqL1xuXHRpdGVtPzogYW55O1xuXG5cdC8qKlxuXHQgKiA8cD4gQ2hlY2tlZCBvciBub3QgY2hlY2tlZDwvcD5cblx0ICogPHA+IERlZmF1bHQgaXMgPGI+ZmFsc2U8L2I+PC9wPlxuXHQgKi9cblx0Y2hlY2tlZD86IGJvb2xlYW4gPSBmYWxzZTtcblxuXHQvKipcblx0ICogPHA+SXRlbSBQb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgY29udHJvbDwvcD5cblx0ICogPHA+T3B0aW9ucyA6ICdiZWZvcmUnICwgJ2FmdGVyJzwvcD5cblx0ICogPHA+RGVmYXVsdCA8Yj5hZnRlcjwvYj5cblx0ICovXG5cdGl0ZW1Qb3NpdGlvbj86IHN0cmluZyA9ICdhZnRlcic7XG5cblx0LyoqIEBoaWRkZW5cblx0ICogSXQgaXMgaWNvbiBjb25zdHJ1Y3Rvciwgd2hpY2ggdGFrZSB2YWx1ZXMgZnJvbSBzZWxlY3RhYmxlIENvbXBvbmVudCBhbmQgY3JlYXRlIHNlbGVjdGFibGUgTW9kZWwgb2JqZWN0LlxuXHQgKi9cblx0Y29uc3RydWN0b3IodmFsdWVzOiBPYmplY3QgPSB7fSkge1xuXHRcdHN1cGVyKHZhbHVlcyk7XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCB2YWx1ZXMpO1xuXHRcdGlmKHRoaXMuaXRlbT09bnVsbClcblx0XHRcdHRoaXMuaXRlbSA9IFwiXCI7XG5cdH1cbn0iXX0=