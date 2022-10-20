import {Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective {
  @HostBinding('style.color') color: string = 'yellow';

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

  setNewColor(color: string) {
    this.color = color;
  }
  @HostListener('mouseenter') onMouseEnter(): void{
    let newColor = Math.floor(Math.random() * this.colors.length);
    this.setNewColor(this.colors[newColor]);
    console.log(this.color);
}
}
