import {ModeType} from "app/appSlice";
import {ReactElement} from "react";
import s from './ToggleButton.module.css'
import classNames from "classnames";

type Props = {
  name: ModeType
  mode: ModeType
  title: string
  clickHandler: (mode: ModeType) => void
  style?: {}
  children?: ReactElement
}
export const ToggleButton = ({clickHandler, mode, title, style, name, children}: Props) => {
  const buttonClasses = classNames(s.button, {[s.activeButton]: mode === name})
  return (
    <button onClick={() => clickHandler(name)} className={buttonClasses} style={style}>
      <div className={s.buttonText}>
        {children}
        {title}
      </div>
    </button>
  )
}
