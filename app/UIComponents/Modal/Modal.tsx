import classnames from "classnames"
import styles from "./Modal.module.css"
import {
  ComponentPropsWithoutRef,
  FC,
  MouseEvent,
  ReactNode,
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
} from "react"

type TModal = {
  visible: boolean
  onClose?: () => void
  children?: ReactNode
}

const Modal: FC<TModal> = ({ visible, onClose, children }) => {
  /*   const handleActive = (index: number) => {
    setActive((prev) => {
      const newActive = [...prev]
      newActive[index] = !newActive[index]
      return newActive
    })
  } */

  const ref = useRef<HTMLDivElement>(null)

  const clickOnOutside = useCallback(
    (event: any) => {
      console.log({ event })

      if (ref.current && !ref.current.contains(event.target) && visible) {
        onClose?.()
      }
    },
    [onClose, visible]
  )

  useEffect(() => {
    // if (visible) return

    document.body.addEventListener("click", clickOnOutside)
    return () => {
      document.body.removeEventListener("click", clickOnOutside)
    }
  }, [clickOnOutside, visible])

  return (
    <div
      ref={ref}
      id="myModal"
      className={classnames("modal  fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-black", {
        block: visible,
        hidden: !visible,
      })}
    >
      <div className={classnames(styles.modalContent, " bg-gray-200 mx-auto  p-5 border-sky-100")}>
        <span
          role="button"
          className={classnames(
            styles.close,
            "bg-gray-400 float-right text-2xl font-bold hover:text-black hover:no-underline hover:cursor-pointer focus:cursor-pointer"
          )}
          onClick={onClose}
        >
          &times;
        </span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  )
}

export default Modal
