import { configureStore } from '@reduxjs/toolkit';
import auth from "./auth"
import workouts from "./workouts"
import exercises from "./exercises"
import pinned from "./pinned"

const store = configureStore({
  reducer: {
    auth,
    workouts,
    exercises,
    pinned
  },
});

export default store;
