import {Button} from "../button/Button";
import s from './DigitalBlock.module.css'
import {numbers} from "../../utils/constants/numbers";

type Props = {
  inactive?: boolean
}

export const DigitalBlock = ({inactive}: Props) => {

  return (
    <div className={s.digitalContainer}>
      {numbers
        .map((n, i) => <Button inactive={inactive} key={i} title={n}/>)}
      <Button width={'152px'} title={0} inactive={inactive}/>
      <Button title={','} inactive={inactive}/>
    </div>
  )
}
