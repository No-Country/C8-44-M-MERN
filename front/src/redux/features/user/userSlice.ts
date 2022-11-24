import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from './interface';

export interface UserState {
   users: User[] | null;
   loading: boolean;
   singleUser: User | null;
  
}
const initialState: UserState = {
   users: [],
   loading: false,
   singleUser: null,
};
export const getUser = createAsyncThunk<User[], any>(
   'user/getUser',
   async (_, thunkAPI) => {
      try {
         const res = await axios.get(
            `https://c8-44-m-mern-production.up.railway.app/api/user`
         );
         return res.data;
      } catch (err) {
         return thunkAPI.rejectWithValue(err);
      }
   }
);
export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
    
   },
   extraReducers: (builder) => {
      builder.addCase(getUser.pending, (state) => {
         state.loading = true;
      });
      builder.addCase(getUser.fulfilled, (state, action) => {
         state.loading = false;
         state.users = action.payload;
      });
      builder.addCase(getUser.rejected, (state, action) => {
         state.loading = false;
      });
   },
});
export default userSlice.reducer;

