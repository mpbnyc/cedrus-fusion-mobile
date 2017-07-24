"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var selectable_model_1 = require("../models/selectable/selectable.model");
var checkbox_styling_model_1 = require("../models/selectable/checkbox-styling.model");
exports.CheckboxTemplates = {
    defaultTemplate: {
        property: new selectable_model_1.SelectableModel({
            display: true,
            disable: false,
            value: "checkbox",
            item: "Checkbox",
            checked: false,
            itemPosition: "after"
        }),
        style: new checkbox_styling_model_1.CheckboxStylingModel({
            container: {
                class: "cf-default-container"
            },
            checkbox: {
                themeColor: "primary"
            }
        })
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gudGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGVja2JveC50ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBFQUF3RTtBQUN4RSxzRkFBbUY7QUFFdEUsUUFBQSxpQkFBaUIsR0FBRztJQUM3QixlQUFlLEVBQUU7UUFDYixRQUFRLEVBQUUsSUFBSSxrQ0FBZSxDQUFDO1lBQzFCLE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFLEtBQUs7WUFDZCxLQUFLLEVBQUUsVUFBVTtZQUNqQixJQUFJLEVBQUUsVUFBVTtZQUNoQixPQUFPLEVBQUUsS0FBSztZQUNkLFlBQVksRUFBRSxPQUFPO1NBQ3hCLENBQUM7UUFDRixLQUFLLEVBQUcsSUFBSSw2Q0FBb0IsQ0FBQztZQUM3QixTQUFTLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLHNCQUFzQjthQUNoQztZQUNELFFBQVEsRUFBRTtnQkFDTixVQUFVLEVBQUUsU0FBUzthQUN4QjtTQUNKLENBQUM7S0FDTDtDQUNKLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWxlY3RhYmxlTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvc2VsZWN0YWJsZS9zZWxlY3RhYmxlLm1vZGVsJztcbmltcG9ydCB7IENoZWNrYm94U3R5bGluZ01vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL3NlbGVjdGFibGUvY2hlY2tib3gtc3R5bGluZy5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBDaGVja2JveFRlbXBsYXRlcyA9IHtcbiAgICBkZWZhdWx0VGVtcGxhdGU6IHtcbiAgICAgICAgcHJvcGVydHk6IG5ldyBTZWxlY3RhYmxlTW9kZWwoe1xuICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIGRpc2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgIGl0ZW06IFwiQ2hlY2tib3hcIixcbiAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXRlbVBvc2l0aW9uOiBcImFmdGVyXCJcbiAgICAgICAgfSksXG4gICAgICAgIHN0eWxlIDogbmV3IENoZWNrYm94U3R5bGluZ01vZGVsKHtcbiAgICAgICAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBcImNmLWRlZmF1bHQtY29udGFpbmVyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVja2JveDoge1xuICAgICAgICAgICAgICAgIHRoZW1lQ29sb3I6IFwicHJpbWFyeVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufSJdfQ==