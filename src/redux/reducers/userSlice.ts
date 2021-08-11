import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  value: null as TUser | null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<typeof initialState['value']>) => {
      state.value = action.payload
    },
    updateUser: (
      state,
      action: PayloadAction<typeof initialState['value']>
    ) => {
      if (state.value) {
        state.value = { ...state.value, ...action.payload }
      }
    },
  },
})

export const { setUser, updateUser } = userSlice.actions
export default userSlice.reducer
