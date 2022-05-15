import classnames from "classnames"
import { ComponentPropsWithoutRef, FC } from "react"
import {
  BG_COLOR_MAP,
  BORDER_COLOR_MAP,
  Color,
  Size,
  TEXT_COLOR_MAP,
} from "app/utils/tailwindHelpers"

type TButton = {
  size?: Size.large | Size.small
  bgColor?: Color
  textColor?: Color
  border?: Color | "none"
  children: React.ReactNode
} & ComponentPropsWithoutRef<"button">

export function Button({
  size = Size.small,
  bgColor = Color.white,
  textColor = Color.black,
  border = "none",
  children,
  ...props
}: TButton) {
  return (
    <button
      {...props}
      className={classnames(
        `${TEXT_COLOR_MAP[textColor]} ${BG_COLOR_MAP[bgColor]}  font-bold py-2 px-4  ${BORDER_COLOR_MAP[border]} rounded`,
        {
          "text-xs": size === Size.small,
          "text-xl": size === Size.large,
        }
      )}
    >
      {children}
    </button>
  )
}

export default Button
