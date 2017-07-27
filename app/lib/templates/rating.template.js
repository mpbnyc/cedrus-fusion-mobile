"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rating_model_1 = require("../models/rating/rating.model");
var styling_model_1 = require("../models/style/styling.model");
var rating_styling_model_1 = require("../models/rating/rating-styling.model");
exports.RatingTemplates = {
    defaultTemplate: {
        property: new rating_model_1.RatingModel({
            label: 'Rating label',
            icon: 'stars',
            value: 1,
            max: 5,
            countFromEnd: false,
            iconsVertical: false,
            disabled: false
        }),
        style: new rating_styling_model_1.RatingStylingModel({
            container: new styling_model_1.StylingModel({
                class: 'cf-rating-container',
            }),
            label: new styling_model_1.StylingModel({
                class: 'cf-rating-label'
            }),
            item: new styling_model_1.StylingModel({
                class: 'cf-rating-item-icon',
                dynamicClass: "'dynamic-items-class'"
            }),
            iconSize: '30px',
            filledColor: 'lightseagreen',
            emptyColor: 'darkseagreen',
        })
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLnRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmF0aW5nLnRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOERBQTREO0FBQzVELCtEQUE2RDtBQUM3RCw4RUFBMkU7QUFFOUQsUUFBQSxlQUFlLEdBQUc7SUFDM0IsZUFBZSxFQUFFO1FBQ2IsUUFBUSxFQUFFLElBQUksMEJBQVcsQ0FBQztZQUN0QixLQUFLLEVBQUUsY0FBYztZQUNyQixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxDQUFDO1lBQ1IsR0FBRyxFQUFFLENBQUM7WUFDTixZQUFZLEVBQUUsS0FBSztZQUNuQixhQUFhLEVBQUUsS0FBSztZQUNwQixRQUFRLEVBQUUsS0FBSztTQUNsQixDQUFDO1FBQ0YsS0FBSyxFQUFHLElBQUkseUNBQWtCLENBQUM7WUFDM0IsU0FBUyxFQUFFLElBQUksNEJBQVksQ0FBQztnQkFDeEIsS0FBSyxFQUFFLHFCQUFxQjthQUMvQixDQUFDO1lBQ0YsS0FBSyxFQUFFLElBQUksNEJBQVksQ0FBQztnQkFDcEIsS0FBSyxFQUFFLGlCQUFpQjthQUMzQixDQUFDO1lBQ0YsSUFBSSxFQUFFLElBQUksNEJBQVksQ0FBQztnQkFDbkIsS0FBSyxFQUFFLHFCQUFxQjtnQkFDNUIsWUFBWSxFQUFFLHVCQUF1QjthQUN4QyxDQUFDO1lBQ0YsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLGVBQWU7WUFDNUIsVUFBVSxFQUFFLGNBQWM7U0FDN0IsQ0FBQztLQUNMO0NBQ0osQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJhdGluZ01vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL3JhdGluZy9yYXRpbmcubW9kZWwnO1xuaW1wb3J0IHsgU3R5bGluZ01vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL3N0eWxlL3N0eWxpbmcubW9kZWwnO1xuaW1wb3J0IHsgUmF0aW5nU3R5bGluZ01vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL3JhdGluZy9yYXRpbmctc3R5bGluZy5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBSYXRpbmdUZW1wbGF0ZXMgPSB7XG4gICAgZGVmYXVsdFRlbXBsYXRlOiB7XG4gICAgICAgIHByb3BlcnR5OiBuZXcgUmF0aW5nTW9kZWwoe1xuICAgICAgICAgICAgbGFiZWw6ICdSYXRpbmcgbGFiZWwnLFxuICAgICAgICAgICAgaWNvbjogJ3N0YXJzJyxcbiAgICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAgICAgICAgbWF4OiA1LFxuICAgICAgICAgICAgY291bnRGcm9tRW5kOiBmYWxzZSxcbiAgICAgICAgICAgIGljb25zVmVydGljYWw6IGZhbHNlLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgICAgIH0pLFxuICAgICAgICBzdHlsZSA6IG5ldyBSYXRpbmdTdHlsaW5nTW9kZWwoe1xuICAgICAgICAgICAgY29udGFpbmVyOiBuZXcgU3R5bGluZ01vZGVsKHtcbiAgICAgICAgICAgICAgICBjbGFzczogJ2NmLXJhdGluZy1jb250YWluZXInLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBsYWJlbDogbmV3IFN0eWxpbmdNb2RlbCh7XG4gICAgICAgICAgICAgICAgY2xhc3M6ICdjZi1yYXRpbmctbGFiZWwnXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGl0ZW06IG5ldyBTdHlsaW5nTW9kZWwoe1xuICAgICAgICAgICAgICAgIGNsYXNzOiAnY2YtcmF0aW5nLWl0ZW0taWNvbicsXG4gICAgICAgICAgICAgICAgZHluYW1pY0NsYXNzOiBcIidkeW5hbWljLWl0ZW1zLWNsYXNzJ1wiXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGljb25TaXplOiAnMzBweCcsXG4gICAgICAgICAgICBmaWxsZWRDb2xvcjogJ2xpZ2h0c2VhZ3JlZW4nLFxuICAgICAgICAgICAgZW1wdHlDb2xvcjogJ2RhcmtzZWFncmVlbicsXG4gICAgICAgIH0pXG4gICAgfVxufSJdfQ==