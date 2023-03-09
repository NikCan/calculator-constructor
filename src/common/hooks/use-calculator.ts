import {useAppSelector} from "./use-app-selector";
import {useAppDispatch} from "./use-app-dispatch";
import {addInputValue, setInputValue, setOperation} from "app/appSlice";
import {getResult} from "../utils/helpers/get-result";

export const useCalculator = () => {
  const inputValue = useAppSelector(state => state.app.inputValue)
  const rememberedValue = useAppSelector(state => state.app.rememberedValue)
  const operation = useAppSelector(state => state.app.operation)
  const dispatch = useAppDispatch()

  const setValue = (title: string) => {
    if (operation === '=') {
      dispatch(setOperation(''))
      dispatch(setInputValue(title))
    } else if (inputValue.length < 11) {
      dispatch(addInputValue(title))
    }
  }

  const saveOperation = (title: string) => {
    dispatch(setOperation(title))
    dispatch(setInputValue('0'))
  }

  const setResult = (title: string) => {
    let result = getResult(operation, rememberedValue, inputValue).toString()
    if (result.length > 11) {
      if (result.split('.')[0].length > 11) {
        result = 'не определено'
      } else {
        result = Number(result).toFixed(11 - result.split('.')[0].length).toString()
      }
    }
    dispatch(setInputValue(result))
    dispatch(setOperation(title))
  }

  return {
    setValue, inputValue, saveOperation, setResult
  }
}