import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  @Output()
  notif:EventEmitter<number>=new EventEmitter<number>();
  p=0;
  send(n:number){
    this.p=n;
    this.notif.emit(n);
    console.log("send "+n);
  }
}
