import { createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from '../../../services';

export const getUser = createAsyncThunk('user/me', async () => {
  return await userService.getData();
});

export const getFollowers = createAsyncThunk('user/followers', async () => {
  return await userService.getFollowers();
});

export const createCustomHabit = createAsyncThunk(
  'user/habits',
  async (habit, thunkAPI) => {
    return await userService.createHabit(habit);
  }
);
