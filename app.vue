<template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <!-- Quiz Progress and Score -->
              <div class="mb-4">
                <div class="flex justify-between items-center mb-2">
                  <div class="text-sm text-gray-500">
                    Question {{ currentQuestionIndex + 1 }} of {{ questions.length }}
                  </div>
                  <div class="text-sm font-medium" :class="isPassed ? 'text-green-600' : 'text-blue-600'">
                    Score: {{ correctAnswersCount }}/{{ questions.length }} ({{ formattedScore }})
                  </div>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                  <div class="h-2.5 rounded-full transition-all duration-500"
                    :style="{ width: `${scorePercentage}%` }"
                    :class="{
                      'bg-green-500': scorePercentage >= 75,
                      'bg-yellow-500': scorePercentage >= 50 && scorePercentage < 75,
                      'bg-red-500': scorePercentage < 50
                    }"
                  ></div>
                </div>
                <div v-if="isQuizComplete" class="mt-4 text-center p-4 rounded-lg"
                  :class="isPassed ? 'bg-green-100' : 'bg-red-100'">
                  <p class="text-lg font-bold mb-2">
                    Final Score: {{ correctAnswersCount }} out of {{ questions.length }} ({{ formattedScore }})
                  </p>
                  <p v-if="isPassed" class="text-green-700">
                    Congratulations! You passed the quiz! 🎉<br>
                    You exceeded the required 75% passing score.
                  </p>
                  <p v-else class="text-red-700">
                    You need {{ Math.ceil(questions.length * 0.75) }} correct answers (75%) to pass.<br>
                    Keep practicing and try again!
                  </p>
                </div>
              </div>

              <!-- Question -->
              <div class="mb-6">
                <h2 class="text-xl font-bold mb-4">{{ currentQuestion.question }}</h2>
                <p v-if="currentQuestion.hasMultipleAnswers" class="text-sm text-gray-500 mb-2">
                  (Select all that apply)
                </p>
              </div>

              <!-- Answers -->
              <div class="space-y-4">
                <div v-for="(answer, index) in currentQuestion.answers" :key="index"
                  class="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                  :class="{
                    ...(!isSubmitted && { 'border-gray-200': true }),
                    ...(isSubmitted && { [getAnswerClass(index)]: true })
                  }"
                  @click="toggleAnswer(index)">
                  <input
                    :type="currentQuestion.hasMultipleAnswers ? 'checkbox' : 'radio'"
                    :checked="isSelected(index)"
                    :disabled="isSubmitted"
                    class="h-4 w-4"
                    :class="{
                      'text-green-600': currentQuestion.hasMultipleAnswers
                    }"
                  >
                  <label class="ml-3 block text-sm font-medium" :class="isSubmitted ? getTextClass(index) : 'text-gray-700'">
                    {{ answer.answer }}
                  </label>
                </div>
              </div>

              <!-- Explanation -->
              <div v-if="showExplanation" class="mt-6">
                <div v-for="(answer, index) in currentQuestion.answers" :key="index">
                  <div v-if="isSubmitted" 
                    class="p-4 rounded-lg mt-2"
                    :class="getExplanationClass(index)">
                    <p class="text-sm">
                      <span class="font-bold">{{ answer.answer }}:</span>
                      {{ answer.explanation }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Actions -->
              <div class="mt-8 flex justify-between">
                <button
                  v-if="currentQuestionIndex > 0"
                  @click="previousQuestion"
                  class="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                  Previous
                </button>
                <div class="flex-grow"></div>
                <button
                  v-if="!isSubmitted"
                  @click="submitAnswer"
                  class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  :disabled="!hasSelectedAnswers">
                  Submit
                </button>
                <button
                  v-else-if="currentQuestionIndex < questions.length - 1"
                  @click="nextQuestion"
                  class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Next
                </button>
                <button
                  v-else
                  @click="restartQuiz"
                  class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                  Restart Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Question } from '~/types/quiz'
import { quizQuestions } from '~/data/quiz-questions'

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const questions = ref<Question[]>([])
const currentQuestionIndex = ref(0)
const selectedAnswers = ref<number[]>([])
const showExplanation = ref(false)
const isSubmitted = ref(false)
const correctAnswersCount = ref(0)

// Initialize with shuffled questions
questions.value = shuffleArray(quizQuestions)

// Quiz scoring and progress
const isQuizComplete = computed(() => currentQuestionIndex.value === questions.value.length - 1 && isSubmitted.value)
const scorePercentage = computed(() => (correctAnswersCount.value / questions.value.length) * 100)
const formattedScore = computed(() => `${Math.round(scorePercentage.value)}%`)
const isPassed = computed(() => scorePercentage.value >= 75)
const requiredCorrectAnswers = computed(() => Math.ceil(questions.value.length * 0.75))

// Track the shuffled answers for each question
const shuffledAnswersMap = ref<Map<number, number[]>>(new Map())
// Add tracking for question states
const questionStates = ref<Map<number, { answered: boolean, correct: boolean }>>(new Map())

// Get the current question with shuffled answers
const currentQuestion = computed(() => {
  const question = questions.value[currentQuestionIndex.value]
  if (!question) return question

  // If we haven't shuffled answers for this question yet, do it now
  if (!shuffledAnswersMap.value.has(currentQuestionIndex.value)) {
    const indices = Array.from({ length: question.answers.length }, (_, i) => i)
    shuffledAnswersMap.value.set(currentQuestionIndex.value, shuffleArray(indices))
  }

  // Get the shuffled indices for this question
  const shuffledIndices = shuffledAnswersMap.value.get(currentQuestionIndex.value)!

  // Create a new question object with shuffled answers
  return {
    ...question,
    answers: shuffledIndices.map(i => question.answers[i])
  }
})

// Map selected answer indices to their original positions
function mapToOriginalIndex(shuffledIndex: number): number {
  const shuffledIndices = shuffledAnswersMap.value.get(currentQuestionIndex.value)!
  return shuffledIndices.indexOf(shuffledIndex)
}

// Map original index to shuffled position
function mapToShuffledIndex(originalIndex: number): number {
  const shuffledIndices = shuffledAnswersMap.value.get(currentQuestionIndex.value)!
  return shuffledIndices[originalIndex]
}

const hasSelectedAnswers = computed(() => selectedAnswers.value.length > 0)

const allCorrectAnswersSelected = computed(() => {
  if (!currentQuestion.value) return false

  // Get all correct answer indices
  const correctAnswerIndices = currentQuestion.value.answers
    .map((answer, index) => answer.isCorrect ? mapToOriginalIndex(index) : -1)
    .filter(index => index !== -1)

  // For single answer questions
  if (!currentQuestion.value.hasMultipleAnswers) {
    return selectedAnswers.value.length === 1 && 
           correctAnswerIndices.includes(selectedAnswers.value[0])
  }

  // For multiple answer questions:
  // 1. Must select all correct answers
  // 2. Must not select any incorrect answers
  return correctAnswerIndices.length === selectedAnswers.value.length &&
         correctAnswerIndices.every(index => selectedAnswers.value.includes(index)) &&
         selectedAnswers.value.every(index => correctAnswerIndices.includes(index))
})

const hasPartiallyCorrectAnswers = computed(() => {
  if (!currentQuestion.value.hasMultipleAnswers) return false
  
  const selectedCorrectAnswers = selectedAnswers.value
    .filter(index => currentQuestion.value.answers[index].isCorrect)
  
  return selectedCorrectAnswers.length > 0 && !allCorrectAnswersSelected.value
})

function isSelected(index: number): boolean {
  const originalIndex = mapToOriginalIndex(index)
  return selectedAnswers.value.includes(originalIndex)
}

function shouldShowExplanation(index: number): boolean {
  const answer = currentQuestion.value.answers[index]
  
  if (!currentQuestion.value.hasMultipleAnswers) {
    // For single answer questions, show explanation for selected answer or all if correct
    return isSelected(index) || (answer.isCorrect && allCorrectAnswersSelected.value)
  } else {
    // For multiple answer questions
    return isSelected(index) || // Always show selected answers
           answer.isCorrect || // Always show correct answers
           (!answer.isCorrect && !isSelected(index)) // Show incorrect unselected answers
  }
}

function getColorClasses(answer: { isCorrect: boolean }, isSelected: boolean) {
  if (answer.isCorrect && isSelected) {
    return {
      bg: 'bg-green-100',
      border: 'border-green-500',
      text: 'text-green-700',
      explanation: 'bg-green-50'
    }
  } else if (answer.isCorrect && !isSelected) {
    return {
      bg: 'bg-yellow-100',
      border: 'border-yellow-500',
      text: 'text-yellow-700',
      explanation: 'bg-yellow-50'
    }
  } else if (!answer.isCorrect && isSelected) {
    return {
      bg: 'bg-red-100',
      border: 'border-red-500',
      text: 'text-red-700',
      explanation: 'bg-red-50'
    }
  } else {
    return {
      bg: 'bg-blue-50',
      border: 'border-blue-300',
      text: 'text-blue-700',
      explanation: 'bg-blue-50'
    }
  }
}

function getAnswerClass(index: number): string {
  if (!isSubmitted.value) return ''
  const answer = currentQuestion.value.answers[index]
  const selected = isSelected(index)
  const colors = getColorClasses(answer, selected)
  return `${colors.bg} ${colors.border}`
}

function getTextClass(index: number): string {
  if (!isSubmitted.value) return 'text-gray-700'
  const answer = currentQuestion.value.answers[index]
  const selected = isSelected(index)
  return getColorClasses(answer, selected).text
}

function getExplanationClass(index: number): string {
  const answer = currentQuestion.value.answers[index]
  const selected = isSelected(index)
  return getColorClasses(answer, selected).explanation
}

function toggleAnswer(index: number) {
  if (isSubmitted.value) return

  const originalIndex = mapToOriginalIndex(index)
  if (currentQuestion.value.hasMultipleAnswers) {
    const position = selectedAnswers.value.indexOf(originalIndex)
    if (position === -1) {
      selectedAnswers.value.push(originalIndex)
    } else {
      selectedAnswers.value.splice(position, 1)
    }
  } else {
    selectedAnswers.value = [originalIndex]
  }
}

function submitAnswer() {
  if (!hasSelectedAnswers.value) return
  showExplanation.value = true
  isSubmitted.value = true

  // Only update score if this question hasn't been answered correctly before
  const currentState = questionStates.value.get(currentQuestionIndex.value)
  if (!currentState?.correct) {
    if (allCorrectAnswersSelected.value) {
      correctAnswersCount.value++
    }
    // Store the state of this question
    questionStates.value.set(currentQuestionIndex.value, {
      answered: true,
      correct: allCorrectAnswersSelected.value
    })
  }
}

function nextQuestion() {
  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++
    resetQuestionState()
  }
}

function previousQuestion() {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--
    resetQuestionState()
  }
}

function resetQuestionState() {
  selectedAnswers.value = []
  showExplanation.value = false
  isSubmitted.value = false
  
  // Only shuffle answers if they haven't been shuffled for this question yet
  if (!shuffledAnswersMap.value.has(currentQuestionIndex.value)) {
    const indices = Array.from({ length: currentQuestion.value.answers.length }, (_, i) => i)
    shuffledAnswersMap.value.set(currentQuestionIndex.value, shuffleArray(indices))
  }
}

function restartQuiz() {
  // Shuffle questions on restart
  questions.value = shuffleArray(quizQuestions)
  // Clear all states
  shuffledAnswersMap.value.clear()
  questionStates.value.clear()
  correctAnswersCount.value = 0
  currentQuestionIndex.value = 0
  resetQuestionState()
}
</script>
