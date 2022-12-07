import { User } from '../../../models';
import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from './thunks';

interface UsersState {
  users: User[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

const initialState: UsersState = {
  users: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    resetUsers: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.users = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // GET USERS
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { resetUsers } = usersSlice.actions;
