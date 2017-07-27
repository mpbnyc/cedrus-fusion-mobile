import { Component, ViewChild } from "@angular/core";
import { TNSFontIconService } from 'nativescript-ng2-fonticon';

@Component({
  selector: "cf-gallery",
  template: `
    
  `,
  styleUrls: [
      './lib/components/gallery/gallery.component.css'
  ]
})
export class AppComponent {
  constructor(private fonticon: TNSFontIconService) {
  }
}
