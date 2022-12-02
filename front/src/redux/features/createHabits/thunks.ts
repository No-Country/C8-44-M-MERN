import { createAsyncThunk } from '@reduxjs/toolkit';
import { Habit } from '../../../models';
import { createHabitService } from '../../../services';
export const createHabit = createAsyncThunk(
    'createHabit/createHabit',
    async (habit: Habit, thunkAPI) => {
        try {
            return await createHabitService.createHabit(habit);
        } catch (error) {
            return thunkAPI.rejectWithValue('Unable to create habit');
        }
    }
)
