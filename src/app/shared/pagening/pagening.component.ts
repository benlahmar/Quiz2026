import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagening',
  imports: [],
  templateUrl: './pagening.component.html',
  styleUrl: './pagening.component.css'
})
export class PageningComponent {

  @Output()
  notif:EventEmitter<number>=new EventEmitter<number>();

  p:number=0;
  send(page:number)
  {
    this.p=page+1;
    this.notif.emit(page);
  }
}
