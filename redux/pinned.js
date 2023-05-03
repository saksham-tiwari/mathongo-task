import { createSlice } from '@reduxjs/toolkit';

const pinSlice = createSlice({
  name: 'pinned',
  initialState: [],
  reducers: {
    addPin: (state,action)=>{
      return [
        ...state,
        action.payload
      ]
    },
    removePin: (state,action)=>{
        return state.filter(s=>s!==action.payload)
      },
  },
});

export const { addPin, removePin } = pinSlice.actions;

export default pinSlice.reducer;
