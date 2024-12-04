import { Component, inject } from '@angular/core';
import { Content, Question } from '../../models/models';
import { DataService } from '../../services/data.service';
import { FormComponent } from "../../shared/form/form.component";
import { LessonComponent } from "../../shared/lesson/lesson.component";

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [FormComponent, LessonComponent],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {
  service = inject(DataService);

  activeTab = 'intro';

  setActiveTab(event: Event, tab: string) {
    event.preventDefault();
    this.activeTab = tab;
    document.getElementById(tab)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  content: Content[] = [
    {
      type: 'header',
      content: 'Basics of Temporal Logic'
    },
    {
      type: 'text',
      content: 'Temporal logic is a branch of formal logic used to reason about propositions qualified in terms of time. It extends classical logic by introducing temporal operators to describe how system states change over time. Temporal logic is widely applied in computer science for specifying and verifying properties of systems, such as safety, liveness, and fairness in hardware and software systems.'
    },

    {
      type: 'video',
      content: 'https://www.youtube.com/embed/yn9a2xqlSWQ'
    }, {
      type: 'header',
      content: 'Prerequisite Knowledge:Set Theory'
    }, {
      type: 'text',
      content: 'Understanding sets, subsets, unions, intersections, and Cartesian products is crucial because Temporal Logic often involves reasoning about collections of states and transitions'
    },
    {
      type: 'video',
      content: 'https://www.youtube.com/embed/5ZhNmKb-dqk'
    },
  ]

  questions: Question[] = [
    {
      text: 'Which of the following is true for any set A?',
      options: ['∅⊆A', '∅!⊆A', 'A⊆∅', 'A∩∅=A'],
      correctAnswer: '∅⊆A'
    },
    {
      text: 'If A={1,2,3} and B={2,3,4}, what is A∩B?',
      options: ['{1,2,3,4]}', '{2,3}', '∅', '{1,4}'],
      correctAnswer: '{2,3}'
    },
    {
      text: 'If A={x∣x is even and x≤10} and B={5,10,15}, what is A∪B?',
      options: ['{2,4,6,8,10}', '{2,4,6,8,10,5,15}', '∅', '{5,10,15}'],
      correctAnswer: '{2,4,6,8,10,5,15}'
    }
  ];
}
