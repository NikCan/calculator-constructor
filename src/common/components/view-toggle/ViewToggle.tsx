import s from './ViewToggle.module.css'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import {changeMode, ModeType} from "app/appSlice";
import {useAppSelector} from "common/hooks/use-app-selector";
import {useAppDispatch} from "common/hooks/use-app-dispatch";
import {ToggleButton} from "../toggle-button/ToggleButton";
import {appModes} from "common/utils/constants/app-modes";

export const ViewToggle = () => {
  const dispatch = useAppDispatch()
  const mode = useAppSelector(state => state.app.mode)

  const clickHandler = (mode: ModeType) => dispatch(changeMode(mode))

  return (
    <div className={s.toggleBox}>
      {appModes.map((item, i) => {
        return <ToggleButton
          key={i}
          style={mode === 'constructor' ? {width: '133px'} : {}}
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