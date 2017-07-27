"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var image_model_1 = require("../models/image/image.model");
var image_styling_model_1 = require("../models/image/image-styling.model");
exports.ImageTemplates = {
    defaultTemplate: {
        property: new image_model_1.ImageModel({
            // label: 'Figure 1: Default Caption',
            label: '',
            labelPosition: 'bottom',
            url: 'https://s-media-cache-ak0.pinimg.com/736x/d7/73/86/d7738697514f2d53efa84278ae2af614--felt-tip-pen-art-bullet-journal-mountains.jpg',
        }),
        style: new image_styling_model_1.ImageStylingModel({
            container: {
                class: "cf-defaultImageContainer",
            },
            image: {
                class: "cf-defaultImage",
            },
            label: {
                class: "cf-defaultImageLabel"
            }
        })
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UudGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWFnZS50ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUF5RDtBQUN6RCwyRUFBd0U7QUFFM0QsUUFBQSxjQUFjLEdBQUc7SUFDMUIsZUFBZSxFQUFFO1FBQ2IsUUFBUSxFQUFFLElBQUksd0JBQVUsQ0FBQztZQUNyQixzQ0FBc0M7WUFDdEMsS0FBSyxFQUFFLEVBQUU7WUFDVCxhQUFhLEVBQUUsUUFBUTtZQUN2QixHQUFHLEVBQUUsb0lBQW9JO1NBQzVJLENBQUM7UUFDRixLQUFLLEVBQUcsSUFBSSx1Q0FBaUIsQ0FBQztZQUMxQixTQUFTLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLDBCQUEwQjthQUNwQztZQUNELEtBQUssRUFBRTtnQkFDSCxLQUFLLEVBQUUsaUJBQWlCO2FBQzNCO1lBQ0QsS0FBSyxFQUFFO2dCQUNILEtBQUssRUFBRSxzQkFBc0I7YUFDaEM7U0FDSixDQUFDO0tBQ0w7Q0FDSixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW1hZ2VNb2RlbCB9IGZyb20gJy4uL21vZGVscy9pbWFnZS9pbWFnZS5tb2RlbCc7XG5pbXBvcnQgeyBJbWFnZVN0eWxpbmdNb2RlbCB9IGZyb20gJy4uL21vZGVscy9pbWFnZS9pbWFnZS1zdHlsaW5nLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IEltYWdlVGVtcGxhdGVzID0ge1xuICAgIGRlZmF1bHRUZW1wbGF0ZToge1xuICAgICAgICBwcm9wZXJ0eTogbmV3IEltYWdlTW9kZWwoe1xuICAgICAgICAgICAgLy8gbGFiZWw6ICdGaWd1cmUgMTogRGVmYXVsdCBDYXB0aW9uJyxcbiAgICAgICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgICAgIGxhYmVsUG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9zLW1lZGlhLWNhY2hlLWFrMC5waW5pbWcuY29tLzczNngvZDcvNzMvODYvZDc3Mzg2OTc1MTRmMmQ1M2VmYTg0Mjc4YWUyYWY2MTQtLWZlbHQtdGlwLXBlbi1hcnQtYnVsbGV0LWpvdXJuYWwtbW91bnRhaW5zLmpwZycsXG4gICAgICAgIH0pLFxuICAgICAgICBzdHlsZSA6IG5ldyBJbWFnZVN0eWxpbmdNb2RlbCh7XG4gICAgICAgICAgICBjb250YWluZXI6IHtcbiAgICAgICAgICAgICAgICBjbGFzczogXCJjZi1kZWZhdWx0SW1hZ2VDb250YWluZXJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBcImNmLWRlZmF1bHRJbWFnZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFwiY2YtZGVmYXVsdEltYWdlTGFiZWxcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn0iXX0=