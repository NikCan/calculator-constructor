import s from './ViewToggle.module.css'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import {changeMode, ModeType, setInputValue} from "app/appSlice";
import {useAppSelector} from "common/hooks/use-app-selector";
import {useAppDispatch} from "common/hooks/use-app-dispatch";
import {ToggleButton} from "../toggle-button/ToggleButton";
import {appModes} from "common/utils/constants/appModes";

export const ViewToggle = () => {
  const dispatch = useAppDispatch()
  const mode = useAppSelector(state => state.app.mode)

  const clickHandler = (mode: ModeType) => {
    dispatch(changeMode({mode}))
    if (mode === 'constructor') dispatch(setInputValue('0'))
  }
  return (
    <div className={s.toggleBox}>
      {appModes.map(item => {
        return <ToggleButton
          style={item === 'constructor' ? {width: '133px'} : {}}
          clickHandler={() => clickHandler(item)}
          active={mode === item}
          title={item === 'runtime' ? 'Runtime' : 'Constructor'}>
          {item === 'runtime'
            ? <VisibilityOutlinedIcon color={mode === item ? 'info' : 'inherit'} fontSize={'small'}/>
            : <CodeOutlinedIcon color={mode === item ? 'info' : 'inherit'} fontSize={'small'}/>}
        </ToggleButton>
      })}
    </div>
  )
}