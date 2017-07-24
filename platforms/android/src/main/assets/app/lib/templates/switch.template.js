"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var selectable_model_1 = require("../models/selectable/selectable.model");
var switch_styling_model_1 = require("../models/selectable/switch-styling.model");
exports.SwitchTemplates = {
    defaultTemplate: {
        property: new selectable_model_1.SelectableModel({
            display: true,
            disable: false,
            value: "slide",
            item: 'Switch Button',
            checked: true,
            itemPosition: "after"
        }),
        style: new switch_styling_model_1.SwitchStylingModel({
            container: {
                class: "cf-default-container",
                dynamicClass: ""
            },
            switch: {
                class: "",
                dynamicClass: "",
                themeColor: "crimson"
            }
        })
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLnRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3dpdGNoLnRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMEVBQXdFO0FBQ3hFLGtGQUErRTtBQUVsRSxRQUFBLGVBQWUsR0FBRztJQUMzQixlQUFlLEVBQUU7UUFDYixRQUFRLEVBQUUsSUFBSSxrQ0FBZSxDQUFDO1lBQzFCLE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFLEtBQUs7WUFDZCxLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxlQUFlO1lBQ3JCLE9BQU8sRUFBRSxJQUFJO1lBQ2IsWUFBWSxFQUFFLE9BQU87U0FDeEIsQ0FBQztRQUNGLEtBQUssRUFBRyxJQUFJLHlDQUFrQixDQUFDO1lBQzNCLFNBQVMsRUFBRTtnQkFDUCxLQUFLLEVBQUUsc0JBQXNCO2dCQUM3QixZQUFZLEVBQUUsRUFBRTthQUNuQjtZQUNELE1BQU0sRUFBRTtnQkFDSixLQUFLLEVBQUUsRUFBRTtnQkFDVCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsVUFBVSxFQUFFLFNBQVM7YUFDeEI7U0FDSixDQUFDO0tBQ0w7Q0FDSixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VsZWN0YWJsZU1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL3NlbGVjdGFibGUvc2VsZWN0YWJsZS5tb2RlbCc7XG5pbXBvcnQgeyBTd2l0Y2hTdHlsaW5nTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvc2VsZWN0YWJsZS9zd2l0Y2gtc3R5bGluZy5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBTd2l0Y2hUZW1wbGF0ZXMgPSB7XG4gICAgZGVmYXVsdFRlbXBsYXRlOiB7XG4gICAgICAgIHByb3BlcnR5OiBuZXcgU2VsZWN0YWJsZU1vZGVsKHtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICBkaXNhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiBcInNsaWRlXCIsXG4gICAgICAgICAgICBpdGVtOiAnU3dpdGNoIEJ1dHRvbicsXG4gICAgICAgICAgICBjaGVja2VkOiB0cnVlLFxuICAgICAgICAgICAgaXRlbVBvc2l0aW9uOiBcImFmdGVyXCJcbiAgICAgICAgfSksXG4gICAgICAgIHN0eWxlIDogbmV3IFN3aXRjaFN0eWxpbmdNb2RlbCh7XG4gICAgICAgICAgICBjb250YWluZXI6IHtcbiAgICAgICAgICAgICAgICBjbGFzczogXCJjZi1kZWZhdWx0LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgIGR5bmFtaWNDbGFzczogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN3aXRjaDoge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBcIlwiLFxuICAgICAgICAgICAgICAgIGR5bmFtaWNDbGFzczogXCJcIixcbiAgICAgICAgICAgICAgICB0aGVtZUNvbG9yOiBcImNyaW1zb25cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn0iXX0=