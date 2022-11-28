import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

import { login } from './thunks';
import { Jwt, User } from '../../../models';

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
   isLoading: false,
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
            state.user = null;
         });
   },
});
export const { resetAuth } = authSlice.actions;

export const selectedUser = (state: RootState) => {
   return state.auth;
};
