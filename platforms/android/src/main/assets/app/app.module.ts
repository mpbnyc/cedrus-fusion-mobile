import { NgModule, NO_ERRORS_SCHEMA, ElementRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NativeScriptHttpModule } from "nativescript-angular/http";
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
import { TemplateService } from "./lib/services/template-service/template.service";
import { ConfigService } from "./lib/services/configuration-service/configuration.service";
import { registerElement } from "nativescript-angular/element-registry";

registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);
@NgModule({
  declarations: [AppComponent, CfIconComponent, CfButtonComponent, CfInputComponent, CfItemComponent, CfListComponent, CfSelectableComponent, CfCheckboxComponent, CfSwitchComponent, CfSelectComponent],
  bootstrap: [AppComponent],
  imports: [
    CommonModule,
    NativeScriptHttpModule,
    NativeScriptModule,
    NativeScriptFormsModule,
    TNSCheckBoxModule,
    DropDownModule,
    TNSFontIconModule.forRoot({
        'mdi': 'material-design-icons.css'
    })
  ],
  providers: [ TNSFontIconService, TemplateService, ConfigService],
  exports: [  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
