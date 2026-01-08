import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Quiz1Component } from "./quiz1/quiz1.component";
import { Quiz2Component } from "./quiz2/quiz2.component";
import { QuizComponent } from "./core/quiz/quiz.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Quiz2Component, QuizComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
