"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_model_1 = require("../core/core.model");
/**
 * <h4>Example of FabButton Model</h4>
 * <pre>{
 *		icon: null,
 *		label: 'I'm trigger button tooltip',
 *		labelPosition: 'above',
 *		display: true,
 *		disable: false,
 * }</pre>
 */
var FabButtonModel = (function (_super) {
    __extends(FabButtonModel, _super);
    /**@hidden
     * It is icon constructor, which take string values from Fab Component and create FabButton object.
     */
    function FabButtonModel(values) {
        if (values === void 0) { values = {}; }
        var _this = _super.call(this, values) || this;
        Object.assign(_this, values);
        return _this;
    }
    return FabButtonModel;
}(core_model_1.CoreModel));
exports.FabButtonModel = FabButtonModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFiLWJ1dHRvbi5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhYi1idXR0b24ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBK0M7QUFHL0M7Ozs7Ozs7OztHQVNHO0FBQ0g7SUFBb0Msa0NBQVM7SUFtQjNDOztPQUVHO0lBQ0osd0JBQVksTUFBbUI7UUFBbkIsdUJBQUEsRUFBQSxXQUFtQjtRQUEvQixZQUNFLGtCQUFNLE1BQU0sQ0FBQyxTQUVkO1FBREEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7O0lBQzdCLENBQUM7SUFDRixxQkFBQztBQUFELENBQUMsQUExQkQsQ0FBb0Msc0JBQVMsR0EwQjVDO0FBMUJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZU1vZGVsIH0gZnJvbSAnLi4vY29yZS9jb3JlLm1vZGVsJztcbmltcG9ydCB7IEljb25Nb2RlbCB9IGZyb20gJy4uL2ljb24vaWNvbi5tb2RlbCc7XG5cbi8qKlxuICogPGg0PkV4YW1wbGUgb2YgRmFiQnV0dG9uIE1vZGVsPC9oND5cbiAqIDxwcmU+e1xuICpcdFx0aWNvbjogbnVsbCxcbiAqXHRcdGxhYmVsOiAnSSdtIHRyaWdnZXIgYnV0dG9uIHRvb2x0aXAnLFxuICpcdFx0bGFiZWxQb3NpdGlvbjogJ2Fib3ZlJyxcbiAqXHRcdGRpc3BsYXk6IHRydWUsXG4gKlx0XHRkaXNhYmxlOiBmYWxzZSxcbiAqIH08L3ByZT5cbiAqL1xuZXhwb3J0IGNsYXNzIEZhYkJ1dHRvbk1vZGVsIGV4dGVuZHMgQ29yZU1vZGVsIHtcblxuICAvKipcbiAgICogPHA+SWNvbiBGYWIgdHJpZ2dlci9hY3Rpb24gYnV0dG9ucyBiYXNlZCBvbiBJY29uTW9kZWw8L3A+XG4gICAqIDxwPkRlZmF1bHQgbXVzdCBiZSBzZXQgaW4gZmlsZTogL3NyYy9hc3NldHMvc2V0dGluZ3MvZmFiL3NldHRpbmdzLnRzPC9wPlxuICAgKi9cbiAgaWNvbj86IEljb25Nb2RlbDtcblxuICAvKipcbiAgICogPHA+VGV4dCBmb3IgRmFiIHRyaWdnZXIvYWN0aW9uIGJ1dHRvbnMgdG9vbHRpcHM8L3A+XG4gICAqL1xuICBsYWJlbD86IHN0cmluZztcblxuICAvKipcbiAgICogPHA+UG9zaXRpb24gb2YgdG9vbHRpcDwvcD5cbiAgICogPHA+Q2FuIGJlIHNldCBpbiBmaWxlOiAvc3JjL2Fzc2V0cy9zZXR0aW5ncy9mYWIvc2V0dGluZ3MudHMgPGI+b3I8L2I+d2lsbCB0YWtlIEFuZ3VsYXIgTWF0ZXJpYWwgZGVmYXVsdDwvcD5cbiAgICovXG4gIGxhYmVsUG9zaXRpb24/OiBzdHJpbmc7XG5cbiAgLyoqQGhpZGRlblxuICAgKiBJdCBpcyBpY29uIGNvbnN0cnVjdG9yLCB3aGljaCB0YWtlIHN0cmluZyB2YWx1ZXMgZnJvbSBGYWIgQ29tcG9uZW50IGFuZCBjcmVhdGUgRmFiQnV0dG9uIG9iamVjdC5cbiAgICovXG4gY29uc3RydWN0b3IodmFsdWVzOiBPYmplY3QgPSB7fSkge1xuICAgc3VwZXIodmFsdWVzKTtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHZhbHVlcyk7XG5cdH1cbn0iXX0=