import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { habits } from './thunks';

interface AsyncState {
   data: any;
   isLoading: boolean;
   isSuccess: boolean;
   isError: boolean;
}
interface HabitsState extends AsyncState {
   habits: any;
}
const initialState: HabitsState = {
   data: null,
   habits: null,
   isLoading: false,
   isSuccess: false,
   isError: false,
};

export const habitsSlice = createSlice({
   name: 'habits',
   initialState,
   reducers: {
      resetHabit: (state) => {
         state.isLoading = false;
         state.isSuccess = false;
         state.isError = false;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(habits.pending, (state) => {
         state.isLoading = true;
         state.isSuccess = false;
         state.isError = false;
      });
      builder.addCase(habits.fulfilled, (state, action) => {
         state.isLoading = false;
         state.isSuccess = true;
         state.isError = false;
         state.habits = action.payload;
      });
      builder.addCase(habits.rejected, (state) => {
         state.isLoading = false;
         state.isSuccess = false;
         state.isError = true;
      });
   },
});
export const { resetHabit } = habitsSlice.actions;
export const selectHabits = (state: RootState) => state.habits;
