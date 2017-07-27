"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var icon_styling_model_1 = require("../models/icon/icon-styling.model");
var button_model_1 = require("../models/button/button.model");
var button_styling_model_1 = require("../models/button/button-styling.model");
exports.ButtonTemplates = {
    defaultTemplate: {
        property: new button_model_1.ButtonModel({
            display: true,
            disable: false,
            label: "CF BUTTON",
            icon: {
                name: "star",
                size: 24,
                position: "left"
            }
        }),
        style: new button_styling_model_1.ButtonStylingModel({
            container: {
                class: "default-container"
            },
            button: {
                themeColor: "white"
            },
            iconStyling: new icon_styling_model_1.IconStylingModel({
                icon: {
                    class: "",
                    dynamicClass: ""
                }
            })
        })
    },
    submitTemplate: {
        property: new button_model_1.ButtonModel({
            display: true,
            disable: false,
            label: "SUBMIT",
            iconProperty: null,
            iconPosition: "left"
        }),
        style: new button_styling_model_1.ButtonStylingModel({
            container: {
                class: "",
                dynamicClass: ""
            },
            button: {
                class: "cf-submit-button",
                dynamicClass: "",
                themeColor: ""
            },
            iconStyling: new icon_styling_model_1.IconStylingModel({
                icon: {
                    class: "",
                    dynamicClass: ""
                }
            })
        })
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLnRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnV0dG9uLnRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esd0VBQXFFO0FBQ3JFLDhEQUE0RDtBQUM1RCw4RUFBMkU7QUFHOUQsUUFBQSxlQUFlLEdBQUc7SUFDM0IsZUFBZSxFQUFFO1FBQ2IsUUFBUSxFQUFFLElBQUksMEJBQVcsQ0FBQztZQUN0QixPQUFPLEVBQUUsSUFBSTtZQUNiLE9BQU8sRUFBRSxLQUFLO1lBQ2QsS0FBSyxFQUFFLFdBQVc7WUFDbEIsSUFBSSxFQUFFO2dCQUNGLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxFQUFFO2dCQUNSLFFBQVEsRUFBRSxNQUFNO2FBQ25CO1NBQ0osQ0FBQztRQUNGLEtBQUssRUFBRyxJQUFJLHlDQUFrQixDQUFDO1lBQzNCLFNBQVMsRUFBRTtnQkFDUCxLQUFLLEVBQUUsbUJBQW1CO2FBQzdCO1lBQ0QsTUFBTSxFQUFFO2dCQUNKLFVBQVUsRUFBRSxPQUFPO2FBQ3RCO1lBQ0QsV0FBVyxFQUFFLElBQUkscUNBQWdCLENBQUU7Z0JBQy9CLElBQUksRUFBRTtvQkFDRixLQUFLLEVBQUUsRUFBRTtvQkFDVCxZQUFZLEVBQUUsRUFBRTtpQkFDbkI7YUFDSixDQUFDO1NBQ0wsQ0FBQztLQUNMO0lBRUQsY0FBYyxFQUFFO1FBQ1osUUFBUSxFQUFFLElBQUksMEJBQVcsQ0FBQztZQUN0QixPQUFPLEVBQUUsSUFBSTtZQUNiLE9BQU8sRUFBRSxLQUFLO1lBQ2QsS0FBSyxFQUFFLFFBQVE7WUFDZixZQUFZLEVBQUUsSUFBSTtZQUNsQixZQUFZLEVBQUUsTUFBTTtTQUN2QixDQUFDO1FBQ0YsS0FBSyxFQUFHLElBQUkseUNBQWtCLENBQUM7WUFDM0IsU0FBUyxFQUFFO2dCQUNQLEtBQUssRUFBRSxFQUFFO2dCQUNULFlBQVksRUFBRSxFQUFFO2FBQ25CO1lBQ0QsTUFBTSxFQUFFO2dCQUNKLEtBQUssRUFBRSxrQkFBa0I7Z0JBQ3pCLFlBQVksRUFBRSxFQUFFO2dCQUNoQixVQUFVLEVBQUUsRUFBRTthQUNqQjtZQUNELFdBQVcsRUFBRSxJQUFJLHFDQUFnQixDQUFFO2dCQUMvQixJQUFJLEVBQUU7b0JBQ0YsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsWUFBWSxFQUFFLEVBQUU7aUJBQ25CO2FBQ0osQ0FBQztTQUNMLENBQUM7S0FDTDtDQUNKLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJY29uTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvaWNvbi9pY29uLm1vZGVsJztcbmltcG9ydCB7IEljb25TdHlsaW5nTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvaWNvbi9pY29uLXN0eWxpbmcubW9kZWwnO1xuaW1wb3J0IHsgQnV0dG9uTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvYnV0dG9uL2J1dHRvbi5tb2RlbCc7XG5pbXBvcnQgeyBCdXR0b25TdHlsaW5nTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvYnV0dG9uL2J1dHRvbi1zdHlsaW5nLm1vZGVsJztcbmltcG9ydCB7IEljb25UZW1wbGF0ZXMgfSBmcm9tICcuL2ljb24udGVtcGxhdGUnO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uVGVtcGxhdGVzID0ge1xuICAgIGRlZmF1bHRUZW1wbGF0ZToge1xuICAgICAgICBwcm9wZXJ0eTogbmV3IEJ1dHRvbk1vZGVsKHtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICBkaXNhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsOiBcIkNGIEJVVFRPTlwiLFxuICAgICAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic3RhclwiLFxuICAgICAgICAgICAgICAgIHNpemU6IDI0LFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImxlZnRcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgc3R5bGUgOiBuZXcgQnV0dG9uU3R5bGluZ01vZGVsKHtcbiAgICAgICAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBcImRlZmF1bHQtY29udGFpbmVyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b246IHtcbiAgICAgICAgICAgICAgICB0aGVtZUNvbG9yOiBcIndoaXRlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpY29uU3R5bGluZzogbmV3IEljb25TdHlsaW5nTW9kZWwgKHtcbiAgICAgICAgICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkeW5hbWljQ2xhc3M6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0sXG5cbiAgICBzdWJtaXRUZW1wbGF0ZToge1xuICAgICAgICBwcm9wZXJ0eTogbmV3IEJ1dHRvbk1vZGVsKHtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICBkaXNhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsOiBcIlNVQk1JVFwiLFxuICAgICAgICAgICAgaWNvblByb3BlcnR5OiBudWxsLFxuICAgICAgICAgICAgaWNvblBvc2l0aW9uOiBcImxlZnRcIlxuICAgICAgICB9KSxcbiAgICAgICAgc3R5bGUgOiBuZXcgQnV0dG9uU3R5bGluZ01vZGVsKHtcbiAgICAgICAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBcIlwiLFxuICAgICAgICAgICAgICAgIGR5bmFtaWNDbGFzczogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBcImNmLXN1Ym1pdC1idXR0b25cIixcbiAgICAgICAgICAgICAgICBkeW5hbWljQ2xhc3M6IFwiXCIsXG4gICAgICAgICAgICAgICAgdGhlbWVDb2xvcjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGljb25TdHlsaW5nOiBuZXcgSWNvblN0eWxpbmdNb2RlbCAoe1xuICAgICAgICAgICAgICAgIGljb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGR5bmFtaWNDbGFzczogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxufSJdfQ==