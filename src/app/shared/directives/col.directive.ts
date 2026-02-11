import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCol]'
})
export class ColDirective implements OnInit {

  default_color:string='blue';

  @Input() 
  appCol:string;

  constructor(private ele:ElementRef, private render:Renderer2) { 
   
  } 
  ngOnInit(): void {
    this.render.setStyle(this.ele.nativeElement,'color',this.appCol);
    this.render.addClass(this.ele.nativeElement,'abcd');
    this.render.setStyle(this.ele.nativeElement,'border','2px solid blue');
    let p=this.render.createElement("p");
    let txt=this.render.createText("bonjour depuis la directive col");
    this.render.appendChild(p,txt);
    this.render.appendChild(this.ele.nativeElement,p);

  }

  @HostListener('mouseenter') onMouseEnter(){
    this.render.setStyle(this.ele.nativeElement,'backgroundColor','orange');
    console.log("mouseenter on col directive");
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.render.setStyle(this.ele.nativeElement,'backgroundColor','white');
  }

}
