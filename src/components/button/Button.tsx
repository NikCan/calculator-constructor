import s from './Button.module.css'
import classNames from "classnames";

type Props = {
  title: number | string
  width?: string
  inactive?: boolean
}
export const Button = ({title, width, inactive}: Props) => {
  const buttonClasses = classNames(s.button, {
    [s.inactiveButton]: inactive,
  })
  const onClickHandler = () => {

  }
  return <>
    <button style={{width}} className={buttonClasses} onClick={onClickHandler}>{title}</button>
  </>
}