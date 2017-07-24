import { CoreModel } from '../core/core.model';
import { ButtonModel } from '../button/button.model';

export class TabsModel extends CoreModel {
	/**
	 * If to show step number as icon in wizard header steps buttons
	 */
	showStepNumberAsIcon?: boolean;
	/**
	 * If to show step number as prefix in wizard header steps buttons
	 */
	showStepNumberAsPrefix?: boolean;
	/**
	 * It is the constructor for the TabsModel component. It takes the values to create the TabsModel object.
	 */
	constructor(values: Object = {}) {
		super(values);
		Object.assign(this, values);
	}
}