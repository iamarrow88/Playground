import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temlpate-var',
  templateUrl: './temlpate-var.component.html',
  styleUrls: ['./temlpate-var.component.scss']
})
export class TemlpateVarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  counter: number = 0;

  changeCounter(): void {
    this.counter++;
    console.log(this.counter);
  }
}
