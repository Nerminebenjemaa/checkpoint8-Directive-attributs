import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHeighlight]'
})
export class HeighlightDirective {
  @Input() in ="red";
  @Input() out ="yellow";

  @HostBinding('style.backgroundColor') bgc = 'blue';
  
  constructor() { }

  @HostListener('mouseenter') enter(){
    this.bgc =this.in;

  }

  @HostListener('mouseleave') leave(){
    this.bgc =this.out;
    
  }

}
