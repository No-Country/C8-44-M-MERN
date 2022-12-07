import { BasicHabit } from './../../../models/habit.interface';
import { Habit } from '../../../models';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { userService } from '../../../services';

export const getUser = createAsyncThunk('user/me', async () => {
  return await userService.getData();
});

export const createCustomHabit = createAsyncThunk(
  'user/habits',
  async (habit: BasicHabit, thunkAPI) => {
    try {
      return await userService.createHabit(habit);
    } catch (error) {
      return thunkAPI.rejectWithValue('Unable to login');
    }
  }
);

export const addHabit = createAsyncThunk(
  'habits/add',
  async (habitId: string, thunkAPI) => {
    try {
      return await userService.addHabit(habitId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const checkHabit = createAsyncThunk(
  'habits/check',
  async (habitId: string, thunkAPI) => {
    try {
      return await userService.checkHabit(habitId);
    } catch (error) {
      return thunkAPI.rejectWithValue('Unable to login');
    }
  }
);
