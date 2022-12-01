import {
  addFriendSlice,
  authSlice,
  habitsSlice,
  themeSlice,
  userSlice,
} from './features';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
    habits: habitsSlice.reducer,
    theme: themeSlice.reducer,
    allUser: addFriendSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
