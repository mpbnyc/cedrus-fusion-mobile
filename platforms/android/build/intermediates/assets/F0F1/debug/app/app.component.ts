import { Component, ViewChild } from "@angular/core";
import { TNSFontIconService } from 'nativescript-ng2-fonticon';
import { IconModel } from "./lib/models/icon/icon.model";
import { ButtonModel } from "./lib/models/button/button.model";
import { InputModel } from "./lib/models/input/input.model";

@Component({
  selector: "my-app",
  template: `
  <TabView>
    <StackLayout *tabItem="{title: 'Profile', iconSource: '~/icon.png'}" >
        <ListView [items]="items">
            <template let-item="item">
                <Label [text]="item.itemDesc"></Label>
            </template>
        </ListView>
    </StackLayout>
    <StackLayout *tabItem="{title: 'Stats'}">
        <Label text="Second tab item"></Label>
    </StackLayout>
    <StackLayout *tabItem="{title: 'Settings'}">
        <Label text="Third tab item"></Label>
    </StackLayout>
  </TabView>
  `,
  // template: `
  // <StackLayout>
  //     <cf-item>
  //       <Label class="h1" text="This is a heading"></Label>
  //       <StackLayout item-details>
  //       <Label class="h2" text="This is a smaller heading"></Label>
  //       <Label class="body" textWrap="true" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></Label>
  //       </StackLayout>
  //     </cf-item>
  //     <cf-item>
  //       <Label class="h1" text="This is a heading"></Label>
  //       <StackLayout item-details>
  //       <Label class="h2" text="This is a smaller heading"></Label>
  //       <Label class="body" textWrap="true" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></Label>
  //       </StackLayout>
  //     </cf-item>
  // </StackLayout>
  // `
})
export class AppComponent {
  registry: string[] = [];
  options: string[] = ['whatever', 'something', 'another'];
  buttonDisabled: boolean = true;
  dataBoundVariable: any;
  myFusionIcon = new IconModel ({
    name: 'mdi-done',
    size: 100,
    value: 'whatever',
    toggle: {
      name: 'mdi-block',
      value: 'nonsense',
      size: 100
    }
  });
  myFusionButton = new ButtonModel ({
    icon: {
      name: 'mdi-star',
      size: '50',
      position: 'right'
    },
    waiting: {
      value: false,
      disabled: true,
      icon: {
        name: 'mdi-favorite',
        size: '50',
        position: 'left'
      }
    }
  });
  myFusionInput = new InputModel ({
    placeholder: "enter text here",
    hint: "no character limit",
    icon: null
  });
  constructor(private fonticon: TNSFontIconService) {
    
  }
  onToggle() {
    console.log("hello debugger");
    this.buttonDisabled = !this.buttonDisabled;
  }
}
