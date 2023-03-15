import classNames from "classnames";
import s from './Canvas.module.css'
import {SignForCanvas} from "./components";
import {ItemNameType, removeItem} from "app/appSlice";
import {useAppDispatch, useCalculator, useAppSelector, useDragDrop} from 'common/hooks';

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
    items
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
  const canvasItems = items
    .filter(i => itemsOnCanvas.includes(i.name))
    .map(item => {
        const {Component, id, name} = item
        return (
          <div
            key={id}
            onDragStart={() => dragStartHandler(name)}
            onDragOver={e => dragOverHandler(e, item)}
            onDragLeave={dragLeaveHandler}
            onDragEnd={dragLeaveHandler}
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
    )

  return (
    <div className={canvasClasses}
         onDragOver={e => dragOverCanvasHandler(e)}
         onDragLeave={e => dragLeaveCanvasHandler(e)}
         onDrop={e => dropCanvasHandler(e)}
    >
      {constructionMode && itemsOnCanvas.length === 0 && <SignForCanvas/>}
      {canvasItems}
    </div>
  )
}
