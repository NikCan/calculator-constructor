import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const slice = createSlice({
  name: "canvas",
  initialState: {
    rememberedItem: '' as ItemType,
    itemsOnCanvas: [] as ItemType[],
  },
  reducers: {
    rememberItem(state, action: PayloadAction<{ item: ItemType }>) {
      state.rememberedItem = action.payload.item
    },
    setItem(state) {
      state.itemsOnCanvas.push(state.rememberedItem)
    },
    removeItem(state, action: PayloadAction<{ item: ItemType }>) {
      state.itemsOnCanvas = state.itemsOnCanvas.filter(i => i !== action.payload.item)
    },
  },
})

export const canvasReducer = slice.reducer
export const {rememberItem, setItem, removeItem} = slice.actions

export type ItemType = 'display' | 'operations' | 'digital' | 'equals'