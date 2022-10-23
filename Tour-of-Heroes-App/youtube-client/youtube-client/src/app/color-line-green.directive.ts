import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorLineGreen]'
})
export class ColorLineGreenDirective {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = "green";
  }

}
