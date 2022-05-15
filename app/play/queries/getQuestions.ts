import db, { Prisma } from "db"
import { paginate, resolver } from "blitz"
import { Questions, SUBJECT } from "@prisma/client"
import { randomBytes } from "crypto"

interface GetQuestionsInput
  extends Pick<Prisma.QuestionsFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default async function getQuestions({
  where,
  orderBy,
  skip = 0,
  take = 5,
}: GetQuestionsInput) {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant

  const totalNumbers = await db.questions.count({ where })

  const random = [...Array(take).keys()]
    .map((_) => Math.floor(Math.random() * totalNumbers) + 1)
    .map((item) => ({
      id: item,
      subject: where?.subject,
    }))
  console.log({
    where,
  })

  const questions = await db.questions.findMany({
    where: { OR: random },
    orderBy,
    take,
    skip,
  })

  return questions
}
