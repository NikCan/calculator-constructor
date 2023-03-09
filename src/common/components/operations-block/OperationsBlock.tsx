import s from './OperationsBlock.module.css'
import {Button} from "../button/Button";
import {operations} from "../../utils/constants/operations";
import {useCalculator} from "../../hooks/use-calculator";

type Props = {
  inactive?: boolean
}
export const OperationsBlock = ({inactive}: Props) => {
  const {saveOperation} = useCalculator()

  return (
    <div className={s.operationsContainer}>
      {operations
        .map((n, i) => <Button callBack={saveOperation} inactive={inactive} key={i} width={'52px'} title={n}/>)}
    </div>
  )
}