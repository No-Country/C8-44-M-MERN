import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { DisplayUser } from '../auth/models/DisplayUser.interface';
import { Jwt } from './models/Jwt';
import dataService from './services/data.service';

interface AsyncState {
    
   data: any;
   isLoading: boolean;
   isSuccess: boolean;
   isError: boolean;
}

interface DataState extends AsyncState {
   user?: DisplayUser | null;
   jwt?: Jwt;
}

const initialState: DataState = {
   data: null,
   user: null,
   isLoading: false,
   isSuccess: false,
   isError: false,
};
export const data = createAsyncThunk('user/me', async ( ) => {
    return await dataService.data();   
});
export const dataSlice = createSlice({
   name: 'data',
   initialState,
   reducers: {
      reset: (state) => {
         state.isLoading = false;
         state.isSuccess = false;
         state.isError = false;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(data.pending, (state) => {
         state.isLoading = true;
         state.isSuccess = false;
         state.isError = false;
      });
      builder.addCase(data.fulfilled, (state, action) => {
         state.isLoading = false;
         state.isSuccess = true;
         state.isError = false;
         state.user = action.payload;
      });
      builder.addCase(data.rejected, (state) => {
         state.isLoading = false;
         state.isSuccess = false;
         state.isError = true;
      });
   },
 
});
export const  { reset } = dataSlice.actions;
export const selectData = (state: RootState) => state.data;
export default dataSlice.reducer;
