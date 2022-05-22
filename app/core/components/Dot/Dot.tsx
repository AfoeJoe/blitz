import classnames from "classnames"
import React, { ComponentPropsWithoutRef, FC, memo } from "react"
import styles from "./Dot.module.css"
import { Color } from "app/utils/tailwindHelpers"

type DotProps = {
  children?: React.ReactNode
  bgColor?: Color
  className?: string
  active?: boolean
}

const Dot: React.FunctionComponent<DotProps> = ({
  children,
  bgColor = Color.white,
  active = false,
  className,
  ...props
}) => {
  return (
    <span
      className={classnames(/* `bg-${bgColor}`, */ "w-5 h-5 inline-block rounded-full", {
        "bg-white border": bgColor === Color.white,
        "bg-green-900": bgColor === Color.green,
        "bg-red-900 ": bgColor === Color.red,
        "w-7 h-7": active,
      })}
      // style={{ width: size, height: size }}
    ></span>
  )
}

export default memo(Dot)
