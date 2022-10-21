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

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    CreateCardFormComponent,
    SearchResultsComponent,
    ErrorMsgComponent,
    VideoInfoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
