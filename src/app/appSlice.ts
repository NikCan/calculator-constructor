import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const slice = createSlice({
  name: "app",
  initialState: {
    mode: 'constructor' as ModeType,
    draggedItem: '' as ItemType,
    itemsOnCanvas: [] as ItemType[],
  },
  reducers: {
    changeMode(state, action: PayloadAction<{ mode: ModeType }>) {
      state.mode = action.payload.mode
    },
    rememberItem(state, action: PayloadAction<{ item: ItemType }>) {
      state.draggedItem = action.payload.item
    },
    setItem(state) {
      state.itemsOnCanvas.push(state.draggedItem)
    },
    removeItem(state, action: PayloadAction<{ item: ItemType }>) {
      state.itemsOnCanvas = state.itemsOnCanvas.filter(i => i !== action.payload.item)
    },
  },
})

export const appReducer = slice.reducer
export const {rememberItem, setItem, removeItem, changeMode} = slice.actions

export type ItemType = 'display' | 'operations' | 'digital' | 'equals'
export type ModeType = 'constructor' | 'runtime'