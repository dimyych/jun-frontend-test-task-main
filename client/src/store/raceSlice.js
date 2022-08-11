import {
  createSlice
} from '@reduxjs/toolkit'

const raceSlice = createSlice({
  name: 'race',
  initialState: {
    horses: [{
      distance: 0,
    }],
    win: '',
    startRace: false,
  },
  reducers: {
    setHorses(state, action) {
      state.horses = action.payload
    },
    setWin(state, action) {
      state.win = action.payload
    },
    setStartRace(state, action) {
      state.startRace = action.payload
    }
  }
})

export const {
  setHorses,
  setWin,
  setStartRace
} = raceSlice.actions
export default raceSlice.reducer