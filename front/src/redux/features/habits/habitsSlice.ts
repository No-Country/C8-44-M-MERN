import { createSlice } from '@reduxjs/toolkit';
import { getHabitbyId, getHabits } from './thunks';
import { RootState } from '../../store';
interface HabitsState {
    habit: any[]; 
  habits: [];
   isLoading: boolean;
   isSuccess: boolean;
   isError: boolean;
}

const initialState: HabitsState = {
  habit:[],
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
      builder
         .addCase(getHabits.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(getHabits.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.habits = action.payload;
         })
         .addCase(getHabits.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
         })
         .addCase(getHabitbyId.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(getHabitbyId.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.habit = action.payload;
         })
         .addCase(getHabitbyId.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
         });
   },
});
export const { resetHabits } = habitsSlice.actions;
export const selectHabits = (state: RootState) => state.habits.habits;
