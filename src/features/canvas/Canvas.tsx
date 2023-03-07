import s from './Canvas.module.css'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import {useState} from "react";
import {DataForCanvas} from "./components/DataForCanvas";
import {Display} from "../sidebar/components/display/Display";
import {OperationsBlock} from "../sidebar/components/operations-block/OperationsBlock";
import {DigitalBlock} from "../sidebar/components/digital-block/DigitalBlock";
import {Equals} from "../sidebar/components/equals/Equals";

export const Canvas = () => {
  const [style, setStyle] = useState({})

  const dragStartHandler = () => {
    console.log('start')
  }
  const dragOverHandler = () => {
    setStyle({background: '#F0F9FF'})
    console.log('over')
  }
  const dragLeaveHandler = () => {
    setStyle({background: '#FFFFFF'})
    console.log('leave')
  }
  const dragEndHandler = () => {
    console.log('end')
  }
  const dropHandler = () => {
    console.log('drop')
  }
  return (
    <div className={s.canvas}
         style={style}
         onDragStart={e => dragStartHandler()}
         onDragOver={e => dragOverHandler()}
         onDragLeave={e => dragLeaveHandler()}
         onDragEnd={e => dragEndHandler()}
         onDrop={e => dropHandler()}
    >
      <DataForCanvas/>
      {/*<Display/>*/}
      {/*<OperationsBlock/>*/}
      {/*<DigitalBlock/>*/}
      {/*<Equals/>*/}
    </div>
  )
}
