import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Config } from '../../models/config';

@Component({
  selector: 'app-pagening',
  imports: [],
  templateUrl: './pagening.component.html',
  styleUrl: './pagening.component.css'
})
export class PageningComponent {

  @Output()
  notif:EventEmitter<number>=new EventEmitter<number>();

  @Input()
  config:Config;
  p:number=0;
  send(page:number)
  {
    this.p=page;
    this.notif.emit(this.p);
  }
}
