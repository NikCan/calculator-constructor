import s from './Display.module.css'
import classNames from "classnames";
import {useCalculator} from "common/hooks/use-calculator";

type Props = {
  inactive?: boolean
}

export const Display = ({inactive}: Props) => {
  const classesForContainer = classNames(s.displayContainer, {[s.inactiveItem]: inactive})
  const {inputValue} = useCalculator()

  return (
    <div className={classesForContainer}>
      <input value={inputValue} readOnly className={s.displayInput}/>
    </div>
  )
}