export interface Answer {
  answer: string;
  isCorrect: boolean;
  explanation: string;
}

export interface Question {
  question: string;
  hasMultipleAnswers: boolean;
  answers: Answer[];
}

export interface QuizState {
  currentQuestionIndex: number;
  questions: Question[];
  selectedAnswers: number[];
  showExplanation: boolean;
  isSubmitted: boolean;
}
