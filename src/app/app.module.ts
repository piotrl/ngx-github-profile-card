import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WizardComponent } from './wizard/wizard.component';
import { FormConfigComponent } from './wizard/form-config/form-config.component';
import { WidgetPreviewComponent } from './wizard/widget-preview/widget-preview.component';
import { GeneratedConfigCodeComponent } from './generated-config-code/generated-config-code.component';


@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    FormConfigComponent,
    WidgetPreviewComponent,
    GeneratedConfigCodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
