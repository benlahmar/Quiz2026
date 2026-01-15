import { Component, Input } from '@angular/core';
import { Question } from '../../models/question';
import { Option3Component } from "../option3/option3.component";

@Component({
  selector: 'app-question3',
  imports: [Option3Component],
  templateUrl: './question3.component.html',
  styleUrl: './question3.component.css'
})
export class Question3Component {

  @Input()
  data:Question;
  @Input()
  display:string;
}
