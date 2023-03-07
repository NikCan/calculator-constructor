import s from './Display.module.css'
import {DragEvent} from "react";

export const Display = () => {
  const style = {cursor: 'move'}

  const dragStartHandler = () => {
    console.log('start')
  }
  const dragOverHandler = (e:DragEvent<HTMLDivElement> ) => {
    e.preventDefault()
    console.log('over')
  }
  const dragLeaveHandler = () => {
    console.log('leave')
  }
  const dragEndHandler = () => {
    console.log('end')
  }
  const dropHandler = (e:DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    console.log('drop')
  }

  return (
    <div className={s.container}
         style={style}
         draggable
         // onDragStart={e => dragStartHandler()}
         // onDragOver={e => dragOverHandler(e)}
         // onDragLeave={e => dragLeaveHandler()}
         // onDragEnd={e => dragEndHandler()}
         // onDrop={e => dropHandler(e)}
    >
      <input value={0} readOnly className={s.display}/>
    </div>
  )
}