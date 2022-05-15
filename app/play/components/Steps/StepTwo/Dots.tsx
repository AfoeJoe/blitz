import Dot from "app/core/components/Dot/Dot"
import React, { FC } from "react"
import { getColor } from "app/utils/helpers"
import { UserAnswer } from "app/utils/types"
type Props = {
  userAnswers: Array<UserAnswer>
}
const Dots: FC<Props> = ({ userAnswers }) => {
  return (
    <>
      (
      {userAnswers.map((item, index) => {
        return <Dot key={index} bgColor={getColor(item.correct)} />
      })}
      )
    </>
  )
}

export default Dots
