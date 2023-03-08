import s from './Canvas.module.css'
import {DragEvent, useState} from "react";
import {DataForCanvas} from "./components/DataForCanvas";
import {Display} from "../../components/display/Display";
import {OperationsBlock} from "../../components/operations-block/OperationsBlock";
import {DigitalBlock} from "../../components/digital-block/DigitalBlock";
import {Equals} from "../../components/equals/Equals";
import {ItemType, removeItem, setItem} from "./canvasSlice";
import {useAppSelector} from "hooks/use-app-selector";
import {useAppDispatch} from 'hooks/use-app-dispatch';

export const Canvas = () => {
  const [style, setStyle] = useState({})
  const [data, setData] = useState<string>('empty')
  const items = useAppSelector(state => state.canvas.itemsOnCanvas)
  const dispatch = useAppDispatch()

  const doubleClickHandler = (item: ItemType) => dispatch(removeItem({item}))
  const dragStartHandler = () => {
    console.log('start')
  }
  const dragOverHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setStyle({...style, background: '#F0F9FF'})
    // setData('')
    console.log('over')
  }
  const dragLeaveHandler = () => {
    setStyle({...style, background: '#FFFFFF'})
    // setData('empty')
    console.log('leave')
  }
  const dragEndHandler = () => {
    console.log('end')
  }
  const dropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    dispatch(setItem())
    setStyle({background: '#FFFFFF', justifyContent: 'flex-start', border: '0'})
    setData('')
    console.log(e)
  }
  return (
    <div className={s.canvas}
         style={style}
         onDragStart={e => dragStartHandler()}
         onDragOver={e => dragOverHandler(e)}
         onDragLeave={e => dragLeaveHandler()}
         onDragEnd={e => dragEndHandler()}
         onDrop={e => dropHandler(e)}
    >
      {data === 'empty' && <DataForCanvas/>}
      {items.includes('display') && <Display doubleClickHandler={doubleClickHandler}/>}
      {items.includes('operations') && <OperationsBlock doubleClickHandler={doubleClickHandler}/>}
      {items.includes('digital') && <DigitalBlock doubleClickHandler={doubleClickHandler}/>}
      {items.includes('equals') && <Equals doubleClickHandler={doubleClickHandler}/>}
    </div>
  )
}
