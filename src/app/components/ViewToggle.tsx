import s from './ViewToggle.module.css'
import {useState} from "react";

export const ViewToggle = () => {
  const [mode, setMode] = useState<string>('runtime')

  return (
    <div className={s.toggleBox}>
      <button onClick={() => setMode('runtime')}
              className={mode === 'runtime' ? s.activeButton : s.button}>Runtime
      </button>
      <button onClick={() => setMode('constructor')}
              className={mode === 'constructor' ? s.activeButton : s.button}
              style={{width: '133px'}}>Constructor
      </button>
    </div>
  )
}
