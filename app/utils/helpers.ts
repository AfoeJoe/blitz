import { AnswerState, UserAnswer } from "./types"

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
  correctIndex: number,
  optionIndex: number | null,
  selected?: number | null
): AnswerState => {
  switch (true) {
    case selected === correctIndex && optionIndex === correctIndex:
      return AnswerState.CORRECT
    case Boolean(selected) && Boolean(optionIndex):
      return AnswerState.WRONG

    default:
      return AnswerState.NEUTRAL
  }
}

const colorHash: Record<AnswerState, "danger" | "success" | "light"> = {
  [AnswerState.CORRECT]: "success",
  [AnswerState.NEUTRAL]: "light",
  [AnswerState.WRONG]: "danger",
}

export const getColor = (correct: AnswerState) => colorHash[correct]

export const getIniitialUserAnswers = (length: number) =>
  Array(length).fill({
    selected: null,
    correct: false,
  }) as Array<UserAnswer>
