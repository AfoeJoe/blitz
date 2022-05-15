import { Button } from "app/core/components"
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
      <div>Just Generally instructtions</div>
      <Button onClick={handleClick}>Go to next Step</Button>
    </div>
  )
}

export default StepOne
