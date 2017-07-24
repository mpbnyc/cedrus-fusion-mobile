import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';
import { TNSFontIconModule, TNSFontIconService } from 'nativescript-ng2-fonticon';
import { DropDownModule } from "nativescript-drop-down/angular";
import { AppComponent } from "./app.component";
import { CfIconComponent } from "./lib/components/icon/icon.component";
import { CfButtonComponent } from "./lib/components/button/button.component";
import { CfInputComponent } from "./lib/components/input/input.component";
import { CfItemComponent } from "./lib/components/item/item.component";
import { CfListComponent } from "./lib/components/list/list.component";
import { CfSelectableComponent } from "./lib/components/selectable/selectable.component";
import { CfCheckboxComponent } from "./lib/components/checkbox/checkbox.component";
import { CfSwitchComponent } from "./lib/components/switch/switch.component";
import { CfSelectComponent } from "./lib/components/select/select.component";
import { registerElement } from "nativescript-angular/element-registry";

registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);
@NgModule({
  declarations: [AppComponent, CfIconComponent, CfButtonComponent, CfInputComponent, CfItemComponent, CfListComponent, CfSelectableComponent, CfCheckboxComponent, CfSwitchComponent, CfSelectComponent],
  bootstrap: [AppComponent],
  providers: [TNSFontIconService],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    TNSCheckBoxModule,
    DropDownModule,
    TNSFontIconModule.forRoot({
        'mdi': 'material-design-icons.css'
    })
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
