import s from './Canvas.module.css'
import {DataForCanvas} from "./components/DataForCanvas";
import {removeItem} from "app/appSlice";
import {useAppSelector} from "common/hooks/use-app-selector";
import {useAppDispatch} from 'common/hooks/use-app-dispatch';
import {ItemNameType} from "common/utils/constants/items";
import classNames from "classnames";
import {useDragDrop} from "common/hooks/use-drag-drop";
import {useCalculator} from "common/hooks/use-calculator";

export const Canvas = () => {
  const dispatch = useAppDispatch()
  const itemsOnCanvas = useAppSelector(state => state.app.itemsOnCanvas)
  const mode = useAppSelector(state => state.app.mode)
  const {setValue, inputValue, saveOperation, setResult} = useCalculator()
  const {
    dragLeaveHandler,
    dragStartHandler,
    dragOverHandler,
    dropHandler,
    dropCanvasHandler,
    dragOverCanvasHandler,
    dragLeaveCanvasHandler,
    myItems
  } = useDragDrop()

  const constructionMode = mode === 'constructor'
  const canvasClasses = classNames(s.emptyCanvas, {
    [s.canvasWithData]: itemsOnCanvas.length !== 0 || mode === 'runtime',
  })
  const classesForItem = (name: ItemNameType) => classNames(s.itemContainer, {
    [s.moveStyle]: name !== 'display' && constructionMode
  })

  const doubleClickHandler = (name: ItemNameType) => {
    if (constructionMode) dispatch(removeItem(name))
  }

  return (
    <div className={canvasClasses}
         onDragOver={e => dragOverCanvasHandler(e)}
         onDragLeave={e => dragLeaveCanvasHandler(e)}
         onDrop={e => dropCanvasHandler(e)}
    >
      {constructionMode && itemsOnCanvas.length === 0 && <DataForCanvas/>}
      {myItems
        .filter(i => itemsOnCanvas.includes(i.name))
        .map(item => {
            const {Component, id, name} = item
            return (
              <div
                key={id}
                onDragStart={() => dragStartHandler(name)}
                onDragOver={e => dragOverHandler(e, item)}
                onDragLeave={e => dragLeaveHandler(e)}
                onDragEnd={e => dragLeaveHandler(e)}
                onDrop={e => dropHandler(e, item)}
                onDoubleClick={() => doubleClickHandler(name)}
                className={classesForItem(name)}
                draggable={name !== 'display' && constructionMode}
              >
                <Component
                  inactive={constructionMode}
                  saveOperation={saveOperation}
                  inputValue={inputValue}
                  setResult={setResult}
                  setValue={setValue}
                />
              </div>
            )
          }
        )}
    </div>
  )
}
