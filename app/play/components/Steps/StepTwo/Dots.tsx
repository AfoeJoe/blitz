import Dot from "app/core/components/Dot/Dot"
import React, { FC } from "react"
import { Color } from "app/utils/tailwindHelpers"
import { getColor } from "app/utils/helpers"
import { UserAnswer } from "app/utils/types"
type Props = {
  userAnswers: Array<UserAnswer>
  currentIndex?: number
}
const Dots: FC<Props> = ({ userAnswers, currentIndex }) => {
  return (
    <>
      (
      {userAnswers.map((item, index) => {
        return (
          <Dot
            key={index}
            bgColor={Color[getColor(item.correct)]}
            active={index === currentIndex}
          />
        )
      })}
      )
    </>
  )
}

export default Dots
