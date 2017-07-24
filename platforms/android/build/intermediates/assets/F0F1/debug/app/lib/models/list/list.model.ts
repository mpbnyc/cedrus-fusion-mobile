export class ListModel {
	/**
	 * It is title for the Component.
	 */
    disable?: boolean;
    display?: boolean;
	title?: string;
	/**
	 * It is icon constructor, which take values from List Component and create List Model object.
	 */
	constructor(values: Object = {}) {
        Object.assign(this, values);
	}
}