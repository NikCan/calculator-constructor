import {Canvas} from "features/canvas/Canvas";
import {Sidebar} from "features/sidebar";
import {ViewToggle} from "components/view-toggle/ViewToggle";
import s from './App.module.css'
import {useState} from "react";

function App() {
  const [mode, setMode] = useState<string>('canvas')

  return (
    <div className={s.app}>
      <div className={s.mainContainer}>
        <ViewToggle mode={mode} setMode={setMode}/>
        <div className={s.container}>
          {mode === 'constructor' && <Sidebar/>}
          <Canvas/>
        </div>
      </div>
    </div>
  )
}

export default App;
