import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() openLoginForm = new EventEmitter();
  changeReg() {
    console.log('changeReg() is working')
    this.openLoginForm.emit();
  }

  pick() {
    console.log('pick')
  }
}
