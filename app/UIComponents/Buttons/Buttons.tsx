import classnames from "classnames"
import { ComponentPropsWithoutRef, FC } from "react"
import {
  BG_COLOR_MAP,
  BORDER_COLOR_MAP,
  Color,
  Size,
  TEXT_COLOR_MAP,
} from "app/undecided/tailwindHelpers"

type TButton = {
  size: Size.large | Size.small
  bgColor: Color
  textColor: Color
  border?: Color | "none"
  children: React.ReactNode
} & ComponentPropsWithoutRef<"button">

const Button: FC<TButton> = ({
  size = Size.small,
  bgColor = Color.white,
  textColor = Color.black,
  border = "none",
  children,
}) => {
  return (
    <>
      <button
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
      <button className="px-4 py-1 text-sm text-purple font-semibold rounded-full   border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
        Message
      </button>
    </>
  )
}

export default Button
