import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  constructor() { }

  @Output() openRegistrationForm = new EventEmitter();
  change() {
    this.openRegistrationForm.emit();
  }
}
