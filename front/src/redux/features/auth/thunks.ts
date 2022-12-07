import { BasicUser } from '../../../models/user.interface';
import { User } from '../../../models';
import { authService } from '../../../services';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const register = createAsyncThunk(
  'user/register',
  async (user: BasicUser, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      return thunkAPI.rejectWithValue('Unable to register');
    }
  }
);

export const login = createAsyncThunk(
  'user/login',
  async (user: BasicUser, thunkAPI) => {
    try {
      return await authService.login(user);
    } catch (error) {
      return thunkAPI.rejectWithValue('Unable to login');
    }
  }
);
