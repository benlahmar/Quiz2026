import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-display',
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {

  @Input()
  mdisplay:string;

  @Output()
  notif:EventEmitter<string>=new EventEmitter<string>();

  send(mode:string){
    this.mdisplay=mode;
    this.notif.emit(this.mdisplay);
  }
}
