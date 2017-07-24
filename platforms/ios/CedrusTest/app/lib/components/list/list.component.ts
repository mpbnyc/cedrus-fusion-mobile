import { Component, ElementRef, OnInit, Input, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';
import { CfCoreComponent } from '../core/core.component';
import { CfItemComponent } from '../item/item.component';
import { ListModel } from '../../models/list/list.model';

@Component({
	selector: 'cf-list',
    templateUrl: './lib/components/list/list.component.html',
	styleUrls: ['./lib/components/list/list.component.css']
})
export class CfListComponent extends CfCoreComponent implements OnInit {

    cfList: ListModel;

	@Input() public properties: ListModel;

	// @Input() public styling: ListStylingModel;

	@Input() title: string;

	@Input() selectable: boolean = false;

	@Input() withCheckbox: boolean = true;

	selectedItems: number[] = [];

	@Output() onSelect = new EventEmitter();

	randomId: number = 0;

	constructor(public elementRef: ElementRef,/**@hidden */ ) { super(elementRef); }

	ngOnInit(): void {

		// this.getMyTemplate("list",ListTemplates).then(() => {
		// if(this.properties==null)
		// 	this.properties = new ListModel(this.activeTemplate.property);
		// if(this.styling==null)
		// 	this.styling = new ListStylingModel(this.activeTemplate.style);
		
		// if(this.disable!=null) this.properties.disable = this.disable;
		// if(this.display!=null) this.properties.display = this.display;
		// if(this.title!=null) this.properties.title = this.title;
		// this.cfList = this.properties;
		// });
	}

	ngOnChanges(changes: any) {
		if(this.properties)
		{
			if(changes.disable!=null) this.properties.disable = changes.disable.currentValue;
			if(changes.display!=null) this.properties.display = changes.display.currentValue;
			if(changes.title!=null) this.properties.title = changes.title.currentValue;
		}
	}
	/**
	 * Array with list items
	 */
	@ContentChildren(CfItemComponent) items: QueryList<CfItemComponent>;
	/**
	 * After List content was initialized and component is selectable, will be generated IDs for all list items and each selected item ID will be pushed to selectedItems array.
	 */
	ngAfterContentInit() {
		if(this.items!=null && this.items.length>0)
		{
			if(this.selectable!=false)
			{
				for(let item of this.items.toArray())
				{
					item.internalId = this.randomId;
					this.randomId++;
					if(item.selected==true)
					{
						this.selectedItems.push(item.internalId);
					}
					console.log(this.withCheckbox);
					setTimeout(_ => 
									item.selectable = true,
									item.itemClicked.subscribe(data=> this.updateValues(data))
					);
					if(this.withCheckbox!=true)
					{
						item.withCheckbox = false;
					}
				}
			}
		}
	}
	/**
	 * Function to update selectedItems array values and emit them 
   * @param data  item data object
	 */
	updateValues(data)
	{
		if(data["value"]==true)
		{
			this.selectedItems.push(data["id"]);
			this.selectedItems.sort();
			this.onSelect.emit(this.selectedItems);
		}
		else
		{
			this.selectedItems.splice(this.selectedItems.indexOf(data["id"]),1);
			this.onSelect.emit(this.selectedItems);
		}
    }
}