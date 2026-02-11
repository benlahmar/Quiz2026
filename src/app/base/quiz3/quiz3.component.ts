import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../models/Quiz';
import { qz } from '../../data/d';
import { Question3Component } from "../question3/question3.component";
import { PaginationComponent } from "../pagination/pagination.component";
import { DisplayComponent } from "../display/display.component";
import { ConfigComponent } from "../config/config.component";
import { Config } from '../../models/config';
import { ColDirective } from "../../shared/directives/col.directive";
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/users/user.service';

@Component({
  selector: 'app-quiz3',
  imports: [Question3Component, PaginationComponent, DisplayComponent, ConfigComponent, ColDirective,CommonModule],
  templateUrl: './quiz3.component.html',
  styleUrl: './quiz3.component.css'
})
export class Quiz3Component implements OnInit {

  quiz:Quiz;
  currentquestion=0;
  modedisplay:string="quiz";
  date:Date;
  datestart:Date;
  duree:number;

    constructor(public uservice:UserService )
    {}

  ngOnInit(): void {
    
    this.quiz=new Quiz(qz);
    let d=this.quiz.config.duration+1;
    this.date=new Date();
    this.datestart=new Date();
    this.duree=1;
    setInterval(()=>{
      this.date=new Date();
      this.duree=(this.date.getTime()-this.datestart.getTime())/3600;
      
    },1000);

    setInterval(()=>{
      if(this.quiz.config.duration>this.duree){
       // this.modedisplay="submit";
      }
    },d*1000);
  }
  recuper(n:number){
    this.currentquestion=n;
  }
  changemode(m:string){
    this.modedisplay=m;
    console.log("mode changé dans quiz3: "+m);
  }

  recuperconf(c:Config){
    this.quiz.config=c;
  }
}