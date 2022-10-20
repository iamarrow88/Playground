import {Directive, Input, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appSetColor]'
})
export class SetColorDirective {


  constructor(private templateRef: TemplateRef<any>) { }

  @Input() set setColor(color: string){
    this.templateRef.createEmbeddedView(this.templateRef);
    console.log(this.templateRef);
    console.log(color);
  }
}
