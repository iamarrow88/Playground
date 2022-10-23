import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorLineRed]'
})
export class ColorLineRedDirective {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = "red";
  }

}
