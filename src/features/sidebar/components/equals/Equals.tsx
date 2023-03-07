import s from './Equals.module.css'

export const Equals = () => {
  const style = {cursor: 'move'}
  return (
    <div className={s.equalsBlock} style={style} draggable>
      <button className={s.equalsButton}>=</button>
    </div>
  )
}