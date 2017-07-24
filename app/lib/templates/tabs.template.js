"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tabs_model_1 = require("../models/tabs/tabs.model");
var tabs_styling_model_1 = require("../models/tabs/tabs-styling.model");
exports.TabsTemplates = {
    defaultTemplate: {
        property: new tabs_model_1.TabsModel({
            showCardNumberAsPrefix: true,
        }),
        style: new tabs_styling_model_1.TabsStylingModel({
            container: {
                class: "",
                dynamicClass: ""
            },
        })
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy50ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhYnMudGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3REFBc0Q7QUFDdEQsd0VBQXFFO0FBRXhELFFBQUEsYUFBYSxHQUFHO0lBQ3pCLGVBQWUsRUFBRTtRQUNiLFFBQVEsRUFBRSxJQUFJLHNCQUFTLENBQUM7WUFDMUIsc0JBQXNCLEVBQUUsSUFBSTtTQUN6QixDQUFDO1FBQ0YsS0FBSyxFQUFHLElBQUkscUNBQWdCLENBQUM7WUFDekIsU0FBUyxFQUFFO2dCQUNQLEtBQUssRUFBRSxFQUFFO2dCQUNULFlBQVksRUFBRSxFQUFFO2FBQ25CO1NBQ0osQ0FBQztLQUNMO0NBQ0osQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYnNNb2RlbCB9IGZyb20gJy4uL21vZGVscy90YWJzL3RhYnMubW9kZWwnO1xuaW1wb3J0IHsgVGFic1N0eWxpbmdNb2RlbCB9IGZyb20gJy4uL21vZGVscy90YWJzL3RhYnMtc3R5bGluZy5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBUYWJzVGVtcGxhdGVzID0ge1xuICAgIGRlZmF1bHRUZW1wbGF0ZToge1xuICAgICAgICBwcm9wZXJ0eTogbmV3IFRhYnNNb2RlbCh7XG5cdFx0ICAgIHNob3dDYXJkTnVtYmVyQXNQcmVmaXg6IHRydWUsXG4gICAgICAgIH0pLFxuICAgICAgICBzdHlsZSA6IG5ldyBUYWJzU3R5bGluZ01vZGVsKHtcbiAgICAgICAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBcIlwiLFxuICAgICAgICAgICAgICAgIGR5bmFtaWNDbGFzczogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICB9XG59Il19