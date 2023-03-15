import {ReactElement} from "react";
import s from './ToggleButton.module.css'
import classNames from "classnames";

type Props = {
  active: boolean
  title: string
  clickHandler: () => void
  style?: {}
  children?: ReactElement
}
export const ToggleButton = ({clickHandler, active, title, style, children}: Props) => {
  const buttonClasses = classNames(s.button, {[s.activeButton]: active})
  return (
    <button onClick={clickHandler} className={buttonClasses} style={style}>
      <div className={s.buttonText}>
        {children}
        {title}
      </div>
    </button>
  )
}
