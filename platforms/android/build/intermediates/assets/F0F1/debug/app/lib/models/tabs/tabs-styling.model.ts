import { StylingModel } from '../style/styling.model';
import { CoreStylingModel } from '../core/core-styling.model';
import { ButtonStylingModel } from '../button/button-styling.model';

export class TabsStylingModel extends CoreStylingModel {
	/**
	 * It is the constructor for the TabsStylingModel. It takes the values to create the TabsStylingModel object.
	 */
	constructor(values: Object = {}) {
    super(values);
		Object.assign(this, values);
	}
}