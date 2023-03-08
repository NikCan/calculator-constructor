import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const slice = createSlice({
  name: "canvas",
  initialState: {
    rememberedItem: '',
    item: ''
  },
  reducers: {
    rememberItem(state, action: PayloadAction<{ item: string }>) {
      state.rememberedItem = action.payload.item
    },
    setItem(state) {
      state.item = state.rememberedItem
    },
  },
})

export const canvasReducer = slice.reducer
export const {rememberItem, setItem} = slice.actions

