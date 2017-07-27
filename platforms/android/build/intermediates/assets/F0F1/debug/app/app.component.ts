import { Component, ViewChild } from "@angular/core";
import { TNSFontIconService } from 'nativescript-ng2-fonticon';
import { IconModel } from "./lib/models/icon/icon.model";
import { ButtonModel } from "./lib/models/button/button.model";
import { InputModel } from "./lib/models/input/input.model";

@Component({
  selector: "my-app",
  template: `
    <StackLayout>
      <cf-image url="http://coolwildlife.com/wp-content/uploads/galleries/post-3004/Fox%20Picture%20003.jpg" label="a fox"></cf-image>
      <cf-rating></cf-rating>
    </StackLayout>
  `,
  styleUrls: []
})
export class AppComponent {
  registry: string[] = [];
  options: string[] = ['whatever', 'something', 'another'];
  buttonDisabled: boolean = true;
  dataBoundVariable: any;

  constructor(private fonticon: TNSFontIconService) {
  }
}
