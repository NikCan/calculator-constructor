import s from './ViewToggle.module.css'
import {Dispatch, SetStateAction, useState} from "react";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';

type Props = {
  setMode: Dispatch<SetStateAction<string>>
  mode: string
}
export const ViewToggle = ({mode, setMode}: Props) => {

  return (
    <div className={s.toggleBox}>
      <button onClick={() => setMode('canvas')}
              className={mode === 'canvas' ? s.activeButton : s.button}>
        <div className={s.buttonText}><VisibilityOutlinedIcon color={'primary'} fontSize={'small'}/>Runtime</div>
      </button>
      <button onClick={() => setMode('constructor')}
              className={mode === 'constructor' ? s.activeButton : s.button}
              style={{width: '133px'}}>
        <div className={s.buttonText}><CodeOutlinedIcon color={'primary'} fontSize={'small'}/>Constructor</div>
      </button>
    </div>
  )
}
