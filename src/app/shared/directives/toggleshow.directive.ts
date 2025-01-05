import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToggleshow]'
})
export class ToggleshowDirective implements OnInit{

  constructor(private _eleRef:ElementRef,private _renderer:Renderer2) { }
  ngOnInit(): void {
   
  }
@HostListener('click',['$event'])
toggleshow(){
  const nextsibling=this._eleRef.nativeElement.nextElementSibling;
  if (nextsibling.classList.contains('show')) {
    this._renderer.removeClass(nextsibling,'show')
  } else {
    this._renderer.addClass(nextsibling,'show')
  }
}
}
