import { createAsyncThunk } from '@reduxjs/toolkit';
import { habitsService } from '../../../services';

export const getHabits = createAsyncThunk('habits', async () => {
  return await habitsService.getHabits();
});

export const getHabitById = createAsyncThunk('habits/:id', async (id: string) => {
  return await habitsService.getHabitById(id)
  })
  
export const addHabit = createAsyncThunk('habits/add', async (habitId) => {
  return await habitsService.addHabit(habitId);
})
