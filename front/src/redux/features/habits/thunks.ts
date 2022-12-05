import { createAsyncThunk } from '@reduxjs/toolkit';
import { Habit } from '../../../models';
import { habitsService } from '../../../services';

export const getHabits = createAsyncThunk('habits', async () => {
  return await habitsService.getHabits();
});
export const getHabitbyId = createAsyncThunk('habit', async (id: string) => {
  return await habitsService.getHabitbyId(id);
});
