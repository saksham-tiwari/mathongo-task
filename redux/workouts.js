import { createSlice } from '@reduxjs/toolkit';

const workoutsSlice = createSlice({
  name: 'workouts',
  initialState: [
    {
      id: "w1",
      name: "We start somewhere, no?",
      description: "Some random description.",
      userId: "643f9f04dcba0b276b55ce6f",
      exercises: [
        {
          id: "ex1",
          name: "Push-ups",
          type: "bodyweight",
          sets: 3,
          reps: 10,
          weight: 0,
          difficulty: "beginner",
          duration: 12
        },
        {
          id: "ex2",
          name: "Squats",
          type: "bodyweight",
          sets: 3,
          reps: 12,
          weight: 0,
          difficulty: "beginner",
          duration: 14
        }
      ]
    }
  ],
  reducers: {
    addWorkout: (state,action)=>{
      console.log(action.payload)
      return [
        ...state,
        action.payload
      ]
    },
  },
});

export const { addWorkout } = workoutsSlice.actions;

export default workoutsSlice.reducer;
