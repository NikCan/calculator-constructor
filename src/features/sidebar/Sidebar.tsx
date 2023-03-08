import {DigitalBlock} from "../../components/digital-block/DigitalBlock";
import {Display} from "../../components/display/Display";
import {OperationsBlock} from "../../components/operations-block/OperationsBlock";
import {Equals} from "../../components/equals/Equals";
import s from './Sidebar.module.css'
import {useAppSelector} from "../../hooks/use-app-selector";
import {ItemType} from "../../app/appSlice";
import {useDragDrop} from "../../hooks/use-drag-drop";
import {nanoid} from "@reduxjs/toolkit";

const components = [
  {
    id: nanoid(),
    item: 'display' as ItemType,
    component: <Display inactive/>
  },
  {
    id: nanoid(),
    item: 'operations' as ItemType,
    component: <OperationsBlock inactive/>
  },
  {
    id: nanoid(),
    item: 'digital' as ItemType,
    component: <DigitalBlock inactive/>
  },
  {
    id: nanoid(),
    item: 'equals' as ItemType,
    component: <Equals inactive/>
  },
]

export const Sidebar = () => {
  const items = useAppSelector(state => state.app.itemsOnCanvas)
  const needDisable = (item: ItemType) => items.includes(item)
  const needDrag = (item: ItemType) => !items.includes(item)
  const style = {cursor: 'move'}

  const {dragStartHandler, dragEndHandler, dragOverHandler, dragLeaveHandler, dropHandler} = useDragDrop()

  return (
    <div className={s.sidebar}>
      {components
        .map(c =>
          <div
            key={c.id}
            className={needDisable(c.item) ? s.disabledComponent : ''}
            style={needDrag(c.item) ? style : {}}
            draggable={needDrag(c.item)}
            onDragStart={e => dragStartHandler(c.item)}
          >
            {c.component}
          </div>)}
    </div>
  )
}
