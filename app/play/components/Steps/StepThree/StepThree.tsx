import React, { FC } from "react"
import { AnswerState } from "app/utils/types"
import { Button } from "app/core/components"
import { getCorrectness, getCorrectnessWithIndex } from "app/utils/helpers"
import { Questions } from "@prisma/client"
import { UseQuizResult } from "app/play/hooks/useQuiz"

type StepThreeProps = {
  questions: Array<Questions>
  setActiveStep: React.Dispatch<React.SetStateAction<number>>
  useQuizResult: UseQuizResult
}

export const StepThree: FC<StepThreeProps> = ({ useQuizResult, questions }) => {
  const {
    userAnswers,
    actions: { getResult, reset },
  } = useQuizResult
  const [score, total] = getResult()

  return (
    <>
      <h1>{`Step Three Results${score} / ${total}`}</h1>
      <div>
        {questions.map(({ question, options, correctAnswer }, index) => {
          const correct =
            getCorrectness(correctAnswer, userAnswers[index]?.selected) === AnswerState.CORRECT
          return (
            <>
              <h1>
                Question was : {question}
                <span>Got it {correct ? "right" : "wrong"} </span>
              </h1>
              <div>
                Optioons were:
                {options.map((item, optionIndex) => {
                  const correct2 = getCorrectnessWithIndex(
                    correctAnswer,
                    userAnswers[index]?.selected!,
                    optionIndex
                  )
                  return (
                    <span
                      key={optionIndex}
                      className={`${
                        correct2 === AnswerState.CORRECT
                          ? "text-green-600"
                          : correct2 === AnswerState.WRONG
                          ? "text-red-600"
                          : "text-gray-600"
                      }`}
                    >
                      {item}
                    </span>
                  )
                })}
              </div>
            </>
          )
        })}
        <Button onClick={reset}>New Round</Button>
      </div>
    </>
  )
}

export default StepThree
