import { configureStore } from '@reduxjs/toolkit'
import { textSlice } from './features/text'

export const store = configureStore({
  reducer: {
    text: textSlice.reducer,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch