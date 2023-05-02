import { configureStore } from '@reduxjs/toolkit';
import counter from "./counter"
import auth from "./auth"
import workouts from "./workouts"
import exercises from "./exercises"

const store = configureStore({
  reducer: {
    counter,
    auth,
    workouts,
    exercises
  },
});

export default store;
