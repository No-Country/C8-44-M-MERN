import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Theme {
  darkmode: boolean;
}
const initialState: Theme = {
  darkmode: JSON.parse(localStorage.getItem('darkmode') || 'false'),
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<boolean>) => {
      state.darkmode = action.payload;
      localStorage.setItem('darkmode', JSON.stringify(action.payload));
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
