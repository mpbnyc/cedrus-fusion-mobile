"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var select_model_1 = require("../models/select/select.model");
var select_styling_model_1 = require("../models/select/select-styling.model");
exports.SelectTemplates = {
    defaultTemplate: {
        property: new select_model_1.SelectModel({
            placeholder: "Select: ",
            display: true,
            disable: false,
        }),
        style: new select_styling_model_1.SelectStylingModel({
            container: {
                class: "",
                dynamicClass: ""
            },
        })
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LnRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VsZWN0LnRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOERBQTREO0FBQzVELDhFQUEyRTtBQUU5RCxRQUFBLGVBQWUsR0FBRztJQUMzQixlQUFlLEVBQUU7UUFDYixRQUFRLEVBQUUsSUFBSSwwQkFBVyxDQUFDO1lBQzVCLFdBQVcsRUFBRSxVQUFVO1lBQ2pCLE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFLEtBQUs7U0FDakIsQ0FBQztRQUNGLEtBQUssRUFBRyxJQUFJLHlDQUFrQixDQUFDO1lBQzNCLFNBQVMsRUFBRTtnQkFDUCxLQUFLLEVBQUUsRUFBRTtnQkFDVCxZQUFZLEVBQUUsRUFBRTthQUNuQjtTQUNKLENBQUM7S0FDTDtDQUNKLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWxlY3RNb2RlbCB9IGZyb20gJy4uL21vZGVscy9zZWxlY3Qvc2VsZWN0Lm1vZGVsJztcbmltcG9ydCB7IFNlbGVjdFN0eWxpbmdNb2RlbCB9IGZyb20gJy4uL21vZGVscy9zZWxlY3Qvc2VsZWN0LXN0eWxpbmcubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgU2VsZWN0VGVtcGxhdGVzID0ge1xuICAgIGRlZmF1bHRUZW1wbGF0ZToge1xuICAgICAgICBwcm9wZXJ0eTogbmV3IFNlbGVjdE1vZGVsKHtcblx0XHQgICAgcGxhY2Vob2xkZXI6IFwiU2VsZWN0OiBcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICBkaXNhYmxlOiBmYWxzZSxcbiAgICAgICAgfSksXG4gICAgICAgIHN0eWxlIDogbmV3IFNlbGVjdFN0eWxpbmdNb2RlbCh7XG4gICAgICAgICAgICBjb250YWluZXI6IHtcbiAgICAgICAgICAgICAgICBjbGFzczogXCJcIixcbiAgICAgICAgICAgICAgICBkeW5hbWljQ2xhc3M6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgfVxufSJdfQ==