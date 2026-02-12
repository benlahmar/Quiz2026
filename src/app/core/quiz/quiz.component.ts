import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../models/Quiz';
import { qz } from '../../data/d';
import { QuestionComponent } from "../question/question.component";
import { PageningComponent } from "../../shared/pagening/pagening.component";
import { DisplayComponent } from '../../shared/display/display.component';
import { QuizConfigurationComponent } from "../../g1/quiz-configuration/quiz-configuration.component";
import { CommonModule } from '@angular/common';
import { UserService } from '../../g1/services/user.service';
@Component({
  selector: 'app-quiz',
  imports: [QuestionComponent, PageningComponent, DisplayComponent, QuizConfigurationComponent, CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {
 
  pg:number=0;
  mode:string="'quiz'";
   quiz:Quiz;
   datestart:Date;
   curentdate:Date;
  duration:number;

  msg:any;
   constructor(private service:UserService) { }
   
   ngOnInit(): void {
    this.quiz=new Quiz(qz);

  

    this.datestart=new Date();
    setInterval(() => {
      this.curentdate=new Date();
      //la durrer entre les deux dates

      this.duration= (this.curentdate.getTime()-this.datestart.getTime() )/1000;
      if(this.duration*3600>this.quiz.config.duration)
      {
       // this.getdispaly("submit")
      }
    }, 1000);
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
