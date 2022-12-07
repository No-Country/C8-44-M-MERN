import { createAsyncThunk } from '@reduxjs/toolkit';
import { usersService } from '../../../services';

export const getUsers = createAsyncThunk('user/all', async () => {
  return await usersService.getAll();
});
