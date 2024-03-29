import {DragEvent, useState} from "react";
import {ItemNameType, rememberItem, setItem} from "app/appSlice";
import {useAppDispatch, useAppSelector} from "common/hooks";
import {modules, ModuleType} from "common/utils";

export const useDragDrop = () => {
  const dispatch = useAppDispatch()
  const draggedItem = useAppSelector(state => state.app.draggedItem)

  const [items, setItems] = useState<ModuleType[]>(modules)
  const currentItem = items.find(i => i.name === draggedItem)

  const dragStartHandler = (name: ItemNameType) => dispatch(rememberItem(name))

  const dragOverHandler = (e: DragEvent<HTMLDivElement>, item: ModuleType) => {
    e.preventDefault()
    if (item.name !== 'display') {
      e.currentTarget.style.boxShadow = '0 -6px 4px -4px #5D5FEF'
    }
  }

  const dragLeaveHandler = (e: DragEvent<HTMLDivElement>) => e.currentTarget.style.boxShadow = 'none'

  const dropHandler = (e: DragEvent<HTMLDivElement>, item: ModuleType) => {
    e.preventDefault()
    e.currentTarget.style.boxShadow = 'none'
    if (item.name !== 'display' && currentItem && currentItem.name !== 'display') {
      const newItems = [...items]
      const currentIndex = newItems.indexOf(currentItem)
      newItems.splice(currentIndex, 1)
      const dropIndex = newItems.indexOf(item)
      newItems.splice(dropIndex, 0, currentItem)
      setItems(newItems)
    }
  }

  const dragOverCanvasHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.currentTarget.style.background = '#F0F9FF'
  }

  const dragLeaveCanvasHandler = (e: DragEvent<HTMLDivElement>) => {
    e.currentTarget.style.background = '#FFFFFF'
  }

  const dropCanvasHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    dispatch(setItem())
    e.currentTarget.style.background = '#FFFFFF'
  }

  return {
    dragStartHandler,
    dragOverHandler,
    dragLeaveHandler,
    dropHandler,
    dropCanvasHandler,
    dragOverCanvasHandler,
    dragLeaveCanvasHandler,
    items
  }
}