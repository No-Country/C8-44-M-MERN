import {
  addFriend,
  addHabit,
  checkHabit,
  createCustomHabit,
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
    _id: '',
    username: '',
    fullname: '',
    avatar: '',
    rol: '',
    email: '',
    password: '',
    habits: [],
    followers: [],
    healthExperience: 0,
    educationExperience: 0,
    experience: 0,
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
        _id: '',
        username: '',
        fullname: '',
        avatar: '',
        rol: '',
        email: '',
        password: '',
        habits: [],
        followers: [],
        healthExperience: 0,
        educationExperience: 0,
        experience: 0,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      // GET USER
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })
      // CREATE CUSTOM HABIT
      .addCase(createCustomHabit.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(createCustomHabit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user.habits = [...state.user.habits, action.payload];
      })
      .addCase(createCustomHabit.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })
      // ADD HABIT
      .addCase(addHabit.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(addHabit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user.habits = [...state.user.habits, action.payload];
      })
      .addCase(addHabit.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })
      // CHECK HABIT
      .addCase(checkHabit.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(checkHabit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;
      })
      .addCase(checkHabit.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })
      // ADD FRIEND
      .addCase(addFriend.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(addFriend.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user.followers = [...state.user.followers, action.payload];
      })
      .addCase(addFriend.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

export const { resetUser } = userSlice.actions;
