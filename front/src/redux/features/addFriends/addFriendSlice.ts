import { Friend } from '../../../models';
import { RootState } from '../../store';
import { createSlice } from '@reduxjs/toolkit';
import { getAllUsers } from './thunks';

interface AsyncState {
  data: any;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

interface DataState extends AsyncState {
  allUser: Friend[];
}

const initialState: DataState = {
  data: null,
  allUser: [],
  isLoading: true,
  isSuccess: false,
  isError: false,
};

export const addFriendSlice = createSlice({
  name: 'allUser',
  initialState,
  reducers: {
    resetAllUser: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.allUser = action.payload;
      })
      .addCase(getAllUsers.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });
  },
});

export const { resetAllUser } = addFriendSlice.actions;
export const selectUser = (state: RootState) => state.allUser;
