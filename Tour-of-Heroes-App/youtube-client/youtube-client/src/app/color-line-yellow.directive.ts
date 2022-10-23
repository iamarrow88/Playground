import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorLineYellow]'
})
export class ColorLineYellowDirective {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = "yellow";
  }

}
