import { createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from '../../../services';

export const getUser = createAsyncThunk('user/me', async ( ) => {
  return await userService.data();   
});
