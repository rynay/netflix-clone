import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  value: {} as TFormattedData | {},
}

const formattedDataSlice = createSlice({
  name: 'formattedData',
  initialState,
  reducers: {
    setFormattedData: (
      state,
      action: PayloadAction<typeof initialState['value']>
    ) => {
      state.value = action.payload
    },
    updateFormattedData: (
      state,
      action: PayloadAction<typeof initialState['value']>
    ) => {
      state.value = { ...state.value, ...action.payload }
    },
  },
})

export const { setFormattedData, updateFormattedData } =
  formattedDataSlice.actions
export default formattedDataSlice.reducer
