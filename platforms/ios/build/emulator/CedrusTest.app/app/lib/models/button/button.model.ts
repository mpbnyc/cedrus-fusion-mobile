export class ButtonModel {
	label?: string = 'BTN';
	icon?: {
    name: string,
    position: string,
    size: string
  }
	waiting?: { 
		value: boolean;
		disabled: boolean;
		icon: {
      name: string,
      position: string,
      size: string
    }
	};

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}