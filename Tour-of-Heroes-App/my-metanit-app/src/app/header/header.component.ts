import {Component, OnInit, Input, EventEmitter, Output, SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() name: string = '';
  @Input() age: number = 0;
  @Input() selectedName: string = '';
  colors: string[] = [
    'red',
    'blue',
    'violet',
    'yellow',
    'yellowgreen',
    'orange',
    'green',
    'pink',
    'darksalmon',
    'hotpink',
    'lightskyblue',
    'goldenrod',
    'peachpuff',
    'mediumspringgreen',
    'cornflowerblue',
    'blanchedalmond',
    'lightslategrey'
  ]

  constructor() {
    console.log(`constructor`);
  }

  ngOnInit() {
    console.log('ngngOnInit: ');

  }
  ngOnChanges(changes: SimpleChanges ): void {
    console.log('OnChanges: ' + changes);
  }

/*
  DoCheck(): void {
    console.log('DoCheck');
  }

  AfterViewInit(): void {
    console.log('AfterViewInit');
  }

  AfterContentInit(): void {
    console.log('AfterContentInit');
  };

  AfterContentChecked(): void {
    console.log('AfterContentChecked');
  };

  AfterViewChecked (): void {
    console.log('AfterViewChecked');
  };

  OnDestroy(): void {
    console.log('OnDestroy');
  }*/
  @Output() onChanged = new EventEmitter<boolean>;
  change(increased: any) {
    this.onChanged.emit(increased);
  }
  @Output() changeName = new EventEmitter<string>;
  isRed: boolean = true;
}
