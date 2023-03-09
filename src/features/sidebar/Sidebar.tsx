import s from './Sidebar.module.css'
import {useAppSelector} from "common/hooks/use-app-selector";
import {useDragDrop} from "common/hooks/use-drag-drop";
import {ItemNameType, items} from "common/utils/constants/items";
import classNames from "classnames";

export const Sidebar = () => {
  const itemsOnCanvas = useAppSelector(state => state.app.itemsOnCanvas)
  const {dragStartHandler} = useDragDrop()

  const needDisable = (name: ItemNameType) => itemsOnCanvas.includes(name)

  const needDrag = (name: ItemNameType) => !itemsOnCanvas.includes(name)

  const classesForItem = (name: ItemNameType) => classNames(s.itemContainer, {
    [s.disabledComponent]: needDisable(name),
    [s.moveStyle]: needDrag(name)
  })

  return (
    <div className={s.sidebar}>
      {items
        .map((item) => {
          const {Component, name, id} = item
          return (
            <div
              key={id}
              className={classesForItem(name)}
              draggable={needDrag(name)}
              onDragStart={() => dragStartHandler(name)}
            >
              <Component inactive/>
            </div>
          )
        })}
    </div>
  )
}
