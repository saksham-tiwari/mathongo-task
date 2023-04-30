import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null
  },
  reducers: {
    login: (state) => {
        state.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2Y5ZjA0ZGNiYTBiMjc2YjU1Y2U2ZiJ9.-wfLXdhzvAnf7pWd0fkD3PKMQ4IT2axoMhgTo1bPgJA";
        state.user = "643f9f04dcba0b276b55ce6f";
    },
    logout: (state) => {
        state.token= null;
        state.user= null;
    }
  },
});

export const { login,logout } = authSlice.actions;

export default authSlice.reducer;
