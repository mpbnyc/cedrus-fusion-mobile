import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { IconModel } from '../../models/icon/icon.model';
import { ButtonModel } from '../../models/button/button.model';
import { CfCoreComponent } from '../core/core.component';

@Component({
  selector: "cf-button",
  templateUrl: './lib/components/button/button.component.html'
})
export class CfButtonComponent extends CfCoreComponent {
  @Input() cfButton: ButtonModel;
  @Input() label: string;
  @Input() iconName: string;
  @Input() wait: boolean;
  @Input() disabled: boolean = false;

  @Output() cfOnTap = new EventEmitter();

  onTap() {
    this.cfOnTap.emit();
  }
}