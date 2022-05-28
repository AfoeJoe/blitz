import getQuestions from "app/play/queries/getQuestions"
import { ACTIVE_STEPS } from "../model"
import { getCorrectness, getInitialUserAnswers } from "app/utils/helpers"
import { invalidateQuery } from "blitz"
import { MouseEvent, useEffect, useState } from "react"
import { Questions } from "@prisma/client"
import { UserAnswer } from "app/utils/types"
// import { useSaveAttemptHook } from "./useSaveAttempt"

type UseQuiz = {
  questions: Questions[]
  // setActiveStep: React.Dispatch<React.SetStateAction<number>>
}
const useQuiz = ({ questions }: UseQuiz) => {
  const [activeStep, setActiveStep] = useState<ACTIVE_STEPS>(1)
  const [userAnswers, setUserAnswers] = useState<Array<UserAnswer>>(
    getInitialUserAnswers(questions.length)
  )

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  console.log({
    userAnswers,
    questions,
  })

  useEffect(() => {
    setUserAnswers(getInitialUserAnswers(questions.length))
  }, [questions.length])

  //useSaveAttemptHook(activeStep, {})

  const handleNextQuestion = () => {
    if (currentQuestionIndex >= questions.length - 1) {
      setActiveStep(ACTIVE_STEPS.THREE)
    } else setCurrentQuestionIndex((prev) => prev + 1)
  }
  console.log({
    questions,
    userAnswers,
  })

  const checkAnswer = (event: MouseEvent<HTMLElement>) => {
    const { id } = event.target as HTMLInputElement

    setUserAnswers((prev) => {
      const updatedAnswer = [...prev]

      updatedAnswer[currentQuestionIndex] = {
        selected: Number(id),
        correct: getCorrectness(questions[currentQuestionIndex]!.correctAnswer, Number(id)),
      }
      return updatedAnswer
    })
    setTimeout(function () {
      handleNextQuestion()
    }, 2000)
  }

  const getResult = () => {
    return [
      userAnswers.reduce((acc, cur, index) => {
        return cur.selected === questions[index]?.correctAnswer ? acc + 1 : acc + 0
      }, 0),
      questions.length,
    ]
  }

  const reset = () => {
    invalidateQuery(getQuestions)
    setUserAnswers(getInitialUserAnswers(questions.length))
    setCurrentQuestionIndex(0)
    setActiveStep(ACTIVE_STEPS.TWO)
  }

  return {
    activeStep,
    currentQuestionIndex,
    userAnswers,
    actions: {
      handleNextQuestion,
      checkAnswer,
      getResult,
      reset,
      setActiveStep,
    },
  }
}

export type UseQuizResult = ReturnType<typeof useQuiz>

export default useQuiz
