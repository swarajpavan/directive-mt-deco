import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdownli]'
})
export class DropdownliDirective {

 constructor(private _eleRef:ElementRef,private _renderer:Renderer2) { }
  ngOnInit(): void {
   
  }
@HostListener('click',['$event'])
toggleshow(){
  const nextsibling=this._eleRef.nativeElement.children[1];
  if (nextsibling.classList.contains('show')) {
    this._renderer.removeClass(nextsibling,'show')
  } else {
    this._renderer.addClass(nextsibling,'show')
  }
}
}



