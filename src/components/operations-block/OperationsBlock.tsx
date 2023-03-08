import s from './OperationsBlock.module.css'
import {Button} from "../button/Button";
import {operations} from "../../utils/constants/operations";

type Props = {
  inactive?: boolean
}
export const OperationsBlock = ({inactive}: Props) => {

  return (
    <div className={s.operationsContainer}>
      {operations
        .map((n, i) => <Button inactive={inactive} key={i} width={'52px'} title={n}/>)}
    </div>
  )
}