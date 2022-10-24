import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appColorLine]'
})
export class ColorLineDirective {

  constructor(private elementRef: ElementRef) { }

  @Input() set lineColor (publishedAt: string) {
    console.log(`item # published at ${publishedAt}`)
    const publishingDateMs = new Date(publishedAt).getTime();
    console.log(`ipublished at MS is ${publishingDateMs}`)
    const currentDateMs = new Date().getTime();
    console.log(`curr date at MS is ${currentDateMs}`)
    const difference = currentDateMs - publishingDateMs;
    console.log(`the difference MS is ${difference}`)
    const sevenDays = 604800000;
    const oneMonth = 2629800000;
    const halfYear = 15778800000;
    if (difference >= halfYear) {
      this.elementRef.nativeElement.style.backgroundColor = '#EB5757';
      console.log(`color must be red`)
    } else if (difference >= oneMonth) {
      this.elementRef.nativeElement.style.backgroundColor = '#F2C94C';
      console.log(`color must be yellow`)
    } else if (difference >= sevenDays) {
      this.elementRef.nativeElement.style.backgroundColor = '#27AE60';
      console.log(`color must be green`)
    } else {
      this.elementRef.nativeElement.style.backgroundColor = '#2F80ED';
      console.log(`color must be blue`)
    }
  }
}
