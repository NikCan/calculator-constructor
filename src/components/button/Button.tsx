import s from './Button.module.css'
import classNames from "classnames";

type Props = {
  title: number | string
  width?: string
  disabled?: boolean
  inactive?: boolean
}
export const Button = ({title, width, disabled, inactive}: Props) => {
  const classes = classNames(s.button, {
    [s.disabled]: disabled,
    [s.inactive]: inactive,
  })
  const onClickHandler = () => {

  }
  return <>
    <button style={{width}} className={classes} onClick={onClickHandler}>{title}</button>
  </>
}