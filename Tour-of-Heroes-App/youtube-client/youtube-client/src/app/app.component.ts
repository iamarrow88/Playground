import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'youtube-client';
  openRegistrationForm() {
    console.log('openRegistrationForm() is working')

      console.log('It was passed condition')
      this.isRegistrationFormOpen = !this.isRegistrationFormOpen;
      if (this.isLoginBlockOpen) this.isLoginBlockOpen = !this.isLoginBlockOpen;

  }
}
