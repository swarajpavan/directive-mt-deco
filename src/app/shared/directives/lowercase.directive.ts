import { Directive, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appLowercase]'
})
export class LowercaseDirective implements OnInit {

  constructor() { }
  ngOnInit(): void {
  
  }
@HostListener("keyup",['$event'])
onkeyup(event:Event){
let inputcontrol=event.target as HTMLInputElement;
let value=inputcontrol.value as string;
inputcontrol.value=value.toLowerCase();
}
}
