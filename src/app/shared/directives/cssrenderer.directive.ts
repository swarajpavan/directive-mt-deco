import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCssrenderer]'
})
export class CssrendererDirective implements OnInit{

  constructor(private _eleRef:ElementRef,private _renderer:Renderer2) { }
  ngOnInit(): void {
 this._renderer.setStyle(this._eleRef.nativeElement,"backgroundColor","blue");

 this._renderer.setStyle(this._eleRef.nativeElement,"color","#fff");

 this._renderer.setStyle(this._eleRef.nativeElement,"padding","20px");


  }
@HostListener('mouseover')
mouseover(){
  this._renderer.setStyle(this._eleRef.nativeElement,"backgroundColor","blue")
}

@HostListener('mouseout')
mouseout(){
  this._renderer.setStyle(this._eleRef.nativeElement,"backgroundColor","red")
  // this._renderer.setStyle(this._eleRef.nativeElement,"backgroundColor","transparent")
}
}
