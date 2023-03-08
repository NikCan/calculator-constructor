import s from './Canvas.module.css'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import {DragEvent, useState} from "react";
import {DataForCanvas} from "./components/DataForCanvas";
import {Display} from "../sidebar/components/display/Display";
import {OperationsBlock} from "../sidebar/components/operations-block/OperationsBlock";
import {DigitalBlock} from "../sidebar/components/digital-block/DigitalBlock";
import {Equals} from "../sidebar/components/equals/Equals";
import {useAppDispatch, useAppSelector} from "../../app/rtk-hooks";
import {setItem} from "./canvasSlice";

export const Canvas = () => {
  const [style, setStyle] = useState({})
  const [data, setData] = useState<string>('empty')
  const item = useAppSelector(state => state.canvas.item)
  const dispatch = useAppDispatch()

  const dragStartHandler = () => {
    console.log('start')
  }
  const dragOverHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setStyle({background: '#F0F9FF'})
    // setData('')
    console.log('over')
  }
  const dragLeaveHandler = () => {
    setStyle({background: '#FFFFFF'})
    // setData('empty')
    console.log('leave')
  }
  const dragEndHandler = () => {
    console.log('end')
  }
  const dropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    dispatch(setItem())
    setStyle({background: '#FFFFFF', alignContent: 'flex-start'})
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
      {item === 'display' && <Display/>}
      {/*<OperationsBlock/>*/}
      {/*<DigitalBlock/>*/}
      {/*<Equals/>*/}
    </div>
  )
}
