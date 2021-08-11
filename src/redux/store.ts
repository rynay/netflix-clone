import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'

const store = configureStore({
  reducer: rootReducer,
})

export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
