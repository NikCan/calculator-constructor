import s from './Button.module.css'

type Props = {
  title: number | string
  width?: string
}
export const Button = ({title, width}: Props) => {
  const onClickHandler = () => {

  }
  return <>
    <button style={{width: width}} className={s.button} onClick={onClickHandler}>{title}</button>
  </>
}