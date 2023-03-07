import {DigitalBlock} from "./components/digital-block/DigitalBlock";
import {Display} from "./components/display/Display";
import {OperationsBlock} from "./components/operations-block/OperationsBlock";
import {Equals} from "./components/equals/Equals";

export const Sidebar = () => {

  return (
    <div>
      <Display/>
      <OperationsBlock/>
      <DigitalBlock/>
      <Equals/>
    </div>
  )
}
