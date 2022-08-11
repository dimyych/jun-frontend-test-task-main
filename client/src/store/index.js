import {
  configureStore
} from '@reduxjs/toolkit'
import raceReduser from 'store/raceSlice'

export const store = configureStore({
  reducer: {
    race: raceReduser
  }
})