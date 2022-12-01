import { RootState } from '../../store';

import { login, registerUs } from './thunks';

interface AsyncState {
   isLoading: boolean;
   isSuccess: boolean;
   isError: boolean;
}
interface AuthState extends AsyncState {
   user?: User | null;
   jwt?: Jwt;
   isAuthenicated?: boolean;
}
const initialState: AuthState = {
   user: null, //user,
   jwt: null, //jwt,
   isLoading: true,
   isSuccess: false,
   isError: false,
};

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      resetAuth: (state) => {
         state.isLoading = false;
         state.isSuccess = false;
         state.isError = false;
      },
   },
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
            state.user = null;
         })
         //Register
         .addCase(registerUs.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(registerUs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
         })
         .addCase(registerUs.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
            state.user = null;
         });
   },

import { createSlice } from '@reduxjs/toolkit';

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
