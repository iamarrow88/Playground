import {Directive, Input, ElementRef} from '@angular/core';

@Directive({
  selector: '[appRainbowKeyboard]',
})
export class RainbowKeyboardDirective {

constructor(private elementRef: ElementRef) {
}

  @Input() set ElemColor(num: number) {
    if(num <= 2) {
      this.elementRef.nativeElement.style.backgroundColor = `red`
      console.log('red');
    } else if (num <= 4) {
      this.elementRef.nativeElement.style.backgroundColor = `yellow`;
      console.log('yellow');
    } else {
      this.elementRef.nativeElement.style.backgroundColor = `pink`;
      console.log('pink');
    }
  }
}
