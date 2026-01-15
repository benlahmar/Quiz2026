import { Component,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-display',
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {


    @Input()
    mode:string;

    @Output()
    notif:EventEmitter<string>=new EventEmitter<string>();

    send(m:string){
        this.mode= m;
        this.notif.emit(m);
    }
}
