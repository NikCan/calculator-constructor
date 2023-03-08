import {DragEvent} from "react";

export const useDragDrop = () => {
  const dragOverHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    console.log('over')
  }
  const dragLeaveHandler = () => {
    console.log('leave')
  }
  const dragEndHandler = () => {
    console.log('end')
  }
  const dropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    console.log('drop')
  }
  return {
    dragEndHandler, dragOverHandler, dragLeaveHandler, dropHandler
  }
}