import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isSettingsOpen: boolean = false;
  isLoginBlockOpen: boolean = false;
  isRegistrationFormOpen: boolean = false;
  searchKey: string = '';

  openSettings() {
    this.isSettingsOpen = !this.isSettingsOpen;
  }

  openLoginBlock() {
    this.isLoginBlockOpen = !this.isLoginBlockOpen;
    if (this.isRegistrationFormOpen) this.isRegistrationFormOpen = !this.isRegistrationFormOpen;
  }

  openRegistrationForm() {
    this.isRegistrationFormOpen = !this.isRegistrationFormOpen;
    if (this.isLoginBlockOpen) this.isLoginBlockOpen = !this.isLoginBlockOpen;
  }
}
