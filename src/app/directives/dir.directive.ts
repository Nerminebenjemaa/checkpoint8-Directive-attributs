import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDir]'
})
export class DirDirective {
  letters = '0123456789ABCDEF';

  @HostBinding('style.color') color="red";
  @HostBinding('style.borderColor') borderColor="red";
  constructor() { }
  @HostListener('keyup') getRandomColor(){
    this.color = '#'; 
    this.borderColor = '#'; 
    for (var i = 0; i < 6; i++) {
        this.color += this.letters[Math.floor(Math.random() * 16)];
        this.borderColor += this.letters[Math.floor(Math.random() * 16)];
        
    }

  
   

    
    
      
    

  }

}
