import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCsshighlighter]'
})
export class CsshighlighterDirective implements OnInit {

  constructor(private _eleRef:ElementRef, private _renderer:Renderer2) { }
  ngOnInit(): void {
  this._eleRef.nativeElement.style.backgroundColor="orange";
  this._eleRef.nativeElement.style.color="#fff";
  this._eleRef.nativeElement.style.padding="40px";
  this._eleRef.nativeElement.style.border=" 2px solid green";
  }

}
