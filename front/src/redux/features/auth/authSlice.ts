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
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.jwt = action.payload.jwt;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { logout } = authSlice.actions;
