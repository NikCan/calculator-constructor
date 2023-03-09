import {useAppSelector} from "./use-app-selector";
import {useAppDispatch} from "./use-app-dispatch";
import {setInputValueFromInput, setInputValueFromKey, setOperation} from "../../app/appSlice";

export const useCalculator = () => {
  const value = useAppSelector(state => state.app.inputValue)
  const rememberedValue = useAppSelector(state => state.app.rememberedValue)
  const operation = useAppSelector(state => state.app.operation)
  const dispatch = useAppDispatch()

  const setValue = (title: string, method: string) => {
    method === 'key' && dispatch(setInputValueFromKey(title))
    method === 'input' && dispatch(setInputValueFromInput(title))
  }

  const saveOperation = (title: string) => {
    dispatch(setOperation(title))
    dispatch(setInputValueFromInput('0'))
  }
  const getResult = () => {
    switch (operation) {
      case '+':
        return Number(rememberedValue) + Number(value)
      case '-':
        return Number(rememberedValue) - Number(value)
      case '*':
        return Number(rememberedValue) * Number(value)
      case '/': {
        if (value !== '0') {
          return Number(rememberedValue) / Number(value)
        } else return 'не определено'
      }
      default:
        return 0
    }
  }

  const setResult = () => {
    const result = getResult().toString()
    dispatch(setInputValueFromInput(result))
  }

  return {
    setValue, value, saveOperation, setResult
  }
}