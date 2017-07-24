import { TabsCardModel } from '../models/tabs/tabs-card.model';
import { TabsCardStylingModel } from '../models/tabs/tabs-card-styling.model';
import { ButtonStylingModel } from '../models/button/button-styling.model';

export const TabsCardTemplates = {
    defaultTemplate: {
        property: new TabsCardModel({
		    header: { label: "TabCard" }
        }),
        style : new TabsCardStylingModel({
            container: {
                class: "",
                dynamicClass: ""
            },
            header: new ButtonStylingModel({
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
                class:""
            }
        })
    }
}