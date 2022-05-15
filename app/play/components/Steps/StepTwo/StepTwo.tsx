import Dots from "./Dots"
import Image from "next/image"
import React, { FC } from "react"
import { Button } from "app/core/components"
import { Color, Size } from "app/utils/tailwindHelpers"
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
  // const variant = userAnswers[currentQuestion] ? Variant.BLUE_GHOST : Variant.BLUE_GHOST;
  // const correct = getCorrectness(correctAnswer, userAnswers[currentQuestionIndex]);

  return Boolean(question) ? (
    <>
      <div>Step Two QUiZ</div>
      {photoUrl && <Image src={photoUrl} alt="" width="112" height="112" />}
      <div>{question}</div>
      {hintText && <div>{hintText}</div>}
      <div>
        {options?.map((item, index) => (
          <Button
            /* variant={variant} */ className="mb-2"
            id={index.toString()}
            onClick={actions.checkAnswer}
            key={index}
            size={Size.small}
            bgColor={Color.red}
            textColor={Color.red}
          >
            {item}
          </Button>
        ))}
      </div>
      <Dots userAnswers={userAnswers} />
    </>
  ) : (
    <>no data to display</>
  )
}

export default StepTwo
