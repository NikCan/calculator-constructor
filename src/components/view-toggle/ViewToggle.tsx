import s from './ViewToggle.module.css'
import {useState} from "react";

export const ViewToggle = () => {
  const [mode, setMode] = useState<string>('canvas')

  return (
    <div className={s.toggleBox}>
      <button onClick={() => setMode('canvas')}
              className={mode === 'canvas' ? s.activeButton : s.button}>Runtime
      </button>
      <button onClick={() => setMode('constructor')}
              className={mode === 'constructor' ? s.activeButton : s.button}
              style={{width: '133px'}}>Constructor
      </button>
    </div>
  )
}
