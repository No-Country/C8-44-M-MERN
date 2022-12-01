import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const root = document.getElementById('root');

interface Theme {
  darkmode: boolean;
}
const initialState: Theme = {
  darkmode: JSON.parse(localStorage.getItem('darkmode') || 'false'),
};

initialState.darkmode && root.classList.add('dark');

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<boolean>) => {
      state.darkmode = action.payload;
      localStorage.setItem('darkmode', JSON.stringify(action.payload));
      if (action.payload === true) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
