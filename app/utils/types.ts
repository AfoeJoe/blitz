export enum AnswerState {
  CORRECT,
  WRONG,
  NEUTRAL,
}

export type UserAnswer = { selected: number | null; correct: AnswerState }
