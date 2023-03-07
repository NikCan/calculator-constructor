import {Canvas} from "features/canvas/Canvas";
import {Sidebar} from "features/sidebar/Sidebar";
import {ViewToggle} from "components/view-toggle/ViewToggle";
import s from './App.module.css'

function App() {
  return (
    <div className={s.app}>
      <div className={s.mainContainer}>
        <ViewToggle/>
        <div className={s.container}>
          <Sidebar/>
          <Canvas/>
        </div>
      </div>
    </div>
  )
}

export default App;
