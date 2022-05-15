import db from "db"
import { NotFoundError, resolver } from "blitz"
import { z } from "zod"

const GetQuestions = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetQuestions), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const questions = await db.questions.findMany({ take: 5 })

  if (!questions) throw new NotFoundError()

  return questions
})
