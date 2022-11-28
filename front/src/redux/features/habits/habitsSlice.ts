import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { HabitsData } from './models/DisplayHabits.interface';
import habitsService from './services/habits.service';
interface AsyncState {
   habitys: any;
   isLoading: boolean;
   isSuccess: boolean;
   isError: boolean;
}
interface HabitsState extends AsyncState {
   habits?: HabitsData | null;
}
const initialState: HabitsState = {
   habitys: null,
   isLoading: false,
   isSuccess: false,
   isError: false,
};
export const habits = createAsyncThunk('habits', async () => {
   return await habitsService.getHabits();
});
export const habitsSlice = createSlice({
   name: 'habits',
   initialState,
   reducers: {
      reset: (state) => {
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
         state.habitys = action.payload;
      });
      builder.addCase(habits.rejected, (state) => {
         state.isLoading = false;
         state.isSuccess = false;
         state.isError = true;
      });
   },
});
export const { reset } = habitsSlice.actions;
export const selectHabits = (state: RootState) => state.habits;
export default habitsSlice.reducer;
