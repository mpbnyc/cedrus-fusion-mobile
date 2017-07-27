import { Component, ViewChild } from "@angular/core";
import { TNSFontIconService } from 'nativescript-ng2-fonticon';
import { IconModel } from "./lib/models/icon/icon.model";
import { ButtonModel } from "./lib/models/button/button.model";
import { InputModel } from "./lib/models/input/input.model";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { registerElement } from "nativescript-angular/element-registry";
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
  selector: "my-app",
  template: `
    <StackLayout>
      <cf-button (onTap)="onButtonTap()"></cf-button>
      <cf-rating></cf-rating>
      <cf-input></cf-input>
    </StackLayout>
  `,
  styleUrls: []
})
export class AppComponent {
  myPictures: any[] = [{
    url: "http://coolwildlife.com/wp-content/uploads/galleries/post-3004/Fox%20Picture%20003.jpg",
    caption: "a fox"
  },
  {
    url: "http://www.pestworld.org/media/561871/istock_000001190722_large.jpg",
    caption: "a raccoon"
  }
]
  registry: string[] = [];
  options: string[] = ['whatever', 'something', 'another'];
  buttonDisabled: boolean = true;
  dataBoundVariable: any;

  onButtonTap() {
    dialogs.alert('hello friend');
  }

  constructor(private fonticon: TNSFontIconService) {
  }
}
