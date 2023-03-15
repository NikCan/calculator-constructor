import s from './Button.module.css'
import classNames from "classnames";

type Props = {
  title: string
  width?: string
  inactive?: boolean
  callBack: (title: string) => void
}
export const Button = ({title, width, inactive, callBack}: Props) => {
  const buttonClasses = classNames(s.button, {
    [s.inactiveButton]: inactive,
  })
  const clickHandler = () => callBack(title)
  return <>
    <button style={{width}} className={buttonClasses} onClick={clickHandler}>{title}</button>
  </>
}