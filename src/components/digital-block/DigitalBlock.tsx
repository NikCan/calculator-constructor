import {Button} from "../button/Button";
import s from './DigitalBlock.module.css'
import {useAppDispatch} from "../../hooks/use-app-dispatch";
import {ItemType, rememberItem} from "../../features/canvas/canvasSlice";
import classNames from "classnames";

type Props = {
  doubleClickHandler?: (item: ItemType) => void
  inactive?: boolean
  disabled?: boolean
}

export const DigitalBlock = ({doubleClickHandler, inactive, disabled}: Props) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const style = {cursor: 'move'}
  const dispatch = useAppDispatch()
  const classesForContainer = classNames(s.digitalContainer, {
    [s.disabled]: disabled
  })

  const dragStartHandler = () => {
    dispatch(rememberItem({item: 'digital'}))
    console.log('start')
  }
  return (
    <div className={classesForContainer}
         style={style}
         draggable
         onDragStart={e => dragStartHandler()}
         onDoubleClick={() => doubleClickHandler?.('digital')}
    >
      {numbers.map((n, i) => <Button inactive={inactive} key={i} title={n}/>)}
      <Button width={'152px'} title={0} inactive={inactive}/>
      <Button title={','} inactive={inactive}/>
    </div>
  )
}
