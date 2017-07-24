import { Component, Input, Output, EventEmitter, OnInit, ElementRef, ViewChild } from "@angular/core";
import { CfCoreComponent } from '../core/core.component';
import { IconModel } from '../../models/icon/icon.model'
@Component({
	selector: 'cf-item',
    templateUrl: "./lib/components/item/item.component.html",
    styleUrls: [
        './lib/components/item/item.component.css'
    ]
})

/**
 * <p> The item component can be used anywhere as a general item or inside cf-list component as a list item.</p>
 * <p> The item component consists of 2 tabs: Default template (always shown) and the details template.</p>
 */
export class CfItemComponent extends CfCoreComponent implements OnInit {
	@Input() details: boolean = true;

	selectedValue: boolean  = false;

	@Input() selectable: boolean = false;
	@Input() withCheckbox: boolean = true;

	@Input() get selected() { return this.selectedValue; }
	@Output() selectedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	@Output() itemClicked = new EventEmitter();

	set selected(val)
	{
		this.selectedValue = val;
		this.selectedChange.emit(this.selectedValue);
	}

	internalId: number;

	showDetails: boolean = true;
	
	constructor(public elementRef: ElementRef) {
		super(elementRef);
	}

	ngOnInit() {
		// this.getMyTemplate("item",ItemTemplates).then(() => {
		// if(this.styling==null)
		// {
		// 	this.styling = new ItemStylingModel (this.activeTemplate["style"]);
		// }
		// });
	}

	ngOnChanges(changes: any){
	}

	// @ViewChild(CfCheckboxComponent) checkbox: CfCheckboxComponent;

	selectMe() {
		if(this.selectable==true)
		{
			this.selected = !this.selected;
			this.itemClicked.emit({"id":this.internalId, "value": this.selectedValue});
		}
	}

	notifyList(){
		if(this.selectable==true)
		{
			this.itemClicked.emit({"id":this.internalId, "value": !this.selectedValue});
		}
    }
    
    showTheDetails() {
        this.showDetails =!this.showDetails
    }

    myFusionIcon = new IconModel ({
        name: 'mdi-chevron-right',
        size: 50,
        value: 'whatever',
        toggle:{
            name: 'mdi-chevron-right',
            size: 50,
            value: 'whatever'
        }
    });
}