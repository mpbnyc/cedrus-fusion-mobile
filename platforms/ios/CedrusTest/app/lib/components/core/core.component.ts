import { Component, OnInit, Input, ElementRef, Output, EventEmitter, ReflectiveInjector } from '@angular/core';
// import { Themes } from '../../models/theme/themes';
// import { NotificationModel } from '../../models/notification';

// import { DraggableService } from '../../services/draggable-service/draggable.service';

// import { TemplateService } from '../../services/template-service/template.service';

@Component({
  selector: 'cf-core',
  templateUrl: './core.component.html'
})
export class CfCoreComponent implements OnInit {

//   injector = ReflectiveInjector.resolveAndCreate([DraggableService]);

//   draggableService: DraggableService;

  @Input()
  public id: string = CfCoreComponent.generateId();

  @Input()
//   public themeClass: string = Themes.default_theme;

  public nativeElement: any;

  @Input()
  public tooltip: any;

  @Input()
  public display: boolean = true;

  @Input()
  public disable: boolean = false;

  @Input()
  public enabledI18N: boolean;

  @Input() 
  public draggable: boolean;

  @Input() 
  public cfClass: string;

//   @Input()
//   public notification: NotificationModel;

  @Input()
  public compTemplate: any;
  activeTemplate: any;

  @Output()
  notificationAction: EventEmitter<any> = new EventEmitter<any>();

  subscriptionTags: string[] = [];

  constructor(public elementRef: ElementRef) {
    this.nativeElement = this.elementRef.nativeElement;
    // this.draggableService = this.injector.get(DraggableService);
  }
  ngOnInit() {
    if (this.draggable) {
    //   this.draggableService.makeDraggable(this.id, this.elementRef.nativeElement, true);
    }
  }
  updateAttribute(elementName: string,attributeName: string, attributeValue): boolean
  {
    var element = this.nativeElement.querySelector(elementName);
    var myAttr = this.nativeElement.getAttribute(attributeName);
    if(myAttr === null)
    {
      element.removeAttribute(attributeName);
      return false;
    }
    else
    {
      element.setAttribute(attributeName, attributeValue);
      this.nativeElement.removeAttribute(attributeName);
      return true;
    }
  }

  getMyTemplate(name: string, templatesObject) {
    let activeTemplate = templatesObject["defaultTemplate"];
    
    // return new Promise((resolve) => {
    //   this.templateService.loadTemplateJson(name, templatesObject, this.compTemplate)
    //     .subscribe(newTemp => {
          
    //       if(newTemp!=null)
    //       {
    //         activeTemplate = newTemp;
    //       }
    //       this.activeTemplate = activeTemplate;
    //       resolve();
    //     },
    //     err => { 
    //               this.activeTemplate = activeTemplate;
    //               resolve();
    //     })
    // });
  }
  static generateId(): string {
      return '' + Math.floor(Math.random() * 100000);
  }
}