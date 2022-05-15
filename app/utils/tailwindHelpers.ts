export enum Size {
  small = "sm",
  medium = "md",
  large = "lg",
}
export enum Color {
  red = "red",
  green = "green",
  black = "black",
  white = "white",
}

export const TEXT_COLOR_MAP: Record<Color, string> = {
  black: "text-black",
  green: "text-green-500 hover",
  red: "text-red-500",
  white: "text-white",
}

export const BG_COLOR_MAP: Record<Color, string> = {
  black: "bg-black",
  green: "bg-green-500 hover:bg-green-600",
  red: "bg-red-500",
  white: "bg-white",
}

type WithNone<T extends string, K> = Record<T, K> & { none: K }

export const BORDER_COLOR_MAP: WithNone<Color, string> = {
  black: "border-2 border-black",
  green: "border-2 border-green-500",
  red: "border-2 border-red-500",
  white: "border-2 border-white",
  none: "",
}
