import s from './Equals.module.css'
import classNames from "classnames";
import {useCalculator} from "../../hooks/use-calculator";

type Props = {
  inactive?: boolean
}

export const Equals = ({inactive}: Props) => {
  const {setResult} = useCalculator()
  const classesForButton = classNames(s.equalsButton, {
    [s.inactiveEqualsButton]: inactive,
  })

  return (
    <div className={s.equalsContainer}>
      <button onClick={() => setResult('=')} disabled={inactive} className={classesForButton}>=</button>
    </div>
  )
}