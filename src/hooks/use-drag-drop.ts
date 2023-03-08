import {DragEvent} from "react";
import {ItemType, rememberItem} from "../app/appSlice";
import {useAppDispatch} from "./use-app-dispatch";

export const useDragDrop = () => {
  const dispatch = useAppDispatch()

  const dragStartHandler = (item: ItemType) => {
    dispatch(rememberItem({item}))
    console.log('start')
  }
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
    dragStartHandler, dragEndHandler, dragOverHandler, dragLeaveHandler, dropHandler
  }
}