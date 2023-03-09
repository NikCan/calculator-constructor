import {Button} from "../button/Button";
import s from './DigitalBlock.module.css'
import {numbers} from "common/utils/constants/numbers";
import {useCalculator} from "../../hooks/use-calculator";

type Props = {
  inactive?: boolean
}

export const DigitalBlock = ({inactive}: Props) => {
  const {setValue} = useCalculator()

  return (
    <div className={s.digitalContainer}>
      {numbers
        .map((n, i) => <Button callBack={(title) => setValue(title, 'key')} inactive={inactive} key={i} title={n}/>)}
      <Button width={'152px'} title={0} inactive={inactive}/>
      <Button title={','} inactive={inactive}/>
    </div>
  )
}
