import db from "db"
import { Ctx } from "blitz"
import { z } from "zod"

export const SaveAtttempt = z.object({
  result: z.number(),
  questions: z.array(z.number()),
  userAnswers: z.array(z.number()),
}) /* .passthrough() */
export default async function saveAttempt(input: z.infer<typeof SaveAtttempt>, ctx: Ctx) {
  ctx.session.$authorize()
  const data = { ...SaveAtttempt.parse(input), user: ctx.session.userId }

  const attemptsAdded = await db.attempts.create({ data })
  console.log({
    attemptsAdded,
    data,
  })

  return attemptsAdded
}
