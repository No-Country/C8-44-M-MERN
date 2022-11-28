import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { User } from '../../../models';
import { getUser } from './thunks';

interface AsyncState {
   data: any;
   isLoading: boolean;
   isSuccess: boolean;
   isError: boolean;
}

interface DataState extends AsyncState {
   user?: User | null;
}

const initialState: DataState = {
   data: null,
   user: null,
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
      },

   },
   extraReducers: (builder) => {
      builder.addCase(getUser.pending, (state) => {
         state.isLoading = true;
         state.isSuccess = false;
         state.isError = false;
      });
      builder.addCase(getUser.fulfilled, (state, action) => {
         state.isLoading = false;
         state.isSuccess = true;
         state.isError = false;
         state.user = action.payload;
      });
      builder.addCase(getUser.rejected, (state) => {
         state.isLoading = false;
         state.isSuccess = false;
         state.isError = true;
      });
   },
 
});
export const  { resetUser } = userSlice.actions;
export const selectData = (state: RootState) => state.user;