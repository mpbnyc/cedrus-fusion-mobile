"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StylingModel = (function () {
    function StylingModel(values) {
        if (values === void 0) { values = {}; }
        this.class = "";
        this.dynamicClass = "";
        this.condition = "";
        this.value = "";
        this.style = "";
        this.themeColor = "";
        Object.assign(this, values);
        if (this.class == null)
            this.class = "";
        if (this.dynamicClass == null)
            this.dynamicClass = "";
        if (this.style == null)
            this.style = "";
        if (this.themeColor == null)
            this.themeColor = "";
    }
    return StylingModel;
}());
exports.StylingModel = StylingModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGluZy5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0eWxpbmcubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQVFDLHNCQUFZLE1BQW1CO1FBQW5CLHVCQUFBLEVBQUEsV0FBbUI7UUFQNUIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBRzFCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUUsSUFBSSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUUsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQzNCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUUsSUFBSSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUUsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFuQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU3R5bGluZ01vZGVsIHsgXG4gICAgY2xhc3M6IHN0cmluZyA9IFwiXCI7XG4gICAgZHluYW1pY0NsYXNzOiBzdHJpbmcgPSBcIlwiO1xuICAgIGNvbmRpdGlvbjogc3RyaW5nID0gXCJcIjtcbiAgICB2YWx1ZTogc3RyaW5nID0gXCJcIjtcbiAgICBzdHlsZTogc3RyaW5nID0gXCJcIjtcbiAgICB0aGVtZUNvbG9yOiBzdHJpbmcgPSBcIlwiO1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlczogT2JqZWN0ID0ge30pIHtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHZhbHVlcyk7XG4gICAgICAgIGlmKHRoaXMuY2xhc3M9PW51bGwpXG4gICAgICAgICAgICB0aGlzLmNsYXNzID0gXCJcIjtcbiAgICAgICAgaWYodGhpcy5keW5hbWljQ2xhc3M9PW51bGwpXG4gICAgICAgICAgICB0aGlzLmR5bmFtaWNDbGFzcyA9IFwiXCI7XG4gICAgICAgIGlmKHRoaXMuc3R5bGU9PW51bGwpXG4gICAgICAgICAgICB0aGlzLnN0eWxlID0gXCJcIjtcbiAgICAgICAgaWYodGhpcy50aGVtZUNvbG9yPT1udWxsKVxuICAgICAgICAgICAgdGhpcy50aGVtZUNvbG9yID0gXCJcIjtcbiAgICB9XG59Il19