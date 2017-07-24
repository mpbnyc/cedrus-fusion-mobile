"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var icon_model_1 = require("../models/icon/icon.model");
var icon_styling_model_1 = require("../models/icon/icon-styling.model");
exports.IconTemplates = {
    defaultTemplate: {
        property: new icon_model_1.IconModel({
            display: true,
            name: "cloud",
            size: 50,
            value: "icon"
        }),
        style: new icon_styling_model_1.IconStylingModel({
            container: {
                class: ""
            },
            icon: {
                class: "cf-default-icon",
                themeColor: "crimson"
            }
        })
    },
    closeTemplate: {
        property: new icon_model_1.IconModel({
            display: true,
            name: "fa-times-circle",
            size: 18,
            value: "close"
        }),
        style: new icon_styling_model_1.IconStylingModel({
            icon: {
                class: "cf-close-icon"
            }
        })
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi50ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImljb24udGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3REFBc0Q7QUFDdEQsd0VBQXFFO0FBRXhELFFBQUEsYUFBYSxHQUFHO0lBQ3pCLGVBQWUsRUFBRTtRQUNiLFFBQVEsRUFBRSxJQUFJLHNCQUFTLENBQUM7WUFDcEIsT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUUsT0FBTztZQUNiLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLE1BQU07U0FDaEIsQ0FBQztRQUNGLEtBQUssRUFBRyxJQUFJLHFDQUFnQixDQUFDO1lBQ3pCLFNBQVMsRUFBRTtnQkFDUCxLQUFLLEVBQUUsRUFBRTthQUNaO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLFVBQVUsRUFBQyxTQUFTO2FBQ3ZCO1NBQ0osQ0FBQztLQUNMO0lBQ0QsYUFBYSxFQUFFO1FBQ1gsUUFBUSxFQUFFLElBQUksc0JBQVMsQ0FBQztZQUNwQixPQUFPLEVBQUUsSUFBSTtZQUNiLElBQUksRUFBRSxpQkFBaUI7WUFDdkIsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsT0FBTztTQUNqQixDQUFDO1FBQ0YsS0FBSyxFQUFHLElBQUkscUNBQWdCLENBQUM7WUFDekIsSUFBSSxFQUFFO2dCQUNGLEtBQUssRUFBRSxlQUFlO2FBQ3pCO1NBQ0osQ0FBQztLQUNMO0NBQ0osQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEljb25Nb2RlbCB9IGZyb20gJy4uL21vZGVscy9pY29uL2ljb24ubW9kZWwnO1xuaW1wb3J0IHsgSWNvblN0eWxpbmdNb2RlbCB9IGZyb20gJy4uL21vZGVscy9pY29uL2ljb24tc3R5bGluZy5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBJY29uVGVtcGxhdGVzID0ge1xuICAgIGRlZmF1bHRUZW1wbGF0ZToge1xuICAgICAgICBwcm9wZXJ0eTogbmV3IEljb25Nb2RlbCh7XG4gICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogXCJjbG91ZFwiLFxuICAgICAgICAgICAgc2l6ZTogNTAsXG4gICAgICAgICAgICB2YWx1ZTogXCJpY29uXCJcbiAgICAgICAgfSksXG4gICAgICAgIHN0eWxlIDogbmV3IEljb25TdHlsaW5nTW9kZWwoe1xuICAgICAgICAgICAgY29udGFpbmVyOiB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFwiY2YtZGVmYXVsdC1pY29uXCIsXG4gICAgICAgICAgICAgICAgdGhlbWVDb2xvcjpcImNyaW1zb25cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgY2xvc2VUZW1wbGF0ZToge1xuICAgICAgICBwcm9wZXJ0eTogbmV3IEljb25Nb2RlbCh7XG4gICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogXCJmYS10aW1lcy1jaXJjbGVcIixcbiAgICAgICAgICAgIHNpemU6IDE4LFxuICAgICAgICAgICAgdmFsdWU6IFwiY2xvc2VcIlxuICAgICAgICB9KSxcbiAgICAgICAgc3R5bGUgOiBuZXcgSWNvblN0eWxpbmdNb2RlbCh7XG4gICAgICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFwiY2YtY2xvc2UtaWNvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufSJdfQ==