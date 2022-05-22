export enum AnswerState {
  WRONG,
  CORRECT,
  NEUTRAL,
}

export type UserAnswer = { selected: number | null; correct: AnswerState }
