import classnames from "classnames"
import { ComponentPropsWithoutRef, FC, ReactNode, useState } from "react"

type TAccordion = {
  data: Array<{ header: string; content: ReactNode; active?: boolean }>
  defaultActiveKey?: number
}

const Accordion: FC<TAccordion> = ({ data }) => {
  const [active, setActive] = useState(data.map((item) => item.active))
  console.log({
    active,
  })

  const handleActive = (index: number) => {
    setActive((prev) => {
      const newActive = [...prev]
      newActive[index] = !newActive[index]
      return newActive
    })
  }
  return (
    <div className="accordionWrapper">
      {data.map(({ header, content }, index) => (
        <div className="accordionItem group" key={header}>
          <button
            type="button"
            onClick={() => handleActive(index)}
            className={
              "text-gray-500 bg-gray-100 cursor-pointer p-4 w-full text-left border-0 outline-none transition-all duration-300 group-active:hover:bg-gray-100"
            }
          >
            {header}
          </button>
          <div
            className={classnames("px-4 py-0 bg-white overflow-hidden  ", {
              block: Boolean(active[index]),
              hidden: !active[index],
            })}
          >
            <p>{content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion
