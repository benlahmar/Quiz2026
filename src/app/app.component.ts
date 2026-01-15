import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Quiz1Component } from "./quiz1/quiz1.component";
import { Quiz2Component } from "./quiz2/quiz2.component";
import { QuizComponent } from "./core/quiz/quiz.component";
import { Quiz3Component } from "./base/quiz3/quiz3.component";
import { Option3Component } from "./base/option3/option3.component";
import { Option } from './models/option';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Quiz2Component, QuizComponent, Quiz3Component, Option3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
