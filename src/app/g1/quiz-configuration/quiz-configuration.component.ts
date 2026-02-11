import { Component, Input } from '@angular/core';
import { Config } from '../../models/config';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz-configuration',
  imports: [FormsModule],
  templateUrl: './quiz-configuration.component.html',
  styleUrl: './quiz-configuration.component.css'
})
export class QuizConfigurationComponent {

  @Input()
  data:Config;
}
