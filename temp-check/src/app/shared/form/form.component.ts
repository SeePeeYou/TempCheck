import { CommonModule } from '@angular/common';
import { Component, effect, input, model, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Question, QuestionResult } from '../../models/models';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  questions = input<Question[]>([]);
  userAnswers = model<string[]>([]);

  quizForm: FormGroup;
  score: Number | null = null;

  questionResults: QuestionResult[] = [];
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    // Initialize the form with an empty FormArray
    this.quizForm = this.fb.group({
      questions: this.fb.array([]),
    });

    // Use effect to react to changes in the questions signal
    effect(() => {
      const questions = this.questions();

      if (questions.length > 0) {
        this.initQuestions();
      }
    });
  }

  ngOnInit(): void {
    const questions = this.questions();
    const answers = this.userAnswers();

    if (answers.length > 0 && questions.length > 0) {
      this.initQuestions();
      this.onSubmit();
    }
  }



  initQuestions() {
    const questionsArray = this.quizForm.get('questions') as FormArray;
    questionsArray.clear();
    this.questions().forEach((question, index) => {
      let userAnswer = '';
      if ((this.userAnswers().length > 0) && this.userAnswers()[index]) userAnswer = this.userAnswers()[index]
      questionsArray.push(this.fb.group({ answer: [userAnswer] }));
    });
  }

  get questionsFormArray() {
    return this.quizForm.get('questions') as FormArray;
  }

  onSubmit() {
    const formValues = this.quizForm.value.questions;
    this.userAnswers.set(formValues.map((question: any) => question.answer));

    // Calculate results for each question
    this.questionResults = this.questions().map((question, index) => {
      const userAnswer = this.userAnswers()[index];
      const isCorrect = question.correctAnswer === userAnswer;
      return {
        correctAnswer: question.correctAnswer,
        userAnswer: userAnswer,
        isCorrect: isCorrect,
      };
    });

    this.score = (this.questions().reduce((score, question, index) => {
      return score + (question.correctAnswer === this.userAnswers()[index] ? 1 : 0);
    }, 0));

    this.isSubmitted = true;
  }
}
