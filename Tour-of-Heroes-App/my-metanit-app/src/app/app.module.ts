import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import {FormsModule} from "@angular/forms";
import { AddFormComponent } from './add-form/add-form.component';
import { TemlpateVarComponent } from './temlpate-var/temlpate-var.component';
import { FontSizeDirective } from './font-size.directive';
import { RainbowKeyboardDirective } from './rainbow-keyboard.directive';
import { SetColorDirective } from './set-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    AddFormComponent,
    TemlpateVarComponent,
    FontSizeDirective,
    RainbowKeyboardDirective,
    SetColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
