import s from './Equals.module.css'
import classNames from "classnames";

type Props = {
  inactive?: boolean
}

export const Equals = ({inactive}: Props) => {
  const classesForButton = classNames(s.equalsButton, {
    [s.inactiveEqualsButton]: inactive,
  })

  return (
    <div className={s.equalsContainer}>
      <button disabled={inactive} className={classesForButton}>=</button>
    </div>
  )
}