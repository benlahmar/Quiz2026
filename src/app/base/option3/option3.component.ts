import { Component, Input } from '@angular/core';
import { Option } from '../../models/option';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-option3',
  imports: [FormsModule],
  templateUrl: './option3.component.html',
  styleUrl: './option3.component.css'
})
export class Option3Component {

  @Input()
  odata:Option;

  @Input()
  display:string;
}
