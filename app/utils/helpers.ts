import { AnswerState, UserAnswer } from "./types"
import { Color } from "./tailwindHelpers"

export function classnames(...classes: (false | null | undefined | string)[]) {
  return classes.filter(Boolean).join(" ")
}

export const getCorrectness = (correctIndex: number, selected?: number | null): AnswerState => {
  switch (true) {
    case selected === correctIndex:
      return AnswerState.CORRECT
    case Boolean(selected):
      return AnswerState.WRONG

    default:
      return AnswerState.NEUTRAL
  }
}

export const getCorrectnessWithIndex = (
  correctAnswerIndex: number,
  optionIndex: number | null,
  selected?: number | null
): AnswerState => {
  switch (true) {
    case selected !== null && optionIndex === correctAnswerIndex:
      return AnswerState.CORRECT

    case selected === optionIndex && correctAnswerIndex !== selected:
      return AnswerState.WRONG

    default:
      return AnswerState.NEUTRAL
  }
}

const colorHash: Record<AnswerState, keyof typeof Color /* "danger" | "success" | "light" */> = {
  [AnswerState.WRONG]: Color.red,
  [AnswerState.CORRECT]: Color.green,
  [AnswerState.NEUTRAL]: Color.white,
}

export const getColor = (correct: AnswerState) => colorHash[correct]

export const getInitialUserAnswers = (length: number) =>
  Array(length).fill({
    selected: null,
    correct: AnswerState.NEUTRAL,
  }) as Array<UserAnswer>
