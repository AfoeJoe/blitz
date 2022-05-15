import classnames from "classnames"
import { Color } from "app/utils/tailwindHelpers"
import { FC, useState } from "react"

type TDropDown = {
  options: Array<string>
  onOptionSelect: (arg0: string) => void
}

export const TEXT_COLOR_MAP: Record<Color, string> = {
  black: "text-black",
  green: "text-green-500",
  red: "text-red-500",
  white: "text-white",
}

export function DropDown({ options, onOptionSelect }: TDropDown) {
  // Keep track of whether the dropdown is open or not.
  const [isActive, setActive] = useState(false)

  const buttonClasses = `inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-blue-500 active:text-gray-200 transition ease-in-out duration-150`

  return (
    <>
      <button onClick={() => setActive(!isActive)} className={buttonClasses}>
        Options
      </button>
      <div
        className={classnames("origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg", {
          block: isActive,
          hidden: !isActive,
        })}
      >
        {options.map((option) => (
          <div key={option} onClick={() => onOptionSelect(option)}>
            {option}
          </div>
        ))}
      </div>
    </>
  )
}
export default DropDown
