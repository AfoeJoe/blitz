import React, { FC, useMemo } from "react"
import { Accordion, Button } from "app/core/components"
import { AnswerState } from "app/utils/types"
import { Color } from "app/utils/tailwindHelpers"
import { getCorrectness, getCorrectnessWithIndex } from "app/utils/helpers"
import { Questions } from "@prisma/client"
import { TAccordion } from "app/core/components/Accordion/Accordion"
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

  const questionData: TAccordion["data"] = useMemo(() => {
    return questions.map(({ question, options, correctAnswer }, index) => {
      const correct =
        getCorrectness(correctAnswer, userAnswers[index]?.selected) === AnswerState.CORRECT

      return {
        header: question,
        content: (
          <div>
            Optioons were:
            {options.map((item, optionIndex) => {
              const correct2 = getCorrectnessWithIndex(
                correctAnswer,
                optionIndex,
                userAnswers[index]?.selected
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
        ),
      }
    })
  }, [questions, userAnswers])

  return (
    <>
      <h1>{`Step Three Results${score} / ${total}`}</h1>
      <div>
        {<Accordion data={questionData} />}

        <Button onClick={reset} bgColor={Color.green}>
          New Round
        </Button>
      </div>
    </>
  )
}

export default StepThree
