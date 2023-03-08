import {DigitalBlock} from "../../components/digital-block/DigitalBlock";
import {Display} from "../../components/display/Display";
import {OperationsBlock} from "../../components/operations-block/OperationsBlock";
import {Equals} from "../../components/equals/Equals";
import s from './Sidebar.module.css'
import {useAppSelector} from "../../hooks/use-app-selector";
import {ItemType} from "../canvas/canvasSlice";

export const Sidebar = () => {
  const items = useAppSelector(state => state.canvas.itemsOnCanvas)
  const needDisable = (item: ItemType) => items.includes(item)
  return (
    <div className={s.sidebar}>
      <Display inactive disabled={needDisable('display')}/>
      <OperationsBlock inactive disabled={needDisable('operations')}/>
      <DigitalBlock inactive disabled={needDisable('digital')}/>
      <Equals inactive disabled={needDisable('equals')}/>
    </div>
  )
}
