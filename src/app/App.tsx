import {Canvas} from "features/canvas/Canvas";
import {Sidebar} from "features/sidebar/Sidebar";
import {ViewToggle} from "common/components/view-toggle/ViewToggle";
import s from './App.module.css'
import {useAppSelector} from "../common/hooks/use-app-selector";

function App() {
  const mode = useAppSelector(state => state.app.mode)

  return (
    <div className={s.app}>
      <div className={s.mainContainer}>
        <ViewToggle/>
        <div className={s.container}>
          {mode === 'constructor' && <Sidebar/>}
          <Canvas/>
        </div>
      </div>
    </div>
  )
}

export default App;
