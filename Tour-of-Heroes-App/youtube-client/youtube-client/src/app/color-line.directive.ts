import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appColorLine]'
})
export class ColorLineDirective {

  constructor(private elementRef: ElementRef) { }

  @Input() set lineColor (publishedAt: string) {
    const publishingDateMs = new Date(publishedAt).getTime();
    const currentDateMs = new Date().getTime();
    const difference = currentDateMs - publishingDateMs;
    const sevenDays = 604800000;
    const oneMonth = 2629800000;
    const halfYear = 15778800000;
    if (difference >= halfYear) {
      this.elementRef.nativeElement.style.backgroundColor = '#EB5757';
    } else if (difference >= oneMonth) {
      this.elementRef.nativeElement.style.backgroundColor = '#F2C94C';
    } else if (difference >= sevenDays) {
      this.elementRef.nativeElement.style.backgroundColor = '#27AE60';
    } else {
      this.elementRef.nativeElement.style.backgroundColor = '#2F80ED';
    }
  }
}
