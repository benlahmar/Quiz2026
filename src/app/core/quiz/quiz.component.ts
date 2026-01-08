import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../models/Quiz';
import { qz } from '../../data/d';
import { QuestionComponent } from "../question/question.component";
import { PageningComponent } from "../../shared/pagening/pagening.component";

@Component({
  selector: 'app-quiz',
  imports: [QuestionComponent, PageningComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {
 
  pg:number=0;

   quiz:Quiz;

   constructor() { }
   
   ngOnInit(): void {
    this.quiz=new Quiz(qz);
  }

  recuper(page:number){
    console.log("page recu:"+page);
    this.pg=page;
  }
}
