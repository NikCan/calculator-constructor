import s from './Sidebar.module.css'
import {useAppSelector} from "common/hooks/use-app-selector";
import {useDragDrop} from "common/hooks/use-drag-drop";
import {ItemNameType, items} from "common/utils/constants/items";

export const Sidebar = () => {
  const itemsOnCanvas = useAppSelector(state => state.app.itemsOnCanvas)
  const moveStyle = {cursor: 'move'}
  const {dragStartHandler} = useDragDrop()

  const needDisable = (name: ItemNameType) => itemsOnCanvas.includes(name)

  const needDrag = (name: ItemNameType) => !itemsOnCanvas.includes(name)

  return (
    <div className={s.sidebar}>
      {items
        .map((item) => {
          const {Component, name, id} = item
          return <div
            key={id}
            className={needDisable(name) ? s.disabledComponent : ''}
            style={needDrag(name) ? moveStyle : {}}
            draggable={needDrag(name)}
            onDragStart={e => dragStartHandler(name)}
          >
            <Component inactive/>
          </div>
        })}
    </div>
  )
}
