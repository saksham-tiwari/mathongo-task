import { configureStore } from '@reduxjs/toolkit';
import auth from "./auth"
import workouts from "./workouts"
import exercises from "./exercises"
import pinned from "./pinned"

const store = configureStore({
  reducer: {
    auth, //reducer to store user details
    workouts, //reducer to store workouts details
    exercises, //reducer to store exercises details
    pinned //reducer to store pinned workout ids
  },
});

export default store;
