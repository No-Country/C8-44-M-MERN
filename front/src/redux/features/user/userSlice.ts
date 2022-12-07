import {
  createCustomHabit,
  createHabit,
  getFollowers,
  getUser,
} from './thunks';

import { User } from '../../../models';
import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  user: User;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

const initialState: UserState = {
  user: {
    email: '',
    password: '',
    habits: [],
    followers: [],
  },
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUser: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.user = {
        email: '',
        password: '',
        habits: [],
        followers: [],
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.user.followers.forEach(
          (follower) =>
            (follower.avatar =
              'https://cdn-icons-png.flaticon.com/512/848/848006.png?w=740&t=st=1669989256~exp=1669989856~hmac=384ca5876286758f437c893b22dfe430475eccaf9250c6a32d9ea615f7ee1f9e')
        );
      })
      .addCase(getUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      //followers
      .addCase(getFollowers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFollowers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getFollowers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      //habit
      .addCase(createCustomHabit.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCustomHabit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user.habits.push(action.payload);
      })
      .addCase(createCustomHabit.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { resetUser } = userSlice.actions;
