import { Component, ViewChild } from "@angular/core";
import { TNSFontIconService } from 'nativescript-ng2-fonticon';
import { IconModel } from "./lib/models/icon/icon.model";
import { ButtonModel } from "./lib/models/button/button.model";
import { InputModel } from "./lib/models/input/input.model";

@Component({
  selector: "my-app",
  template: `
  <StackLayout>
    <cf-icon></cf-icon>
    <cf-button></cf-button>
    <cf-switch></cf-switch>
  </StackLayout>
  `,
  styleUrls: ['./app.css']
})
export class AppComponent {
  registry: string[] = [];
  options: string[] = ['whateer', 'something', 'another'];
  buttonDisabled: boolean = true;
  dataBoundVariable: any;

  myFusionInput = new InputModel ({
    placeholder: "enter text here",
    hint: "no character limit",
    icon: null
  });
  constructor(private fonticon: TNSFontIconService) {
    
  }
  onToggle() {
    this.buttonDisabled = !this.buttonDisabled;
  }
}
