import getQuestions from "app/play/queries/getQuestions"
import { getCorrectness, getIniitialUserAnswers } from "app/utils/helpers"
import { invalidateQuery } from "blitz"
import { MouseEvent, useEffect, useState } from "react"
import { Questions } from "@prisma/client"
import { UserAnswer } from "app/utils/types"

type UseQuiz = {
  questions: Questions[]
  setActiveStep: React.Dispatch<React.SetStateAction<number>>
}
const useQuiz = ({ questions, setActiveStep }: UseQuiz) => {
  const [userAnswers, setUserAnswers] = useState<Array<UserAnswer>>(
    getIniitialUserAnswers(questions.length)
  )

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  console.log({
    userAnswers,
    questions,
  })

  const handleNextQuestion = () => {
    if (currentQuestionIndex >= questions.length - 1) {
      setActiveStep(3)
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

  useEffect(() => {
    setUserAnswers(getIniitialUserAnswers(questions.length))
  }, [questions.length])

  const reset = () => {
    invalidateQuery(getQuestions)
    setUserAnswers(getIniitialUserAnswers(questions.length))
    setCurrentQuestionIndex(0)
    setActiveStep(2)
  }

  return {
    currentQuestionIndex,
    userAnswers,
    actions: {
      handleNextQuestion,
      checkAnswer,
      getResult,
      reset,
    },
  }
}

export type UseQuizResult = ReturnType<typeof useQuiz>

export default useQuiz
