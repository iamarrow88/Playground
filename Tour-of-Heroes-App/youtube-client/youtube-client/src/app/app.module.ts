import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { CreateCardFormComponent } from './create-card-form/create-card-form.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { VideoInfoCardComponent } from './video-info-card/video-info-card.component';
import {FormsModule} from "@angular/forms";
import { ColorLineDirective } from './color-line.directive';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    CreateCardFormComponent,
    SearchResultsComponent,
    ErrorMsgComponent,
    VideoInfoCardComponent,
    ColorLineDirective,
    SearchPipe
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
