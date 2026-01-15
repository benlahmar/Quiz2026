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


  isSelected()
  {
    let state=this.data.options.filter(o=>o.isSelected).length>0;
    console.log("dans isSelected de question3  "+ state);
    return state;

    
  }
  isCorrect()
  {
    return this.data.options.every(o=>o.isAnswer==o.isSelected);
  }
}
