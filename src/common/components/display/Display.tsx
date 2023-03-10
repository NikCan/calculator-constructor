import s from './Display.module.css'
import classNames from "classnames";

type Props = {
  inactive?: boolean
  inputValue?: string
}

export const Display = ({inactive, inputValue}: Props) => {
  const classesForContainer = classNames(s.displayContainer, {[s.inactiveItem]: inactive})

  return (
    <div className={classesForContainer}>
      <input value={inputValue} readOnly className={s.displayInput}/>
    </div>
  )
}