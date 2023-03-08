import s from './Display.module.css'
import {DragEvent} from "react";
import {useAppDispatch} from "hooks/use-app-dispatch";
import {ItemType, rememberItem} from "../../features/canvas/canvasSlice";
import {useDragDrop} from "../../hooks/use-drag-drop";
import classNames from "classnames";

type Props = {
  doubleClickHandler?: (item: ItemType) => void
  inactive?: boolean
  disabled?: boolean
}

export const Display = ({doubleClickHandler, inactive, disabled}: Props) => {
  const dispatch = useAppDispatch()
  const classesForContainer = classNames(s.container, {
    [s.disabled]: disabled
  })
  const style = {cursor: 'move'}
  const changeHandler = () => {

  }
  const dragStartHandler = () => {
    dispatch(rememberItem({item: 'display'}))
    console.log('start')
  }
  const {dragEndHandler, dragOverHandler, dragLeaveHandler, dropHandler} = useDragDrop()

  return (
    <div className={classesForContainer}
         style={style}
         draggable
         onDragStart={e => dragStartHandler()}
         onDoubleClick={() => doubleClickHandler?.('display')}
      // onDragOver={e => dragOverHandler(e)}
      // onDragLeave={e => dragLeaveHandler()}
      // onDragEnd={e => dragEndHandler()}
      // onDrop={e => dropHandler(e)}
    >
      <input onChange={changeHandler} value={0} readOnly={inactive} className={s.display}/>
    </div>
  )
}