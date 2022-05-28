import saveAttempt from "app/profile/_mutations/saveAttempt"
import { ACTIVE_STEPS } from "../model"
import { PromiseReturnType } from "blitz"
// import { SaveAtttempt } from "./../../profile/mutations/saveAttempt"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import { useEffect } from "react"
import { useMutation } from "blitz"

/* export const useSaveAttemptHook = (activeStep: ACTIVE_STEPS, data: any) => {
  const [saveAttemptMutation] = useMutation(saveAttempt)
  const user = useCurrentUser()
  useEffect(() => {
    if (activeStep === ACTIVE_STEPS.THREE && user) {
      saveAttemptMutation(data)
    }
    return () => {}
  }, [activeStep, data, saveAttemptMutation, user])
}
 */
