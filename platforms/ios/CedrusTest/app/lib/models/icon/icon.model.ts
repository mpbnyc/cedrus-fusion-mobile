export class IconModel {
    display?: boolean = true;
	name?: string = 'home';
    size?: string = '100';
    type?: string;
	value?: any;
	toggle?: {	
		name?: string;
		type?: string;
		size?: string;
        value?: any;
    }
	
	constructor(values: Object = {}) {
		Object.assign(this, values);
		// if(this.size!=null)
		// 	if(!this.size.endsWith("px") && !this.size.endsWith("%"))
		// 		this.size = this.size + "%";
		
		// if(this.name.startsWith("fa-"))
		// 	this.type = "fa";
		// else
		// 	this.type = "mdi";
		
		// if(this.toggle!=null)
		// {
		// 	if(this.toggle.name.startsWith("fa-"))
		// 		this.toggle.type = "fa";
		// 	else
		// 		this.toggle.type = "mdi";
		// }
    }
}