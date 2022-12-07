import { getHabitById, getHabits } from './thunks';

import { Habit } from '../../../models';
import { createSlice } from '@reduxjs/toolkit';

interface HabitsState {
  habits: Habit[];
  habit: {};
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

const initialState: HabitsState = {
  habits: [],
  habit: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    resetHabits: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.habits = [];
      state.habit = {};
    },
  },
  extraReducers: (builder) => {
    // GET HABITS
    builder.addCase(getHabits.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(getHabits.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.habits = action.payload;
    });
    builder.addCase(getHabits.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
    });
    // GET HABIT BY ID
    builder.addCase(getHabitById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getHabitById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.habit = action.payload;
    });
    builder.addCase(getHabitById.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});
export const { resetHabits } = habitsSlice.actions;
