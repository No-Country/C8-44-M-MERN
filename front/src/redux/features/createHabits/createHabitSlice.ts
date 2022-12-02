import { RootState } from '../../store';
import { createSlice } from '@reduxjs/toolkit';
import { createHabit } from './thunks';

interface createHabitState {
   isLoading: boolean;
   isSuccess: boolean;
   isError: boolean;
}
const initialState: createHabitState = {
   isLoading: false,
   isSuccess: false,
   isError: false,
};

export const createHabitSlice = createSlice({
   name: 'createHabits',
   initialState,
   reducers: {
      resetCreateHabits: (state) => {
         state.isLoading = false;
         state.isSuccess = false;
         state.isError = false;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(createHabit.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(createHabit.fulfilled, (state) => {
            state.isLoading = false;
            state.isSuccess = true;
         })
         .addCase(createHabit.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
         });
   },
});
export const { resetCreateHabits } = createHabitSlice.actions;
