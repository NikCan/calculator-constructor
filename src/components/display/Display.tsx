import s from './Display.module.css'
import {useDragDrop} from "../../hooks/use-drag-drop";
import classNames from "classnames";

type Props = {
  inactive?: boolean
}

export const Display = ({inactive}: Props) => {
  const classesForContainer = classNames(s.container, {[s.inactiveItem]: inactive})
  const changeHandler = () => {

  }

  const {dragEndHandler, dragOverHandler, dragLeaveHandler, dropHandler} = useDragDrop()

  return (
    <div className={classesForContainer}
      // onDragOver={e => dragOverHandler(e)}
      // onDragLeave={e => dragLeaveHandler()}
      // onDragEnd={e => dragEndHandler()}
      // onDrop={e => dropHandler(e)}
    >
      <input onChange={changeHandler} value={0} readOnly={inactive} className={s.display}/>
    </div>
  )
}