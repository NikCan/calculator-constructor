import s from './Display.module.css'
import classNames from "classnames";
import {useCalculator} from "../../hooks/use-calculator";
import {ChangeEvent} from "react";

type Props = {
  inactive?: boolean
}

export const Display = ({inactive}: Props) => {
  const classesForContainer = classNames(s.container, {[s.inactiveItem]: inactive})
  const {value, setValue} = useCalculator()

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value, 'input')
  }

  return (
    <div className={classesForContainer}>
      <input onChange={(e) => changeHandler(e)} value={value} readOnly={false} className={s.display}/>
    </div>
  )
}