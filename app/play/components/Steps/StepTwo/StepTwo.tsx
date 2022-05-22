import Dots from "./Dots"
import Image from "next/image"
import React, { FC } from "react"
import { AnswerState } from "app/utils/types"
import { Button } from "app/core/components"
import { Color, Size } from "app/utils/tailwindHelpers"
import { getColor, getCorrectnessWithIndex } from "app/utils/helpers"
import { Questions } from "@prisma/client"
import { UseQuizResult } from "app/play/hooks/useQuiz"

export const data = [
  {
    id: 1,
    question: "QUESTION",
    options: ["Option A", "Option B"],
    correctAnswer: 1,
    hintText: "Hint text",
    photoUrl: "/vercel.svg",
    // subject: SUBJECT | null;
  },
  {
    id: 2,
    question: "QUESTION 2",
    options: ["Option A", "Option B", "Option A", "Option B"],
    correctAnswer: 3,
    hintText: "Hint text 2",
    // photoUrl: '/vercel.svg',
    // subject: SUBJECT | null;
  },
] as Questions[]
type StepTwoProps = {
  questions: Array<Questions>
  setActiveStep: React.Dispatch<React.SetStateAction<number>>
  useQuizResult: UseQuizResult
}

export const StepTwo: FC<StepTwoProps> = ({ questions, setActiveStep, useQuizResult }) => {
  const { currentQuestionIndex, userAnswers, actions } = useQuizResult
  const { question, correctAnswer, options, photoUrl, hintText } =
    questions[currentQuestionIndex] || {}
  // const answer = userAnswers[index]
  return Boolean(question) ? (
    <>
      <div>Step Two QUiZ</div>
      {photoUrl && <Image src={photoUrl} alt="" width="112" height="112" />}
      <div>{question}</div>
      {hintText && <div>{hintText}</div>}
      <div>
        {options?.map((item, index) => {
          const cor = getCorrectnessWithIndex(
            correctAnswer as number,
            index,
            userAnswers[currentQuestionIndex]?.selected
          )
          console.log({
            answer: cor,
            correctAnswer,
            index,
            selected: userAnswers[currentQuestionIndex]?.selected,
            userAnswers,
          })

          return (
            <Button
              className="mb-2"
              id={index.toString()}
              onClick={actions.checkAnswer}
              key={index}
              size={Size.small}
              border={Color.black}
              textColor={Color.black}
              bgColor={Color[getColor(cor)]}
            >
              {item}
            </Button>
          )
        })}
      </div>
      <Dots userAnswers={userAnswers} currentIndex={currentQuestionIndex} />
    </>
  ) : (
    <>no data to display</>
  )
}

export default StepTwo
