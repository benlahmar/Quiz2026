import { Component } from '@angular/core';
import { qz } from '../data/d';

@Component({
  selector: 'app-quiz1',
  imports: [],
  templateUrl: './quiz1.component.html',
  styleUrl: './quiz1.component.css'
})
export class Quiz1Component {

  data=qz;
  page=0;

  next()
  {
    this.page++;
  }
}
