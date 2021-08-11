import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  value: null as TUser | null,
}

const currentWatcherSlice = createSlice({
  name: 'currentWatcher',
  initialState,
  reducers: {
    setCurrentWatcher: (
      state,
      action: PayloadAction<typeof initialState['value']>
    ) => {
      state.value = action.payload
    },
  },
})

export const { setCurrentWatcher } = currentWatcherSlice.actions
export default currentWatcherSlice.reducer
