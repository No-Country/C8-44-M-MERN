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
        state.allUser.forEach(
          (user) =>
            (user.avatar =
              'https://cdn-icons-png.flaticon.com/512/848/848006.png?w=740&t=st=1669989256~exp=1669989856~hmac=384ca5876286758f437c893b22dfe430475eccaf9250c6a32d9ea615f7ee1f9e')
        );
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
