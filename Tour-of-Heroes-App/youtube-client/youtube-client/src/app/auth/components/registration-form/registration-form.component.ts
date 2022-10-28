import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent {

  constructor() { }
  @Output() openLoginForm = new EventEmitter();
  changeReg() {
    this.openLoginForm.emit();
  }
}
