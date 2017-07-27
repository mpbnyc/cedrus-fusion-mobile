"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_model_1 = require("../core/core.model");
/**
 * <h4>Example of Fab Model:</h4>
 * <pre>{
 *	direction: 'right';
 *	triggerButton: Object<FabButtonModel> ;
 *	actionButtons: <FabButtonModel>[];
 *	showButtons: true;
 *	stayOpened: true;
 * }</pre>
 */
var FabModel = (function (_super) {
    __extends(FabModel, _super);
    /**@hidden
     * It is icon constructor, which take string values from Fab Component and create Fab object.
     */
    function FabModel(values) {
        if (values === void 0) { values = {}; }
        var _this = _super.call(this, values) || this;
        Object.assign(_this, values);
        return _this;
    }
    return FabModel;
}(core_model_1.CoreModel));
exports.FabModel = FabModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFiLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmFiLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQStDO0FBRS9DOzs7Ozs7Ozs7R0FTRztBQUNIO0lBQThCLDRCQUFTO0lBZ0NyQzs7T0FFRztJQUNILGtCQUFZLE1BQW1CO1FBQW5CLHVCQUFBLEVBQUEsV0FBbUI7UUFBL0IsWUFDRSxrQkFBTSxNQUFNLENBQUMsU0FFZjtRQURBLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDOztJQUM3QixDQUFDO0lBQ0YsZUFBQztBQUFELENBQUMsQUF2Q0QsQ0FBOEIsc0JBQVMsR0F1Q3RDO0FBdkNZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZU1vZGVsIH0gZnJvbSAnLi4vY29yZS9jb3JlLm1vZGVsJztcbmltcG9ydCB7IEZhYkJ1dHRvbk1vZGVsIH0gZnJvbSAnLi9mYWItYnV0dG9uLm1vZGVsJztcbi8qKlxuICogPGg0PkV4YW1wbGUgb2YgRmFiIE1vZGVsOjwvaDQ+XG4gKiA8cHJlPntcbiAqXHRkaXJlY3Rpb246ICdyaWdodCc7XG4gKlx0dHJpZ2dlckJ1dHRvbjogT2JqZWN0PEZhYkJ1dHRvbk1vZGVsPiA7XG4gKlx0YWN0aW9uQnV0dG9uczogPEZhYkJ1dHRvbk1vZGVsPltdO1xuICpcdHNob3dCdXR0b25zOiB0cnVlO1xuICpcdHN0YXlPcGVuZWQ6IHRydWU7XG4gKiB9PC9wcmU+XG4gKi9cbmV4cG9ydCBjbGFzcyBGYWJNb2RlbCBleHRlbmRzIENvcmVNb2RlbCB7XG5cbiAgLyoqXG4gICAqIDxwPkRpcmVjdGlvbiBvZiBvcGVuaW5nIEZhYiBhY3Rpb24gYnV0dG9uczwvcD5cbiAgICogPHA+RGVmYXVsdCBtdXN0IGJlIHNldCBpbiBmaWxlOiAuLi90ZW1wbGF0ZXMvZmFiLnRlbXBsYXRlLnRzLnRzPC9wPlxuICAgKiA8cD5PcHRpb25zOiAndXAnLCAncmlnaHQnLCAnZG93bicsICdsZWZ0JzwvcD5cbiAgICovXG4gIGRpcmVjdGlvbj86IHN0cmluZztcblxuICAvKipcbiAgICogPHA+RmFiIHRyaWdnZXIgYnV0dG9uIGJhc2VkIG9uIEZhYkJ1dHRvbk1vZGVsPC9wPiBcbiAgICogPHA+RGVmYXVsdCBtdXN0IGJlIHNldCBpbiBmaWxlOiAuLi90ZW1wbGF0ZXMvZmFiLnRlbXBsYXRlLnRzLnRzPC9wPlxuICAgKi9cbiAgdHJpZ2dlckJ1dHRvbj86IEZhYkJ1dHRvbk1vZGVsO1xuXG4gIC8qKlxuICAgKiA8cD5BcnJheSBvZiBidXR0b25zIHdpdGggdHlwZSBGYWJCdXR0b25Nb2RlbDwvcD5cbiAgICovXG4gIGFjdGlvbkJ1dHRvbnM/OiBGYWJCdXR0b25Nb2RlbFtdO1xuXG4gIC8qKlxuICAgKiA8cD5TaG93IGZhYiBhY3Rpb24gYnV0dG9ucyBvbiBpbml0PC9wPlxuICAgKiA8cD5EZWZhdWx0IGlzIGZhbHNlPC9wPlxuICAgKi9cbiAgc2hvd0J1dHRvbnM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiA8cD5IaWRlIG9yIFNIb3cgYWN0aW9uIGJ1dHRvbnM8L3A+XG4gICAqIDxwPkRlZmF1bHQgaXMgZmFsc2U8L3A+XG4gICAqL1xuICBzdGF5T3BlbmVkPzogYm9vbGVhbjtcblxuICAvKipAaGlkZGVuXG4gICAqIEl0IGlzIGljb24gY29uc3RydWN0b3IsIHdoaWNoIHRha2Ugc3RyaW5nIHZhbHVlcyBmcm9tIEZhYiBDb21wb25lbnQgYW5kIGNyZWF0ZSBGYWIgb2JqZWN0LlxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWVzOiBPYmplY3QgPSB7fSkge1xuICAgIHN1cGVyKHZhbHVlcyk7XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCB2YWx1ZXMpO1xuXHR9XG59Il19