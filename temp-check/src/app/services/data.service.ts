import { computed, effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public introAnswers = signal<string[]>([]);
  public kripkeAnswers = signal<string[]>([]);
  public translatorAnswers = signal<string[]>([]);

  public isIntroComplete = computed(() => this.introAnswers().length > 0);
  public isKripkeComplete = computed(() => this.kripkeAnswers().length > 0);
  public isTranslatorComplete = computed(() => this.translatorAnswers().length > 0);

  percentage = computed(() =>
    (100 / 3) * ((this.isIntroComplete() ? 1 : 0) + (this.isKripkeComplete() ? 1 : 0) + (this.isTranslatorComplete() ? 1 : 0))
  )

  constructor() {
    effect(() => {
      //Can put console logs here to check if they're updating correctly
    })
  }
}
