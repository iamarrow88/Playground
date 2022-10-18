import {Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  name: string = "";
  description: string = "";
  imgUrl: string = "";
  videoUrl: string = "";
  @Output() transferringName = new EventEmitter<string>;
  @Output() transferringDescr = new EventEmitter<string>;

  constructor() {
  }

  ngOnInit(): void {
  }

  addName() {
    console.log(`Video name is ${this.name}`);
    console.log(`It's description is ${this.description}`);
    console.log(`It's img link is ${this.imgUrl}`);
    console.log(`And video link is ${this.videoUrl}`);
    //, this.description, this.imgUrl, this.videoUrl
    this.transferringName.emit(this.name);
    this.transferringDescr.emit(this.description);

  }
}
