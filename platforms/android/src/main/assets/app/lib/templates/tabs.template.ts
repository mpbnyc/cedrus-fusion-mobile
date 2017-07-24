import { TabsModel } from '../models/tabs/tabs.model';
import { TabsStylingModel } from '../models/tabs/tabs-styling.model';

export const TabsTemplates = {
    defaultTemplate: {
        property: new TabsModel({
		    showCardNumberAsPrefix: true,
        }),
        style : new TabsStylingModel({
            container: {
                class: "",
                dynamicClass: ""
            },
        })
    }
}