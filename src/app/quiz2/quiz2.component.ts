import { Component } from '@angular/core';
import { qz } from '../data/d';
import { Quiz } from '../models/Quiz';
import { FormsModule } from '@angular/forms';
import { Question } from '../models/question';

@Component({
  selector: 'app-quiz2',
  imports: [FormsModule],
  templateUrl: './quiz2.component.html',
  styleUrl: './quiz2.component.css'
})
export class Quiz2Component {

  data2:Quiz=new Quiz(qz) ;
  data=qz
  page=0

  constructor(){
    console.log(this.data2)
  }
  modedisplay='quiz'
  next(){
    this.page++
    console.log(this.data2)

  }
  prev(){
    this.page--
  }

  changemode(m:string){
    this.modedisplay=m
  }

  isquestionserlected(q:Question):boolean{
    let res:boolean=false;
    
      let selected=q.options.find(o=>o.isSelected);
      if(!selected){
        res=false;
      }else{
        res=true;
      }
  return res;
  }
  isQuestioncorrect(q:Question):boolean{
    let res:boolean=true;

    res= q.options.every(o=>o.isAnswer==o.isSelected);
    return res;
  }
}
