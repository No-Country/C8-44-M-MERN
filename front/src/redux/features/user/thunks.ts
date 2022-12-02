import { createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from '../../../services';

export const getUser = createAsyncThunk('user/me', async () => {
  return await userService.getData();
});
export const getFollowers = createAsyncThunk('user/followers', async () => {
    return await userService.getFollowers();
})
