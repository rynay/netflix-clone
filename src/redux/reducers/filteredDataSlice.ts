import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  value: {} as TData | {},
}

const filteredDataSlice = createSlice({
  name: 'filteredData',
  initialState,
  reducers: {
    setFilteredData: (
      state,
      action: PayloadAction<typeof initialState['value']>
    ) => {
      state.value = action.payload
    },
    updateFilteredData: (
      state,
      action: PayloadAction<typeof initialState['value']>
    ) => {
      state.value = { ...state.value, ...action.payload }
    },
  },
})

export const { setFilteredData, updateFilteredData } = filteredDataSlice.actions
export default filteredDataSlice.reducer
