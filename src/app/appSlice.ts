import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ItemNameType} from "common/utils/constants/items";

const slice = createSlice({
  name: "app",
  initialState: {
    mode: 'constructor' as ModeType,
    draggedItem: '' as ItemNameType,
    itemsOnCanvas: [] as ItemNameType[],
  },
  reducers: {
    changeMode(state, action: PayloadAction<ModeType>) {
      state.mode = action.payload
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
  },
})

export const appReducer = slice.reducer
export const {
  setItem,
  removeItem,
  changeMode,
  rememberItem,
} = slice.actions

export type ModeType = 'constructor' | 'runtime'