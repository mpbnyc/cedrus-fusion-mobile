import { ButtonModel } from '../button/button.model';

export class TabsCardModel {
	/**
	 * The ButtonModel object for wizard step header button
	 */
	header: ButtonModel;
	/**
	 * It is the constructor for the TabsCardModel component. It takes the values to create the TabsCardModel object.
	 */
	constructor(values: Object = {}) {
		Object.assign(this, values);
    
  	if(this.header==null) this.header = new ButtonModel({ label: "Step", iconPosition: "left" });
    if(this.header.iconPosition==null) this.header.iconPosition = "left";
	}
}