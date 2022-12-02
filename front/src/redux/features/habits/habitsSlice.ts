import { createSlice } from '@reduxjs/toolkit';
import { getHabits } from './thunks';

interface HabitsState {
  habits: [];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

const initialState: HabitsState = {
  habits: [],
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
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHabits.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getHabits.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.habits = action.payload;
    });
    builder.addCase(getHabits.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});
export const { resetHabits } = habitsSlice.actions;
