import { Button } from "app/core/components"
import { Color } from "app/utils/tailwindHelpers"
import { FC } from "react"

type StepOneProps = {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>
}
export const StepOne: FC<StepOneProps> = ({ setActiveStep }) => {
  const handleClick = () => {
    console.log("clickked")

    setActiveStep(2)
  }
  return (
    <div>
      <h1>Step One</h1>
      <div>Instructions: Please, Have fun!</div>
      <Button onClick={handleClick} bgColor={Color.black} textColor={Color.white}>
        Start
      </Button>
    </div>
  )
}

export default StepOne
