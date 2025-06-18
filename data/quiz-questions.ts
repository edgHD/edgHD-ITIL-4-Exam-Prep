import type { Question } from '~/types/quiz';

export const quizQuestions: Question[] = [
  {
    question: "Which of the following is a key component of the ITIL 4 Service Value System (SVS)?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Service Value Chain",
        isCorrect: true,
        explanation: "The Service Value Chain is one of the key components of the ITIL 4 SVS, along with guiding principles, governance, practices, and continual improvement."
      },
      {
        answer: "Service Lifecycle",
        isCorrect: false,
        explanation: "The Service Lifecycle was part of ITIL v3, not ITIL 4's Service Value System."
      },
      {
        answer: "Service Portfolio",
        isCorrect: false,
        explanation: "While the Service Portfolio is important in ITIL 4, it is not one of the key components of the SVS."
      },
      {
        answer: "Service Level Agreement",
        isCorrect: false,
        explanation: "Service Level Agreements are important tools but are not a key component of the SVS."
      }
    ]
  },
  {
    question: "What does the 'Fast' in FAST value chain activities stand for?",
    hasMultipleAnswers: false,
    answers: [
      {
        answer: "Fulfill",
        isCorrect: true,
        explanation: "FAST stands for Fulfill, Acquire, Supply, and Transform in the context of value chain activities."
      },
      {
        answer: "Forward",
        isCorrect: false,
        explanation: "Forward is not part of the FAST acronym in ITIL 4."
      },
      {
        answer: "Function",
        isCorrect: false,
        explanation: "Function is not part of the FAST acronym in ITIL 4."
      },
      {
        answer: "Focus",
        isCorrect: false,
        explanation: "Focus is not part of the FAST acronym in ITIL 4."
      }
    ]
  },
  {
    question: "Which of the following are ITIL 4 guiding principles? (Select all that apply)",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "Focus on value",
        isCorrect: true,
        explanation: "Focus on value is one of the seven guiding principles of ITIL 4."
      },
      {
        answer: "Start where you are",
        isCorrect: true,
        explanation: "Start where you are is one of the seven guiding principles of ITIL 4."
      },
      {
        answer: "Always automate first",
        isCorrect: false,
        explanation: "This is not one of the ITIL 4 guiding principles. The actual principle is 'Optimize and automate'."
      },
      {
        answer: "Work holistically",
        isCorrect: true,
        explanation: "Work holistically is one of the seven guiding principles of ITIL 4."
      }
    ]
  },
  {
    question: "Which of the following are components of the Four Dimensions of Service Management? (Select all that apply)",
    hasMultipleAnswers: true,
    answers: [
      {
        answer: "Organizations and people",
        isCorrect: true,
        explanation: "Organizations and people is one of the four dimensions of service management."
      },
      {
        answer: "Information and technology",
        isCorrect: true,
        explanation: "Information and technology is one of the four dimensions of service management."
      },
      {
        answer: "Partners and suppliers",
        isCorrect: true,
        explanation: "Partners and suppliers is one of the four dimensions of service management."
      },
      {
        answer: "Service portfolio",
        isCorrect: false,
        explanation: "Service portfolio is not one of the four dimensions. The fourth dimension is 'Value streams and processes'."
      }
    ]
  }
];
