import { Component, Input } from '@angular/core';
import { Question } from '../../models/question';
import { OptionComponent } from "../option/option.component";

@Component({
  selector: 'app-question',
  imports: [OptionComponent],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {

  @Input()
  qt:Question;

  @Input()
  mode:string;

  isSelected()
  {
    return this.qt.options.filter(o=>o.isSelected).length>0;
  }

  isCorrect()
  {
    return this.qt.options.every(o => o.isSelected === o.isAnswer);
  }
}
