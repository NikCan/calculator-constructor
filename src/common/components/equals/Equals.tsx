import s from './Equals.module.css'
import classNames from "classnames";

type Props = {
  inactive?: boolean
  setResult?: (title: string) => void
}

export const Equals = ({inactive, setResult = () => console.log('error')}: Props) => {
  const classesForButton = classNames(s.equalsButton, {
    [s.inactiveEqualsButton]: inactive,
  })

  return (
    <div className={s.equalsContainer}>
      <button onClick={() => setResult('=')} disabled={inactive} className={classesForButton}>=</button>
    </div>
  )
}