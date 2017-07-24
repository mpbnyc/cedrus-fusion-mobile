import { SelectItemModel } from './select-item.model';
export class SelectModel {

	/**
	 * <p>Array with option items</p>
	 */
	items: SelectItemModel[] = [];

	/**
	 * <p>Select component must have some selected item and it is value of item property described in <b>itemValue</b></p>
	 */
	selected: any = '';

	/**
	 * <p>Placeholder text</p>
	 */
	placeholder: string = '';

	/**
	 * <p>Show/Hide filter</p>
	 */
	showFilter: Boolean = false;

	/**@hidden
	 * It is icon constructor, which take values from Select Component and create Select Model object.
	 */
	constructor(values: Object = {}) {
		Object.assign(this, values);
    }
}