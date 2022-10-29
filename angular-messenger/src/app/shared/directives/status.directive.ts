import {AfterViewInit, Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStatus]'
})
export class StatusDirective implements AfterViewInit {
  @Input('appStatus') isOnline: boolean = false;
  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {

  }
  ngAfterViewInit() {
  if(this.isOnline) {
    const spanElement = this.renderer2.createElement('span');
    this.renderer2.addClass(spanElement, 'status');
    this.renderer2.addClass(spanElement, 'online');
    this.renderer2.appendChild(this.elementRef.nativeElement, spanElement);
  }
  }

}
