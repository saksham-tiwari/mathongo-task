import { createSlice } from '@reduxjs/toolkit';

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState:[
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
    },
    {
      id: "ex3",
      name: "Lunges",
      type: "bodyweight",
      sets: 3,
      reps: 10,
      weight: 0,
      difficulty: "beginner",
      duration: 15
    },
    {
      id: "ex4",
      name: "Plank",
      type: "bodyweight",
      sets: 3,
      reps: 30,
      weight: 0,
      difficulty: "beginner",
      duration: 20
    },
    {
      id: "ex5",
      name: "Sit-ups",
      type: "bodyweight",
      sets: 3,
      reps: 12,
      weight: 0,
      difficulty: "beginner",
      duration: 15
    },
    {
      id: "ex6",
      name: "Bicep Curls",
      type: "dumbbell",
      sets: 3,
      reps: 12,
      weight: 10,
      difficulty: "intermediate",
      duration: 18
    },
    {
      id: "ex7",
      name: "Tricep Extensions",
      type: "dumbbell",
      sets: 3,
      reps: 12,
      weight: 10,
      difficulty: "intermediate",
      duration: 18
    },
    {
      id: "ex8",
      name: "Deadlifts",
      type: "barbell",
      sets: 3,
      reps: 8,
      weight: 100,
      difficulty: "advanced",
      duration: 25
    },
    {
      id: "ex9",
      name: "Bench Press",
      type: "barbell",
      sets: 3,
      reps: 5,
      weight: 90,
      difficulty: "advanced",
      duration: 25
    },
    {
      id: "ex10",
      name: "Wide-grip Lat Pulldown",
      type: "machine",
      sets: 3,
      reps: 10,
      weight: 45,
      difficulty: "intermediate",
      duration: 15
    },{
      id: "ex11",
      name: "Clean and Jerk",
      type: "barbell",
      sets: 3,
      reps: 3,
      weight: 185,
      difficulty: "expert",
      duration: 30
    }
  ],
  reducers: {
    addWorkout: (state,payload)=>{
      state = [
        ...state,
        payload
      ]
    },
    // login: (state) => {
    //     state.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2Y5ZjA0ZGNiYTBiMjc2YjU1Y2U2ZiJ9.-wfLXdhzvAnf7pWd0fkD3PKMQ4IT2axoMhgTo1bPgJA";
    //     state.user = "643f9f04dcba0b276b55ce6f";
    // },
    // logout: (state) => {
    //     state.token= null;
    //     state.user= null;
    // }
  },
});

export const { addWorkout } = exercisesSlice.actions;

export default exercisesSlice.reducer;
