import saveAttempt from "../mutations/saveAttempt"
import { useMutation } from "blitz"
export const useSaveAttempt = () => {
  const [saveAttemptMutation] = useMutation(saveAttempt)
  return saveAttemptMutation
}
