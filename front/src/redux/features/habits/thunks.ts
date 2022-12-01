import { createAsyncThunk } from '@reduxjs/toolkit';
import { habitsService } from '../../../services';

export const getHabits = createAsyncThunk('habits', async () => {
  return await habitsService.getHabits();
});
