export interface Question {
    text: string;
    options: string[];
    correctAnswer: string;
    image?: string;
}

export interface QuestionResult {
    correctAnswer: string;
    userAnswer: string;
    isCorrect: boolean;
}

export interface Content {
    type: 'header' | 'video' | 'image' | 'text';
    content: string;
}