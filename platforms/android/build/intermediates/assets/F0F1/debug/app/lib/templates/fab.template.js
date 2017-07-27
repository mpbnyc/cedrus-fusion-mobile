"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fab_model_1 = require("../models/fab/fab.model");
exports.FabTemplates = {
    defaultTemplate: {
        property: new fab_model_1.FabModel({
            direction: "right",
            actionButtons: [
                { icon: { name: "home" }, display: true }
            ],
            triggerButton: {
                icon: {
                    name: "menu"
                }
            },
            labelPosition: "above" // can be: above, below, right, left
        }),
        style: {
            container: {
                class: "",
                dynamicClass: ""
            },
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFiLnRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmFiLnRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscURBQW1EO0FBRXRDLFFBQUEsWUFBWSxHQUFHO0lBQ3hCLGVBQWUsRUFBRTtRQUNiLFFBQVEsRUFBRSxJQUFJLG9CQUFRLENBQUM7WUFDbkIsU0FBUyxFQUFFLE9BQU87WUFDbEIsYUFBYSxFQUFFO2dCQUNYLEVBQUUsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7YUFBRTtZQUM3QyxhQUFhLEVBQUU7Z0JBQ1gsSUFBSSxFQUFFO29CQUNGLElBQUksRUFBRSxNQUFNO2lCQUNmO2FBQ0o7WUFDRCxhQUFhLEVBQUUsT0FBTyxDQUFDLG9DQUFvQztTQUM5RCxDQUFDO1FBQ0YsS0FBSyxFQUFHO1lBQ0osU0FBUyxFQUFFO2dCQUNQLEtBQUssRUFBRSxFQUFFO2dCQUNULFlBQVksRUFBRSxFQUFFO2FBQ25CO1NBQ0o7S0FDSjtDQUNKLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYWJNb2RlbCB9IGZyb20gJy4uL21vZGVscy9mYWIvZmFiLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IEZhYlRlbXBsYXRlcyA9IHtcbiAgICBkZWZhdWx0VGVtcGxhdGU6IHtcbiAgICAgICAgcHJvcGVydHk6IG5ldyBGYWJNb2RlbCh7ICAgIFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcInJpZ2h0XCIsIC8vIGNhbiBiZTogdXAsIGRvd24sIHJpZ2h0LCBsZWZ0ICAgIFxuICAgICAgICAgICAgYWN0aW9uQnV0dG9uczogW1xuICAgICAgICAgICAgICAgIHsgaWNvbjoge25hbWU6IFwiaG9tZVwifSwgZGlzcGxheTogdHJ1ZSB9IF0sXG4gICAgICAgICAgICB0cmlnZ2VyQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1lbnVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsYWJlbFBvc2l0aW9uOiBcImFib3ZlXCIgLy8gY2FuIGJlOiBhYm92ZSwgYmVsb3csIHJpZ2h0LCBsZWZ0XG4gICAgICAgIH0pLFxuICAgICAgICBzdHlsZSA6IHtcbiAgICAgICAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBcIlwiLFxuICAgICAgICAgICAgICAgIGR5bmFtaWNDbGFzczogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=