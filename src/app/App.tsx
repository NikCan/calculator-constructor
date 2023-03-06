import {Runtime} from "features/runtime/Runtime";
import {Constructor} from "features/constructor/Constructor";
import {ViewToggle} from "app/components/ViewToggle";
import s from './App.module.css'

function App() {
  return <div className={s.mainContainer}>
    <ViewToggle/>
    <Runtime/>
    <Constructor/>
  </div>
}

export default App;
