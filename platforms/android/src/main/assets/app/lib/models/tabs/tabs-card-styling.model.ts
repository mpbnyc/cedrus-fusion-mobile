import { StylingModel } from '../style/styling.model';
import { CoreStylingModel } from '../core/core-styling.model';
import { ButtonStylingModel } from '../button/button-styling.model';

export class TabsCardStylingModel extends CoreStylingModel {
	/**
	 * Styling by type ButtonStylingModel
	 */
	header: ButtonStylingModel;
	/**
	 * Styling by type StylingModel
	 */
	iconIndex: StylingModel;
	/**
	 * Styling by type StylingModel
	 */
	prefixIndex: StylingModel;
	/**
	 * It is the constructor for the TabsCardStylingModel. It takes the values to create the TabsCardStylingModel object.
	 */
	constructor(values: Object = {}) {
    super(values);
		Object.assign(this, values);

    if(this.header==null) this.header = new ButtonStylingModel();
    if(this.iconIndex==null) this.iconIndex = new StylingModel();
    if(this.prefixIndex==null) this.prefixIndex = new StylingModel();
	}
}