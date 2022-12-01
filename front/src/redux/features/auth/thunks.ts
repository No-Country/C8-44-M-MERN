import { createAsyncThunk } from '@reduxjs/toolkit';
import { NewUser, User } from '../../../models';
import { authService } from '../../../services';

export const registerUs = createAsyncThunk(
   'auth/register',
   async (user: NewUser, thunkAPI) => {
      try {
         return await authService.register(user);
      } catch (error) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);

export const login = createAsyncThunk(
   'user/login',
   async (user: User, thunkAPI) => {
      try {
         return await authService.login(user);
      } catch (error) {
         return thunkAPI.rejectWithValue('Unable to login');
      }
   }
);

export const logout = createAsyncThunk('auth/logout', async () => {
   await authService.logout();
});
