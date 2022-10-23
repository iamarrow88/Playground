import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorLineBlue]'
})
export class ColorLineBlueDirective {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = "blue";
  }

}
