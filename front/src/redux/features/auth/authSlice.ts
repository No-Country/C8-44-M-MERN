import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { DisplayUser } from './models/DisplayUser.interface';
import { Jwt } from './models/Jwt';
import { LoginUser } from './models/LoginUser.interface';
import authService from './services/auth.service';
interface AsyncState {
   isLoading: boolean;
   isSuccess: boolean;
   isError: boolean;
}
interface AuthState extends AsyncState {
   user?: DisplayUser | null;
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
export const login = createAsyncThunk(
   'user/login',
   async (user: LoginUser, thunkAPI) => {
      try {
         return await authService.login(user);
      } catch (error) {
         return thunkAPI.rejectWithValue('Unable to login');
      }
   }
);
export const logout = createAsyncThunk('auth/logout', async () => {
   await authService.logout();
});
export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      reset: (state) => {
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
export const { reset } = authSlice.actions;

export const selectedUser = (state: RootState) => {
   return state.auth;
};

export default authSlice.reducer;
