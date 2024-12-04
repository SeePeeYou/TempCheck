import { Component, inject } from '@angular/core';
import { Content, Question } from '../../models/models';
import { DataService } from '../../services/data.service';
import { FormComponent } from "../../shared/form/form.component";
import { LessonComponent } from "../../shared/lesson/lesson.component";

@Component({
  selector: 'app-kripke',
  standalone: true,
  imports: [LessonComponent, FormComponent],
  templateUrl: './kripke.component.html',
  styleUrl: './kripke.component.scss'
})
export class KripkeComponent {
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
      content: 'Introduction to Kripke Structures'
    }, {
      type: 'text',
      content: 'A Kripke Structure is a tuple M=(S,R,L), where:\n' +
        '\n' +
        'S: A finite set of states representing the possible configurations of a system.\n' +
        'R⊆S×S: A binary relation on \n' +
        'S, called the transition relation, which defines how the system can move from one state to another.\n' +
        'L:S→2 ^p: A labeling function that assigns a set of atomic propositions \n' +
        'P (logical properties) to each state, indicating what is true in that state.'},
    {
      type: 'video',
      content: 'https://www.youtube.com/embed/k3Jjw8oJqBk'
    },
    {
      type: 'video',
      content: 'https://www.youtube.com/embed/qWHuyudzm9I'
    }
  ]

  questions: Question[] = [
    {
      text: 'Which of the following is NOT a component of a Kripke Structure M',
      options: ['S, the set of states.', 'R, the transition relation.', 'L, labeling function.', 'P, the set of temporal operators.'],
      correctAnswer: 'P, the set of temporal operators.'
    },
    {
      text: 'Given a Kripke Structure with states S={S1 ,S2 ,S3 } and transitions R={(S1,S2),(S2,S3)}, which of the following is true?',
      options: ['S3 can be reached from S1 in one step.', 'S3 cannot be reached from S1.', 'S3 can be reached from S1 in two steps.', 'S2 and S3 are unreachable'],
      correctAnswer: 'S3 can be reached from S1 in two steps.'
    },
    {
      text: 'Which of the following represents a safety property for a vending machine model?',
      options: ['The machine always processes payment.', 'The machine never dispenses a product without payment.', 'Every payment eventually leads to a product being dispensed.', 'The machine eventually returns to the idle state.'],
      correctAnswer: 'The machine never dispenses a product without payment.'
    }
  ];
}
