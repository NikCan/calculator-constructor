import s from './ViewToggle.module.css'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import {changeMode, ModeType} from "app/appSlice";
import {useAppSelector, useAppDispatch} from "common/hooks";
import {appModes} from "common/utils";
import {ToggleButton} from "./components";

export const ViewToggle = () => {
  const dispatch = useAppDispatch()
  const mode = useAppSelector(state => state.app.mode)

  const clickHandler = (mode: ModeType) => dispatch(changeMode(mode))

  const toggleButtons = appModes.map((item, i) => {
    return <ToggleButton
      key={i}
      style={item === 'constructor' ? {width: '133px'} : {}}
      clickHandler={() => clickHandler(item)}
      active={mode === item}
      title={item === 'runtime' ? 'Runtime' : 'Constructor'}>
      {item === 'runtime'
        ? <VisibilityOutlinedIcon color={mode === item ? 'info' : 'inherit'} fontSize={'small'}/>
        : <CodeOutlinedIcon color={mode === item ? 'info' : 'inherit'} fontSize={'small'}/>}
    </ToggleButton>
  })

  return (
    <div className={s.toggleBox}>
      {toggleButtons}
    </div>
  )
}