import { Component,Input } from '@angular/core';
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

}
