import { RootState } from '../../store';
import { createSlice } from '@reduxjs/toolkit';
import { login } from './thunks';

interface AuthState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  jwt: string | null;
}

const initialState: AuthState = {
  jwt: JSON.parse(localStorage.getItem('jwt') || 'null'),
  isLoading: true,
  isSuccess: false,
  isError: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //Login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.jwt = action.payload.jwt;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const {} = authSlice.actions;

export const selectedUser = (state: RootState) => {
  return state.auth;
};
