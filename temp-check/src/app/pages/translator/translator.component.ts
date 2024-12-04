import { Component, inject } from '@angular/core';
import { Content, Question } from '../../models/models';
import { DataService } from '../../services/data.service';
import { LessonComponent } from "../../shared/lesson/lesson.component";
import { FormComponent } from "../../shared/form/form.component";

@Component({
  selector: 'app-translator',
  standalone: true,
  imports: [LessonComponent, FormComponent],
  templateUrl: './translator.component.html',
  styleUrl: './translator.component.scss'
})
export class TranslatorComponent {
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
      content: 'Basics of Linear Temporal Logic'
    },{
    type:'image',
    content:'https://ars.els-cdn.com/content/image/3-s2.0-B9780443189081000133-f19-14-9780443189081.jpg'
    },
    {
      type:'text',
      content:'Linear Temporal Logic (LTL) is a formal language used to describe system behaviors over time. It extends propositional logic by introducing temporal operators that allow us to specify how properties evolve across a linear sequence of states. Translating between natural language and LTL formulas is essential for specifying and verifying system requirements in formal verification.'
    },
    {

      type: 'video',
      content: 'https://www.youtube.com/embed/KOAHe_bcLDE'
    }
  ]

  questions: Question[] = [
    {
      text: 'Which of the following LTL formulas represents the statement: "Every request is eventually followed by a response"?',
      options: ['G(Request ^ Response)', 'G(Request→X(Response))', 'G(Request→F(Response))', 'F(Request→G(Response))'],
      correctAnswer: 'G(Request→F(Response))'
    },
    {
      text: 'What does G(Login→F(Authentication)) represent?',
      options: ['Every login is immediately followed by authentication.', 'Authentication always follows a login eventually.', 'Authentication and login occur simultaneously.', 'Authentication never follows a login.'],
      correctAnswer: 'Authentication always follows a login eventually.'
    },
    {
      text: 'Which formula describes: "If the system is in state A, it transitions to state B in the next state"?',
      options: ['G(A→X(B))', 'G(A∧X(B))', 'F(A→X(B))', 'X(A→B)'],
      correctAnswer: 'G(A→X(B))'
    }
  ];
}
