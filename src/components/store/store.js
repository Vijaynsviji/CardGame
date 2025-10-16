import { configureStore } from '@reduxjs/toolkit'
import GameSlice from './gameslice';

export const store = configureStore({
  reducer: {
    game: GameSlice,
  },
})

