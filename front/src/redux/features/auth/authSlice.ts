import { login, register } from './thunks';

import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  jwt: string | null;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

const initialState: AuthState = {
  jwt: JSON.parse(localStorage.getItem('jwt') || 'null'),
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.jwt = null;
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      localStorage.removeItem('jwt');
    },
  },
  extraReducers: (builder) => {
    builder
      //LOGIN
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.jwt = action.payload.jwt;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })
      //REGISTER
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = true;
        state.jwt = action.payload.jwt;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = true;
      });
  },
});

export const { logout } = authSlice.actions;
