import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Config } from '../../models/config';
import { FormsModule } from "@angular/forms";
@Component({
  selector: 'app-config',
  imports: [FormsModule],
  templateUrl: './config.component.html',
  styleUrl: './config.component.css'
})
export class ConfigComponent {

@Input()
data:Config;

@Output()
notif:EventEmitter<Config>=new EventEmitter<Config>();



send(c:Config){
  this.notif.emit(c);
  console.log("config sent  ",c);
}
}
