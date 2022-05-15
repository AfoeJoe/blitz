import classnames from "classnames"
import React, { ComponentPropsWithoutRef, FC, memo } from "react"
import styles from "./Dot.module.css"

type DotProps = {
  children?: React.ReactNode
  bgColor?: "danger" | "success" | "light"
  className?: string
  size?: number
}

const Dot: React.FunctionComponent<DotProps> = ({
  children,
  bgColor = "light",
  size = 25,
  className,
  ...props
}) => {
  return (
    <span
      className={classnames(`bg-${bgColor}`, "inline-block rounded-full")}
      style={{ width: size, height: size }}
    ></span>
  )
}

export default memo(Dot)
