import classnames from "classnames"
import React, { ComponentPropsWithoutRef, FC, memo } from "react"
import styles from "./Dot.module.css"

type DotProps = {
  children?: React.ReactNode
  bgColor?: "danger" | "success" | "light"
  className?: string
  active?: boolean
}

const Dot: React.FunctionComponent<DotProps> = ({
  children,
  bgColor = "light",
  active = false,
  className,
  ...props
}) => {
  return (
    <span
      className={classnames(/* `bg-${bgColor}`, */ "w-5 h-5 inline-block rounded-full", {
        "bg-white border": bgColor === "light",
        "bg-green-900": bgColor === "success",
        "bg-red-900 ": bgColor === "danger",
        "w-7 h-7": active,
      })}
      // style={{ width: size, height: size }}
    ></span>
  )
}

export default memo(Dot)
