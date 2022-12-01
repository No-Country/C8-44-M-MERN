import { createAsyncThunk } from '@reduxjs/toolkit';
import { addFriendService } from '../../../services';

export const getAllUsers = createAsyncThunk('user/all', async () => {
   return await addFriendService.getAll();
});
