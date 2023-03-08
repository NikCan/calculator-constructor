import s from './Equals.module.css'
import {ItemType, rememberItem} from "../../features/canvas/canvasSlice";
import {useAppDispatch} from "../../hooks/use-app-dispatch";
import classNames from "classnames";

type Props = {
  doubleClickHandler?: (item: ItemType) => void
  inactive?: boolean
  disabled?: boolean
}

export const Equals = ({doubleClickHandler, inactive, disabled}: Props) => {
  const style = {cursor: 'move'}
  const classesForButton = classNames(s.equalsButton, {
    [s.inactive]: inactive,
  })
  const classesForContainer = classNames(s.equalsContainer, {
    [s.disabled]: disabled
  })
  const dispatch = useAppDispatch()

  const dragStartHandler = () => {
    dispatch(rememberItem({item: 'equals'}))
    console.log('start')
  }
  return (
    <div className={classesForContainer}
         style={style}
         draggable
         onDragStart={e => dragStartHandler()}
         onDoubleClick={() => doubleClickHandler?.('equals')}
    >
      <button disabled={inactive} className={classesForButton}>=</button>
    </div>
  )
}