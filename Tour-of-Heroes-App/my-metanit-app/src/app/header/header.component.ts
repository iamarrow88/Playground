import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() name: string = '';
  @Input() age: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  @Output() onChanged = new EventEmitter<boolean>;
  change(increased: any) {
    this.onChanged.emit(increased);
  }

}
