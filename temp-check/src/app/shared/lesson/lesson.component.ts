import { Component, input } from '@angular/core';
import { Content } from '../../models/models';
import { SafePipe } from "../../pipes/safe.pipe";

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [SafePipe],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss'
})
export class LessonComponent {
  items = input<Content[]>()
}
