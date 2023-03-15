import classNames from "classnames";
import s from './Sidebar.module.css'
import {useAppSelector, useDragDrop} from "common/hooks";
import {ItemNameType} from "app/appSlice";
import {modules} from "common/utils";

export const Sidebar = () => {
  const itemsOnCanvas = useAppSelector(state => state.app.itemsOnCanvas)
  const {dragStartHandler} = useDragDrop()

  const needDisable = (name: ItemNameType) => itemsOnCanvas.includes(name)

  const needDrag = (name: ItemNameType) => !itemsOnCanvas.includes(name)

  const classesForItem = (name: ItemNameType) => classNames(s.itemContainer, {
    [s.disabledComponent]: needDisable(name),
    [s.moveStyle]: needDrag(name)
  })

  const sidebarItems = modules
    .map(({Component, name, id}) => {
      return (
        <div
          key={id}
          className={classesForItem(name)}
          draggable={needDrag(name)}
          onDragStart={() => dragStartHandler(name)}
        >
          <Component inputValue={'0'} inactive/>
        </div>
      )
    })

  return (
    <div className={s.sidebar}>
      {sidebarItems}
    </div>
  )
}
