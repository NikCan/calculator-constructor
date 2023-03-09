import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ItemNameType} from "common/utils/constants/items";

const slice = createSlice({
  name: "app",
  initialState: {
    mode: 'constructor' as ModeType,
    draggedItem: '' as ItemNameType,
    itemsOnCanvas: [] as ItemNameType[],
    inputValue: '0',
    operation: '',
    rememberedValue: '',
  },
  reducers: {
    changeMode(state, action: PayloadAction<{ mode: ModeType }>) {
      state.mode = action.payload.mode
    },
    rememberItem(state, action: PayloadAction<ItemNameType>) {
      state.draggedItem = action.payload
    },
    setItem(state) {
      if (!state.itemsOnCanvas.includes(state.draggedItem)) state.itemsOnCanvas.push(state.draggedItem)
    },
    removeItem(state, action: PayloadAction<ItemNameType>) {
      state.itemsOnCanvas = state.itemsOnCanvas.filter(i => i !== action.payload)
    },
    addInputValue(state, action: PayloadAction<string>) {
      if (state.inputValue === '0') {
        state.inputValue = action.payload.toString()
      } else {
        state.inputValue = state.inputValue + action.payload
      }
    },
    setInputValue(state, action: PayloadAction<string>) {
      state.inputValue = action.payload.toString()
    },
    setOperation(state, action: PayloadAction<string>) {
      state.operation = action.payload
      state.rememberedValue = state.inputValue
    },
  },
})

export const appReducer = slice.reducer
export const {
  setItem,
  removeItem,
  changeMode,
  rememberItem,
  addInputValue,
  setInputValue,
  setOperation
} = slice.actions

export type ModeType = 'constructor' | 'runtime'