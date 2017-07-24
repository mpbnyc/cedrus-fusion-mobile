export class SelectableModel {
	disable?: boolean = false;
	display?: boolean = true;
	value?: string = 'value';
	checked?: boolean = false;
	itemPosition?: string = 'after';
	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}