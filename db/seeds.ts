import db from "db"
import { getQuestions, getUsers } from "./utils"
import { Questions, User } from "@prisma/client"

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * to easily generate realistic data.
 */
const seed = async () => {
  const questions = await Promise.all(
    getQuestions().map((question) => {
      return db.questions.create({ data: question as Questions })
    })
  )

  const users = await Promise.all(
    getUsers(questions).map((user) => {
      return db.user.create({ data: user as unknown as User })
    })
  )
}

export default seed
