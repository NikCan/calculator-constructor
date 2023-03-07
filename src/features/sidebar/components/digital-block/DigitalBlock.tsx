import {Button} from "../../../../components/button/Button";
import s from './DigitalBlock.module.css'

export const DigitalBlock = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const style = {cursor: 'move'}

  return (
    <div className={s.digitalBlock} style={style} draggable>
      {numbers.map((n, i) => <Button key={i} title={n}/>)}
      <Button width={'152px'} title={0}/>
      <Button title={','}/>
    </div>
  )
}
