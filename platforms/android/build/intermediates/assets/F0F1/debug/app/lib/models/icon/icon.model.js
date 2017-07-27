"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_model_1 = require("../core/core.model");
/**
 * <h4>Example of Icon Model:</h4>
 * <pre>{
 *	name: 'fa-heart-o',
 *	size: '18px',
 *	value: 'empty heart',
 *	toggle: {
 *		name: 'fa-heart',
 *		size: '18px',
 *		value: 'full heart'
 *	}
 *}
 * </pre>
 */
var IconModel = (function (_super) {
    __extends(IconModel, _super);
    /**@hidden
     * It is icon constructor, which take string values from Icon Component and create Icon object.
     */
    function IconModel(values) {
        if (values === void 0) { values = {}; }
        var _this = _super.call(this, values) || this;
        /**
         * <p></p>
         * <p>Name of the icon</p>
         * <p>Default is <b>home</b></p>
         * <p>Icon libraries available: Material Icons and Font Awesome Icons</p>
         * <p><i>If icon name consists of more then one word, then:</i></p>
         * <p><i>- for Material Icons: join words with underscore (like: <b>thumb_up</b>)</i></p>
         * <p><i>- for Font Awesome Icons: join words with dash (like: <b>fa-address-book</b>)</i></p>
         */
        _this.name = 'home';
        /**@hidden
         * <p>It is type of icon. Optional, but must be set with icon name together.</p>
         * <p>Types are: <b>mi</b> (Material Icons) and <b>fa</b> (Font Awesome Icons). Default is <b>mi</b> type.</p>
         */
        _this.type = 'mi';
        /**
         * <p>Icon size</p>
         * <p>Can be in pixels, em, percetages </p>
         * <p>Default is <b>'24px'</b></p>
         */
        _this.size = 24;
        Object.assign(_this, values);
        return _this;
        // if(this.size!=null)
        // 	if(!this.size.endsWith("px") && !this.size.endsWith("%"))
        // 		this.size = this.size + "%";
        // if(this.name.startsWith("fa-"))
        // 	this.type = "fa";
        // else
        // 	this.type = "mi";
        // if(this.toggle!=null)
        // {
        // 	if(this.toggle.name.startsWith("fa-"))
        // 		this.toggle.type = "fa";
        // 	else
        // 		this.toggle.type = "mi";
        // }
    }
    return IconModel;
}(core_model_1.CoreModel));
exports.IconModel = IconModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImljb24ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBK0M7QUFDL0M7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUVIO0lBQStCLDZCQUFTO0lBNER2Qzs7T0FFRztJQUVILG1CQUFZLE1BQW1CO1FBQW5CLHVCQUFBLEVBQUEsV0FBbUI7UUFBL0IsWUFDQyxrQkFBTSxNQUFNLENBQUMsU0FrQmI7UUFsRkQ7Ozs7Ozs7O1dBUUc7UUFDSCxVQUFJLEdBQVksTUFBTSxDQUFDO1FBRXZCOzs7V0FHRztRQUNILFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckI7Ozs7V0FJRztRQUNILFVBQUksR0FBWSxFQUFFLENBQUM7UUEyQ2xCLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDOztRQUM1QixzQkFBc0I7UUFDdEIsNkRBQTZEO1FBQzdELGlDQUFpQztRQUVqQyxrQ0FBa0M7UUFDbEMscUJBQXFCO1FBQ3JCLE9BQU87UUFDUCxxQkFBcUI7UUFFckIsd0JBQXdCO1FBQ3hCLElBQUk7UUFDSiwwQ0FBMEM7UUFDMUMsNkJBQTZCO1FBQzdCLFFBQVE7UUFDUiw2QkFBNkI7UUFDN0IsSUFBSTtJQUNMLENBQUM7SUFDRixnQkFBQztBQUFELENBQUMsQUFwRkQsQ0FBK0Isc0JBQVMsR0FvRnZDO0FBcEZZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZU1vZGVsIH0gZnJvbSAnLi4vY29yZS9jb3JlLm1vZGVsJztcbi8qKlxuICogPGg0PkV4YW1wbGUgb2YgSWNvbiBNb2RlbDo8L2g0PlxuICogPHByZT57XG4gKlx0bmFtZTogJ2ZhLWhlYXJ0LW8nLFxuICpcdHNpemU6ICcxOHB4JyxcbiAqXHR2YWx1ZTogJ2VtcHR5IGhlYXJ0JyxcbiAqXHR0b2dnbGU6IHtcbiAqXHRcdG5hbWU6ICdmYS1oZWFydCcsXG4gKlx0XHRzaXplOiAnMThweCcsXG4gKlx0XHR2YWx1ZTogJ2Z1bGwgaGVhcnQnXG4gKlx0fVx0XG4gKn1cbiAqIDwvcHJlPlxuICovXG5cbmV4cG9ydCBjbGFzcyBJY29uTW9kZWwgZXh0ZW5kcyBDb3JlTW9kZWwge1xuXHQvKipcblx0ICogPHA+PC9wPlxuXHQgKiA8cD5OYW1lIG9mIHRoZSBpY29uPC9wPlxuXHQgKiA8cD5EZWZhdWx0IGlzIDxiPmhvbWU8L2I+PC9wPlxuXHQgKiA8cD5JY29uIGxpYnJhcmllcyBhdmFpbGFibGU6IE1hdGVyaWFsIEljb25zIGFuZCBGb250IEF3ZXNvbWUgSWNvbnM8L3A+XG5cdCAqIDxwPjxpPklmIGljb24gbmFtZSBjb25zaXN0cyBvZiBtb3JlIHRoZW4gb25lIHdvcmQsIHRoZW46PC9pPjwvcD5cblx0ICogPHA+PGk+LSBmb3IgTWF0ZXJpYWwgSWNvbnM6IGpvaW4gd29yZHMgd2l0aCB1bmRlcnNjb3JlIChsaWtlOiA8Yj50aHVtYl91cDwvYj4pPC9pPjwvcD5cblx0ICogPHA+PGk+LSBmb3IgRm9udCBBd2Vzb21lIEljb25zOiBqb2luIHdvcmRzIHdpdGggZGFzaCAobGlrZTogPGI+ZmEtYWRkcmVzcy1ib29rPC9iPik8L2k+PC9wPlxuXHQgKi9cblx0bmFtZT86IHN0cmluZyA9ICdob21lJztcblxuXHQvKipAaGlkZGVuXG5cdCAqIDxwPkl0IGlzIHR5cGUgb2YgaWNvbi4gT3B0aW9uYWwsIGJ1dCBtdXN0IGJlIHNldCB3aXRoIGljb24gbmFtZSB0b2dldGhlci48L3A+IFxuXHQgKiA8cD5UeXBlcyBhcmU6IDxiPm1pPC9iPiAoTWF0ZXJpYWwgSWNvbnMpIGFuZCA8Yj5mYTwvYj4gKEZvbnQgQXdlc29tZSBJY29ucykuIERlZmF1bHQgaXMgPGI+bWk8L2I+IHR5cGUuPC9wPlxuXHQgKi9cblx0dHlwZT86IHN0cmluZyA9ICdtaSc7XG5cblx0LyoqXG5cdCAqIDxwPkljb24gc2l6ZTwvcD5cblx0ICogPHA+Q2FuIGJlIGluIHBpeGVscywgZW0sIHBlcmNldGFnZXMgPC9wPlxuXHQgKiA8cD5EZWZhdWx0IGlzIDxiPicyNHB4JzwvYj48L3A+XG5cdCAqL1xuXHRzaXplPzogbnVtYmVyID0gMjQ7XG5cbiAgLyoqXG4gICAqIDxwPiBWYWx1ZSBlbWl0dGVkIG9uIGNsaWNrPC9wPlxuICAgKi9cblx0dmFsdWU/OiBhbnk7XG5cblx0dG9nZ2xlPzoge1x0XG4gXHRcdC8qKlxuXHQgXHQgKiA8cD5OYW1lIG9mIHRoZSBpY29uPC9wPlxuXHQgXHQgKiA8cD5EZWZhdWx0IGlzIDxiPmhvbWU8L2I+PC9wPlxuXHQgXHQgKiA8cD5JY29uIGxpYnJhcmllcyBhdmFpbGFibGU6IE1hdGVyaWFsIEljb25zIGFuZCBGb250IEF3ZXNvbWUgSWNvbnM8L3A+XG5cdCBcdCAqIDxwPjxpPklmIGljb24gbmFtZSBjb25zaXN0cyBvZiBtb3JlIHRoZW4gb25lIHdvcmQsIHRoZW46PC9pPjwvcD5cblx0IFx0ICogPHA+PGk+LSBmb3IgTWF0ZXJpYWwgSWNvbnM6IGpvaW4gd29yZHMgd2l0aCB1bmRlcnNjb3JlIChsaWtlOiA8Yj50aHVtYl91cDwvYj4pPC9pPjwvcD5cblx0IFx0ICogPHA+PGk+LSBmb3IgRm9udCBBd2Vzb21lIEljb25zOiBqb2luIHdvcmRzIHdpdGggZGFzaCAobGlrZTogPGI+ZmEtYWRkcmVzcy1ib29rPC9iPik8L2k+PC9wPlxuXHQgXHQgKi9cblx0XHRuYW1lPzogc3RyaW5nO1xuICAgICAgICBcblx0XHQvKipAaGlkZGVuXG4gICAgICAgICAqIDxwPkl0IGlzIHR5cGUgb2YgaWNvbi4gT3B0aW9uYWwsIGJ1dCBtdXN0IGJlIHNldCB3aXRoIGljb24gbmFtZSB0b2dldGhlci48L3A+IFxuICAgICAgICAgKiA8cD5UeXBlcyBhcmU6IDxiPm1pPC9iPiAoTWF0ZXJpYWwgSWNvbnMpIGFuZCA8Yj5mYTwvYj4gKEZvbnQgQXdlc29tZSBJY29ucykuIERlZmF1bHQgaXMgPGI+bWk8L2I+IHR5cGUuPC9wPlxuICAgICAgICAgKi9cblx0XHQvLyB0eXBlPzogc3RyaW5nO1xuXG5cdFx0LyoqXG5cdCBcdCAqIDxwPkljb24gc2l6ZTwvcD5cblx0IFx0ICogPHA+Q2FuIGJlIGluIHBpeGVscywgZW0sIHBlcmNldGFnZXM8L3A+XG5cdCBcdCAqIDxwPkRlZmF1bHQgaXMgPGI+JzI0cHgnPC9iPjwvcD5cblx0IFx0ICovXG5cdFx0c2l6ZT86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIDxwPiBWYWx1ZSBlbWl0dGVkIG9uIHRvZ2dsZTwvcD5cbiAgICAgKi9cblx0XHR2YWx1ZT86IGFueTtcblx0fVxuXG5cdC8qKkBoaWRkZW5cblx0ICogSXQgaXMgaWNvbiBjb25zdHJ1Y3Rvciwgd2hpY2ggdGFrZSBzdHJpbmcgdmFsdWVzIGZyb20gSWNvbiBDb21wb25lbnQgYW5kIGNyZWF0ZSBJY29uIG9iamVjdC5cblx0ICovXG5cdFxuXHRjb25zdHJ1Y3Rvcih2YWx1ZXM6IE9iamVjdCA9IHt9KSB7XG5cdFx0c3VwZXIodmFsdWVzKTtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHZhbHVlcyk7XG5cdFx0Ly8gaWYodGhpcy5zaXplIT1udWxsKVxuXHRcdC8vIFx0aWYoIXRoaXMuc2l6ZS5lbmRzV2l0aChcInB4XCIpICYmICF0aGlzLnNpemUuZW5kc1dpdGgoXCIlXCIpKVxuXHRcdC8vIFx0XHR0aGlzLnNpemUgPSB0aGlzLnNpemUgKyBcIiVcIjtcblx0XHRcblx0XHQvLyBpZih0aGlzLm5hbWUuc3RhcnRzV2l0aChcImZhLVwiKSlcblx0XHQvLyBcdHRoaXMudHlwZSA9IFwiZmFcIjtcblx0XHQvLyBlbHNlXG5cdFx0Ly8gXHR0aGlzLnR5cGUgPSBcIm1pXCI7XG5cdFx0XG5cdFx0Ly8gaWYodGhpcy50b2dnbGUhPW51bGwpXG5cdFx0Ly8ge1xuXHRcdC8vIFx0aWYodGhpcy50b2dnbGUubmFtZS5zdGFydHNXaXRoKFwiZmEtXCIpKVxuXHRcdC8vIFx0XHR0aGlzLnRvZ2dsZS50eXBlID0gXCJmYVwiO1xuXHRcdC8vIFx0ZWxzZVxuXHRcdC8vIFx0XHR0aGlzLnRvZ2dsZS50eXBlID0gXCJtaVwiO1xuXHRcdC8vIH1cblx0fVxufSJdfQ==