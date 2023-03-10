import s from './OperationsBlock.module.css'
import {Button} from "../button/Button";
import {operations} from "common/utils/constants/operations";

type Props = {
  inactive?: boolean
  saveOperation?: (title: string) => void
}
export const OperationsBlock = ({inactive, saveOperation = () => console.log('error')}: Props) => {

  return (
    <div className={s.operationsContainer}>
      {operations
        .map((n, i) => <Button callBack={saveOperation} inactive={inactive} key={i} width={'52px'} title={n}/>)}
    </div>
  )
}