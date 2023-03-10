import {Button} from "../button/Button";
import s from './DigitalBlock.module.css'
import {numbers} from "common/utils/constants/numbers";

type Props = {
  inactive?: boolean
  setValue?: (title: string) => void
}

export const DigitalBlock = ({inactive, setValue = () => console.log('error')}: Props) => {

  return (
    <div className={s.digitalContainer}>
      {numbers
        .map((n, i) => <Button callBack={setValue} inactive={inactive} key={i} title={n}/>)}
      <Button callBack={(title) => setValue(title)} width={'152px'} title={0} inactive={inactive}/>
      <Button callBack={() => setValue('.')} title={','} inactive={inactive}/>
    </div>
  )
}
