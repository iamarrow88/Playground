import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRainbowKeyboard]',
  host: {
    '(keydown)': 'newColor()'
  }
})
export class RainbowKeyboardDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }
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
  newColor():void {
    const colorPick = Math.floor(Math.random() * this.colors.length);
    let element = this.elementRef.nativeElement;

    this.renderer.setStyle(element, 'color', this.colors[colorPick]);
  }



}
