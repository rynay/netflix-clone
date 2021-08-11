import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

const signUpEmailSlice = createSlice({
  name: 'signUpEmail',
  initialState,
  reducers: {
    setSignUpEmail: (
      state,
      action: PayloadAction<typeof initialState['value']>
    ) => {
      state.value = action.payload
    },
  },
})

export const { setSignUpEmail } = signUpEmailSlice.actions
export default signUpEmailSlice.reducer
