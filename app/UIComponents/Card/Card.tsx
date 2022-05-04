import Image from "next/image"
import React, { FC } from "react"

type CardProps = {
  children?: React.ReactNode
  className?: string
}

const Card: FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      {children}
    </div>
  )
}

export default Card
