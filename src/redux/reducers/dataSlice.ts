import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  value: {} as TData | {},
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<typeof initialState['value']>) => {
      state.value = action.payload
    },
    updateData: (
      state,
      action: PayloadAction<typeof initialState['value']>
    ) => {
      state.value = { ...state.value, ...action.payload }
    },
  },
})

export const { setData, updateData } = dataSlice.actions
export default dataSlice.reducer
