"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tabs_card_model_1 = require("../models/tabs/tabs-card.model");
var tabs_card_styling_model_1 = require("../models/tabs/tabs-card-styling.model");
var button_styling_model_1 = require("../models/button/button-styling.model");
exports.TabsCardTemplates = {
    defaultTemplate: {
        property: new tabs_card_model_1.TabsCardModel({
            header: { label: "TabCard" }
        }),
        style: new tabs_card_styling_model_1.TabsCardStylingModel({
            container: {
                class: "",
                dynamicClass: ""
            },
            header: new button_styling_model_1.ButtonStylingModel({
                container: {
                    class: "",
                    dynamicClass: ""
                },
                button: {
                    class: "cf-tabs-card-header-button",
                }
            }),
            iconIndex: {
                class: ""
            },
            prefixIndex: {
                class: ""
            }
        })
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy1jYXJkLnRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFicy1jYXJkLnRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0VBQStEO0FBQy9ELGtGQUE4RTtBQUM5RSw4RUFBMkU7QUFFOUQsUUFBQSxpQkFBaUIsR0FBRztJQUM3QixlQUFlLEVBQUU7UUFDYixRQUFRLEVBQUUsSUFBSSwrQkFBYSxDQUFDO1lBQzlCLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7U0FDekIsQ0FBQztRQUNGLEtBQUssRUFBRyxJQUFJLDhDQUFvQixDQUFDO1lBQzdCLFNBQVMsRUFBRTtnQkFDUCxLQUFLLEVBQUUsRUFBRTtnQkFDVCxZQUFZLEVBQUUsRUFBRTthQUNuQjtZQUNELE1BQU0sRUFBRSxJQUFJLHlDQUFrQixDQUFDO2dCQUMzQixTQUFTLEVBQUU7b0JBQ1AsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsWUFBWSxFQUFFLEVBQUU7aUJBQ25CO2dCQUNELE1BQU0sRUFBRTtvQkFDSixLQUFLLEVBQUUsNEJBQTRCO2lCQUN0QzthQUNKLENBQUM7WUFDRixTQUFTLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLEVBQUU7YUFDWjtZQUNELFdBQVcsRUFBRTtnQkFDVCxLQUFLLEVBQUMsRUFBRTthQUNYO1NBQ0osQ0FBQztLQUNMO0NBQ0osQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYnNDYXJkTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvdGFicy90YWJzLWNhcmQubW9kZWwnO1xuaW1wb3J0IHsgVGFic0NhcmRTdHlsaW5nTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvdGFicy90YWJzLWNhcmQtc3R5bGluZy5tb2RlbCc7XG5pbXBvcnQgeyBCdXR0b25TdHlsaW5nTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvYnV0dG9uL2J1dHRvbi1zdHlsaW5nLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IFRhYnNDYXJkVGVtcGxhdGVzID0ge1xuICAgIGRlZmF1bHRUZW1wbGF0ZToge1xuICAgICAgICBwcm9wZXJ0eTogbmV3IFRhYnNDYXJkTW9kZWwoe1xuXHRcdCAgICBoZWFkZXI6IHsgbGFiZWw6IFwiVGFiQ2FyZFwiIH1cbiAgICAgICAgfSksXG4gICAgICAgIHN0eWxlIDogbmV3IFRhYnNDYXJkU3R5bGluZ01vZGVsKHtcbiAgICAgICAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBcIlwiLFxuICAgICAgICAgICAgICAgIGR5bmFtaWNDbGFzczogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhlYWRlcjogbmV3IEJ1dHRvblN0eWxpbmdNb2RlbCh7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkeW5hbWljQ2xhc3M6IFwiXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJjZi10YWJzLWNhcmQtaGVhZGVyLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaWNvbkluZGV4OiB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmVmaXhJbmRleDoge1xuICAgICAgICAgICAgICAgIGNsYXNzOlwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59Il19