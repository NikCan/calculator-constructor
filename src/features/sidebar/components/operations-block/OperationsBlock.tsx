import s from './OperationsBlock.module.css'
import {Button} from "../../../../components/button/Button";

export const OperationsBlock = () => {
  const operations = ['/', 'x', '-', '+']
  const style = {cursor: 'move'}

  return (
    <div className={s.operationsBlock} style={style} draggable>
      {operations.map((n,i) => <Button key={i} width={'52px'} title={n}/>)}
    </div>
  )
}