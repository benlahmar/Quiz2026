import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../models/Quiz';
import { qz } from '../../data/d';
import { Question3Component } from "../question3/question3.component";
import { PaginationComponent } from "../pagination/pagination.component";
import { DisplayComponent } from "../display/display.component";

@Component({
  selector: 'app-quiz3',
  imports: [Question3Component, PaginationComponent, DisplayComponent],
  templateUrl: './quiz3.component.html',
  styleUrl: './quiz3.component.css'
})
export class Quiz3Component implements OnInit {

  quiz:Quiz;
  currentquestion=0;
  modedisplay:string="quiz";
  ngOnInit(): void {
    this.quiz=new Quiz(qz);
  }
  recuper(n:number){
    this.currentquestion=n;
  }
  changemode(m:string){
    this.modedisplay=m;
    console.log("mode changé dans quiz3: "+m);
  }
}
