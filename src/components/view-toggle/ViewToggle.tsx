import s from './ViewToggle.module.css'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import {changeMode, ModeType} from "../../app/appSlice";
import {useAppSelector} from "../../hooks/use-app-selector";
import {useAppDispatch} from "../../hooks/use-app-dispatch";
import {ToggleButton} from "../toggle-button/ToggleButton";

export const ViewToggle = () => {
  const dispatch = useAppDispatch()
  const mode = useAppSelector(state => state.app.mode)

  const clickHandler = (mode: ModeType) => dispatch(changeMode({mode}))

  return (
    <div className={s.toggleBox}>
      <ToggleButton name={'runtime'} clickHandler={clickHandler} mode={mode} title={'Runtime'}>
        <VisibilityOutlinedIcon color={'primary'} fontSize={'small'}/>
      </ToggleButton>
      <ToggleButton name={'constructor'} style={{width: '133px'}} clickHandler={clickHandler} mode={mode}
                    title={'Constructor'}>
        <CodeOutlinedIcon color={'primary'} fontSize={'small'}/>
      </ToggleButton>
    </div>
  )
}