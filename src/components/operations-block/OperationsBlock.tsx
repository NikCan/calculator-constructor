import s from './OperationsBlock.module.css'
import {Button} from "../button/Button";
import {useAppDispatch} from "../../hooks/use-app-dispatch";
import {ItemType, rememberItem} from "../../features/canvas/canvasSlice";
import classNames from "classnames";

type Props = {
  doubleClickHandler?: (item: ItemType) => void
  inactive?: boolean
  disabled?: boolean
}

export const OperationsBlock = ({doubleClickHandler, inactive, disabled}: Props) => {
  const operations = ['/', 'x', '-', '+']
  const style = {cursor: 'move'}
  const dispatch = useAppDispatch()
  const classesForContainer = classNames(s.operationsContainer, {
    [s.disabled]: disabled
  })
  const dragStartHandler = () => {
    dispatch(rememberItem({item: 'operations'}))
    console.log('start')
  }

  return (
    <div className={classesForContainer}
         style={style}
         draggable
         onDragStart={e => dragStartHandler()}
         onDoubleClick={() => doubleClickHandler?.('operations')}
    >
      {operations.map((n, i) => <Button inactive={inactive} key={i} width={'52px'} title={n}/>)}
    </div>
  )
}