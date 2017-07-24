import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { CfCoreComponent } from '../core/core.component';
import { IconModel } from '../../models/icon/icon.model';

@Component({
  selector: "cf-icon",
  templateUrl: './lib/components/icon/icon.component.html'
})
export class CfIconComponent extends CfCoreComponent implements OnInit {
    @Input() properties: IconModel;
    @Input() cfIcon: IconModel;
    @Output() cfOnToggle: EventEmitter<any> = new EventEmitter<any>();
    checked: boolean = false;
    value: any;
    currentIcon: any = {};
    name: string;
    type: string;
    size: string;

    cfIconToggled() {
        this.checked = !this.checked;
        if(this.currentIcon == this.cfIcon)
            this.currentIcon = this.cfIcon.toggle;
        else
            this.currentIcon = this.cfIcon;
        this.cfOnToggle.emit(this.currentIcon.value); 
    }

    ngOnInit() {
        if(this.cfIcon) {
            this.currentIcon = this.cfIcon;
        }
    //     var mainKeys = Object.keys(this.activeTemplate["property"]);
	// 			if(this.properties.toggle!=null && this.activeTemplate["property"].toggle!=null)
	// 			{
	// 				var toggleKeys = Object.keys(this.activeTemplate["property"].toggle);
	// 				for(let key of toggleKeys)
	// 				{
	// 					if(this.properties["toggle"][key]==null)
	// 						this.properties["toggle"][key]=this.activeTemplate["property"]["toggle"][key];
	// 				}
	// 			} 
	// 			for(let key of mainKeys)
	// 			{
	// 				if(this.properties[key]==null)
	// 					this.properties[key]=this.activeTemplate["property"][key];
	// 			}

	// 		// if(this.styling==null)
	// 		// 	this.styling = new IconStylingModel(this.activeTemplate["style"]);
	// 		if(this.display!=null) this.properties.display = this.display;
	// 		if(this.name!=null) this.properties.name = this.name;

	// 		if(this.properties.name.startsWith("fa-"))
	// 			this.properties.type = "fa";
	// 		else
	// 			this.properties.type = "mi";
				
	// 		if(this.size!=null) this.properties.size = this.size;

	// 		this.cfIcon = this.properties;
	// 		this.currentIcon = this.cfIcon;
    // }
    }
}