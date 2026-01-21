import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../models/Quiz';
import { qz } from '../../data/d';
import { QuestionComponent } from "../question/question.component";
import { PageningComponent } from "../../shared/pagening/pagening.component";
import { DisplayComponent } from '../../shared/display/display.component';
@Component({
  selector: 'app-quiz',
  imports: [QuestionComponent, PageningComponent, DisplayComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {
 
  pg:number=0;
  mode:string="'quiz'";
   quiz:Quiz;

   constructor() { }
   
   ngOnInit(): void {
    this.quiz=new Quiz(qz);
  }

  recuper(page:number){
    console.log("page recu:"+page);
    this.pg=page;
  }

  getdispaly(m:string){
    console.log("mode recu:   "+m);
    this.mode=m;
  }
}
